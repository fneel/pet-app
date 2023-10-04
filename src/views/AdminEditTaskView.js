import { Task } from "../models/tasks";
import { useState } from "react";
import { saveTasks } from "../storage/tasks";
import { useRecoilState } from "recoil";
import { tasksState, viewState } from "../states";
import { useNavigate } from "react-router-dom";



export function AdminEditTaskView({ }) {
// skapar referens till "tasksState" globala state (som useState fast använder global state ist för att skapa ny)

  const [tasks, setTasks] = useRecoilState(tasksState);
  const navigate = useNavigate();


//håller koll på namnet som srivs in i inputfältet
  const [name, setName] = useState("");
//meddelande om namnet redan finns
  const [message, setMessage] = useState("");


//funktion för registrera kurs. använder states från raderna ovanför
  const register = () => {
    let existing = tasks.find((all) => all.name === name); //letar bland alla tasks från global state tasksState
    if (existing !== undefined) {
      setMessage("That name is taken");
    } else {
      let value = [...tasks, new Task(name)]; //skapar en ny task med det namnet
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
