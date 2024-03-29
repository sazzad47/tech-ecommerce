import React, { useEffect } from "react";
import Layout from "../../Layout";
import { useSelector } from "react-redux";
import { useGetPostDetailsQuery } from "src/state/api/gd";
import { RootState } from "src/state/store";
import Table from "./Table";
import { Oval } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import Header from "./Header";

const Details = () => {
  const { id } = useParams();
  const { access_token } = useSelector((state: RootState) => state.auth);
  const { data, isLoading, refetch } = useGetPostDetailsQuery({
    access_token,
    id,
  });

  useEffect(() => {
    if (access_token) {
      refetch();
    }
  }, [access_token, id, refetch]);

  if (!access_token || isLoading) {
    return (
      <Layout>
        <div className="w-full h-[70vh] flex items-center justify-center bg-black-gradiant-2">
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
      </Layout>
    );
  }

  return (
    <Layout>
      <Header data={data} />
      <Table data={data} />
    </Layout>
  );
};

export default Details;
