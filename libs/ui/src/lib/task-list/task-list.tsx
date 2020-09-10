import React from 'react';

import './task-list.scss';
import {TaskItem} from "../..";

/* eslint-disable-next-line */
export interface TaskListProps {}

export const TaskList = (props: TaskListProps) => {
  return (
    <div className={"task-list"}>


      <TaskItem description={"Create skill matrix"} time={1599740000000}></TaskItem>
      <TaskItem description={"Improve presentation"} time={1599740000000}></TaskItem>
      <TaskItem description={"Prepare email"} time={1599740000000}></TaskItem>
    </div>
  );
};

export default TaskList;
