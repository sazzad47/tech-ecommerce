import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { GiCheckMark } from "react-icons/gi";

const PriceBox = () => {
  return (
    <div className="flex flex-col gap-8 p-5">
      <h1 className="text-secondaryTheme font-bold text-3xl">Multipurpose Admin Dashboard</h1>
       <div className="text-secondaryTheme">
        <div className="flex gap-3 items-center"><GiCheckMark/> Quality checked by IT</div>
        <div className="flex gap-3 items-center"><GiCheckMark/> Future updates</div>
        <div className="flex gap-3 items-center"><GiCheckMark/> 6 month support</div>
       </div>
      <h2 className="text-gray-400 font-bold text-3xl">
        $945
      </h2>
      <Link to="/checkout"><Button className="w-full">Buy Now!</Button></Link>
    </div>
  );
};

export default PriceBox;
