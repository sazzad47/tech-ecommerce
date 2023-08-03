import styles from "../style";
import ReactCountryFlag from "react-country-flag";
import { footerLinks, socialMedia } from "../constants";
import { Typography } from "@mui/material";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";

const Footer = () => (
  <section
    className={`${styles.flexCenter} ${styles.paddingY} ${styles.paddingX} flex-col bg-green-600`}
  >
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-secondaryTheme">
          Head Office of The Company
        </h4>
        <div className="w-full grid grid-cols-2 gap-2 justify-between mt-4">
          <div className="flex flex-col gap-1">
            <div className="flex gap-4 items-center mb-4">
              {" "}
              <ReactCountryFlag
                countryCode="US"
                svg
                style={{
                  width: "2em",
                  height: "2em",
                }}
                title="US"
              />{" "}
              <Typography className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                {" "}
                USA{" "}
              </Typography>
            </div>
            <div className="flex gap-4 items-center text-white mb-4">
              {" "}
              <AiOutlineHome className="h-[2em] w-[2em]" />
              <Typography className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                {" "}
                Texas{" "}
              </Typography>
            </div>
            <div className="flex gap-4 items-center text-white mb-4">
              {" "}
              <AiOutlineMail className="h-[2em] w-[2em]" />
              <Typography className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondaryTheme cursor-pointer">
                {" "}
                test@test.com{" "}
              </Typography>
            </div>
            <div className="flex gap-4 items-center text-white">
              {" "}
              <IoMdCall className="h-[2em] w-[2em]" />
              <Typography className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondaryTheme cursor-pointer">
               03000000000
              </Typography>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-4 items-center mb-4">
              {" "}
              <ReactCountryFlag
                countryCode="IN"
                svg
                style={{
                  width: "2em",
                  height: "2em",
                }}
                title="India"
              />{" "}
              <Typography className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                {" "}
                India
              </Typography>
            </div>
            <div className="flex gap-4 items-center text-white mb-4">
              {" "}
              <AiOutlineHome className="h-[2em] w-[2em]" />
              <Typography className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                {" "}
                Texas{" "}
              </Typography>
            </div>
            <div className="flex gap-4 items-center text-white mb-4">
              {" "}
              <AiOutlineMail className="h-[2em] w-[2em]" />
              <Typography className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondaryTheme cursor-pointer">
                {" "}
                test@test.com{" "}
              </Typography>
            </div>
            <div className="flex gap-4 items-center text-white">
              {" "}
              <IoMdCall className="h-[2em] w-[2em]" />
              <Typography className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondaryTheme cursor-pointer">
               03000000000
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-secondaryTheme">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondaryTheme cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-secondaryTheme">
        Copyright Ⓒ 2023 Sazzad Hossen. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
