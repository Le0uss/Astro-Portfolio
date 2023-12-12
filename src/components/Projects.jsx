import { useState } from "react";
import { FiChevronDown, FiGithub } from "react-icons/fi"; // Importing GitHub icon
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="flex justify-start px-4 py-12 bg-gray-800 text-white">
      <div className="max-w-3xl text-left">
        <h3 className="text-3xl font-semibold mb-4">
          My Projects
        </h3>
        <Project 
          title="BiteBalance" 
          defaultOpen
          githubLink="https://github.com/Le0uss/Bite_Balance"
        >
          <p>
            This platform is a seamless integration of a nutritional label API with MongoDB and RESTful APIs, 
            ensuring real-time access to calorie data and secure user authorization. 
            It offers users an intuitive interface for food tracking and provides valuable nutritional insights.
          </p>
        </Project>
        <Project 
          title="E-Commerce"
          githubLink="https://github.com/Le0uss/E-Commerce"
        >
          <p>
          This project highlights our team's dedication to leveraging advanced technologies and collaborative teamwork.
          It's a collaboration that skillfully combines MongoDB, Express.js, React.js, Node.js, 
          and REST API to deliver a sophisticated and seamless e-commerce experience. 
          </p>
        </Project>
        <Project 
          title="OOP Game"
          githubLink="https://github.com/Le0uss/Nyan-Cat"
        >
          <p>
          Nyan Cat OOP game, featuring JavaScript-based collision detection and dynamic difficulty, challenges players to dodge Nyan Cats with a cheeseburger character, 
          showcasing my proficiency in object-oriented programming and interactive game design.
          </p>
        </Project>
        <Project 
          title="Cookie Clicker"
          githubLink="https://github.com/Le0uss/Cookie-Clicker"
        >
          <p>
          The Cookie Clicker Clone is a web game I developed from scratch, mirroring the popular Cookie Clicker gameplay. 
          It features interactive elements like clickable cookies and upgrades, 
          managed through React.js and React Context for state management, providing an engaging user experience.           
          </p>
        </Project>
      </div>
    </div>
  );
};

const Project = ({ title, children, defaultOpen = false, githubLink }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="border-b-[1px] border-b-slate-300 relative"
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="py-6 w-full flex items-center justify-between gap-4"
      >
        <motion.span
          variants={{
            open: { color: "rgba(255, 255, 255, 0)" },
            closed: { color: "rgba(255, 255, 255, 1)" },
          }}
          className="text-lg font-medium text-left bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-white"
        >
          {title}
        </motion.span>
        <motion.span
          variants={{
            open: { rotate: "180deg", color: "rgb(124 58 237)" },
            closed: { rotate: "0deg", color: "white" },
          }}
        >
          <FiChevronDown className="text-2xl" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "fit-content" : "0px", marginBottom: open ? "24px" : "0px" }}
        className="overflow-hidden text-white"
      >
        {children}
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="absolute bottom-2 right-2">
          <FiGithub className="text-xl text-white hover:text-gray-400" />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
