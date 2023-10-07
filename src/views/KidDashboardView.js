import { useRecoilState } from "recoil";
import { tasksState, userState } from "../states";
import { gradeToInt, intToGrade } from "../utils/grade";

export function KidDashboardView() {
  return <>Kids Dashboard</>
//     const [tasks, setTasks] = useRecoilState(tasksState);
//     const [user, setUser] = useRecoilState(userState);

//     const myTasks = tasks.filter((task) => {
//         const exists = task.kids.find(
//             (kid) => kid.name === user.name
//         );
//         return exists;
//     });


// let avgGrade = 0;
// let avgRating = 0;

// for (let task of myTasks) {
//     const kid = task.kids.find(
//       (kid) => kid.name === user.name
//     );

//     avgRating += kid.rating;
//     avgGrade += gradeToInt(kid.grade);
//   }

//   avgGrade /= myTasks.length;
//   avgRating /= myTasks.length;
//   // END

//   return (
//     <>
//       <span>Medelbetyg: {intToGrade(avgGrade)}</span>
//       <br />
//       <span>Medelrating: {avgRating}</span>
//     </>
//   );
}
