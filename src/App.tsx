//Routes
import InformationTechnology from "./it/routes/index";
import CivilEngineering from "./ce/routes/index";
import GlobalDonation from "./gd/routes/index";
import Auth from "./auth/routes/index";
import { useEffect } from "react";
import { useRefreshAccessToken } from "./auth/refreshToken";
import Toast from "./components/Toast";


function App() {

  const { refreshAccessToken } = useRefreshAccessToken();

  useEffect(() => {
    refreshAccessToken();
  }, [refreshAccessToken]);

  return (
    <>
      <InformationTechnology />
      <CivilEngineering />
      <GlobalDonation />
      <Auth />
      <Toast/>
    </>
  );
}

export default App;
