import SocialSharing from "../../components/SocialSharing";
import styles from "../../style";

const Description = () => {
  return (
    <div className="flex flex-col gap-7">
      <div>
        <div className="mb-4 md:mb-0 w-full flex flex-col md:flex-row justify-between items-start md:items-center">
          <h1 className={`${styles.heading2}`}>Description</h1>
        </div>
        <p className="text-secondaryTheme">
          Introducing our cutting-edge multipurpose admin dashboard, a powerful
          solution designed to streamline your administrative tasks and empower
          your organization like never before. Packed with an array of
          innovative features, our dashboard is built to enhance productivity,
          improve efficiency, and provide you with comprehensive control over
          your system or organization.
        </p>
        <div className="mt-5 flex-col gap-3 hidden sm:flex">
          <h3 className="text-xl font-bold text-secondaryTheme">Share</h3>
          <SocialSharing path="causes/123" title="They Need Food" />
        </div>
      </div>
    </div>
  );
};

export default Description;
