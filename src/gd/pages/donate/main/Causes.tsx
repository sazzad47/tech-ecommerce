import Button, { PrimaryButton } from "../../../components/Button";
import { Link } from "react-router-dom";

export type UserData = {
  id: number;
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
  photo: string;
  other_documents: File | null;
  live_description: string;
  title: string;
  written_description: string;
  time_limit: string;
  fixed_time: Date | null;
  donation_needed: string | number;
  [key: string]: string | File | null | Date | number;
};

const Causes = ({ data }: { data: UserData[] }) => {
  return (
    <>
      <div className="text-secondaryTheme">
        <div className="min-w-full overflow-x-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {data.map((post, index) => (
              <TemplateCard
                key={`post-${index}`}
                {...post}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const TemplateCard: React.FC<UserData> = ({
  photo,
  written_description,
  donation_needed,
  id,
}) => {

  return (   
      <div className="bg-black-gradient rounded-2xl w-full">
        <div className="relative w-full h-[230px]">
          <img
            src={photo}
            alt="project_image"
            className="w-full h-full object-cover rounded-se-2xl rounded-ss-2xl"
          />
        </div>
        <div className="p-5 text-secondaryTheme">
          <div className="progress-box ">
            <div className="progress-bar">
              <span className="progress-per bg-green-700 w-[45%]">
                <span className="tooltip">45%</span>
              </span>
            </div>
          </div>

          <div className="w-full flex justify-between">
            <span>Raised: $4500</span>
            <span>Goal: ${donation_needed}</span>
          </div>

          <p className="mt-2 text-secondaryTheme text-[14px] line-clamp-2">{written_description}</p>

          <div className="mt-4 flex justify-between items-center">
            <Link to={`/gd/causes/${id}`}><PrimaryButton> View </PrimaryButton></Link>
            <Link to="/gd/donate"><Button>Donate</Button></Link>
          </div>
        </div>
      </div>
  );
};

export default Causes;
