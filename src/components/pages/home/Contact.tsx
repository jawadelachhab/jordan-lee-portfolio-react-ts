import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaCircleUser,
  FaRocketchat,
} from "react-icons/fa6";
import React, { useState } from "react";

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  content: (string | { label: string; href: string })[];
}

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  href: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: <FaLocationDot />,
    title: "Address:",
    content: ["941 Saqrqorish Road, alandalos, grnata, WA 47122-4194"],
  },
  {
    icon: <FaPhone />,
    title: "Phone:",
    content: [
      { label: "(01) 234 567 789", href: "tel:01234567789" },
      { label: "(09) 765 432 200", href: "tel:09765432200" },
    ],
  },
  {
    icon: <FaEnvelope />,
    title: "Email:",
    content: [
      { label: "info@jack.com", href: "mailto:info@jack.com" },
      { label: "support@jack.com", href: "mailto:support@jack.com" },
    ],
  },
];

const socialLinks: SocialLink[] = [
  { name: "Facebook", icon: <FaFacebookF />, href: "#" },
  { name: "Twitter", icon: <FaXTwitter />, href: "#" },
  { name: "LinkedIn", icon: <FaLinkedinIn />, href: "#" },
  { name: "YouTube", icon: <FaYoutube />, href: "#" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="contact" id="contact">
      {/* Left content */}
      <div className="contact-content section-content">
        <p className="section-subtitle">Contact</p>
        <h2 className="h3 section-title">
          Have You Any Project? Please Drop a Message
        </h2>
        <p className="section-text">
          Get in touch and let me know how I can help. Fill out the form and
          I’ll be in touch as soon as possible.
        </p>

        <ul className="contact-list">
          {contactInfo.map((item, index) => (
            <li key={index} className="contact-list-item">
              <div className="contact-item-icon">{item.icon}</div>
              <div className="wrapper">
                <h3 className="h4 contact-item-title">{item.title}</h3>
                {item.content.map((c, i) =>
                  typeof c === "string" ? (
                    <address key={i} className="contact-info">
                      {c}
                    </address>
                  ) : (
                    <a key={i} href={c.href} className="contact-info">
                      {c.label}
                    </a>
                  )
                )}
              </div>
            </li>
          ))}

          <li>
            <ul className="contac-social-list">
              {socialLinks.map((social, i) => (
                <li key={i}>
                  <a href={social.href} className="contact-social-link">
                    <div className="tooltip">{social.name}</div>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>

      {/* Right Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        {["name", "email", "phone", "message"].map((field, i) => (
          <div className="form-wrapper" key={i}>
            <label htmlFor={field} className="form-label">
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <div className="input-wrapper">
              {field !== "message" ? (
                <input
                  type={
                    field === "email"
                      ? "email"
                      : field === "phone"
                      ? "tel"
                      : "text"
                  }
                  id={field}
                  name={field}
                  required
                  placeholder={`Enter your ${field}`}
                  className="input-field"
                  value={formData[field as keyof typeof formData]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                />
              ) : (
                <textarea
                  id={field}
                  name={field}
                  required
                  placeholder="Write message..."
                  className="input-field"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              )}

              {field === "name" && <FaCircleUser className="ion-icon" />}
              {field === "email" && <FaEnvelope />}
              {field === "phone" && <FaPhone />}
              {field === "message" && <FaRocketchat />}
            </div>
          </div>
        ))}

        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
