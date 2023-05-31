import { AiOutlineGithub, AiOutlineGitlab } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { BsDiscord, BsPinterest } from "react-icons/bs";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex justify-center items-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <AiOutlineGithub />
          </span>
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex justify-center items-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <AiOutlineGitlab />
          </span>
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex justify-center items-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <CiFacebook />
          </span>
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex justify-center items-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <BsDiscord />
          </span>
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex justify-center items-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <BsPinterest />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
};

export default LeftSide;
