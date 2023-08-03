import styles from "src/it/style";
import Form from "./Form";
import { useGetPostQuery } from "src/state/api/gd";
import { useParams } from "react-router-dom";
import { Oval } from "react-loader-spinner";

export default function Donate() {
  const params = useParams();
  const { id } = params;
  const { data, isLoading } = useGetPostQuery(id);

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
      ) : (
    <div
      className={`${styles.paddingX} ${styles.paddingY} text-secondaryTheme`}
    >
      <div className="mb-3">
        <h1 className={`flex items-center text-secondaryTheme justify-center ${styles.heading2}`}>
          Donate
        </h1>
      </div>
      <div className="w-full mt-5 bg-white p-[1rem] sm:p-[5rem]">
        <Form data={data} />
      </div>
    </div>)}
    </>
  );
}



