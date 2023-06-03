import { useState, useEffect, useRef } from "react";
import styles from "../style";
import { projects } from "../constants";
import ProjectCard from "./ProjectCard";


const Projects = () => {
  const [activeTab, setActiveTab] = useState("panel-1");
  const indicatorRef = useRef(null);
  const panelRefs = {
    "panel-1": useRef(null),
    "panel-2": useRef(null),
    "panel-3": useRef(null),
  };

  useEffect(() => {
    const tabs = document.querySelectorAll(".tab");
    const panels = document.querySelectorAll(".tab-panel");
    const indicator = indicatorRef.current;

    indicator.style.width = tabs[0].getBoundingClientRect().width + "px";
    indicator.style.left =
      tabs[0].getBoundingClientRect().left -
      tabs[0].parentElement.getBoundingClientRect().left +
      "px";

    const handleClick = (event) => {
      const tab = event.currentTarget;
      const tabTarget = tab.getAttribute("aria-controls");

      indicator.style.width = tab.getBoundingClientRect().width + "px";
      indicator.style.left =
        tab.getBoundingClientRect().left -
        tab.parentElement.getBoundingClientRect().left +
        "px";

      panels.forEach((panel) => {
        const panelId = panel.getAttribute("id");
        if (tabTarget === panelId) {
          panel.classList.remove("invisible", "opacity-0");
          panel.classList.add("visible", "opacity-100");
        } else {
          panel.classList.add("invisible", "opacity-0");
        }
      });

      setActiveTab(tabTarget);
    };

    tabs.forEach((tab) => {
      tab.addEventListener("click", handleClick);
    });

    return () => {
      tabs.forEach((tab) => {
        tab.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <>
      <div id="projects" className="projects text-white mt-5 md:mt-[2rem]">
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
        <div className="w-full max-w-3xl mx-auto overflow-x-auto">

            <div
              role="tablist"
              aria-label="tabs"
              className="relative w-max mx-auto h-12 grid grid-cols-3 items-center px-[3px] rounded-full projectTabs text-white overflow-hidden shadow-2xl shadow-900/20 transition"
            >
              <div
                ref={indicatorRef}
                className="absolute indicator h-11 my-auto top-0 bottom-0 left-0 rounded-full bg-white shadow-md"
              ></div>
              <button
                role="tab"
                aria-selected={activeTab === "panel-1"}
                aria-controls="panel-1"
                id="tab-1"
                tabIndex="0"
                className="relative block h-10 px-6 tab rounded-full"
              >
                <span className={activeTab==="panel-1"? "text-gray-800": "text-gray-200"}>E-commerce</span>
              </button>
              <button
                role="tab"
                aria-selected={activeTab === "panel-2"}
                aria-controls="panel-2"
                id="tab-2"
                tabIndex="-1"
                className="relative block h-10 px-6 tab rounded-full"
              >
                <span className={activeTab==="panel-2"? "text-gray-800": "text-gray-200"}>Landing Pages</span>
              </button>
              <button
                role="tab"
                aria-selected={activeTab === "panel-3"}
                aria-controls="panel-3"
                id="tab-3"
                tabIndex="-1"
                className="relative block h-10 px-6 tab rounded-full"
              >
                <span className={activeTab==="panel-3"? "text-gray-800": "text-gray-200"}>Portfolio</span>
              </button>
            </div>
          </div>
  
        <div className="w-full mt-6 relative">
          <div
            ref={panelRefs["panel-1"]}
            role="tabpanel"
            id="panel-1"
            className={`mt-20 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 transition duration-300 ${
              activeTab === "panel-1"
                ? "visible opacity-100"
                : "invisible opacity-0"
            }`}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
              />
            ))}
          </div>
          <div
            ref={panelRefs["panel-2"]}
            role="tabpanel"
            id="panel-2"
            className={`absolute top-0 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 transition duration-300 ${
              activeTab === "panel-2"
                ? "visible opacity-100"
                : "invisible opacity-0"
            }`}
          >
             {projects.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
              />
            ))}
          </div>
          <div
            ref={panelRefs["panel-3"]}
            role="tabpanel"
            id="panel-3"
            className={`absolute top-0 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 transition duration-300 ${
              activeTab === "panel-3"
                ? "visible opacity-100"
                : "invisible opacity-0"
            }`}
          >
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
