import { Link } from "react-router-dom";
import Button from "./Button";
import { GiCheckMark } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import styles from "../style";
import { textVariant } from "./utils/motion";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <div className="pricing-area">
      <div className="container">
      <div
        className={`bg-black-gradient rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
         
          <h2 className={styles.heading2}>Choose a Plan</h2>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            We offer multiple plans to help you choose the best for you.
          </p>
        </motion.div>
      </div>
        <div className="mt-20 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
          
          <div className="bg-black-gradient-2 rounded-[20px] box-shadow single-price w-full">
            <div className="price-header">
              <h3 className="title">Professional</h3>
            </div>
            <div className="price-value">
              <div className="value text-3xl">$200</div>
            </div>
            <ul className="deals">
              <li>
                {" "}
                <GiCheckMark /> Functional website
              </li>
              <li>
                {" "}
                <GiCheckMark /> 4 pages
              </li>
              <li>
                {" "}
                <GiCheckMark /> Content upload
              </li>
              <li>
                {" "}
                <IoMdClose /> Speed optimization
              </li>
              <li>
                {" "}
                <IoMdClose /> Hosting setup
              </li>
            </ul>
            <Link to="/">
              <Button>Order Now</Button>
            </Link>
          </div>

          <div className="bg-black-gradient-2 rounded-[20px] box-shadow single-price w-full">
            <div className="price-header">
              <h3 className="title">Corporate</h3>
            </div>
            <div className="price-value">
              <div className="value text-3xl">$500</div>
            </div>
            <ul className="deals">
              <li>
                {" "}
                <GiCheckMark /> Functional website
              </li>
              <li>
                {" "}
                <GiCheckMark /> 7 pages
              </li>
              <li>
                {" "}
                <GiCheckMark /> Content upload
              </li>
              <li>
                {" "}
                <GiCheckMark /> Speed optimization
              </li>
              <li>
                {" "}
                <IoMdClose /> Hosting setup
              </li>
            </ul>
            <Link to="/">
              <Button>Order Now</Button>
            </Link>
          </div>

          <div className="bg-black-gradient-2 rounded-[20px] box-shadow single-price w-full">
            <div className="price-header">
              <h3 className="title">Enterprise</h3>
            </div>
            <div className="price-value">
              <div className="value text-3xl">$1000</div>
            </div>
            <ul className="deals">
              <li>
                {" "}
                <GiCheckMark /> Functional website
              </li>
              <li>
                {" "}
                <GiCheckMark /> 10 pages
              </li>
              <li>
                {" "}
                <GiCheckMark /> Content upload
              </li>
              <li>
                {" "}
                <GiCheckMark /> Speed optimization
              </li>
              <li>
                {" "}
                <GiCheckMark /> Hosting setup
              </li>
            </ul>
            <Link to="/">
              <Button>Order Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
