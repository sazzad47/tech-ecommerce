import { useGetCompletedPostsQuery } from "src/state/api/gd";
import { Oval } from "react-loader-spinner";
import NoResult from "./NoResult";
import { useLocation, useNavigate } from "react-router-dom";
import { Pagination } from "@mui/material";
import filterSearch from "../topbar/filterSearch";
import Causes from "./Causes";

const Posts = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data, isLoading } = useGetCompletedPostsQuery(location.search);
  const totalCount = data?.count;
  const itemsPerPage = 6;
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  const queryParams = new URLSearchParams(window.location.search);
  const currentPage = queryParams.get("page");

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    const page = value.toString();
    filterSearch({ location, page, navigate });
  };
  
  console.log('data', data)
  return (
    <>
      {isLoading ? (
        <div className="w-full h-[90vh] flex items-center justify-center">
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
      ) : data?.count === 0 ? (
        <NoResult />
      ) : (
        <div className="w-full">
          <Causes data={data?.results} />
          <div className="w-full flex items-center justify-center mt-5">
            <Pagination
              page={Number(currentPage)}
              onChange={handlePageChange}
              sx={{
                "& .MuiPaginationItem-root": {
                  color: "white",
                },
              }}
              count={Number(totalPages)}
              color="standard"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Posts;
