import User from "./User";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as usersActions from "../actions/users";
import { useNavigate } from "react-router-dom";

function UserList() {
  const dispatch = useDispatch();
  const fetchingUsers = useSelector((state) => state.users.loading);
  const users = useSelector((state) => state.users.users);
  const didFetchUsers = useSelector((state) => state.users.loaded);
  const navigate = useNavigate();

  useEffect(() => {
    if (!didFetchUsers) {
      dispatch(usersActions.fetchUsers());
    }
  }, [didFetchUsers, dispatch]);

  const onChangeLogout = () => {
    navigate("/logout");
  };

  return (
    <div>
      <h1>Hello!</h1>
      <button onClick={onChangeLogout}>logout</button>

      {fetchingUsers ? (
        <div>Loading</div>
      ) : (
        users.map((user) => <User user={user} />)
      )}
    </div>
  );
}

export default UserList;
