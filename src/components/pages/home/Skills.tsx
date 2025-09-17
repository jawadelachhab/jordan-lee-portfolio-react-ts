import React, { useState } from "react";

interface Item {
  name: string;
  img: string;
}

const skillsList: Item[] = [
  { name: "HTML5", img: "/assets/images/html5.png" },
  { name: "CSS3", img: "/assets/images/css3.png" },
  { name: "JavaScript", img: "/assets/images/javascript.png" },
  { name: "TypeScript", img: "/assets/images/typescript.png" },
  { name: "jQuery", img: "/assets/images/jquery.png" },
  { name: "Bootstrap", img: "/assets/images/bootstrap.png" },
  { name: "Angular", img: "/assets/images/angular.png" },
  { name: "React", img: "/assets/images/react.png" },
  { name: "Vue", img: "/assets/images/vue.png" },
  { name: "Firebase", img: "/assets/images/firebase.png" },
  { name: "PugJs", img: "/assets/images/pugjs.png" },
  { name: "SASS", img: "/assets/images/sass.png" },
];

const toolsList: Item[] = [
  { name: "Ajax", img: "/assets/images/ajax.png" },
  { name: "Gulp", img: "/assets/images/gulp.png" },
  { name: "Webpack", img: "/assets/images/webpack.png" },
  { name: "Git", img: "/assets/images/git.png" },
  { name: "Npm", img: "/assets/images/npm.png" },
  { name: "Command Line", img: "/assets/images/command.png" },
  { name: "VS Code", img: "/assets/images/vs-code.png" },
  { name: "Trello", img: "/assets/images/trello.png" },
  { name: "ClickUp", img: "/assets/images/clickup.png" },
  { name: "Slack", img: "/assets/images/slack.png" },
  { name: "Photoshop", img: "/assets/images/photoshop.png" },
  { name: "Adobe XD", img: "/assets/images/adobe-xd.png" },
];

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"skills" | "tools">("skills");

  return (
    <section className="skills" id="skills">
      <div className="skills-content section-content">
        <p className="section-subtitle">My skills</p>
        <h2 className="h3 section-title">
          What My Programming Skills Included?
        </h2>
        <p className="section-text">
          I develop simple, intuitive, and responsive user interfaces that help
          users get things done with less effort and time using these
          technologies.
        </p>

        <div
          className={`skills-toggle ${activeTab === "tools" ? "active" : ""}`}
        >
          <button
            className={`toggle-btn ${activeTab === "skills" ? "active" : ""}`}
            onClick={() => setActiveTab("skills")}
          >
            Skills
          </button>
          <button
            className={`toggle-btn ${activeTab === "tools" ? "active" : ""}`}
            onClick={() => setActiveTab("tools")}
          >
            Tools
          </button>
        </div>
      </div>

      <div className={`skills-box ${activeTab === "tools" ? "active" : ""}`}>
        <ul className="skills-list">
          {skillsList.map((skill) => (
            <li key={skill.name}>
              <div className="skill-card">
                <div className="tooltip">{skill.name}</div>
                <div className="card-icon">
                  <img src={skill.img} alt={`${skill.name} logo`} />
                </div>
              </div>
            </li>
          ))}
        </ul>

        <ul className="tools-list">
          {toolsList.map((tool) => (
            <li key={tool.name}>
              <div className="skill-card">
                <div className="tooltip">{tool.name}</div>
                <div className="card-icon">
                  <img src={tool.img} alt={`${tool.name} logo`} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
