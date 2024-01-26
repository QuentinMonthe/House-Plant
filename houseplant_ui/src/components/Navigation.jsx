import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setCurrentMenu } from "../resources/menuSlice";
import { logout } from "../services/auth.services";
import { useEffect } from "react";

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, accessToken, userInfo, success } = useSelector(
    (state) => state.user
  );
  const { plants } = useSelector((state) => state.plant);

  const handleMenu = (value) => {
    dispatch(setCurrentMenu(value));
  };

  const handleLogout = () => {
    dispatch(logout({ accessToken: accessToken }));
  };

  const countPlantWatering = () => {
    let dateNow = +new Date();
    let count = 0;

    plants.map((plant) => {
      let date = +new Date(plant.next_watering);
      if (date - dateNow < 72000000) {
        count = count + 1;
      }
    });

    return count;
  };

  useEffect(() => {
    // Redirection vers la page d'accueil si success
    if (accessToken === null) {
      navigate("/login");
    }
  }, [accessToken, loading, navigate, success]);

  return (
    <div className="flex flex-wrap max-md:justify-around sticky top-2 inset-0 py-4 px-8 rounded-md items-center w-full xl:max-w-7xl bg-white dark:bg-dark shadow-md h-max">
      <div className="p-2">
        <h2>House&apos;s {userInfo.username}</h2>
      </div>
      <ul className="md:ml-auto flex flex-wrap gap-1">
        <NavLink
          to="/home#plant"
          className="nav-link"
          onClick={() => handleMenu(0)}
        >
          <li>Mes Plantes</li>
        </NavLink>

        <NavLink
          to="/home#watering"
          className="nav-link"
          onClick={() => handleMenu(1)}
        >
          <li>
            Entretien des plantes{" "}
            <span className="bg-red-500 rounded-xl w-max px-2 py-1.5 !text-white">
              {countPlantWatering()}
            </span>
          </li>
        </NavLink>

        <NavLink
          to="/home#history"
          className="nav-link"
          onClick={() => handleMenu(2)}
        >
          <li>Historique</li>
        </NavLink>
      </ul>

      <div className="ml-6">
        <button onClick={() => handleLogout()}>
          <a href="#!">Déconnexion</a>
        </button>
      </div>
    </div>
  );
};

export default Navigation;
