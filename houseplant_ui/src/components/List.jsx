import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";

const List = ({ list, activeList, handleActiveList }) => {
  const [showModal, setShowModal] = useState(false);

  // Control progress bar style
  useEffect(() => {
    let list_id = "#list" + list.id_list;
    let progressWidth = document.querySelector(list_id);
    if (progressWidth) {
      progressWidth.style.width = list.progress + "%";
    }
  }, [list]);

  return (
    <div
      className={`${
        activeList && activeList === list.id_list
          ? "shadow-lg scale-[1.02]"
          : ""
      } p-4 bg-white rounded shadow w-full transition duration-200 ease-in-out`}
    >
      <div className="flex flex-col justify-between">
        <div className="text-xl pb-4 flex gap-2 items-center justify-between">
          <span
            onClick={() => handleActiveList(list.id_list)}
            className="cursor-pointer"
          >
            {list.title}
          </span>
          <span
            onClick={() => setShowModal(true)}
            className="px-2 py-2 cursor-pointer bg-red-600 rounded-md text-white"
          >
            <MdDeleteForever />
          </span>
        </div>

        {/* Modal */}
        {showModal ? (
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black/40 backdrop-blur-sm">
            <div className="relative w-full my-6 mx-6 md:mx-auto md:max-w-xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 rounded-t bg-white border-b border-slate-200">
                  <h3 className="text-3xl font-medium text-neutral-800">
                    Confirm delete list
                  </h3>
                </div>

                <div className="p-5 text-neutral-700">
                  This operation deletes all tasks from the list. The deletion
                  will be irreversible
                </div>

                <div className="flex justify-end gap-4 p-5">
                  <button
                    className="bg-blue-700 text-white font-medium w-max py-3 px-8 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Confirmed
                  </button>

                  <button
                    className="bg-slate-700 text-white font-medium w-max py-3 px-8 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Annuler
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <div className="w-full h-2 bg-blue-200 rounded-full">
          <div
            id={"list" + list.id_list}
            className={` h-full text-center text-xs text-white bg-blue-600 rounded-full`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default List;
