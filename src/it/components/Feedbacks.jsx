import { motion } from "framer-motion";
import styles from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "./utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-gradient-2 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-secondaryTheme font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-secondaryTheme tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-secondaryTheme font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondaryTheme text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-5 md:mt-[3rem] rounded-[20px]`}>
      <div
        className={`bg-black-gradient rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
         
          <h2 className={styles.heading2}>Testimonials</h2>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            What our happy clients say about our services.
          </p>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
