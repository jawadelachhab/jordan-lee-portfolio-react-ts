import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import CountUp from "react-countup";

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
    img: "/assets/images/stats-card_icon-1.png",
    alt: "Badge icon",
    href: "#",
  },
  {
    title: 230,
    strong: "Completed Projects",
    img: "/assets/images/stats-card_icon-2.png",
    alt: "Checkmark icon",
    href: "#",
  },
  {
    title: 95,
    strong: "Happy Clients",
    img: "/assets/images/stats-card_icon-3.png",
    alt: "People rating icon",
    href: "#",
  },
];

const Stats: React.FC = () => {
  return (
    <section className="stats" id="stats">
      <ul className="stats-list">
        {statsData.map((stat, index) => (
          <li key={index}>
            <a href={stat.href} className="stats-card">
              <div className="card-icon">
                <img src={stat.img} alt={stat.alt} />
              </div>

              <h2 className="h2 card-title">
                <CountUp
                  start={0}
                  end={stat.title}
                  duration={2}
                  suffix={stat.strong.includes("+") ? "+" : ""}
                />{" "}
                <strong>{stat.strong}</strong>
              </h2>
              <FaAngleRight />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Stats;
