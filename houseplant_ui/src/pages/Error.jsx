import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p className="my-6">
        Désolé, une erreur est survenue durqnt le processus.
      </p>

      <button>
        <a href="/home">Retour a l&apos;accueil</a>
      </button>
    </div>
  );
};

export default Error;
