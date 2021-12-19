import React from "react";
import styles from "./CampaignCreation.module.scss";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { BiLinkAlt } from "react-icons/bi";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCampaignAction } from "../../Store/Actions/Campaign/campaign";

export default function CampaignCreation() {
  const dispatch = useDispatch();
  const [inputCampaign, setInputCampaign] = useState({
    image: null,
    title: "",
    story: "",
    goal: "",
    deviation: "",
    collected: "",
    dueDate: "",
    categoryId: "",
    share: "",
  });
  console.log("inputCampaign", inputCampaign);
  const changeInput = (e) => {
    setInputCampaign({
      ...inputCampaign,
      [e.target.name]: e.target.value,
    });
  };

  const [imageCampaign, setImageCampaign] = useState();
  const [isCampaign, setIsCampaign] = useState(false);
  function ChangeImageCampaign(e) {
    if (e.target.files && e.target.files[0]) {
      setInputCampaign({ ...inputCampaign, image: e.target.files[0] });
      let reader = new FileReader();

      reader.onload = function (e) {
        setImageCampaign(e.target.result);
        setIsCampaign(true);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  const submitCampaign = () => {
    dispatch(createCampaignAction(changeInput));
  };

  const [currency, setCurrency] = useState();
  const [value, setValue] = useState(null);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const currencies = [
    {
      value: "Disability",
      label: "Disability",
    },
    {
      value: "Medical",
      label: "Medical",
    },
    {
      value: "Education",
      label: "Education",
    },
    {
      value: "Religious",
      label: "Religious",
    },
    {
      value: "Humanity",
      label: "Humanity",
    },
    {
      value: "Environment",
      label: "Environment",
    },
    {
      value: "Disaster",
      label: "Disaster",
    },
    {
      value: "Sociopreneur",
      label: "Sociopreneur",
    },
  ];

  return (
    <>
      <div className={styles.campaignCreation}>
        <div className={styles.containerCreation}>
          <h1>New Campaign</h1>
        </div>
        <form>
          <div className={styles.boxImage}>
            {!isCampaign ? (
              <>
                <div className={styles.boxAddImage}>
                  <div className={styles.iconAdd}>
                    <label htmlFor="upload-campaign">
                        <AddCircleOutlineIcon
                          sx={{ fontSize: 50, color: "#9f9f9f" }}
                        />
                    </label>
                  </div>
                    <input
                      style={{ visibility: "hidden" }}
                      id="upload-campaign"
                      accept="image/*"
                      type="file"
                      onChange={ChangeImageCampaign}
                    />
                  <h2>Add Header Photo</h2>
                </div>
              </>
            ) : (
              <div className={styles.imagePreview}>
                <img
                  id={styles.uploadedImage}
                  src={imageCampaign}
                  alt="uploaded-img"
                  onClick={() => {
                    setIsCampaign(false);
                    setImageCampaign(null);
                  }}
                  value={inputCampaign.image}
                />
              </div>
            )}
          </div>
        </form>

        <div className={styles.formCreation}>
          <div className={styles.textInputCreation}>
            <TextField
              required
              id="standard-required"
              label="Title"
              placeholder="e.g. Help we get clean water"
              variant="standard"
              sx={{ width: "477px", height: "200px", paddingTop: "20px" }}
              name="title"
              onChange={(e) => changeInput(e)}
            />
            <TextField
              required
              id="standard-required-select-currency"
              select
              label="Category"
              value={currency}
              onChange={handleChange}
              variant="standard"
              sx={{ width: "477px", height: "200px", paddingTop: "20px" }}
              name="categoryId"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className={styles.textInputCreation}>
            <TextField
              required
              id="standard-required"
              label="Goal"
              placeholder="e.g. 20000000"
              variant="standard"
              sx={{ width: "477px", height: "200px", paddingTop: "20px" }}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Due Date"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    id="standard"
                    variant="standard"
                    placeholder="Select due date"
                    sx={{
                      border: "none",
                      outline: "none",
                      width: "477px",
                      height: "200px",
                      paddingTop: "20px",
                    }}
                    {...params}
                  />
                )}
              />
            </LocalizationProvider>
          </div>
        </div>
        <div className={styles.textareaCreation}>
          <div className={styles.textarea}>
            <h3>Story</h3>
          </div>
          <div className={styles.containerTextarea}>
            <div className={styles.iconsTextarea}>
              <div className={styles.icons}>
                <button>
                  <FormatBoldIcon sx={{ padding: "6px 6px" }} />
                </button>
              </div>
              <div className={styles.icons}>
                <button>
                  <FormatItalicIcon sx={{ padding: "6px 6px" }} />
                </button>
              </div>
              <div className={styles.icons}>
                <button>
                  <FormatUnderlinedIcon sx={{ padding: "6px 6px" }} />
                </button>
              </div>
              <div className={styles.icons}>
                <button>
                  <FormatListBulletedIcon sx={{ padding: "6px 6px" }} />
                </button>
              </div>
              <div className={styles.icons}>
                <button>
                  <FormatIndentDecreaseIcon sx={{ padding: "6px 6px" }} />
                </button>
              </div>
              <div className={styles.icons}>
                <button>
                  <FormatIndentIncreaseIcon sx={{ padding: "6px 6px" }} />
                </button>
              </div>
              <div className={styles.icons}>
                <button>
                  <InsertPhotoIcon sx={{ padding: "6px 6px" }} />
                </button>
              </div>
              <div className={styles.icons}>
                <button>
                  <BiLinkAlt style={{ fontSize: "20px", padding: "8px 8px" }} />
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
      </div>
      <div className={styles.campaignButton}>
        <button className={styles.button}>CREATE CAMPAIGN</button>
      </div>
    </>
  );
}
