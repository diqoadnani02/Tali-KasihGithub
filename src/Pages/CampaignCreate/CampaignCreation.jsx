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
import DesktopDatePicker from "@mui/lab/DatePicker";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCampaignAction } from "../../Store/Actions/Campaign/campaign";
// import { id } from "date-fns/locale";

export default function CampaignCreation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputCampaign, setInputCampaign] = useState({
    image: null,
    title: "",
    story: "",
    goal: "",
    dueDate: "",
    categoryId: "",
    status:"open",
  });

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

  const submitCampaign = (reason) => {
    let form = new FormData();
    form.append("image", inputCampaign.image);
    form.append("title", inputCampaign.title);
    form.append("goal", inputCampaign.goal);
    form.append("story", inputCampaign.story);
    form.append("dueDate", inputCampaign.dueDate);
    form.append("categoryId", inputCampaign.categoryId);
    form.append("status", inputCampaign.status);
    dispatch(createCampaignAction(form));
    navigate("/profile");
  };

  // eslint-disable-next-line no-unused-vars
  const [currency, setCurrency] = useState();
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState(null);

  const handleChange = (e) => {
    setInputCampaign({
      ...inputCampaign,
      categoryId: e.target.value,
    });
  };

  const categories = [
    {
      categoryId: "1",
      value: "1",
      label: "Disability",
    },
    {
      categoryId: "2",
      value: "2",
      label: "Medical",
    },
    {
      categoryId: "3",
      value: "3",
      label: "Education",
    },
    {
      categoryId: "4",
      value: "4",
      label: "Religious",
    },
    {
      categoryId: "5",
      value: "5",
      label: "Humanity",
    },
    {
      categoryId: "6",
      value: "6",
      label: "Environment",
    },
    {
      categoryId: "7",
      value: "7",
      label: "Disaster",
    },
    {
      categoryId: "8",
      value: "8",
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
                      <AddCircleOutlineIcon sx={{ fontSize: 50, color: "#9f9f9f" }} />
                    </label>
                  </div>
                  <input style={{ visibility: "hidden" }} id="upload-campaign" accept="image/*" type="file" name="image" onChange={ChangeImageCampaign} />
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
              className={styles.inputCampaign}
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
              className={styles.inputCampaign}
              variant="standard"
              name="categoryId"
            >
              {categories.map((inputCampaign) => (
                <MenuItem name="categoryId" key={inputCampaign.categoryId} value={inputCampaign.categoryId} onChange={(e) => changeInput(e)}>
                  {inputCampaign.label}
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
              className={styles.inputCampaign}
              name="goal"
              onChange={(e) => changeInput(e)}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                name="dueDate"
                label="Due Date"
                value={value}
                onChange={(e) =>
                  setInputCampaign({
                    ...inputCampaign,
                    dueDate: dayjs(e).format("YYYY/MM/DD"),
                  })
                }
                renderInput={(params) => (
                  <TextField
                    id="standard"
                    variant="standard"
                    placeholder="Select due date"
                    name="dueDate"
                    className={styles.inputDateCampaign}
                    onChange={(e) => changeInput(e)}
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
            <textarea name="story" id="" cols="30" rows="10" placeholder="Tell your story..." onChange={(e) => changeInput(e)}></textarea>
          </div>
        </div>
      </div>
      <div className={styles.campaignButton}>
        <button className={styles.button} onClick={submitCampaign}>
          CREATE CAMPAIGN
        </button>
      </div>
    </>
  );
}
