import { Outlet } from "react-router-dom";
import {
  BsHouseDoor,
  BsChatLeftText,
  BsCash,
  BsPersonCircle,
} from "react-icons/bs";
import { NavLink } from "react-router-dom";

const NavBottom = () => {
  return (
    <>
      <nav id="navBottom">
        <NavLink to="/">
          <BsHouseDoor size="1.5em" />
        </NavLink>

        <NavLink to="/Jobs">
          <BsCash size="1.5em" />
        </NavLink>

        <NavLink to="/Messages">
          <BsChatLeftText size="1.5em" />
        </NavLink>

        <NavLink to="/Profile">
          <BsPersonCircle size="1.5em" />
        </NavLink>
      </nav>

      <Outlet />
    </>
  );
};

export default NavBottom;
