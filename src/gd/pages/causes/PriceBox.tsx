import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "src/state/store";

export type UserData = {
  application_for: string;
  mode: string;
  category: string;
  first_name: string;
  last_name: string;
  fathers_name: string;
  mothers_name: string;
  country: string;
  province: string;
  city: string;
  zip: string;
  address: string;
  marital_status: string;
  specific_marital_status: string;
  date_of_birth: Date | null;
  sex: string;
  specific_sex: string;
  blood_group: string;
  occupation: string;
  email: string;
  phone: string;
  identification_card: File | null;
  certificate_from_city_council: File | null;
  medical_report: File | null;
  permission_letter: File | null;
  test_results: File | null;
  name_of_employment: string;
  photo: File | null;
  other_documents: File | null;
  title: string;
  live_description: string;
  written_description: string;
  time_limit: string;
  fixed_time: Date | null;
  donation_needed: number;
  total_donations: number;
  [key: string]: string | File | null | Date | number | undefined;
};

const PriceBox = ({ data }: { data: UserData }) => {
  const raised = data.total_donations;
  const goal = data.donation_needed;
  const { access_token } = useSelector((state: RootState) => state.auth);
  const percentage = Math.floor((raised / goal) * 100);

  return (
    <div className="bg-black-gradient-2 rounded-lg">
      <div className="flex flex-col gap-8 p-5">
        <div className="text-secondaryTheme">
          {percentage && (
            <div className="progress-box ">
              <div className="progress-bar">
                <span
                  style={{ width: `${percentage}%` }}
                  className="progress-per bg-green-700"
                >
                  <span className="tooltip"> {percentage}% </span>
                </span>
              </div>
            </div>
          )}

          <div className="w-full flex justify-between">
            <span>Raised: ${data.total_donations} </span>
            <span>Goal: ${data.donation_needed}</span>
          </div>
        </div>
        <Link to={`${access_token ? `/gd/causes/donate/${data.id}` : "/login"}`}>
          <Button variant="contained" className="capitalize w-full bg-green-700 text-white">
            Donate
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PriceBox;
