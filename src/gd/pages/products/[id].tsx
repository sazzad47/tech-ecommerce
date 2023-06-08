import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from "react";
import { BsCartCheckFill } from "react-icons/bs";
import PriceBox from "./PriceBox";
import Description from "./Description";
import { Button } from "../../components/ui/button";
import styles from "../../style";
import { jobit } from "../../assets";
import { carrent } from "../../assets";
import { tripguide } from "../../assets";

const Product: React.FC = () => {
  const [slideNumber, setSlideNumber] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  const photos = [
    {
      src: jobit,
    },
    {
      src: carrent,
    },
    {
      src: tripguide,
    },
    {
      src: carrent,
    },
    {
      src: tripguide,
    },
    {
      src: jobit,
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
      <div className="bg-primaryTheme">
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
        <div className={`${styles.paddingX} ${styles.paddingY} w-full flex flex-col gap-7`}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 md:gap-0">
            <div className="flex flex-col">
              <h1 className={`text-secondaryTheme ${styles.heading2}`}>
                Multipurpose Admin Dashboard
              </h1>
              <div className="flex items-center gap-3 text-secondaryTheme">
                <BsCartCheckFill />
                <span>3,436 sales</span>
              </div>
            </div>
            <Button className="">
              Live Preview
            </Button>
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
          <div className="w-full flex flex-col md:flex-row justify-between gap-5 items-start">
            <div className="w-full md:max-w-2xl order-2 md:order-1">
              <Description />
            </div>
            <div className="bg-black-gradient-2 order-1 md:order-2">
              <PriceBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
