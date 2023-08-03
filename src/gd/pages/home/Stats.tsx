import { stats } from "../../constants";

const Stats = () => (
  <section className="container w-full flex flex-wrap justify-center gap-3 mt-10">
    {stats.map((stat) => (
      <div key={stat.id} className={`flex flex-col items-center m-3`} >
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-gray-100">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gray-200 uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
