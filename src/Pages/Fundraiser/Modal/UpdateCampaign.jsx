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
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import { useDispatch } from "react-redux";
import {updateCampaignAction} from "../../../Store/Actions/Campaign/campaign";

export default function ModalUpdateCampaign(props) {
  const { id } = props
  const dispatch = useDispatch();
  const [inputUpdate, setInputUpdate] = useState({
    update:"",
    amount: 0,
  })

  const changeUpdate = (e) => {
    setInputUpdate({
      ...inputUpdate,
      [e.target.name]: e.target.value,
    });
  };

  const submitUpdate = () => {
    dispatch(updateCampaignAction(id, inputUpdate));
  };
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
              <div
                onClick={() => setSelector(false)}
                className={styles.Selector}
              >
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
            </form>
            {Selector === true ? (
              <>
                <div className={styles.fundInput}>
                  <FormControl sx={{ mt: 2, width: "370px" }} variant="filled">
                    <InputLabel htmlFor="filled-adornment-amount">
                      Amount*
                    </InputLabel>
                    <FilledInput
                      name="amount"
                      id="filled-adornment-amount"
                      value={inputUpdate.amount}
                      onChange={(e) => changeUpdate(e)}
                    />
                  </FormControl>
                  <h4>
                    Withdrawal purpose<span>*</span>
                  </h4>
                </div>
              </>
            ) : (
              <h4>
                Update<span>*</span>
              </h4>
            )}
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
                name="update"
                id=""
                cols="30"
                rows="10"
                placeholder="Tell your story..."
                onChange={(e) => changeUpdate(e)}
              ></textarea>
            </div>
          </div>
          <div className={styles.modalButton}>
            <button onClick={submitUpdate} >SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
}
