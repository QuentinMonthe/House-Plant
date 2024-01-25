import React from "react";

const Modal = ({ setShowModal }) => {
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black/40 backdrop-blur-sm">
      <div className="relative w-full my-6 mx-6 md:mx-auto md:max-w-2xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-3xl font-medium text-neutral-800">New Task</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-80 float-right outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              <span className="bg-slate-200 rounded px-4 py-2 pb-3 text-xl leading-none hover:bg-slate-300 transition ease-in-out duration-200">
                x
              </span>
            </button>
          </div>

          {/*body*/}
          <div className="relative p-6 flex-auto">
            <form>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="list"
                >
                  Task list
                </label>
                <input
                  className="appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-slate-200 bg-slate-200 focus:bg-white transition duration-200 ease-in-out"
                  id="list"
                  type="text"
                  placeholder="Task list"
                  disabled
                />
              </div>

              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="title"
                >
                  Title task
                </label>
                <input
                  className="appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-slate-200 bg-slate-200 focus:bg-white transition duration-200 ease-in-out"
                  id="title"
                  type="text"
                  placeholder="Title"
                />
              </div>

              <div className="mb-6 flex justify-between gap-6 max-sm:flex-wrap">
                <div className="w-full">
                  <label
                    className="block text-gray-700 text-sm font-semibold mb-2"
                    htmlFor="deadline"
                  >
                    Deadline
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-slate-200 bg-slate-200 focus:bg-white transition duration-200 ease-in-out"
                    id="deadline"
                    type="datetime-local"
                    placeholder=""
                  />
                </div>

                <div className="w-full">
                  <label
                    className="block text-gray-700 text-sm font-semibold mb-2"
                    htmlFor="priority"
                  >
                    Priority
                  </label>
                  <select
                    className="appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-slate-200 bg-slate-200 focus:bg-white transition duration-200 ease-in-out"
                    id="priority"
                  >
                    <option value={0}>Nothing</option>
                    <option value={1}>Lower</option>
                    <option value={2}>Normal</option>
                    <option value={3}>Hight</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  className="appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-slate-200 bg-slate-200 focus:bg-white transition duration-200 ease-in-out"
                  id="description"
                  rows={3}
                  placeholder="Note about task..."
                ></textarea>
              </div>

              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full mt-4 py-4 px-8 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => null}
              >
                Create task
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
