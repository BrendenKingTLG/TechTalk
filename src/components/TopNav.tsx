import { BsGear, BsSearch } from "react-icons/bs";

function openSettings() {
  document!.getElementById("overlay")!.style.display = "flex";
  console.log("ldnfalkjds");
}

function closeSettings() {
  document!.getElementById("overlay")!.style.display = "none";
}
export function TopNav() {
  return (
    <>
      <nav id="nav">
        <div onClick={() => openSettings()}>
          <BsGear size="1.5em" />
        </div>
        <div id="overlay" className="sidenav">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Default switch checkbox input
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Default switch checkbox input
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Default switch checkbox input
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Default switch checkbox input
            </label>
          </div>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => closeSettings()}
            style={{ width: "8em", height: "4em", marginTop: "2em" }}
          >
            close
          </button>
        </div>
        <h2
          className="d-flex justify-content-center flex-wrap align-content-center"
          id="navTitle"
        >
          Tech Talk
        </h2>
        <div>
          <BsSearch size="1.5em" />
        </div>
      </nav>
    </>
  );
}
