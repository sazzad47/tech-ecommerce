import styles from "../../style";
import animateScrollTo from "animated-scroll-to";
import Hero from "./Hero";
import About from "./About";
import Causes from "./Causes";
// import Focuses from "./Focuses";
import "./home.css";
import HowWorks from "./HowWorks";
import StandBy from "./StandBy";
import TypeOfGrants from "./TypeOfGrants";
import CompletedCauses from "./CompletedCauses";
import Stats from "./Stats";
import FooterBanner from "./FooterBanner";

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
    <div id="section-id" className="w-full overflow-hidden">      
      <div className={`bg-green-600 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero scrollToBottom={scrollToBottom} />
        </div>
      </div>

      <div className={`bg-green-600 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Focuses/> */}
          <About />
          <HowWorks />
          <StandBy/>
          <TypeOfGrants/>
          <Causes />
          <CompletedCauses />
          <Stats/>
        </div>
      </div>
          <FooterBanner/>
    </div>
  );
};

export default App;
