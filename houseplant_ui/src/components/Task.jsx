import React from "react";
import { BsClockHistory } from "react-icons/bs";

const Task = ({ task }) => {
  const displayDate = (date) => {
    let newDate = new Date(date);

    return newDate.toDateString();
  };

  return (
    <div
      className={`${
        task.priority === 3
          ? "border-red-600"
          : task.priority === 2
          ? "border-orange-400"
          : task.priority === 1
          ? "border-blue-800"
          : "border-slate-500"
      } p-4 bg-slate-100 border-t-[1rem] rounded shadow w-full sm:w-[48%] lg:w-[31.5%]`}
    >
      <div className="flex flex-col justify-between">
        <form>
          <div className="text-xl pb-3 flex gap-2 items-center">
            <div>{task.title}</div>
          </div>
        </form>

        <div className="flex justify-between mt-4">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="done-task"
              id={"task" + task.id_task}
              className="rounded -translate-y-0.5 cursor-pointer"
              defaultChecked={task.isFinish}
            />
            <label htmlFor={"task" + task.id_task} className="cursor-pointer">
              Done
            </label>
          </div>

          <div className="flex items-center">
            <span className="pr-2 text-lg leading-none">
              <BsClockHistory />
            </span>
            <span className="leading-none">{displayDate(task.deadline)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
