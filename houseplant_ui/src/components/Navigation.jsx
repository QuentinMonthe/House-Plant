import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Navigation = ({ setCurrentMenu }) => {
  return (
    <div className="flex flex-wrap max-md:justify-around sticky top-2 inset-0 py-4 px-8 rounded-md items-center w-full xl:max-w-7xl bg-white dark:bg-dark shadow-md h-max">
      <div className="p-2">
        <img src="./vite.svg" alt="Logo de l'application" />
      </div>
      <ul className="md:ml-auto flex flex-wrap gap-1">
        <NavLink
          to="/home#plant"
          className="nav-link"
          onClick={() => setCurrentMenu(0)}
        >
          <li>Mes Plantes</li>
        </NavLink>

        <NavLink
          to="/home#watering"
          className="nav-link"
          onClick={() => setCurrentMenu(1)}
        >
          <li>Entretien des plantes</li>
        </NavLink>

        <NavLink
          to="/home#history"
          className="nav-link"
          onClick={() => setCurrentMenu(2)}
        >
          <li>Historique</li>
        </NavLink>
      </ul>

      <div className="ml-6">
        <button>
          <a href="#!">Déconnexion</a>
        </button>
      </div>
    </div>
  );
};

export default Navigation;
