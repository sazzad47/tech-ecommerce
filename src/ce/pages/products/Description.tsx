import { Button } from "../../components/ui/button";
import styles from "../../style";
import { BiVideo } from "react-icons/bi";

const Description = () => {
  const fileURL =
    "https://drive.google.com/file/d/1yVQvf5qNh1j9d2959gl-yL2w8VZzT_TJ/view?usp=sharing";
  return (
    <div className="flex flex-col gap-7">
      <div>
        <div className="mb-4 md:mb-0 w-full flex flex-col md:flex-row justify-between items-start sm:items-start">
          <h1 className={`${styles.heading2} -mt-[1.2rem]`}>Description</h1>
          <Button
            className="flex text-white items-center gap-3 px-4 py-3 whitespace-nowrap bg-yellow-600"
            onClick={() => window.open(fileURL, "_blank")}
          >
            <BiVideo className="text-xl" />
            Watch Video
          </Button>
        </div>
        <p className="text-secondaryTheme">
          This beautiful home has many stylish interiors with blue hues and
          tailored furniture.
        </p>
      </div>
    </div>
  );
};

export default Description;
