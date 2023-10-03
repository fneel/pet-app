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
        <tbody>
          <tr>
            <th>Namn</th>
            <th>Password</th>
          </tr>
          {users.map((user) => {
            // Skapa en länk för varje användare som leder till deras unika URL
            const userLink = `/admin/ind-user/${user.id}`; // Antag att användaren har ett unikt ID

            return (
              <tr key={user.id}>
                <td>
                  <Link to={userLink}>{user.name}</Link>
                </td>
                <td>{user.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}