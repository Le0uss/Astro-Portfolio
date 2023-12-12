import Projects from "./Projects";
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Importing LinkedIn and GitHub icons

const MainPage = () => {
  return (
    <div className="bg-gray-800 flex justify-start">
      <section className="w-full px-8 py-12 max-w-6xl bg-gray-800 text-white">
        <div className="text-left"> {/* Changed from text-center to text-left */}
          <span className="block mb-4 text-white md:text-sm text-black font-medium">
            Ossama Tenessi
          </span>
          <p className="text-4xl md:text-6xl font-semibold inline-block mr-4">
            My Portfolio
          </p>
          {/* LinkedIn and GitHub Icons as Links */}
          <a href="https://www.linkedin.com/in/ossama-tenessi/" target="_blank" rel="noopener noreferrer" className="inline-block text-3xl mr-2">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Le0uss" target="_blank" rel="noopener noreferrer" className="inline-block text-3xl">
            <FaGithub />
          </a>
          <p className="text-base md:text-lg my-4 md:my-6">
            Dedicated web developer always willing to hone my skills in both front-end and back-end development. My journey in software development is marked by daily commitment to projects, 
            where I'm improving not only my technical skills but also gaining a deeper understanding of the nuances of web applications.
          </p>
        </div>

        <Projects /> 
      </section>
    </div>
  );
};

export default MainPage;
