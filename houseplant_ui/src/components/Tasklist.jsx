import React, { useState } from "react";
import Task from "./Task";
import { FiPlus } from "react-icons/fi";
import List from "./List";
import Modal from "./Modal";

const Tasklist = () => {
  const [showModal, setShowModal] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [tasks, setTasks] = useState([
    {
      id_task: 1,
      list_id: 1,
      title: "Test task",
      description: "Nothing",
      deadline: "01-30-2024",
      priority: 3,
      isFinish: false,
    },
    {
      id_task: 2,
      list_id: 1,
      title: "Test task",
      description: "Nothing",
      deadline: "12-31-2023",
      priority: 1,
      isFinish: false,
    },
    {
      id_task: 3,
      list_id: 2,
      title: "Test task",
      description: "Nothing",
      deadline: "12-25-2023",
      priority: 0,
      isFinish: false,
    },
  ]);

  // eslint-disable-next-line no-unused-vars
  const [lists, setLists] = useState([
    {
      id_list: 1,
      title: "List 1",
      progress: 50,
    },
    {
      id_list: 2,
      title: "List 2",
      progress: 35,
    },
  ]);

  const [activeList, setActiveList] = useState(null);

  const handleChangeModal = () => {
    setShowModal(!showModal);
  };

  const handleActiveList = (index) => {
    if (activeList === index) {
      setActiveList(null);
    } else {
      setActiveList(index);
    }
  };

  return (
    <div className="w-full max-w-5xl flex flex-col">
      <div className={`${activeList ? "border-b" : ""} pb-12 my-6 mb-8`}>
        <form className="flex gap-4 items-center w-full">
          <div className="w-full">
            <input
              className="appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-slate-200 bg-slate-200 focus:bg-white transition duration-200 ease-in-out"
              id="task-list"
              type="text"
              placeholder="New task list name"
            />
          </div>
          <div className="py-4 px-4 rounded text-xl cursor-pointer border border-blue-700 bg-blue-700 text-white">
            <FiPlus />
          </div>
        </form>

        <div className="mt-8 flex flex-col gap-8">
          {lists && lists.length > 0
            ? lists.map((list) => (
                <List
                  key={"list" + list.id_list}
                  list={list}
                  activeList={activeList}
                  handleActiveList={handleActiveList}
                />
              ))
            : null}
        </div>
      </div>

      {activeList ? (
        <div>
          <div className="flex justify-between gap-4 my-4">
            <div className="text-white font-medium text-2xl">
              Tasks of {lists.find((list) => list.id_list === activeList).title}
            </div>

            <button
              className="bg-blue-700 text-white hover:bg-green-700 font-medium w-max py-3 px-8 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
              type="button"
              onClick={() => handleChangeModal()}
            >
              Add new task
            </button>
          </div>

          {showModal ? <Modal setShowModal={setShowModal} /> : null}

          <div className="flex flex-wrap  gap-6 my-6">
            {tasks && tasks.length > 0 ? (
              tasks
                .filter(
                  (task) => !task.isFinish & (task.list_id === activeList)
                )
                .map((task, index) => <Task key={"task" + index} task={task} />)
            ) : (
              <div>Any task</div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Tasklist;
