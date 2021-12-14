import styles from "./Comment.module.scss";
import CommentProfile from "../assets/comment.png";

export default function Comment() {
  return (
    <div>
      <div className={styles.comentContainer}>
        <div className={styles.coment}>
          <h3>Comments (11)</h3>
        </div>
        <div className={styles.comentSection}>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Give Them Support..."
          ></textarea>
          <div className={styles.comentButton}>
            <button>POST</button>
          </div>
        </div>
        <div className={styles.comentCards}>
          <div className={styles.cards}>
            <div className={styles.cardsBox}>
              <img src={CommentProfile} alt="" />
              <div className={styles.cardsTitle}>
                <h4 style={{ margin: 0, padding: "0 20px" }}>Reine Dea</h4>
                <p
                  style={{ margin: 0, padding: "10px 20px", color: "#9F9F9F" }}
                >
                  12 minutes ago
                </p>
              </div>
            </div>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              nunc pellentesque enim ultrices nunc. Pretium massa, vel viverra
              id mi sed sit. In faucibus leo etiam cras elit malesuada augue. In
              faucibus leo etiam cras elit malesuada augue “
            </p>
          </div>
        </div>
        <div className={styles.comentCards}>
          <div className={styles.cardsDown}>
            <div className={styles.cardsBox}>
              <img src={CommentProfile} alt="" />
              <div className={styles.cardsTitle}>
                <h4 style={{ margin: 0, padding: "0 20px" }}>Reine Dea</h4>
                <p
                  style={{ margin: 0, padding: "10px 20px", color: "#9F9F9F" }}
                >
                  12 minutes ago
                </p>
              </div>
            </div>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              nunc pellentesque enim ultrices nunc. Pretium massa, vel viverra
              id mi sed sit. In faucibus leo etiam cras elit malesuada augue. In
              faucibus leo etiam cras elit malesuada augue “
            </p>
          </div>
        </div>
        <div className={styles.comentCards}>
          <div className={styles.cards}>
            <div className={styles.cardsBox}>
              <img src={CommentProfile} alt="" />
              <div className={styles.cardsTitle}>
                <h4 style={{ margin: 0, padding: "0 20px" }}>Reine Dea</h4>
                <p
                  style={{ margin: 0, padding: "10px 20px", color: "#9F9F9F" }}
                >
                  12 minutes ago
                </p>
              </div>
            </div>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              nunc pellentesque enim ultrices nunc. Pretium massa, vel viverra
              id mi sed sit. In faucibus leo etiam cras elit malesuada augue. In
              faucibus leo etiam cras elit malesuada augue “
            </p>
          </div>
        </div>
        <div className={styles.comentCards}>
          <div className={styles.cardsDown}>
            <div className={styles.cardsBox}>
              <img src={CommentProfile} alt="" />
              <div className={styles.cardsTitle}>
                <h4 style={{ margin: 0, padding: "0 20px" }}>Reine Dea</h4>
                <p
                  style={{ margin: 0, padding: "10px 20px", color: "#9F9F9F" }}
                >
                  12 minutes ago
                </p>
              </div>
            </div>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              nunc pellentesque enim ultrices nunc. Pretium massa, vel viverra
              id mi sed sit. In faucibus leo etiam cras elit malesuada augue. In
              faucibus leo etiam cras elit malesuada augue “
            </p>
          </div>
        </div>
        <div className={styles.comentCards}>
          <div className={styles.cards}>
            <div className={styles.cardsBox}>
              <img src={CommentProfile} alt="" />
              <div className={styles.cardsTitle}>
                <h4 style={{ margin: 0, padding: "0 20px" }}>Reine Dea</h4>
                <p
                  style={{ margin: 0, padding: "10px 20px", color: "#9F9F9F" }}
                >
                  12 minutes ago
                </p>
              </div>
            </div>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              nunc pellentesque enim ultrices nunc. Pretium massa, vel viverra
              id mi sed sit. In faucibus leo etiam cras elit malesuada augue. In
              faucibus leo etiam cras elit malesuada augue “
            </p>
          </div>
        </div>
        <div className={styles.showButton}>
          <button>LOAD MORE</button>
        </div>
      </div>
    </div>
  );
}
