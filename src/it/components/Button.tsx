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

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ styles, children }) => (
  <button
    type="button"
    className={`py-2 px-3 font-poppins font-medium text-[16px] bg-btn-gradient rounded-[10px] outline-none ${styles}`}
  >
    {children}
  </button>
);

export default Button;
