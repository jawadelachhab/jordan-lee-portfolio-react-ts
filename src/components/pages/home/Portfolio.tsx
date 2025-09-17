import React from "react";

interface Project {
  id: number;
  title: string;
  date: string;
  img: string;
  alt: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor 01",
    date: "2022-04",
    img: "/assets/images/project-1.png",
    alt: "A macintosh on a yellow background.",
  },
  {
    id: 2,
    title: "Lorem Ipsum Dolor 02",
    date: "2022-04",
    img: "/assets/images/project-2.png",
    alt: "On a Blue background, a Wacom and a mouse.",
  },
  {
    id: 3,
    title: "Lorem Ipsum Dolor 03",
    date: "2022-04",
    img: "/assets/images/project-3.png",
    alt: "A Cassette tape on a mellow apricot background.",
  },
  {
    id: 4,
    title: "Lorem Ipsum Dolor 04",
    date: "2022-04",
    img: "/assets/images/project-4.png",
    alt: "Blue digital watch on a dark liver background.",
  },
  {
    id: 5,
    title: "Lorem Ipsum Dolor 05",
    date: "2022-04",
    img: "/assets/images/project-5.png",
    alt: "On a dark liver background, Airport luggage car carrying a luggage.",
  },
  {
    id: 6,
    title: "Lorem Ipsum Dolor 06",
    date: "2022-04",
    img: "/assets/images/project-6.png",
    alt: "On a yellow background, a digital watch and a glass.",
  },
  {
    id: 7,
    title: "Lorem Ipsum Dolor 07",
    date: "2022-04",
    img: "/assets/images/project-7.png",
    alt: "A fujifilm instant camera on a dark electric blue background.",
  },
];

const Portfolio: React.FC = () => {
  return (
    <section className="project" id="portfolio">
      <ul className="project-list">
        <li>
          <div className="project-content section-content">
            <p className="section-subtitle">My Works</p>
            <h2 className="h3 section-title">
              See My Works Which Will Amaze You!
            </h2>
            <p className="section-text">
              We develop the best quality website that serves for the long-term.
              Well-documented, clean, easy and elegant interface helps any
              non-technical clients.
            </p>
          </div>
        </li>

        {projects.map((project) => (
          <li key={project.id}>
            <a href="#" className="project-card">
              <figure className="card-banner">
                <img src={project.img} className="w-100" alt={project.alt} />
              </figure>
              <div className="card-content">
                <h3 className="h4 card-title">{project.title}</h3>
                <time className="publish-date" dateTime={project.date}>
                  {new Date(project.date).toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </div>
            </a>
          </li>
        ))}

        <li>
          <button className="load-more">Load more work</button>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
