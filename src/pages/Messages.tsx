import DMCard from "../components/DMCard";

const Messages = () => {
  return (
    <>
      <div className="container-fluid m-0 p-0">
        <div
          className="container py-5"
          style={{
            height: "52em",
            overflow: "scroll",
            backgroundColor: "#eee;",
          }}
        >
          <div className="row">
            <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
              <div className="card">
                <div className="card-body">
                  <ul className="list-unstyled mb-0">
                    <DMCard name="bb" message="dlsjkfak" time={new Date()} />
                  </ul>
                </div>
              </div>
            </div>
            <div style={{ height: "10em", marginBottom: "10em" }}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
