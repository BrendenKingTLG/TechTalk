export default function DMCard(props: MessageInfo) {
  return (
    <>
      {" "}
      <li className="p-2 border-bottom" style={{ backgroundColor: " #eee" }}>
        <a href="#!" className="d-flex justify-content-between">
          <div className="d-flex flex-row">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"
              alt="avatar"
              className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
              width="60"
            />
            <div className="pt-1">
              <p className="fw-bold mb-0">{props.name}</p>
              <p className="small text-muted">{props.message}</p>
            </div>
          </div>
          <div className="pt-1">
            <p className="small text-muted mb-1">{props.time.toString()}</p>
          </div>
        </a>
      </li>
    </>
  );
}
