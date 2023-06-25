import { Link } from "react-router-dom";
import { UserData } from "../apply";
import DonateButton from "./donate/OneTime";


const PriceBox = ({data}: {data: UserData}) => {
  return (
    <div className="bg-black-gradient-2 rounded-lg">
      <div className="flex flex-col gap-8 p-5">
        <div className="text-secondaryTheme">
          <div className="progress-box ">
            <div className="progress-bar">
              <span className="progress-per bg-green-700 w-[45%]">
                <span className="tooltip">45%</span>
              </span>
            </div>
          </div>

          <div className="w-full flex justify-between">
            <span>Raised: $4500</span>
            <span>Goal: ${data.donation_needed}</span>
          </div>
        </div>
        <Link to="/checkout">
          {/* <Button className="w-full">Donate</Button> */}
          <DonateButton/>
        </Link>
      </div>
    </div>
  );
};

export default PriceBox;
