import JobCard from "../components/JobCard";
const Jobs = () => {
  return (
    <>
      <div className="container-fluid m-0 p-0">
        <div
          className="container mt-5 mb-3"
          style={{ height: "52em", overflow: "scroll" }}
        >
          <div className="row">
            <JobCard companyName="to" positionName="fl" location="gkg" />
            <div style={{ height: "10em", marginBottom: "10em" }}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
