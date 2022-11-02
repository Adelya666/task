import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  const user = useSelector((state) => {
    const filtered = state.users.users.filter(
      (user) => user.id.toString() === id.toString()
    );
    if (filtered) {
      return filtered[0];
    }
  });

  const loading = useSelector((state) => state.users.loading);

  return (
    <>
      <h3>UserDetail</h3>

      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          <img src={user.avatar} alt="avatar"></img>
          <div> {user.first_name}</div>
          <div>{user.last_name}</div>
          <div> {user.email}</div>
        </div>
      )}
    </>
  );
};
export default UserDetail;
