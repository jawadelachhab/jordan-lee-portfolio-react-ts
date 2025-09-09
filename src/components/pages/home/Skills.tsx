import React, { useState } from "react";

const Skills: React.FC = () => {
  // State to toggle between "skills" and "tools"
  const [activeTab, setActiveTab] = useState<"skills" | "tools">("skills");

  const skillsList = [
    { name: "HTML5", img: "/images/html5.png" },
    { name: "CSS3", img: "/images/css3.png" },
    { name: "JavaScript", img: "/images/javascript.png" },
    { name: "TypeScript", img: "/images/typescript.png" },
    { name: "jQuery", img: "/images/jquery.png" },
    { name: "Bootstrap", img: "/images/bootstrap.png" },
    { name: "Angular", img: "/images/angular.png" },
    { name: "React", img: "/images/react.png" },
    { name: "Vue", img: "/images/vue.png" },
    { name: "Firebase", img: "/images/firebase.png" },
    { name: "PugJs", img: "/images/pugjs.png" },
    { name: "SASS", img: "/images/sass.png" },
  ];

  const toolsList = [
    { name: "Ajax", img: "/images/ajax.png" },
    { name: "Gulp", img: "/images/gulp.png" },
    { name: "Webpack", img: "/images/webpack.png" },
    { name: "Git", img: "/images/git.png" },
    { name: "Npm", img: "/images/npm.png" },
    { name: "Command Line", img: "/images/command.png" },
    { name: "VS Code", img: "/images/vs-code.png" },
    { name: "Trello", img: "/images/trello.png" },
    { name: "ClickUp", img: "/images/clickup.png" },
    { name: "Slack", img: "/images/slack.png" },
    { name: "Photoshop", img: "/images/photoshop.png" },
    { name: "Adobe XD", img: "/images/adobe-xd.png" },
  ];

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

        {/* Toggle buttons */}
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
        {/* Skills list */}

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

        {/* Tools list */}

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
