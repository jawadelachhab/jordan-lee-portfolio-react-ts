import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import CountUp from "react-countup";
import { motion } from "framer-motion";

type StatItem = {
  title: number; // Change to number for CountUp
  strong: string;
  img: string;
  alt: string;
  href: string;
};

const statsData: StatItem[] = [
  {
    title: 12,
    strong: "Years of Experience",
    img: "/images/stats-card_icon-1.png",
    alt: "Badge icon",
    href: "#",
  },
  {
    title: 230,
    strong: "Completed Projects",
    img: "/images/stats-card_icon-2.png",
    alt: "Checkmark icon",
    href: "#",
  },
  {
    title: 95,
    strong: "Happy Clients",
    img: "/images/stats-card_icon-3.png",
    alt: "People rating icon",
    href: "#",
  },
];

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring" as const, bounce: 0.3, duration: 0.8 } 
  },
};

const Stats: React.FC = () => {
  return (
    <section className="stats" id="stats">
      <ul className="stats-list">
        {statsData.map((stat, index) => (
          <motion.li
            key={index}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants} // Make sure this is in scope
          >
            <a href={stat.href} className="stats-card">
              <div className="card-icon">
                <img src={stat.img} alt={stat.alt} />
              </div>

              <h2 className="h2 card-title">
                <CountUp 
                  start={0} 
                  end={stat.title} 
                  duration={2} 
                  suffix={stat.strong.includes('+') ? '+' : ''} 
                />{" "}
                <strong>{stat.strong}</strong>
              </h2>
              <FaAngleRight />
            </a>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Stats;
