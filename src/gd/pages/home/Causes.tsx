import styles from "../../style";
import { causes } from "../../constants";
import ReactCountryFlag from "react-country-flag";
import { Button } from "@mui/material";

interface Project {
  index: number;
  name: string;
  description: string;
  image: string;
}

const PostCard: React.FC<Project> = ({ index, name, description, image }) => {
  return (
    <div>
      <div className="bg-black-gradient rounded-2xl w-full">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-se-2xl rounded-ss-2xl"
          />
          <div className="absolute bottom-2 right-2 text-white rounded-full bg-stone-800 px-3 py-2 z-1">
            Emergency
          </div>
          <div className="absolute top-2 left-2 z-1">
            <ReactCountryFlag
              countryCode="US"
              svg
              style={{
                width: "2em",
                height: "2em",
              }}
              title="US"
            />
          </div>
        </div>
        <div className="p-5 text-secondaryTheme">
          <div className="progress-box ">
            <div className="progress-bar">
              <span className="progress-per bg-green-700 w-[45%]">
                <span className="tooltip">45%</span>
              </span>
            </div>
          </div>

          <div className="w-full flex justify-between">
            <span>Raised: $10000</span>
            <span>Goal: $10000</span>
          </div>

          <div className="w-full flex justify-between mt-3">
            <span>2 days ago</span>
            <span>Donors: 230</span>
          </div>
          
          <p className="mt-2 text-secondaryTheme text-[14px] line-clamp-2">{description}</p>

          <div className="mt-4 flex justify-between items-center">
            <Button variant="outlined" className="text-white"> View </Button>
            <Button variant="contained" className="bg-green-700">Donate</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Causes: React.FC = () => {
  return (
    <>
      <div className="mt-10 w-full flex flex-col justify-center items-center mb-6 relative z-[1]">
        <div>
          <h2 className={styles.heading2}>Popular Causes</h2>
        </div>
      </div>

      <div className="mt-10 w-full grid grid-cols-1 sm:grid-cols-3 gap-7">
        {causes.map((project, index) => (
          <PostCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default Causes;
