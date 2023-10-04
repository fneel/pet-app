import { useRecoilState } from "recoil";
import { tasksState, userState, usersState } from "../states";
import { saveTasks } from "../storage/tasks";
import { Link, useParams } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Task } from "../models/tasks";
import React from "react";
import { taskCompletedState } from "../states";


export function KidTaskListView( { task }) {
  const [tasks, setTasks] = useRecoilState(tasksState);
  const [user, setUser] = useRecoilState(userState);
  // const [taskChecks, setTaskChecks] = useRecoilState(taskCheckState); // Hämta taskCheck-state

  // const userTaskCheckState = taskChecks[user.id] || {}; // Hämta användarens taskChecks eller skapa en tom om det inte finns



  // const changeRating = (task, checked) => {
  //   const updatedUserTaskCheckState = {
  //     ...userTaskCheckState,
  //     [task.name]: checked,
  //   };
 const [isCompleted, setIsCompleted] = useRecoilState(taskCompletedState);

const handleCheckboxChange = () => {
  // Uppdatera atomens tillstånd när användaren ändrar checkboxens värde
  setIsCompleted({ ...isCompleted, [tasks.name]: !isCompleted[tasks.name] });
};
  const myTasks = tasks.filter((task) => {
    const exists = task.kids.find((kid) => kid.name === user.name);
    return exists;
  });

    //***HÄRHÄRHÄR***//
    //ska detta flyttas ner? kolla ch o sav3
    const newTasks = tasks.map((t) => {
      if (t.name === task.name) {
        const updatedKids = t.kids.map((kid) => {
          if (kid.name === user.name) {
            return {
              ...kid,
              // rating: checked ? 1 : 0,
            };
          }
          return kid;
        });
        return {
          ...t,
          kids: updatedKids,
          // clicked: checked,
        };
      }
      return t;
    });

    // const updatedTaskChecks = {
    //   ...taskChecks,
    //   [user.id]: updatedUserTaskCheckState, // Uppdatera användarens taskChecks
    // };
    // setTaskChecks(updatedTaskChecks);

    setTasks(newTasks);
    saveTasks(newTasks);
  

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Mark as done</th>
            <th>Betyg</th>
          </tr>
        </thead>
        <tbody>
          {myTasks.map((task) => {
            const kid = task.kids.find((kid) => kid.name === user.name);

            return (
              <tr key={task.name}>
                <td>
                  <LinkContainer to={"/kid/tasks/" + task.name}>
                    <Link>Task</Link>
                  </LinkContainer>
                </td>
                <td>
                  {/* <input
                    type="checkbox"
                    checked={userTaskCheckState[task.name]}
                    onChange={(e) => changeRating(task, e.target.checked)}
                  /> */}
                          <input
          type="checkbox"
          checked={isCompleted[tasks.name]}
          onChange={handleCheckboxChange}
          />
                </td>
                <td>{kid.grade === null ? "Osatt" : kid.grade}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default KidTaskListView;

// export function KidTaskListView() {
//     const [tasks, setTasks] = useRecoilState
//     (tasksState);

//     const [user, setUser] = useRecoilState(userState);

//     const myTasks = tasks.filter((task) => {
//         const exists = task.kids.find(
//             (kid) => kid.name === user.name
//         );
//         return exists;
//     });

//     return (
//       <>
//         <table>
//           <tr>
//             <th>Task</th>
//             <th>Betyg</th>
//             <th>Rating</th>
//           </tr>
//           {myTasks.map((task) => {
//             const kid = task.kids.find((kid) => kid.name === user.name);
//             const changeRating = (event) => {
//               const rating = Number.parseInt(event.target.value);

//               let newTasks = tasks.map((all) => {
//                 if (all.name !== task.name) {
//                   return all;
//                 } else {
//                   return {
//                     ...task,
//                     kids: task.kids.map((kid) => {
//                       if (kid.name !== user.name) {
//                         return kid;
//                       } else {
//                         return {
//                           ...kid,
//                           rating: rating,
//                         };
//                       }
//                     }),
//                   };
//                 }
//               });

//               setTasks(newTasks);
//               saveTasks(newTasks);
//             };


//             return (
//               <tr>
//                 <td>
//                   <LinkContainer to={"/kid/tasks/" + task.name}>
//                     <Link>Task</Link>
//                   </LinkContainer>
//                 </td>
//                 <td>{kid.grade === null ? "Osatt" : kid.grade}</td>
//                 <td>
//                   <input value={kid.rating} onChange={changeRating} />
//                 </td>
//               </tr>
//             );
//           })}
//         </table>
//       </>
//     );
// }