import { TopNav } from "../components/TopNav";
import NavBottom from "../components/NavBottom";
import PostCard from "../components/PostCard";

const Home = () => {
  return (
    <>
      <div className="container-fluid m-0 p-0">
        <TopNav />
        <div
          className="container d-flex justify-content-center"
          style={{
            width: "100vw",
            position: "absolute",
            flexDirection: "column",
            gap: "1em",
            overflow: "scroll",
            height: "89%",
            top: "3em",
            paddingBottom: "2.5em",
            paddingTop: "1em",
            flexFlow: "wrap",
          }}
        >
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
        </div>
        <NavBottom />
      </div>
    </>
  );
};

export default Home;
