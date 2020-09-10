import React from 'react';

import './task-item.scss';

/* eslint-disable-next-line */
export interface TaskItemProps {
  description: string,
  time: number
}

export const TaskItem = (props: TaskItemProps) => {
  return (
    <div className="todo-item">
      <div className="todo-item-description">
        <span>Description: </span>
        <span>{props.description}</span>
      </div>
      <div className="todo-item-time">
        <span>Time: </span>
        <span>{(new Date(props.time)).toDateString()}</span>
      </div>
    </div>
  );
};

export default TaskItem;
