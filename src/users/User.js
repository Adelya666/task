import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const User = ({ user }) => {
  return (
    <>
      <div key={user.id}>
        <p>
          <strong>{user.first_name}</strong>
        </p>
        <p>{user.email}</p>
        <img key={user.avatar} src={user.avatar} alt="avatar" />
      </div>

      <Link to={`/users/${user.id}`}>
        {" "}
        <Button variant="contained">Show user</Button>{" "}
      </Link>
    </>
  );
};
export default User;
