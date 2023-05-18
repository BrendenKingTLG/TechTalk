import { BsGear, BsSearch } from "react-icons/bs";

function openSettings() {
  document!.getElementById("mySidenav")!.style.width = "250px";
  document!.getElementById("root")!.style.marginLeft = "250px";
}

function closeSettings() {
  document!.getElementById("mySidenav")!.style.width = "0ox";
  document!.getElementById("root")!.style.marginLeft = "0px";
}
export function TopNav() {
  return (
    <>
      <nav id="nav">
        <a href="settings" onClick={() => openSettings}>
          <BsGear size="1.5em" />
          <div id="mySidenav" className="sidenav" style={{ width: "0px" }}>
            <a
              href="javascript:void(0)"
              className="closebtn"
              onClick={() => closeSettings}
            >
              &times;
            </a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>
        </a>
        <h2
          className="d-flex justify-content-center flex-wrap align-content-center"
          id="navTitle"
        >
          Tech Talk
        </h2>
        <a href="search">
          <BsSearch size="1.5em" />
        </a>
      </nav>
    </>
  );
}
