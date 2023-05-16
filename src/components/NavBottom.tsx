import { Outlet, Link } from "react-router-dom";
import {
  BsHouseDoor,
  BsChatLeftText,
  BsCash,
  BsPersonCircle,
} from "react-icons/bs";

const NavBottom = () => {
  return (
    <>
      <nav id="navBottom">
        <Link to="/">
          <BsHouseDoor size="1em" />
        </Link>

        <Link to="/Jobs">
          <BsCash size="1em" />
        </Link>

        <Link to="/Messages">
          <BsChatLeftText size="1em" />
        </Link>

        <Link to="/Profile">
          <BsPersonCircle size="1em" />
        </Link>
      </nav>

      <Outlet />
    </>
  );
};

export default NavBottom;