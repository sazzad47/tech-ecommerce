import { useParams } from "react-router-dom";
import { useGetDonorsCommentsQuery } from "src/state/api/gd";
import { Oval } from "react-loader-spinner";
import { Avatar } from "@mui/material";

const TopContributors = () => {
  const params = useParams();
  const { id } = params;
  const { data, isLoading } = useGetDonorsCommentsQuery(id);
  const topDonors: any[] = data?.top_donors;

  return (
    <>
      {isLoading ? (
        <div className="w-full h-[90vh] bg-primaryTheme flex items-center justify-center">
          <Oval
            height={30}
            width={30}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        <div className="text-secondaryTheme bg-black-gradient-2 rounded-lg">
          <div className="w-full max-w-md p-5 shadow">
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-xl font-bold leading-none">
                Top Contributors
              </h5>
            </div>
            <div className="flow-root">
              <ul className="divide-y divide-gray-600 dark:divide-gray-700">
                {topDonors?.map((item, index) => (
                  <li key={index} className="pt-3 pb-0 sm:pt-4 mb-3">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <Avatar src={item.avatar} alt="" className="w-8 h-8" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">
                          {item.first_name} {item.last_name}
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold">
                        {item.amount}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TopContributors;
