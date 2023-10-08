import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { userState, usersState, checkedState } from "../states";
import { Link, useParams } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import happyDogImage from "../pet/happydog.png";
import sadDogImage from "../pet/saddog.png";

export function KidTaskListView() {
  const [user, setUser] = useRecoilState(userState);
  const [checked, setChecked] = useRecoilState(checkedState);

  const handleCheckboxChange = (taskName) => {
    // Skapa en kopia av användaren och användarens uppgifter
    const newUser = { ...user };
    const newTasks = [...newUser.tasks];

    const taskIndex = newTasks.findIndex((task) => task.name === taskName);

    if (taskIndex !== -1) {
      // Skapa en kopia av uppgiften
      const updatedTask = { ...newTasks[taskIndex] };
      // Uppdatera uppgiftens status
      updatedTask.isCompleted = !updatedTask.isCompleted;
      // Uppdatera uppgiften i listan med uppgifter
      newTasks[taskIndex] = updatedTask;
      // Uppdatera användarens uppgifter
      newUser.tasks = newTasks;

      // Uppdatera användaren i Recoil
      setUser(newUser);

      // Uppdatera checkedState
      setChecked({
        ...checked,
        [`${user.id}-${taskName}`]: updatedTask.isCompleted,
      });
    }
  };
  return (
    <>
      <h1>Task List for {user.name}</h1>
      <ul>
        {user.tasks.map((task, index) => (
          <li key={index}>
            {task.name}
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => handleCheckboxChange(task.name)}
            />
            {task.isCompleted ? (
              <img src={happyDogImage} alt="Happy Dog" />
            ) : (
              <img src={sadDogImage} alt="Sad Dog" />
            )}
          </li>
        ))}
      </ul>
    </>
  );
}