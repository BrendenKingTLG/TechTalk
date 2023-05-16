import { TopNav } from "../components/TopNav";
import NavBottom from "../components/NavBottom";
import PostCard from "../components/PostCard";

const Home = () => {
  return (
    <>
      <div className="container-fluid m-0 p-0">
        <div
          className="container d-flex justify-content-center"
          style={{
            width: "100vw",
            position: "absolute",
            flexDirection: "column",
            gap: "1em",
            overflowY: "scroll",
            overflowX: "hidden",
            height: "89%",
            top: "7em",
            paddingBottom: "2.5em",
            paddingTop: "1em",
            flexFlow: "wrap",
          }}
        >
          <TopNav />

          <div className="row">
            <div id="postBox" className="col-12">
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
          </div>
          <NavBottom />
        </div>
      </div>
    </>
  );
};

export default Home;
