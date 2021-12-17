import styles from "./Share.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { BsLink45Deg } from "react-icons/bs";
import { useState, useRef } from "react";
import Alert from "@mui/material/Alert";

export default function Share(props) {
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy", true, textAreaRef.current.defaultValue);
    e.target.focus();
    setCopySuccess(textAreaRef);
    console.log(textAreaRef);
  }

  const [alert, setAlert] = useState(false);

  if (!props.share) {
    return null;
  }


  return (
    <div className={styles.modalShare}>
      <div className={styles.shareContainer}>
        <div className={styles.shareTitle}>
          <h2>Help by sharing</h2>
          <div onClick={props.onClose} className={styles.modalIcon}>
            <CloseIcon />
          </div>
        </div>
        <div className={styles.shareContent}>
          <div className={styles.shareInput}>
            <BsLink45Deg className={styles.shareIcon} />
            <input type="text" value="Link" ref={textAreaRef} />
          </div>
          <div onClick={copyToClipboard} className={styles.shareButton}>
            <button>COPY LINK</button>
            <div className={styles.alert}>
              <Alert severity="success">
                Succes Copied!
              </Alert>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
