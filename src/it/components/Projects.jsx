import styles from "../style";
import { projects } from "../constants";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <div
        id="projects"
        className="projects text-secondaryTheme mt-5 md:mt-[2rem]"
      >
        <div
          className={`${styles.paddingY} w-full flex justify-between items-center md:flex-row flex-col mb-6 relative z-[1]`}
        >
          <h2 className={styles.heading2}>Premium Templates</h2>
          <div className="w-full flex justify-start md:mt-0 mt-6">
            <p className={`${styles.paragraph} text-left max-w-[450px]`}>
              It can be overwhelming to choose the right tech solution for your
              company, but with our featured products, you can find the perfect
              fit.
            </p>
          </div>
        </div>
        <div className="min-w-full max-w-3xl  overflow-x-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {projects.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
