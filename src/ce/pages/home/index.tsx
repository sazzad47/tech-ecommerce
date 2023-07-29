import styles from "../../style";
import animateScrollTo from "animated-scroll-to";
import Hero from "./Hero";
import Services from "./Services";
import Designs from "./Designs";
import Stats from "./Stats";
import WhyUs from "./WhyUs";
import Works from "./works";
import ProvidedFeatures from "./providedFeatures";
import Faqs from "./Faqs";
import Contact from "./contact";

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
  }

  return (
    <div id="section-id" className="bg-yellow-500 w-full overflow-hidden">
      <div className={`bg-yellow-500 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero scrollToBottom={scrollToBottom} />
        </div>
      </div>

      <div>
        {/* <Statistics/> */}
        <Services />
        <Works/>
        <Designs />
        <ProvidedFeatures/>
        <WhyUs />
        <Faqs />
        <Stats/>
        <Contact/>
      </div>
    </div>
  );
};

export default App;
