import { AiOutlineClockCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import PriceBox from "./PriceBox";
import Description from "./Description";
import styles from "../../style";
import hero3 from "../../images/hero3.png";
import Emergency from "./Emergency";
import TopContributors from "./TopContributors";
import SocialSharing from "../../components/SocialSharing";

const Product: React.FC = () => {
  return (
    <div>
      <div className="bg-primaryTheme">
        <div
          className={`${styles.paddingX} ${styles.paddingY} w-full flex flex-col gap-7`}
        >
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h1 className={`text-secondaryTheme ${styles.heading2}`}>
                They Need Food
              </h1>
              <div className="flex items-center gap-7 text-secondaryTheme">
                <div className="flex items-center gap-3">
                  <AiOutlineClockCircle />
                  <span> 2-2-2023</span>
                </div>
                <div className="flex items-center gap-3">
                  <GoLocation />
                  <span>Bangladesh</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col sm:flex-row gap-5">
            <div className="w-full md:w-2/3">
              <div className="w-full h-[15rem] md:h-[18rem] relative">
                <img src={hero3} alt="" className="absolute w-full h-full" />
              </div>
              <div className="w-full order-2 md:order-1">
                <Description />
              </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-col gap-5 mt-5 sm:mt-0">
              <PriceBox />
              <TopContributors />
            </div>
            <div className="mt-5 flex-col gap-3 flex sm:hidden">
              <h3 className="text-xl font-bold text-secondaryTheme">Share</h3>
              <SocialSharing path="causes/123" title="They Need Food" />
            </div>
          </div>
          <Emergency />
        </div>
      </div>
    </div>
  );
};

export default Product;
