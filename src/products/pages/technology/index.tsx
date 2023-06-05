import styles from "../../style";
import Main from "./main";
import Topbar from "./topbar";

const Home = () => {
  return (
    <div
      className={`${styles.paddingX} bg-primaryTheme flex flex-col gap-5 items-start py-5`}
    >
      <Topbar />
      <Main />
    </div>
  );
};

export default Home;
