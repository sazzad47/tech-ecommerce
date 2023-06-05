import styles from "../../style";
import animateScrollTo from "animated-scroll-to";
import {
  Business,
  CTA,
  Stats,
  Hero,
  Projects,
  About,
  StarsCanvas,
  Contact,
  Feedbacks,
  Pricing,
  Faqs,
} from "../../components";
import Skills from "../../components/Designs";

const App = () => {
  const scrollToBottom = () => {
    const targetPosition = document.body.scrollHeight;

    animateScrollTo(targetPosition, {
      speed: 3, // Speed of the scrolling animation in pixels per second
      minDuration: 30000,
      maxDuration: 30000,
      easing: (t) => t,
    }).then((hasScrolledToPosition) => {
      if (hasScrolledToPosition) {
        // Scroll animation is finished
        // Page is scrolled to the desired position
        scrollToTop();
      } else {
        // Scroll animation was interrupted by user or another call of "animateScrollTo"
      }
    });
  };

  function scrollToTop() {
    const targetPosition = 0;
  
    animateScrollTo(targetPosition, {
      speed: 3, // Speed of the scrolling animation in pixels per second
      minDuration: 30000,
      maxDuration: 30000,
      easing: (t) => t,
    }).then((hasScrolledToPosition) => {
      if (hasScrolledToPosition) {
        // Scroll animation is finished
        // Page is scrolled to the desired position
        scrollToBottom(); // Start scrolling from the bottom again
      } else {
        // Scroll animation was interrupted by user or another call of "animateScrollTo"
      }
    });
  };

  return (
    <div id="section-id" className="bg-primaryTheme w-full overflow-hidden">
      

      <div className={`bg-primaryTheme ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero scrollToBottom={scrollToBottom} />
        </div>
      </div>

      <div className={`bg-primaryTheme ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
          <Skills />
          <Projects />
          <Business />
          <Pricing />
          <Stats />
          <Feedbacks />
          <Faqs />
          <CTA />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
