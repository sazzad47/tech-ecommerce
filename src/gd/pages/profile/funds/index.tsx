import React from "react";
import Layout from "../Layout";
import { useSelector } from "react-redux";
import { useGetProfileQuery } from "src/state/api/user";
import { RootState } from "src/state/store";
import { Oval } from "react-loader-spinner";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Funds = () => {
  const { access_token } = useSelector((state: RootState) => state.auth);
  const { data, isLoading: isFetchingProfile } = useGetProfileQuery({
    access_token,
  });

  return (
    <Layout>
      <div className="w-full p-5 mb-5 bg-black-gradient-2 border border-gray-500 rounded-md flex flex-col gap-3">
        <div className="flex justify-center items-center text-2xl">Funds</div>
      </div>
      {isFetchingProfile ? (
        <div className="w-full h-[70vh] flex items-center justify-center">
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
        <div className="h-full w-full justify-center items-start flex gap-[4rem]">
          <div className="flex flex-col gap-3 items-center">
            <div className="flex items-center justify-center w-[10rem] h-[10rem] rounded-full bg-gray-200 text-gray-900">
              ${data.funds}
            </div>
            <h2 className="text-2xl text-gray-800"> Donations </h2>
            <Link to="/gd/profile/funds/donations/withdraw">
              <Button variant="contained" className="bg-green-700">
                {" "}
                Withdraw{" "}
              </Button>
            </Link>
          </div>
          {data.is_volunteer && (
            <div className="flex flex-col gap-3 items-center">
              <div className="flex items-center justify-center w-[10rem] h-[10rem] rounded-full bg-gray-200 text-gray-900">
                ${data.tips}
              </div>
              <h2 className="text-2xl text-gray-800"> Tips </h2>
              <Link to="/gd/profile/funds/donations/tips">
                <Button variant="contained" className="bg-green-700">
                  {" "}
                  Withdraw{" "}
                </Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </Layout>
  );
};

export default Funds;
