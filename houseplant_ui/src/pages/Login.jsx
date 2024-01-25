import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // State for login user
  const [username, setUsername] = useState({ value: "", isValid: "" });
  const [password, setPassword] = useState({ value: "", isValid: "" });
  const [loginError, setLoginError] = useState(false);

  // Function for check valid enail with regex
  const validateEmail = (email) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  };

  // Function to change value of state
  const handleChangeUsername = (value) => {
    setUsername({ value: value, isValid: validateEmail(value) });
  };
  const handleChangePassword = (value) => {
    setPassword({ value: value, isValid: value !== "" });
  };

  // Funtion check the informations for sign in user
  const checkLogin = () => {
    if (username.isValid && password.isValid) {
      setLoginError(false);

      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } else {
      setLoginError(true);
    }
  };

  return (
    <div className="flex items-center justify-center h-[100vh] bg-slate-700">
      <div className="w-full max-w-xl">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-10 mb-4 border">
          <div className="font-semibold text-3xl text-neutral-700 py-4 pb-6 text-center">
            Login
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              className={`${
                (username.value !== "" && !username.isValid) ||
                (loginError && !username.isValid)
                  ? "border-red-500 "
                  : "border-gray-400 "
              } appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-slate-200 bg-slate-200 focus:bg-white transition duration-200 ease-in-out `}
              id="username"
              type="text"
              value={username.value}
              onChange={(even) => handleChangeUsername(even.target.value)}
              placeholder="johndoe@example.com"
            />
            <p
              className={`${
                loginError && !username.isValid ? "visible" : "invisible"
              } text-red-500 mt-2 text-xs italic leading-none`}
            >
              The username is not valid.
            </p>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`${
                (password.value !== "" && !password.isValid) ||
                (loginError && !password.isValid)
                  ? "border-red-500 "
                  : "border-gray-400 "
              } appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-slate-200 bg-slate-200 focus:bg-white transition duration-200 ease-in-out`}
              id="password"
              type="password"
              value={password.value}
              onChange={(even) => handleChangePassword(even.target.value)}
              placeholder="*************"
            />
            <p
              className={`${
                loginError && !password.isValid ? "visible" : "invisible"
              } text-red-500 mt-2 text-xs italic leading-none`}
            >
              The password is not valid.
            </p>
          </div>

          <div className="mb-6 flex justify-end">
            <a
              className="inline-block align-baseline font-semibold text-blue-500 hover:text-blue-800"
              href="/forgot-password"
            >
              Forgot Password?
            </a>
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-4 px-8 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => checkLogin()}
          >
            Sign In
          </button>

          <div className="w-full inline-flex justify-center items-center gap-3 my-6">
            <div className="w-full border-b-[1.5px]"></div>

            <div className="text-sm font-lato text-neutral-500 w-full max-w-max min-w-max text-center truncate">
              No account ?
            </div>

            <div className="w-full border-b-[1.5px]"></div>
          </div>

          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold w-full py-4 px-8 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-8 text-gray-500 text-sm">
          &copy;2023 MyToDo. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
