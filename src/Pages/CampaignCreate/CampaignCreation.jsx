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
import LinkIcon from "@mui/icons-material/Link";

// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import DatePicker from "@mui/lab/DatePicker";

export default function CampaignCreation() {
  const [currency, setCurrency] = React.useState();
  // const [value, setValue] = React.useState(null);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const currencies = [
    {
      value: "USD",
      label: "Disability",
    },
    {
      value: "EUR",
      label: "Medical",
    },
    {
      value: "BTC",
      label: "Education",
    },
    {
      value: "JPY",
      label: "Religious",
    },
    {
      value: "JPY",
      label: "Humanity",
    },
  ];

  return (
    <div className={styles.campaignCreation}>
      <div className={styles.containerCreation}>
        <h1>New Campaign</h1>
      </div>
      <div className={styles.boxImage}>
        <div className={styles.boxAddImage}>
          <div className={styles.iconAdd}>
            <button>
              <AddCircleOutlineIcon sx={{ fontSize: 50, color: "#9f9f9f" }} />
            </button>
          </div>
          <h2>Add Header Photo</h2>
        </div>
      </div>
      <div className={styles.formCreation}>
        <div className={styles.textInputCreation}>
          <TextField
            required
            id="standard-required"
            label="Title"
            placeholder="e.g. Help we get clean water"
            variant="standard"
            sx={{ width: "477px", height: "200px", paddingTop: "20px" }}
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
          {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Basic example"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider> */}
        </div>
      </div>
      <div className={styles.textareaCreation}>
        <div className={styles.textarea}>
          <h3>Story</h3>
        </div>
        <div className={styles.containerTextarea}>
          <div className={styles.iconsTextarea}>
            <div className={styles.icons}>
              <FormatBoldIcon />
            </div>
            <div className={styles.icons}>
              <FormatItalicIcon />
            </div>
            <div className={styles.icons}>
              <FormatUnderlinedIcon />
            </div>
            <div className={styles.icons}>
              <FormatListBulletedIcon />
            </div>
            <div className={styles.icons}>
              <FormatIndentDecreaseIcon />
            </div>
            <div className={styles.icons}>
              <FormatIndentIncreaseIcon />
            </div>
            <div className={styles.icons}>
              <InsertPhotoIcon />
            </div>
            <div className={styles.icons}>
              <LinkIcon />
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
  );
}
