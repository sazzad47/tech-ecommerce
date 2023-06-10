import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { GiCheckMark } from "react-icons/gi";

const PriceBox = () => {
  return (
    <div className="bg-black-gradient-2 rounded-lg">
      <div className="flex flex-col gap-8 p-5">
        <h1 className="text-secondaryTheme font-bold text-3xl">
          Modern Apertment
        </h1>
        <div className="text-secondaryTheme">
          <div className="flex gap-3 items-center">
            <GiCheckMark /> Designed by CE
          </div>
          <div className="flex gap-3 items-center">
            <GiCheckMark /> 2 bedrooms{" "}
          </div>
          <div className="flex gap-3 items-center">
            <GiCheckMark /> 1 bathroom month
          </div>
        </div>
        <h2 className="text-gray-400 font-bold text-3xl">$945</h2>
        <Link to="/ce/checkout">
          <Button className="w-full">Buy Now!</Button>
        </Link>
      </div>
    </div>
  );
};

export default PriceBox;
