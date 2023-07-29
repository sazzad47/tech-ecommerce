import Designs from "./Designs";

const Main = () => {
  return (
    <div className="w-full flex justify-center flex-col items-center p-[2rem] bg-yellow-500 sm:p-[5rem]">
      <div>
        <div className="one mb-[3rem]">
          <h1 className="text-2xl sm:text-4xl">Architecture</h1>
        </div>
      </div>
      <Designs />
    </div>
  );
};

export default Main;
