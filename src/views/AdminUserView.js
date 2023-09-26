import { useRecoilState } from "recoil";
import { AdminCreateUserView } from "./AdminCreateUserView";
import { usersState, viewState } from "../states";
import { Link } from "react-router-dom";

export function AdminUsersView({}) {
    const [users, setUsers] = useRecoilState(usersState);

    return (
      <div>
        <Link to="/admin/create-user">Create user</Link>
        <table>
          <tr>
            <th>Namn</th>
            <th>Password</th>
          </tr>
          {users.map((user) => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.password}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
}