import { BiLike, BiCommentDetail, BiShare } from "react-icons/bi";
import x from "../assets/x.jpg";

export default function PostCard() {
  return (
    <>
      <div
        className="card"
        style={{ width: "23rem", height: "17em", marginTop: "1em" }}
      >
        <div className="d-flex flex-wrap">
          <img
            className="card-img-top"
            alt="Card image cap"
            src={x}
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
                paddingTop: "1em",
                paddingLeft: "2em",
                marginBottom: "-.3em",
                fontWeight: "700",
              }}
            >
              user name
            </p>
            <p
              className="d-flex flex-wrap"
              style={{
                paddingLeft: "2em",
                fontWeight: "700",
                fontSize: "large",
              }}
            >
              message title
            </p>
          </div>
        </div>
        <div className="postText">
          <p
            style={{
              height: "7em",
              marginTop: "1em",
              paddingLeft: ".5em",
              paddingRight: ".5em",
              overflow: "hidden",
            }}
          >
            ggdjaflkjhdjkfhdasjkf hjd hfjkldshf jkahfjk dhsfkj hjk hfj hjhf
            ;jdhfl jkakfj dkljfkld slkf dsajklf dl;kfl nfjkn dskjlafnjklf dksf
            lknaf;lkn lkn lf jlkfjdlkjflskfj lkjl jklfadjslkfj lksjf kljfl kjf
            jk jsalkfjdelksfjla kj k jsdklafjasdklfj k kljdsla jfkl ja
            jsdnfljkdanslf jknfaljfk nsfjdf hds ask dfdsaf ads fds af dsfd saf
            sd fads fd saf adsf as f dasf adsf ads fs
          </p>
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
        >
          <BiLike size="1em" />
          <BiCommentDetail size="1em" />
          <BiShare size="1em" />
        </div>
      </div>
    </>
  );
}
