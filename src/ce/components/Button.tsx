import React from "react";

interface ButtonProps {
  styles?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ styles, children }) => (
  <button
    type="button"
    className={`py-2 px-3 font-poppins font-medium text-[16px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    {children}
  </button>
);

interface PrimaryButtonProps {
  styles?: string;
  children: React.ReactNode;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  styles,
  children,
}) => (
  // <button
  //   type="button"
  //   className={`py-2 px-3 font-poppins font-medium text-[16px] bg-btn-gradient rounded-[10px] outline-none ${styles}`}
  // >
  //   {children}
  // </button>
  <button
    className="mb-2 inline-block rounded bg-yellow-600 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
    data-te-ripple-init
    data-te-ripple-color="light"
  >
    {children}
  </button>
);

export const SecondaryButton: React.FC<PrimaryButtonProps> = ({
  styles,
  children,
}) => (
  // <button
  //   type="button"
  //   className={`py-2 px-3 font-poppins font-medium text-[16px] bg-btn-gradient rounded-[10px] outline-none ${styles}`}
  // >
  //   {children}
  // </button>
  <button
    className="inline-block no-underline rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-700 dark:hover:bg-opacity-40"
    data-te-ripple-init
    data-te-ripple-color="light"
  >
    {children}
  </button>
);

export default Button;
