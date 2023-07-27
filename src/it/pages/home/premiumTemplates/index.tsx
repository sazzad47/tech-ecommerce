import styles from "../../../style";
import Slider from "./Slider";

function Designs() {
  return (
    <div className="bg-white container min-w-full text-gray-800 py-[4rem]">
      <div className="w-full flex flex-col justify-between items-center mb-6 relative z-[1]">
        <h2 className={styles.heading2}>Premium Templates</h2>
        <p
          className={`${styles.paragraph} text-center text-pink-700 max-w-[450px]`}
        >
          Elevate your projects with our collection of exquisite premium templates.
        </p>
      </div>
      <div className="w-full mt-10">
        <Slider />
      </div>
    </div>
  );
}

export default Designs;
