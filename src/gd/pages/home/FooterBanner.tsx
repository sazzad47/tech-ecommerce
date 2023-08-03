import footerBanner from "../../assets/footerBanner.jpg";

const FooterBanner = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${footerBanner})`,
        backgroundPosition: "50%",
        height: "500px",
      }}
      className="overflow-hidden bg-cover bg-no-repeat mt-10"
    >
      <div className="px-6 h-full py-12 text-center md:px-12 lg:py-24 lg:text-left backdrop-brightness-50 ">
        <div className="w-100 mx-auto text-neutral-800 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <div
            className="mt-12 lg:mt-0 flex flex-col items-center justify-center"
            style={{
              zIndex: 10,
            }}
          >
            <h1 className="mt-0 mb-12 text-5xl text-center font-bold tracking-tight md:text-6xl xl:text-7xl text-white">
              Be a Hero of Hope
            </h1>
            <h1 className="mt-0 mb-12 text-2xl text-center font-bold tracking-tight md:text-3xl xl:text-5xl text-white">
            Join our mission to make a difference in the world
            </h1>
            <button
              className="mb-2 inline-block rounded-full bg-green-700 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#16a34a] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Donate Today!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterBanner;
