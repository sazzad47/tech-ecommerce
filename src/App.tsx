//Routes
import InformationTechnology from "./products/routes/index";
import CivilEngineering from "./ce/routes/index";
import GlobalDonation from "./gd/routes/index";

function App() {
  return (
    <>
      <InformationTechnology />
      <CivilEngineering />
      <GlobalDonation />
    </>
  );
}

export default App;
