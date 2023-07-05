import { AiOutlineClockCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import PriceBox from "./PriceBox";
import Description from "./Description";
import styles from "../../style";
import TopContributors from "./TopContributors";
import { useGetPostQuery } from "src/state/api/gd";
import { Oval } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

const Product: React.FC = () => {
  const params = useParams();
  const {id} = params;
  const { data, isLoading } = useGetPostQuery(id);
  
  const date = new Date(data?.created_at);
  const formattedDate = date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).replace(/\//g, "-");

  const country = data?.country;
  const capitalizedCountry =  country?.charAt(0).toUpperCase() + country?.slice(1);
  
  return (
    <>
      {isLoading ? (
        <div className="w-full h-[90vh] bg-primaryTheme flex items-center justify-center">
          <Oval
            height={30}
            width={30}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        <div className="bg-primaryTheme">
          <div
            className={`${styles.paddingX} ${styles.paddingY} w-full flex flex-col gap-7`}
          >
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h1 className={`text-secondaryTheme ${styles.heading2}`}>
                  {data.title}
                </h1>
                <div className="flex items-center gap-7 text-secondaryTheme">
                  <div className="flex items-center gap-3">
                    <AiOutlineClockCircle />
                    <span> {formattedDate}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GoLocation />
                    <span>{capitalizedCountry}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col sm:flex-row gap-5">
              <div className="w-full md:w-2/3">
                <div className="w-full h-[15rem] md:h-[18rem] relative">
                  <img src={data.photo} alt="" className="absolute w-full h-full" />
                </div>
                <div className="w-full order-2 md:order-1">
                  <Description data={data} />
                </div>
              </div>
              <div className="w-full md:w-1/3 flex flex-col gap-5 mt-5 sm:mt-0">
                <PriceBox data={data} />
                <TopContributors />
              </div>
              
            </div>
            <Comments />
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
