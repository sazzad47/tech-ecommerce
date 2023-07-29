import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from "react";
import { BsCartCheckFill } from "react-icons/bs";
import PriceBox from "./PriceBox";
import Description from "./Description";
import styles from "../../style";
import design1 from "../../images/design1.jpg";
import design2 from "../../images/design2.jpg";
import design3 from "../../images/design3.jpg";
import Similar from "./Similar";

const Product: React.FC = () => {
  const [slideNumber, setSlideNumber] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  const photos = [
    {
      src: design1,
    },
    {
      src: design2,
    },
    {
      src: design3,
    },
    {
      src: design1,
    },
    {
      src: design2,
    },
    {
      src: design3,
    },
  ];

  const handleOpen = (i: number): void => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction: string): void => {
    let newSlideNumber: number;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <div className="bg-yellow-500">
        {open && (
          <div className="slider">
            <IoMdCloseCircle className="close" onClick={() => setOpen(false)} />
            <BsFillArrowLeftCircleFill
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <BsFillArrowRightCircleFill
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div
          className={`${styles.paddingX} ${styles.paddingY} w-full flex flex-col gap-7`}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 md:gap-0">
            <div className="flex flex-col">
              <h1 className={`text-secondaryTheme ${styles.heading2}`}>
                Modern Apertment
              </h1>
              <div className="flex items-center gap-3 text-secondaryTheme">
                <BsCartCheckFill />
                <span>3,436 sales</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {photos.map((photo, i) => (
              <div className="w-full h-[6rem] md:h-[12rem] relative" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="absolute w-full h-full"
                />
              </div>
            ))}
          </div>
          <div className="w-full flex flex-col sm:flex-row gap-5">
            <div className="w-full md:w-2/3">
              <div className="w-full order-2 md:order-1">
                <Description />
              </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-col gap-5 mt-5 sm:mt-0">
              <PriceBox />
            </div>
          </div>
          <div>
            <Similar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
