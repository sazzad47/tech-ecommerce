import styles from "../../style";

const Description = () => {
  return (
    <div className="flex flex-col gap-7">
      <div>
        <h1 className={`${styles.heading2}`}>Description</h1>
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
