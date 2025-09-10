import React, { useState } from "react";
import { motion } from "framer-motion";

type Item = {
  name: string;
  img: string;
};

const skillsList: Item[] = [
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

const toolsList: Item[] = [
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

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"skills" | "tools">("skills");
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1 },
    hover: { scale: 1.1, y: -5 },
  };

  return (
    <section className="skills" id="skills">
      <motion.div
        className="skills-content section-content"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <p className="section-subtitle">My skills</p>
        <motion.h2 className="h3 section-title" variants={itemVariants}>
          What My Programming Skills Included?
        </motion.h2>
        <motion.p className="section-text" variants={itemVariants}>
          I develop simple, intuitive, and responsive user interfaces that help
          users get things done with less effort and time using these
          technologies.
        </motion.p>

        <motion.div
          className={`skills-toggle ${activeTab === "tools" ? "active" : ""}`}
          variants={itemVariants}
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
        </motion.div>
      </motion.div>

      <div className={`skills-box ${activeTab === "tools" ? "active" : ""}`}>
        <motion.ul
          className="skills-list"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {skillsList.map((skill) => (
            <motion.li
              key={skill.name}
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="skill-card">
                <div className="tooltip">{skill.name}</div>
                <div className="card-icon">
                  <img src={skill.img} alt={`${skill.name} logo`} />
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <motion.ul
          className="tools-list"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {toolsList.map((tool) => (
            <motion.li
              key={tool.name}
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="skill-card">
                <div className="tooltip">{tool.name}</div>
                <div className="card-icon">
                  <img src={tool.img} alt={`${tool.name} logo`} />
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Skills;
