import { useRecoilState } from "recoil";
import { AdminCreateUserView } from "./AdminCreateUserView";
import { usersState, viewState } from "../states";
import { Link } from "react-router-dom";
import { Placeholder } from "react-bootstrap";

export function AdminUsersView({}) {
  const [users, setUsers] = useRecoilState(usersState);

  return (
    <div className="createContainer">
      <Link className="createUserLink" to="/admin/create-user">Create user</Link>
      <table className="createTableContainer">
        <tbody>
          <tr>
            <th>Namn</th>
            <th>Lösenord</th>
          </tr>
          {users.map((user) => {
            const userLink = `/admin/ind-user/${user.id}`; 

            return (
              <tr key={user.id} className="tableRow">
                <td className="tdUserLink">
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
