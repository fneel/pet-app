import { useRecoilState } from "recoil";
import { tasksState, usersState, viewState } from "../states";
import { useState } from "react";
import { saveTasks } from "../storage/tasks";
import { Link } from "react-router-dom";

export function AdminTasksView({}) {

  const [tasks, setTasks] = useRecoilState(tasksState);

  return (
    <div>
      <Link to="/admin/edit-task">Edit task</Link>
      <table>
        <thead>
          <tr>
            <th>Namn</th>
            <th>Nöjdhet</th>
            <th>Lägg till barn</th>
            <th>Barn</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            return <TaskItem key={task.name} task={task} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

function TaskItem({ task }) {

  const [users, setUsers] = useRecoilState(usersState);

  const [tasks, setTasks] = useRecoilState(tasksState);

  const [kidChoice, setKidChoice] = useState("admin");

  const kids = users.filter((user) => {
    const exists = task.kids.find(
      (kid) => kid.name === user.name
    );

    return !exists;
  });

  const addKid = () => {
    let newTasks = tasks.map((all) => {
      if (all.name !== task.name) {
        return all;
      } else {
        return {
          ...task,
          kids: [
            ...task.kids,
            { name: kidChoice, grade: null, rating: 1.0 },
          ],
        };
      }
    });
    setTasks(newTasks);
    saveTasks(newTasks);


    const left = kids.filter((kid) => kid.name !== kidChoice);

    if (left.length !== 0) {
      setKidChoice(left[0].name);
    } else {
      setKidChoice(null);
    }
  };

  return (
    <tr>
      <td>{task.name}</td>
      <td>1</td>
      <td>
        <select
          value={kidChoice}
          onChange={(event) => setKidChoice(event.target.value)}
        >
          {kids.map((kid) => (
            <option value={kid.name}>{kid.name}</option>
          ))}
        </select>
        <button onClick={addKid}>+</button>
      </td>
      <td>
        {task.kids.map((kid) => (
          <KidItem kid={kid} task={task} />
        ))}
      </td>
    </tr>
  );
}

function KidItem({ kid, task }) {

  const [tasks, setTasks] = useRecoilState(tasksState);

  const [grade, setGrade] = useState(kid.grade);

  // En funktion för att uppdatera barnets betyg för en specifik task.
  const updateGrade = (event) => {
    setGrade(event.target.value);

    let newTasks = tasks.map((all) => {
      if (all.name !== task.name) {
        return all;
      } else {
        return {
          ...task,
          kids: task.kids.map((allKid) => {
            if (allKid.name !== kid.name) {
              return allKid;
            } else {
              return {
                ...kid,
                grade: event.target.value,
              };
            }
          }),
        };
      }
    });

    setTasks(newTasks);
    saveTasks(newTasks);
  };

  return (
    <span>
      {kid.name}
      <select value={grade} onChange={updateGrade}>
        <option value={null}>Osatt</option>
        <option value="-">IG</option>
        <option value="OK">G</option>
      </select>
      ,{" "}
    </span>
  );
}
