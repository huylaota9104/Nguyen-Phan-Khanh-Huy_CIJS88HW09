import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, activeTab, onEditTask, onDeleteTask, onToggleCompleted }) => {
  const filteredTasks =
    activeTab === "all"
      ? tasks
      : activeTab === "active"
      ? tasks.filter(task => !task.completed)
      : tasks.filter(task => task.completed);

  return (
    <ul className=" ">
      {filteredTasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
          onToggleCompleted={onToggleCompleted}
        />
      ))}
    </ul>
  );
};

export default TaskList;
