import { useDispatch, useSelector } from "react-redux";
import { getUsername } from "../../redux/auth/auth-selectors";
import { logOut } from "../../redux/auth/auth-operations";
import defaultAvatar from "./default-avatar.png";

import Button from "react-bootstrap/Button";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);
  const avatar = defaultAvatar;

  return (
    <div className="container-user">
      <img src={avatar} alt="" width="32" className="avatar" />
      <span className="welcome">Welcome, {name}</span>
      <Button
        type="button"
        variant="outline-secondary"
        className="mx-6"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </div>
  );
}
