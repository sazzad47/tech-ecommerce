
const Button = ({ styles, children }) => (
  <button type="button" className={`py-3 px-5 font-poppins font-medium text-[16px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    {children}
  </button>
);
export const PrimaryButton = ({ styles, children }) => (
  <button type="button" className={`py-3 px-5 font-poppins font-medium text-[16px] text-primary bg-btn-gradient rounded-[10px] outline-none ${styles}`}>
    {children}
  </button>
);


export default Button;
