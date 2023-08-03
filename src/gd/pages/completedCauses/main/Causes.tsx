import { Link } from "react-router-dom";
import moment from "moment";
import { Button } from "@mui/material";
import ReactCountryFlag from "react-country-flag";
import countriesList from "countries-list";

export type UserData = {
  id: number;
  created_at: Date | null;
  application_for: string;
  mode: string;
  raised: any;
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
  photo: string;
  other_documents: File | null;
  live_description: string;
  title: string;
  written_description: string;
  time_limit: string;
  fixed_time: Date | null;
  donation_needed: number;
  total_donations: number;
  [key: string]: string | File | null | Date | number;
};

const Causes = ({ data }: { data: UserData[] }) => {
  return (
    <>
      <div className="text-secondaryTheme">
        <div className="min-w-full overflow-x-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {data.map((post, index) => (
              <PostCard key={`post-${index}`} {...post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const PostCard: React.FC<UserData> = ({
  photo,
  written_description,
  donation_needed,
  total_donations,
  id,
  mode,
  created_at,
  raised,
  country,
}) => {
  const percentage = Math.floor((total_donations / donation_needed) * 100);

  const countryCodesMapping = Object.entries(countriesList.countries).map(
    ([countryCode, countryData]) => ({
      countryName: countryData.name,
      countryCode: countryCode,
    })
  );

  const capitalizedCountry =
    country?.charAt(0).toUpperCase() + country?.slice(1) || "";
  const countryCode =
    countryCodesMapping.find(
      (countryMapping) => countryMapping.countryName === capitalizedCountry
    )?.countryCode || "";

  console.log("countryCode", countryCode);

  return (
    <div className="bg-black-gradient rounded-2xl w-full">
      <div className="relative w-full h-[230px]">
        <img
          src={photo}
          alt="project_image"
          className="w-full h-full object-cover rounded-se-2xl rounded-ss-2xl"
        />
        <div className="absolute bottom-2 right-2 text-white rounded-full bg-stone-800 px-3 py-2 z-1">
          {mode}
        </div>
        <div className="absolute top-2 left-2 z-1">
          <ReactCountryFlag
            countryCode={countryCode}
            svg
            style={{
              width: "2em",
              height: "2em",
            }}
            title={countryCode}
          />
        </div>
      </div>
      <div className="p-5 text-secondaryTheme">
        <div className="progress-box ">
          <div className="progress-bar">
            {percentage && (
              <span
                style={{ width: `${percentage}%` }}
                className="progress-per bg-green-700"
              >
                <span className="tooltip"> {percentage}% </span>
              </span>
            )}
          </div>
        </div>

        <div className="w-full flex justify-between">
          <span>Raised: ${total_donations}</span>
          <span>Goal: ${donation_needed}</span>
        </div>

        <div className="w-full flex justify-between mt-3">
          <span> {moment(created_at).fromNow()} </span>
          <span>Donors: {raised.length}</span>
        </div>

        <p className="mt-2 text-secondaryTheme text-[14px] line-clamp-2">
          {written_description}
        </p>

        <div className="mt-4 w-full">
          <Link to={`/gd/completed-donations/${id}`}>
            <Button
              fullWidth
              variant="contained"
              className="text-white bg-green-700"
            >
              Completed
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Causes;
