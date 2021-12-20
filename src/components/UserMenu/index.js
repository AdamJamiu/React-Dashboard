import "./index.scss";
import DummyAvatarImage from "../../images/svg/user-avatar.svg";
import DropDown from "../DropDown";
import { Link } from "react-router-dom";
import { routeMapper } from "../../screens/regular/routes";

export default function UserMenu({ src = DummyAvatarImage }) {
  return (
    <DropDown
      items={[
        <Link to={routeMapper.login}>Login</Link>,
        <Link to={routeMapper.register}>Register</Link>,
      ]}
    >
      <div className="user-avatar">
        <img src={src} alt="User icon" />
      </div>
    </DropDown>
  );
}
