import SocialSharing from "../../components/SocialSharing";
import styles from "../../style";
import { UserData } from "../donate/main/Causes";

const Description = ({data}: {data: UserData}) => {
  return (
    <div className="flex flex-col gap-7">
      <div>
        <div className="mb-4 md:mb-0 w-full flex flex-col md:flex-row justify-between items-start md:items-center">
          <h1 className={`${styles.heading2}`}>Description</h1>
        </div>
        <p className="text-secondaryTheme">
          {data.written_description}
        </p>
        <div className="mt-5 flex-col gap-3 hidden sm:flex">
          <h3 className="text-xl font-bold text-secondaryTheme">Share</h3>
          <SocialSharing path={`causes/${data.id}`} title={data.title} />
        </div>
      </div>
    </div>
  );
};

export default Description;
