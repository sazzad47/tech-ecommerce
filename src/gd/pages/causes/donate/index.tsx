import styles from "src/it/style";
import Form from "./Form";

export default function Donate() {

  return (
    <div
      className={`${styles.paddingX} ${styles.paddingY} bg-primaryTheme text-secondaryTheme`}
    >
      <div className="mb-3">
        <h1 className={`flex items-center justify-center ${styles.heading2}`}>
          Donate
        </h1>
      </div>
      <div className="h-[255] max-w-[400] w-full mt-5">
        <Form/>
      </div>
    </div>
  );
}



