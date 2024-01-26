import Navigation from "../components/Navigation";
import List from "../components/List";
import Watering from "../components/Watering";
import History from "../components/History";
import Error from "./Error";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPlant } from "../services/plant.services";

const Home = () => {
  const { currentMenu } = useSelector((state) => state.menu);
  const { accessToken } = useSelector((state) => state.user);
  const { update } = useSelector((state) => state.plant);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlant({ accessToken: accessToken }));
  }, [accessToken, dispatch, update]);

  return (
    <div className="flex flex-col place-content-start h-[98vh]">
      <Navigation />

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
