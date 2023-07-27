import styles from "../../style";
import animateScrollTo from "animated-scroll-to";
import { Faqs } from "../../components";
import Designs from "./designs";
import PremiumTemplates from "./premiumTemplates";
import Hero from "./Hero";
import Service from "./Service";
import Technologies from "./technologies";
import Business from "./Business";
import Stats from "./Stats";
import Reviews from "./reviews";
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
    <div id="section-id" className="w-full overflow-hidden">
      <div className={`bg-primaryTheme ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero scrollToBottom={scrollToBottom} />
        </div>
      </div>

      <div className="bg-primaryTheme flex flex-col gap-[5rem]">
        <Service />
        <Designs />
        <PremiumTemplates />
        <Technologies />
        <Business />
        <Stats />
        <Faqs />
        <Reviews />
        <Contact />
      </div>
    </div>
  );
};

export default App;
