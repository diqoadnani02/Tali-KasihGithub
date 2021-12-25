import styles from "./Share.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { BsLink45Deg } from "react-icons/bs";
import { useState, useRef, forwardRef} from "react";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import { useDispatch} from "react-redux";
import {shareCampaignAction} from "../../../Store/Actions/Campaign/campaign";

export default function Share(props) {
  const { id } = props
  const dispatch = useDispatch();
  const textAreaRef = useRef(null);

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(window.location.href);
    dispatch(shareCampaignAction(id));
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

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
            <input type="text" disabled value={window.location.href} ref={textAreaRef} />
          </div>
          <div className={styles.shareButton}>
            <button onClick={handleClick}>COPY LINK</button>
          </div>
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={open}
            autoHideDuration={1000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%", alignItems: "center" }}
            >
              Copied to Clipboard!
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
}
