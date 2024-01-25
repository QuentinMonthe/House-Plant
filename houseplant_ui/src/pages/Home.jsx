/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Tasklist from "../components/Tasklist";
import ClearTask from "../components/ClearTask";
import InProgess from "../components/InProgess";
import LateTask from "../components/LateTask";

const Home = () => {
  const [progessTask, setProgressTask] = useState(0);
  const [lateTask, setLateTask] = useState(0);
  const [activeList, setActiveList] = useState(0);

  const handleChangeActiveList = (value) => {
    setActiveList(value);
  };

  return (
    <div className="flex justify-center min-h-[100vh] bg-slate-700">
      <div className="my-8 mx-8 w-full flex flex-col items-center">
        <div className="flex justify-between w-full max-w-5xl">
          <h1 className="text-3xl text-white font-semibold">My ToDo</h1>

          <button
            className="bg-blue-600 text-white hover:bg-blue-700 font-medium w-max py-3 px-8 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
            type="button"
            onClick={() => null}
          >
            Logout
          </button>
        </div>

        <div className="w-full max-w-5xl my-8">
          <div className="overflow-hidden rounded-lg border border-gray-100 bg-gray-50 px-2 py-1.5">
            <ul className="flex flex-wrap items-center gap-4 text-sm font-medium cursor-pointer">
              <li className="flex-1" onClick={() => handleChangeActiveList(0)}>
                <div
                  className={`${
                    activeList === 0
                      ? "relative bg-white shadow border"
                      : "hover:bg-white hover:text-gray-700 hover:shadow"
                  } flex items-center justify-center gap-2 rounded-lg px-3 py-2 whitespace-nowrap transition duration-300 ease-in-out`}
                >
                  Task list
                </div>
              </li>
              <li className="flex-1" onClick={() => handleChangeActiveList(1)}>
                <div
                  className={`${
                    activeList === 1
                      ? "relative bg-white shadow border"
                      : "hover:bg-white hover:text-gray-700 hover:shadow"
                  } flex items-center justify-center gap-2 rounded-lg px-3 py-2 whitespace-nowrap transition duration-300 ease-in-out`}
                >
                  In progress
                  <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-500">
                    {" " + progessTask + " "}
                  </span>
                </div>
              </li>
              <li className="flex-1" onClick={() => handleChangeActiveList(2)}>
                <div
                  className={`${
                    activeList === 2
                      ? "relative bg-white shadow border"
                      : "hover:bg-white hover:text-gray-700 hover:shadow"
                  } flex items-center justify-center gap-2 rounded-lg px-3 py-2 whitespace-nowrap transition duration-300 ease-in-out`}
                >
                  Task late
                  <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-500">
                    {" " + lateTask + " "}
                  </span>
                </div>
              </li>
              <li className="flex-1" onClick={() => handleChangeActiveList(3)}>
                <div
                  className={`${
                    activeList === 3
                      ? "relative bg-white shadow border"
                      : "hover:bg-white hover:text-gray-700 hover:shadow"
                  } flex items-center justify-center gap-2 rounded-lg px-3 py-2 whitespace-nowrap transition duration-300 ease-in-out`}
                >
                  Task performed
                </div>
              </li>
            </ul>
          </div>
        </div>

        {activeList === 0 ? (
          <Tasklist />
        ) : activeList === 1 ? (
          <InProgess />
        ) : activeList === 2 ? (
          <LateTask />
        ) : (
          <ClearTask />
        )}
      </div>
    </div>
  );
};

export default Home;
