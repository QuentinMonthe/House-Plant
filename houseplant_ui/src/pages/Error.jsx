import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p className="my-6">Sorry, an unexpected error has occurred.</p>

      <button>
        <a href="/login">Retour a l&apos;accueil</a>
      </button>
    </div>
  );
};

export default Error;
