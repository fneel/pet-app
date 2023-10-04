import React from "react";
import { useRecoilValue } from "recoil";
import { usersState, taskCompletedState } from "../states";
import { useParams } from "react-router-dom";


export function AdminIndUserView() {
  // Hämta listan med användare från Recoil
  const users = useRecoilValue(usersState);
  const { id } = useParams();
  const isCompleted = useRecoilValue(taskCompletedState);

  // Hitta den specifika användaren med hjälp av id
  const indUser = users.find((user) => user.id === parseInt(id));

  if (!indUser) {
    // Hantera om användaren inte hittades
    return <div>Användaren hittades inte.</div>;
  }

  // Visa användarinformation
  return (
    <div>
      <h1>Användare: {indUser.name}</h1>
      <p>Lösenord: {indUser.password}</p>
      <h2>Uppgifter:</h2>
      <ul>
        {/* Kontrollera om användarens uppgifter är definierade innan du använder .map() */}
        {indUser.tasks ? (
          // Loopa igenom användarens uppgifter
          indUser.tasks.map((task) => (
            <li key={task.name}>
              Course: {task.name}
              <br />
              Completed:{" "}
              {isCompleted[`${indUser.id}-${task.name}`] ? "Yes" : "No"}
            </li>
          ))
        ) : (
          <li>Inga uppgifter tillgängliga.</li>
        )}
      </ul>
    </div>
  );
}

// import React from "react";
// import { useRecoilState, useRecoilValue } from "recoil";
// import { Task } from "../models/tasks";
// import { usersState, userState, taskCompletedState } from "../states";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { KidTaskListView } from "./KidTaskListView";
// import { AdminTasksView } from "./AdminTasksView";

// export function AdminIndUserView() {
//   const users = useRecoilValue(usersState); // Hämta listan med användare från Recoil
//   const { id } = useParams();
//   const isCompleted = useRecoilValue(taskCompletedState); // Hämta taskCheck-state

//   // Använd id för att hitta den specifika användaren
//   const indUser = users.find((user) => user.id === parseInt(id));

//   if (!indUser) {
//     // Om användaren inte hittades, hantera det här
//     return <div>Användaren hittades inte.</div>;
//   }
//     console.log("Användare:", indUser);
//     // console.log(taskChecks);

//   // Nu har du den specifika användaren i "user" att använda för att visa deras information
//   return (
//     <div>
//       <h1>Användare: {user.name}</h1>
//       <p>Lösenord: {user.password}</p>
//       <h2>Uppgifter:</h2>
//       <ul>
//         {kidsTasks.map((task) => (
//           <li key={task.name}>
//             Course: {task.name}
//             <br />
//             Completed: {task.isCompleted ? "Yes" : "No"}
//           </li>
//         ))}
//       </ul>
//       {/* {user.task && (
//         <ul>
//           {user.tasks.map((task) => (
//             <li key={task.name}>
//               {task.name} -{" "}
//               {taskChecks[`${user.id}-${task.name}`]
//                 ? "Klickad"
//                 : "Inte klickad"}
//             </li>
//           ))}
//         </ul>
//       )} */}

//       {/* Visa andra användarinformation här */}
//     </div>
//   );

// }
