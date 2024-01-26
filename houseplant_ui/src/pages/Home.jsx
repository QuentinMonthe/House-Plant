import { useState } from "react";
import Navigation from "../components/Navigation";
import List from "../components/List";
import Watering from "../components/Watering";
import History from "../components/History";
import Error from "./Error";

const Home = () => {
  const [currentMenu, setCurrentMenu] = useState(0);

  return (
    <div className="flex flex-col place-content-start h-[98vh]">
      <Navigation setCurrentMenu={setCurrentMenu} />

      {currentMenu === 0 ? (
        <List />
      ) : currentMenu === 1 ? (
        <Watering />
      ) : currentMenu === 2 ? (
        <History />
      ) : (
        <Error />
      )}
    </div>
  );
};

export default Home;
