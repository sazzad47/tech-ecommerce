import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import styles from "../../style";
import { Collapse } from "react-collapse";

type FaqItem = {
  question: string;
  answer: string;
};

const Faqs: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | false>(false);

  const toggleItem = (item: number) => {
    if (openItem === item) {
      setOpenItem(false);
    } else {
      setOpenItem(item);
    }
  };

  const faqsList: FaqItem[] = [
    {
      question: "What is your software company's expertise?",
      answer:
        "Our software company specializes in developing custom solutions for businesses, including web and mobile applications, enterprise software, and cloud-based solutions.",
    },
    {
      question: "How long has your company been in business?",
      answer:
        "We have been in business for X years, providing reliable software solutions to our clients.",
    },
    {
      question: "What industries do you cater to?",
      answer:
        "Our software solutions cater to a wide range of industries, including finance, healthcare, e-commerce, education, and more. We customize our products to meet specific industry requirements.",
    },
    {
      question: "Can you integrate your software with existing systems?",
      answer:
        "Absolutely! We understand the importance of seamless integration, and our software solutions are designed to integrate with existing systems and software, such as CRMs, ERPs, and other third-party applications.",
    },
    {
      question: "Do you provide technical support and maintenance?",
      answer:
        "Yes, we offer comprehensive technical support and maintenance services to ensure the smooth functioning of our software solutions. Our team is available to address any issues and provide regular updates and improvements.",
    },
    {
      question: "How do you ensure the security of your software products?",
      answer:
        "Security is a top priority for us. We implement industry best practices, including encryption, secure authentication, regular security audits, and compliance with data protection regulations, to ensure the security of our software products and protect your valuable data.",
    },
    {
      question: "Can you develop mobile applications for multiple platforms?",
      answer:
        "Yes, we have expertise in developing mobile applications for various platforms, including iOS, Android, and cross-platform solutions. We utilize the latest technologies and frameworks to create high-quality, responsive mobile apps.",
    },
   
  ];
  

  return (
    <section
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dhhn4nlmq/image/upload/v1689345445/15518074_5594016_kennp1.jpg')",
      }}
      className="w-full flex flex-col justify-center items-center bg-cover bg-center py-[4rem]"
    >
      <div className="bg-white shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] py-[2rem] w-full md:w-[80%] mx-auto flex flex-col items-center justify-center">
        <p className={`${styles.heading2} text-center m-0 p-0`}>
          Frequently Asked Questions
        </p>
        <p
          className={`${styles.paragraph} text-center text-pink-700 max-w-[450px]`}
        >
          Find answers to common queries below
        </p>
        <div className="w-full max-w-xl mt-[3rem] p-5 flex flex-col gap-5 rounded-[20px]">
          {faqsList.map((item, i) => (
            <div key={i} className="accordion__item bg-pink-50">
              <header
                className="accordion__header text-gray-900 font-bold"
                onClick={() => toggleItem(i)}
              >
                <h3 className="accordion__title">{item.question}</h3>
                {openItem === i ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </header>

              <Collapse isOpened={openItem === i}>
                <div className="accordion__content">
                  <p className="accordion__description text-gray-700">
                    {item.answer}
                  </p>
                </div>
              </Collapse>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
