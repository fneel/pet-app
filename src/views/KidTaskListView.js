import { useRecoilState } from "recoil";
import {
  tasksState,
  userState,
  usersState,
  taskCompletedState,
} from "../states";
import { saveTasks } from "../storage/tasks";
import { Link, useParams } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Task } from "../models/tasks";
import React from "react";
import { User } from "../models/user";

// En separat funktion för att rendera varje uppgift
function TaskItem({ task }) { //task = en enskild task 
  const [tasks, setTasks] = useRecoilState(tasksState);

  const handleCheckboxChange = (event) => {
    const newCheckedValue = event.target.checked;

    const newTasks = tasks.map((t) => {
      if (t.name === task.name) {
        return { ...t, isCompleted: newCheckedValue };
      } console.log(task)
      return t;
    });

    setTasks(newTasks);
    saveTasks();

    // ... din sparlogik här
  };

  return (
    <tr>
      <td>{task.name}</td>
      <td>
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={handleCheckboxChange}
        />
      </td>
      <td>{task.isCompleted ? "Completed" : "Not Completed"}</td>
    </tr>
  );
}

// Huvudkomponenten som renderar listan över uppgifter
export function KidTaskListView() {
  const [tasks, setTasks] = useRecoilState(tasksState);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Mark as done</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            return <TaskItem key={task.name} task={task} />;
          })}
        </tbody>
      </table>
    </>
  );
}

// import { useRecoilState } from "recoil";
// import {
//   tasksState,
//   userState,
//   usersState,
//   taskCompletedState } from "../states";
// import { saveTasks } from "../storage/tasks";
// import { Link, useParams } from "react-router-dom";
// import { LinkContainer } from "react-router-bootstrap";
// import { Task } from "../models/tasks";
// import React from "react";
// import { User } from "../models/user";

// export function KidTaskListView() {
//   const [tasks, setTasks] = useRecoilState(tasksState);
//   const [user, setUser] = useRecoilState(userState);

//   const [isCompleted, setIsCompleted] = useRecoilState(taskCompletedState); // Hämta taskCompletedState från /states

//   //const taskCompletedState = taskCompletedState[user.id] || {}; // Hämta användarens taskChecks eller skapa en tom om det inte finns

//     const myTasks = tasks.filter((taskItem) => {
//       const exists = taskItem.users.find((userItem) => userItem.name === user.name);
//       return exists;
//     });

//   return (
//     <>
//       <table>
//         <thead>
//           <tr>
//             <th>Task</th>
//             <th>Mark as done</th>
//             <th>Betyg</th>
//           </tr>
//         </thead>
//         <tbody>
//           {myTasks.map((taskItem) => {
//             const kid = taskItem.kids.find((kidItem) => kidItem.name === user.name);

//   const handleCheckboxChange = (event) => {
//     const newCheckedValue = event.target.checked;
//     // Uppdatera atomens tillstånd när användaren ändrar checkboxens värde
//     setIsCompleted(newCheckedValue);
//     setTasks(newTasks);
//     saveTasks(newTasks);
//   };
//             return (
//               <tr key={taskItem.name}>
//                 <td>
//                   <LinkContainer to={"/kid/tasks/" + taskItem.name}>
//                     <Link>Task</Link>
//                   </LinkContainer>
//                 </td>
//                 <td>
//                   <input
//                     type="checkbox"
//                     id="task-checkbox"
//                     name="task-checkbox"
//                     checked={isCompleted}
//                     onChange={handleCheckboxChange}
//                   />

//                   <div className="result">
//                     Above checkbox is {isCompleted ? "checked" : "unchecked"}.
//                   </div>
//                 </td>
//                 <td>{kid.grade === null ? "Osatt" : kid.grade}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </>
//   );
// }

// export default KidTaskListView;
