import { Link } from "react-router-dom";
import styles from "../../style";
import { projects } from "../../constants";
import { GiCheckMark } from "react-icons/gi";

const Similar = () => {
  return (
    <div className="text-secondaryTheme">
      <h3 className={`${styles.heading2}`}>Similar Designs</h3>
      <div className="min-w-full overflow-x-auto mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <DesignCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Similar;

interface Project {
  index: number;
  name: string;
  description: string;
  image: string;
}

const DesignCard: React.FC<Project> = ({ index, name, description, image }) => {
  return (
    <div className="bg-gray-600 p-5 rounded-2xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-se-2xl rounded-ss-2xl"
        />
      </div>
      <div className="pt-5">
        <div className="">
          <div className="text-secondaryTheme font-bold text-[24px] flex justify-between items-center">
            <h3>{name}</h3>
            <h3>$1000</h3>
          </div>
          <p className="mt-2 text-secondaryTheme text-[14px]">{description}</p>
          <div className="text-secondaryTheme my-3">
            <div className="flex gap-3 items-center">
              <GiCheckMark /> 2 Bedrooms
            </div>
            <div className="flex gap-3 items-center">
              <GiCheckMark /> 2 Bathrooms
            </div>
            <div className="flex gap-3 items-center">
              <GiCheckMark /> 3450 Square Ft
            </div>
          </div>
        </div>

        <div className="mt-4 w-full flex justify-between items-center">
          <Link to="/ce/products/123" className="w-full no-underline">
            <button
              className="mb-2 w-full inline-block rounded bg-yellow-600 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Plan
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
