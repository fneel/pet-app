import { useRecoilState } from "recoil";
import { tasksState, userState } from "../states";
import { saveTasks } from "../storage/tasks";
import { Link } from "react-router-dom";

export function KidTaskListView() {
    const [tasks, setTasks] = useRecoilState
    (tasksState);

    const [user, setUser] = useRecoilState(userState);

    const myTasks = tasks.filter((task) => {
        const exists = task.kids.find(
            (kid) => kid.name === user.name
        );
        return exists;
    });

    return (
      <>
        <table>
          <tr>
            <th>Task</th>
            <th>Betyg</th>
            <th>Rating</th>
          </tr>
          {myTasks.map((task) => {
            const kid = task.kid.find((kid) => kid.name === user.name);
            const changeRating = (event) => {
              const rating = Number.parseInt(event.target.value);

              let newTasks = tasks.map((all) => {
                if (all.name !== task.name) {
                  return all;
                } else {
                  return {
                    ...task,
                    kids: task.kids.map((kid) => {
                      if (kid.name !== user.name) {
                        return kid;
                      } else {
                        return {
                          ...kid,
                          rating: rating,
                        };
                      }
                    }),
                  };
                }
              });

              setTasks(newTasks);
              saveTasks(newTasks);
            };

            //lägg till checbox state och if/else
            return (
              <tr>
                <td>
                  <Link to={"/kid/task/" + task.name}>{task.name}</Link>
                </td>
                <td>{kid.grade === null ? "Osatt" : kid.grade}</td>
                <td>
                  <input value={kid.rating} onChange={changeRating} />
                </td>
              </tr>
            );
          })}
        </table>
      </>
    );
}