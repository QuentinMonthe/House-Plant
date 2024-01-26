import { useState } from "react";

const Login = () => {
  const { username, setUsername } = useState(null);
  const { password, setPassword } = useState(null);

  const handleUsername = (value) => {
    setUsername(value);
  };

  const handlePassword = (value) => {
    setPassword(value);
  };

  return (
    <div className="flex max-md:flex-col w-full items-center">
      <div className="hidden w-1/2 md:flex justify-center mr-20">
        <img src="./image/login.png" alt="..." className="w-full" />
      </div>

      <form
        method=""
        id="login-form"
        className="w-full md:w-1/2 mx-4 flex flex-col items-center"
      >
        <h2 className="mb-6">Bienvenue sur My House Plant</h2>
        <div className="w-full max-md:max-w-md flex flex-col items-start my-4">
          <label
            htmlFor="username"
            className="text-neutral-700 dark:text-neutral-300 font-medium pointer-events-none mb-2 truncate leading-none"
          >
            Nom d&lsquo;utilisateur <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="block min-h-[auto] w-full text-neutral-600 rounded-md border border-neutral-300 bg-white py-3 px-4 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-purple-blue focus:ring-purple-blue focus:ring-2"
            id="username"
            autoComplete="username"
            value={username}
            onChange={(e) => handleUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>

        <div className="w-full max-md:max-w-md flex flex-col items-start my-4">
          <label
            htmlFor="password"
            className="text-neutral-700 dark:text-neutral-300 font-medium pointer-events-none mb-2 truncate leading-none"
          >
            Mot de passe <span className="text-red-600">*</span>
          </label>
          <input
            type="password"
            className="block min-h-[auto] w-full text-neutral-600 rounded-md border border-neutral-300 bg-white py-3 px-4 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-purple-blue focus:ring-purple-blue focus:ring-2"
            id="password"
            autoComplete="password"
            value={password}
            onChange={(e) => handlePassword(e.target.value)}
            placeholder="**************"
            required
          />
        </div>
        <div className="w-full max-md:max-w-md mt-6">
          <button
            type="submit"
            className="!w-full bg-purple-blue border-none py-3 text-white"
          >
            Se connecter
          </button>
        </div>

        <div className="w-full inline-flex justify-center items-center gap-3 my-6">
          <div className="w-full border-b-[1.5px]"></div>

          <div className="text-sm font-lato text-neutral-500 dark:text-neutral-300 w-full min-w-max max-w-max truncate">
            Nouveau sur My House Plant ?
          </div>

          <div className="w-full border-b-[1.5px]"></div>
        </div>

        <div className="w-full max-md:max-w-md">
          <a href="/register">
            <button
              type="button"
              className="!w-full bg-green-600 border-none py-3 text-white"
            >
              Créer un compte
            </button>
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
