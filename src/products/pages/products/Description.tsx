import { Button } from "../../components/ui/button";
import styles from "../../style";
import { BiVideo } from "react-icons/bi";

const Description = () => {
  const fileURL =
    "https://drive.google.com/file/d/1yVQvf5qNh1j9d2959gl-yL2w8VZzT_TJ/view?usp=sharing";
  return (
    <div className="flex flex-col gap-7">
      <div>
        <div className="mb-4 md:mb-0 w-full flex flex-col md:flex-row justify-between items-start md:items-center">
          <h1 className={`${styles.heading2}`}>Description</h1>
          <Button
            className="flex items-center gap-3 px-4 py-3 whitespace-nowrap"
            onClick={() => window.open(fileURL, "_blank")}
          >
            <BiVideo className="text-xl" />
            Watch Video
          </Button>
        </div>
        <p className="text-secondaryTheme">
          Introducing our cutting-edge multipurpose admin dashboard, a powerful
          solution designed to streamline your administrative tasks and empower
          your organization like never before. Packed with an array of
          innovative features, our dashboard is built to enhance productivity,
          improve efficiency, and provide you with comprehensive control over
          your system or organization.
        </p>
      </div>
    </div>
  );
};

export default Description;
