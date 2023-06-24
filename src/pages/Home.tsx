import PostCard from "../components/PostCard";

const Home = () => {
  return (
    <>
      <div className="container-fluid m-0 p-0" id="main">
        <div
          className="container d-flex justify-content-center"
          style={{
            width: "100%",
            position: "absolute",
            flexDirection: "column",
            gap: "1em",
            overflowY: "scroll",
            overflowX: "hidden",
            height: "100%",
            flexFlow: "wrap",
          }}
        >
          <div className="row">
            <div id="postBox" className="col-12">
              <div style={{ height: "5em" }}></div>
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <div style={{ height: "7em" }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
