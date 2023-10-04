import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { tasksState, userState, taskCompletedState } from "../states";

export function KidTasksView() {
  const [tasks, setTasks] = useRecoilState(tasksState);
  const [user, setUser] = useRecoilState(userState);
  const isCompleted = useRecoilValue(taskCompletedState); // Hämta taskCheck-state

  const { name } = useParams();

  const task = tasks.find((all) => all.name === name);
  const kid = task.kids.find((all) => all.name === user.name);

  return (
    <>
      {name}: {kid.grade}
    </>
  );
}
