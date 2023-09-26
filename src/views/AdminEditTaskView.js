import { Task } from "../models/tasks";
import { useState } from "react";
import { saveTasks } from "../storage/task";
import { useRecoilState } from "recoil";
import { tasksState, viewState } from "../states";
import { useNavigate } from "react-router-dom";


export function AdminEditTaskView({}) {

  const [tasks, setTasks] = useRecoilState(tasksState);
  const navigate = useNavigate();


  const [name, setName] = useState("");

  const [message, setMessage] = useState("");


  const register = () => {
    let existing = tasks.find((all) => all.name === name);
    if (existing !== undefined) {
      setMessage("That name is taken");
    } else {
      let value = [...tasks, new Task(name)];
      saveTasks(value);
      setTasks(value);
      navigate("/admin/tasks");
    }
  };

  return (
    <div>
      <label>Name</label>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <br />
      <br />
      <button onClick={register}>Register</button>
      <br />
      {message}
    </div>
  );
}
