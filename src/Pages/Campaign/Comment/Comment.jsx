import styles from "./Comment.module.scss";
// import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getComment,
  postComment,
} from "../../../Store/Actions/Campaign/comment";

export default function Comment() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [inputComment, setPostComment] = useState({
    comment: "",
  });
  console.log("postComment", inputComment);

  const comment = useSelector((state) => state.commentReducer.comment);
  console.log("comment", comment);
  useEffect(() => {
    dispatch(getComment(id));
  }, [dispatch, id]);

  const changeComment = (e) => {
    setPostComment({
      ...inputComment,
      comment: e.target.value,
    });
  };

  const submitComment = () => {
    dispatch(postComment(inputComment, id));
    setPostComment({
      comment: "",
    });
  };


  return (
    <div>
      <div className={styles.comentContainer}>
        <div className={styles.coment}>
          <h3>Comments ({comment.length ? comment.length : 0})</h3>
        </div>
        <div className={styles.comentSection}>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Give Them Support..."
            onChange={(e) => changeComment(e)}
            value={inputComment.comment}
          ></textarea>
          <div className={styles.comentButton}>
            <button onClick={submitComment}>POST</button>
          </div>
        </div>
        {comment.map((item, index) => {
            return (
              <div key={index} className={styles.comentCards}>
                <div className={styles.cards}>
                  <div className={styles.cardsBox}>
                    <img src={item.user.image} alt="" />
                    <div className={styles.cardsTitle}>
                      <h4 style={{ margin: 0, padding: "0 20px" }}>
                        {item.user.name}
                      </h4>
                      <p
                        style={{
                          margin: 0,
                          padding: "10px 20px",
                          color: "#9F9F9F",
                        }}
                      >
                        {item.commentTime}
                      </p>
                    </div>
                  </div>
                  <p>{item.comment}</p>
                </div>
              </div>
            );
          }
        )}
        <div className={styles.showButton}>
          <button>LOAD MORE</button>
        </div>
      </div>
    </div>
  );
}
