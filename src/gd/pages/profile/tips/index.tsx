import React from "react";
import { DataTable } from "./Datatable";
import { columns } from "./Columns";
import Layout from "../Layout";
import { useGetTipsQuery } from "src/state/api/gd";
import { useSelector } from "react-redux";
import { RootState } from "src/state/store";
import { Oval } from "react-loader-spinner";
import NoResult from "./NoResult";

const Tips = () => {
  const { access_token } = useSelector((state: RootState) => state.auth);
  const { data, isLoading } = useGetTipsQuery({ access_token });
  return (
    <Layout>
      {isLoading ? (
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
      ) : data?.length === 0 ? (
        <NoResult />
      ) : (
        <DataTable data={data} columns={columns} />
      )}
    </Layout>
  );
};

export default Tips;
