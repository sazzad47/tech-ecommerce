import { features } from "../../constants";
import styles from "../../style";
import { PrimaryButton } from "../../components/Button";

type Feature = {
  id: string; // Change id type to string
  icon: any;
  title: string;
  content: string;
};

type FeatureCardProps = {
  feature: Feature;
  index: number;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => (
  <div
    className={`flex flex-row py-4`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <feature.icon className="w-1/2 h-1/2 text-fuchsia-900"/>
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-gray-800 text-[18px] leading-[23.4px] mb-1">
        {feature.title}
      </h4>
      <p className="font-poppins font-normal text-gray-700 text-[16px] leading-[24px]">
        {feature.content}
      </p>
    </div>
  </div>
);

const Business: React.FC = () => (
  <section className="container flex flex-col gap-5 sm:flex-row bg-white py-[4rem]">
    <div className="">
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-fuchsia-900 text-start xs:leading-[76.8px] leading-[66.8px] w-full">
        You do the business, <br className="sm:block hidden" /> we’ll handle the
        growth.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-gray-800 mb-10`}>
        Product improvement is the process of making meaningful product changes
        that result in new customers or increased benefits for existing customers.
      </p>

      <PrimaryButton > Get Started </PrimaryButton>
    </div>

    <div className={`h-full w-full sm:w-1/2 flex flex-col items-start gap-5`}>
      {features.map((feature: Feature, index: number) => (
        <FeatureCard key={feature.id} feature={feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
