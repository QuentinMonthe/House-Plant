import React, { useState } from "react";
import Task from "./Task";

const ClearTask = () => {
  // eslint-disable-next-line no-unused-vars
  const [tasks, setTasks] = useState([
    {
      id_task: 1,
      list_id: 1,
      title: "Test task",
      description: "Nothing",
      deadline: "01-30-2023",
      priority: 3,
      isFinish: true,
    },
    {
      id_task: 2,
      list_id: 1,
      title: "Test task",
      description: "Nothing",
      deadline: "10-31-2023",
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

  return (
    <div className="w-full max-w-5xl flex flex-col">
      <div className="flex flex-wrap  gap-6 my-6">
        {tasks && tasks.length > 0 ? (
          tasks
            .filter((task) => task.isFinish)
            .map((task, index) => <Task key={"task" + index} task={task} />)
        ) : (
          <div>Any task</div>
        )}
      </div>
    </div>
  );
};

export default ClearTask;
