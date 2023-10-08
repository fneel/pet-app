import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { userState, usersState, checkedState } from "../states";

import happyDogImage from "../pet/happydog.png";
import sadDogImage from "../pet/saddog.png";
import Image from "react-bootstrap/Image";

export function KidTaskListView() {
  const [user, setUser] = useRecoilState(userState);
  const [checked, setChecked] = useRecoilState(checkedState);

  const handleCheckboxChange = (taskName) => {
    const newUser = { ...user };
    const newTasks = [...newUser.tasks];

    const taskIndex = newTasks.findIndex((task) => task.name === taskName);

    if (taskIndex !== -1) {
      const updatedTask = { ...newTasks[taskIndex] };
      updatedTask.isCompleted = !updatedTask.isCompleted;
      newTasks[taskIndex] = updatedTask;
      newUser.tasks = newTasks;

      setUser(newUser);

      setChecked({
        ...checked,
        [`${user.id}-${taskName}`]: updatedTask.isCompleted,
      });
    }
  };
  return (
    <>
      {" "}
      <div className="kidListContainer">
        <h1 className="kidListH1">Promenader för: {user.name}</h1>
        <ul className="kidListUl">
          {user.tasks.map((task, index) => (
            <li key={index}>
              {task.name}
              <input
                className="checkClass"
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => handleCheckboxChange(task.name)}
              />
              {task.isCompleted ? (
                <Image
                  className="happyDog"
                  src={happyDogImage}
                  alt="Happy Dog"
                />
              ) : (
                <Image className="sadDog" src={sadDogImage} alt="Sad Dog" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}