import styles from "./UpdateCampaign.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { BiLinkAlt } from "react-icons/bi";

export default function ModalUpdateCampaign(props) {
  const [Selector, setSelector] = useState(false);

  if (!props.show) {
    return null;
  }

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2>Campaign Update</h2>
          <div onClick={props.onClose} className={styles.modalIcon}>
            <CloseIcon />
          </div>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.modalSelector}>
            <form className={styles.modalForm}>
              <div onClick={() => setSelector(false)} className={styles.Selector}>
                <input type="radio" name="input-radio" id="recipient" />
                <label htmlFor="recipient">Recipient update</label>
              </div>
              <div
                onClick={() => setSelector(true)}
                className={styles.Selector}
              >
                <input type="radio" name="input-radio" id="fund" />
                <label htmlFor="fund">Fund withdrawal</label>
              </div>
              {Selector && (
                <>
                  <div className="fundInput">Input</div>
                </>
              )}
            </form>
          </div>
          <div className={styles.modalInput}>
            <div className={styles.containerInput}>
              <div className={styles.iconsInput}>
                <div className={styles.icons}>
                  <button>
                    <FormatBoldIcon sx={{ padding: "4px 4px" }} />
                  </button>
                </div>
                <div className={styles.icons}>
                  <button>
                    <FormatItalicIcon sx={{ padding: "4px 4px" }} />
                  </button>
                </div>
                <div className={styles.icons}>
                  <button>
                    <FormatUnderlinedIcon sx={{ padding: "4px 4px" }} />
                  </button>
                </div>
                <div className={styles.icons}>
                  <button>
                    <FormatListBulletedIcon sx={{ padding: "4px 4px" }} />
                  </button>
                </div>
                <div className={styles.icons}>
                  <button>
                    <FormatIndentDecreaseIcon sx={{ padding: "4px 4px" }} />
                  </button>
                </div>
                <div className={styles.icons}>
                  <button>
                    <FormatIndentIncreaseIcon sx={{ padding: "4px 4px" }} />
                  </button>
                </div>
                <div className={styles.icons}>
                  <button>
                    <InsertPhotoIcon sx={{ padding: "4px 4px" }} />
                  </button>
                </div>
                <div className={styles.icons}>
                  <button>
                    <BiLinkAlt
                      style={{ fontSize: "20px", padding: "6px 6px" }}
                    />
                  </button>
                </div>
              </div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Tell your story..."
              ></textarea>
            </div>
          </div>
          <div className={styles.modalButton}>
            <button>SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
}
