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
import React, {  useState } from "react";
import { motion } from "framer-motion";

type ContactInfo = {
  icon: React.ReactNode;
  title: string;
  content: (string | { label: string; href: string })[];
};

type SocialLink = {
  name: string;
  icon: React.ReactNode;
  href: string;
};

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

// Motion Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

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
      <motion.div
        className="contact-content section-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p className="section-subtitle">
          Contact
        </motion.p>
        <motion.h2 className="h3 section-title" variants={itemVariants}>
          Have You Any Project? Please Drop a Message
        </motion.h2>
        <motion.p className="section-text" variants={itemVariants}>
          Get in touch and let me know how I can help. Fill out the form and I’ll be in touch as soon as possible.
        </motion.p>

        <motion.ul className="contact-list" variants={containerVariants}>
          {contactInfo.map((item, index) => (
            <motion.li key={index} className="contact-list-item" variants={itemVariants}>
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
            </motion.li>
          ))}

          <motion.li variants={itemVariants}>
            <ul className="contac-social-list">
              {socialLinks.map((social, i) => (
                <motion.li key={i} variants={itemVariants}>
                  <a href={social.href} className="contact-social-link">
                    <div className="tooltip">{social.name}</div>
                    {social.icon}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.li>
        </motion.ul>
      </motion.div>

      {/* Right Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="contact-form"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {["name", "email", "phone", "message"].map((field, i) => (
          <motion.div className="form-wrapper" key={i} variants={itemVariants}>
            <label htmlFor={field} className="form-label">
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <div className="input-wrapper">
              {field !== "message" ? (
                <input
                  type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
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
          </motion.div>
        ))}

        <motion.button type="submit" className="btn btn-primary" variants={itemVariants}>
          Send
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
