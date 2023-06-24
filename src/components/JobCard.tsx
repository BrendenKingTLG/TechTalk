export default function JobCard(props: JobInfo) {
  return (
    <>
      {" "}
      <div className="col-md-4">
        <div className="card p-3 mb-2">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <div className="icon">
                {" "}
                <i className="bx bxl-mailchimp"></i>{" "}
              </div>
              <div className="d-flex flex-wrap">
                <img
                  className="card-img-top"
                  alt="Card image cap"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"
                  style={{
                    width: "6em",
                    height: "6em",
                    borderRadius: "50%",
                    padding: ".5em",
                  }}
                />
                <div>
                  <p
                    className="d-flex flex-wrap"
                    style={{
                      paddingTop: "2em",
                      paddingLeft: "2em",
                      marginBottom: "-.3em",
                      fontWeight: "900",
                    }}
                  >
                    company name
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 text-center">
            <h3 className="heading">
              {props.positionName}
              <br />
              {props.location}
            </h3>
          </div>
          <div
            className="d-flex justify-content-between"
            style={{
              height: "2em",
              paddingLeft: "1em",
              paddingRight: "1em",
              borderTop: ".1em solid #ededed",
              paddingTop: ".3em",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
