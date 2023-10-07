import React, { useState, useEffect } from "react";
import { UserModel } from "../models/user";
import { saveUsers } from "../storage/user";
import { useRecoilState } from "recoil";
import { usersState, tasksState } from "../states";
import { useNavigate } from "react-router-dom";
import { Task } from "../models/tasks";
import { saveTasks } from "../storage/tasks";

export function AdminCreateUserView({}) {
  const [users, setUsers] = useRecoilState(usersState);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const [tasks, setTasks] = useRecoilState(tasksState);

  //håller koll på namnet som srivs in i inputfältet
  const [taskName, setTaskName] = useState("");
  //meddelande om namnet redan finns
  const [taskMessage, setTaskMessage] = useState("");

  const register = () => {
    let existing = users.find((user) => user.name === username);
    if (existing !== undefined) {
      setMessage("That username is taken");
    } else {
      const newUser = new UserModel(username, password); // Skapa en ny användare med unikt ID

      //Lägg till uppgifter för användaren här
      newUser.addTask(new Task("Task 1"));
      newUser.addTask(new Task("Task 2"));
      newUser.addTask(new Task("Task 3"));

      let value = [...users, newUser];
      saveUsers(value);
      setUsers(value);
      navigate("/admin/users");
    }
  };

  const addTask = () => {
    if (taskName.trim() === "") {
      return;
    }

    const newTask = new Task(taskName);
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
    setTaskName(""); //här hittar den Task
  };

  const renderTasks = () => {
    return (
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.name}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <label>Username</label>
      <input
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <br />
      <label>Password</label>
      <input
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <button onClick={register}>Register</button>
      <br />
      {message}
      <br />
      <input
        placeholder="Task name"
        value={taskName}
        onChange={(event) => setTaskName(event.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <br />
      {renderTasks()}
    </div>
  );
}

//   return (
//     <div>
//       <label>Username</label>
//       <input
//         value={username}
//         onChange={(event) => setUsername(event.target.value)}
//       />
//       <br />
//       <label>Password</label>
//       <input
//         value={password}
//         onChange={(event) => setPassword(event.target.value)}
//       />
//       <br />
//       <button onClick={register}>Register</button>
//       <br />
//       {message}
//     </div>
//   );
// }
