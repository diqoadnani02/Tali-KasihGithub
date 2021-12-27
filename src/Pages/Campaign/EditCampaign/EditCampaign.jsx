import React from "react";
import styles from "./EditCampaign.module.scss";
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

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editCampaignAction } from "../../../Store/Actions/Campaign/campaign";

export default function EditCampaign() {
  const { id, category } = useParams();
  const dispatch = useDispatch();
  const edit = useSelector((state) => state.campaignReducer.detailCampaign);
  console.log("edit", edit);
  const [editCampaign, setEditCampaign] = useState({
    image: null,
    title: "",
    story: "",
    goal: "",
    dueDate: "",
    categoryId: "",
  });

  useEffect(() => {
    setEditCampaign({
      image: edit.image,
      story: edit.story,
      title: edit.title,
      goal: edit.goal,
    });
  }, [edit]);

  const [imageEdit, setImageEdit] = useState();
  const [isEdit, setIsEdit] = useState(false);
  function ChangeImageEdit(e) {
    if (e.target.files && e.target.files[0]) {
      setEditCampaign({ ...editCampaign, image: e.target.files[0] });
      let reader = new FileReader();

      reader.onload = function (e) {
        setImageEdit(e.target.result);
        setIsEdit(true);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  const navigate = useNavigate();
  const submitEdit = () => {
    let form = new FormData();
    form.append("image", editCampaign.image);
    form.append("title", editCampaign.title);
    form.append("story", editCampaign.story);
    form.append("goal", editCampaign.goal);
    form.append("dueDate", editCampaign.dueDate);
    form.append("categoryId", editCampaign.categoryId);
    dispatch(editCampaignAction(form, id, category));
    navigate(`/campaign/${category}/${id}`);
  };

  const Edit = (e) => {
    setEditCampaign({
      ...editCampaign,
      [e.target.name]: e.target.value,
    });
  };
  // eslint-disable-next-line no-unused-vars
  const submitEditCampaign = () => {
    dispatch(editCampaignAction(editCampaign));
  };

  // eslint-disable-next-line no-unused-vars
  const [currency, setCurrency] = useState();


  const handleChange = (e) => {
    setEditCampaign({
      ...editCampaign,
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
          <h1>Your Campaign</h1>
        </div>
        <form>
          <div className={styles.boxImage}>
            {!isEdit ? (
              <>
                <div className={styles.boxAddImage}>
                  <div className={styles.iconAdd}>
                    <label htmlFor="edit-upload">
                      <AddCircleOutlineIcon
                        sx={{ fontSize: 50, color: "#9f9f9f" }}
                      />
                    </label>
                  </div>
                  <input
                    style={{ visibility: "hidden" }}
                    id="edit-upload"
                    accept="image/*"
                    type="file"
                    name="image"
                    value={edit.image}
                    onChange={ChangeImageEdit}
                  />
                  <h2>Add Header Photo</h2>
                </div>
              </>
            ) : (
              <div className={styles.imagePreview}>
                <img
                  id={styles.uploadedImage}
                  src={imageEdit ? imageEdit : editCampaign.image}
                  alt="uploaded-edit"
                  onClick={() => {
                    setIsEdit(false);
                    setIsEdit(null);
                  }}
                  value={editCampaign.image}
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
              defaultValue={edit?.detailCampaign?.title || ""}
              onChange={(e) => Edit(e)}
            />
            <TextField
              required
              id="standard-required-select-currency"
              select
              label="Category"
              value={currency}
              defaultValue={edit?.detailCampaign?.categoryId || ""}
              onChange={handleChange}
              variant="standard"
              className={styles.inputCampaign}
              name="categoryId"
            >
              {categories.map((editCampaign) => (
                <MenuItem
                  name="categoryId"
                  key={editCampaign.categoryId}
                  value={editCampaign.categoryId}
                  onChange={(e) => Edit(e)}
                >
                  {editCampaign.label}
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
              defaultValue={edit?.detailCampaign?.goal || ""}
              name="goal"
              onChange={(e) => Edit(e)}
            />
            <TextField
              required
              type="date"
              id="standard-required"
              label="Due Date"
              placeholder="Select Due Date"
              variant="standard"
              className={styles.inputCampaign}
              name="dueDate"
              defaultValue={edit?.detailCampaign?.dueDate || ""}
              onChange={(e) => Edit(e)}
            />
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
              name="story"
              id=""
              cols="30"
              rows="10"
              placeholder="Tell your story..."
              defaultValue={edit?.detailCampaign?.story || ""}
              onChange={(e) => Edit(e)}
            ></textarea>
          </div>
        </div>
      </div>
      <div className={styles.campaignButton}>
        <button className={styles.button} onClick={submitEdit}>
          SAVE CAMPAIGN
        </button>
      </div>
    </>
  );
}
