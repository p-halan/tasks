import React from 'react';

import './task-list.scss';
import TaskItem from '../task-item/task-item';
import {useSelector} from 'react-redux';

/* eslint-disable-next-line */
// export interface TaskListProps {}

export const TaskList = () => {

  const tasks = useSelector(state => state.tasks);

  return (
    <div className={"task-list"}>
      {tasks && tasks.length
        ? tasks.map((task, index) => {
          //TODO add id to items
          return <TaskItem key={index} description={task.description} time={task.time}></TaskItem>
        })
        : "No tasks, yay!"} // TODO component for no tasks needed
    </div>
  );
};

export default TaskList;
