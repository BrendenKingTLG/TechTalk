import { BsGear, BsSearch } from "react-icons/bs";

export function TopNav() {
  return (
    <>
      <nav id="nav">
        <a href="settings">
          <BsGear size="3em" />
        </a>
        <h2
          className="d-flex justify-content-center flex-wrap align-content-center"
          id="navTitle"
        >
          Tech Talk
        </h2>
        <a href="search">
          <BsSearch size="3em" />
        </a>
      </nav>
    </>
  );
}
