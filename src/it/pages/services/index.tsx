import styles from "../../style";
import AllServices from "./Services";

const Services = () => {
 
  return (
    <div
      className={`${styles.paddingX} ${styles.paddingY} bg-primaryTheme text-secondaryTheme`}
    >
      <div className="">
        <h1 className={`flex items-center justify-center ${styles.heading2}`}>
          Services
        </h1>
      </div>
      <AllServices/>
    
    </div>
  );
};

export default Services;
