import { useState } from "react";

const Register = () => {
  const { username, setUsername } = useState(null);
  const { email, setEmail } = useState(null);
  const { password1, setPassword1 } = useState(null);
  const { password2, setPassword2 } = useState(null);

  const handleUsername = (value) => {
    setUsername(value);
  };

  const handleEmail = (value) => {
    setEmail(value);
  };

  const handlePassword1 = (value) => {
    setPassword1(value);
  };

  const handlePassword2 = (value) => {
    setPassword2(value);
  };

  return (
    <div className="flex max-md:flex-col w-full">
      <div className="hidden w-1/2 md:flex justify-center items-center mr-20">
        <img src="./image/login.png" alt="..." className="w-full" />
      </div>

      <form
        method=""
        id="register-form"
        className="w-full md:w-1/2 mx-4 flex flex-col items-center"
      >
        <h2 className="mb-6">Création de compte</h2>
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
            htmlFor="email"
            className="text-neutral-700 dark:text-neutral-300 font-medium pointer-events-none mb-2 truncate leading-none"
          >
            Email
          </label>
          <input
            type="email"
            className="block min-h-[auto] w-full text-neutral-600 rounded-md border border-neutral-300 bg-white py-3 px-4 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-purple-blue focus:ring-purple-blue focus:ring-2"
            id="email"
            autoComplete="email"
            value={email}
            onChange={(e) => handleEmail(e.target.value)}
            placeholder="Email"
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
            value={password1}
            onChange={(e) => handlePassword1(e.target.value)}
            placeholder="**************"
            required
          />
        </div>

        <div className="w-full max-md:max-w-md flex flex-col items-start my-4">
          <label
            htmlFor="password"
            className="text-neutral-700 dark:text-neutral-300 font-medium pointer-events-none mb-2 truncate leading-none"
          >
            Confirmation de Mot de passe <span className="text-red-600">*</span>
          </label>
          <input
            type="password"
            className="block min-h-[auto] w-full text-neutral-600 rounded-md border border-neutral-300 bg-white py-3 px-4 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-purple-blue focus:ring-purple-blue focus:ring-2"
            id="password"
            autoComplete="password"
            value={password2}
            onChange={(e) => handlePassword2(e.target.value)}
            placeholder="**************"
            required
          />
        </div>

        <div className="w-full max-md:max-w-md mt-6">
          <button
            type="submit"
            className="!w-full bg-purple-blue border-none py-3 text-white"
          >
            Créer votre compte
          </button>
        </div>

        <div className="w-full inline-flex justify-center items-center gap-3 my-6">
          <div className="w-full border-b-[1.5px]"></div>

          <div className="text-sm font-lato text-neutral-500 dark:text-neutral-300 w-full min-w-max max-w-max truncate">
            Déjà un compte ?
          </div>

          <div className="w-full border-b-[1.5px]"></div>
        </div>

        <div className="w-full max-md:max-w-md">
          <a href="/login">
            <button
              type="button"
              className="!w-full bg-green-600 border-none py-3 text-white"
            >
              Se connecter
            </button>
          </a>
        </div>
      </form>
    </div>
  );
};

export default Register;
