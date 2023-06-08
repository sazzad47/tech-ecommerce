import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import styles from "../style";
import { Collapse } from "react-collapse";

const Faqs = () => {
  const [openItem, setOpenItem] = useState(false);

  const toggleItem = (item) => {
    if (openItem === item) {
      setOpenItem(false);
    } else {
      setOpenItem(item);
    }
  };

  const faqsList = [
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
    <section className="w-full mt-10 flex flex-col justify-center items-center">
      <p className={`${styles.heading2} text-center`}>
        Frequently Asked Questions
      </p>
      <div className="w-full max-w-xl mt-[3rem] p-5 flex flex-col gap-5 bg-black-gradient-2 rounded-[20px] box-shadow">
        {faqsList.map((item, i) => (
          <div key={i} className="accordion__item bg-black-gradient">
            <header
              className="accordion__header text-secondaryTheme"
              onClick={() => toggleItem(i)}
            >
              <h3 className="accordion__title">{item.question}</h3>
              {openItem === i ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </header>

            <Collapse isOpened={openItem === i}>
              <div className="accordion__content">
                <p className="accordion__description text-secondaryTheme">
                  {item.answer}
                </p>
              </div>
            </Collapse>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
