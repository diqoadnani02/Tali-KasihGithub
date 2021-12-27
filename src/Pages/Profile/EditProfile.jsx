import { UpdateProfileAction } from "../../Store/Actions/updateProfile";
import styles from "./EditProfile.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Link,
  Avatar,
  TextField,
  Box,
  Button,
} from "@mui/material";
import {useNavigate} from 'react-router-dom'

export default function EditProfile() {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const { profile, loading } = useSelector((state) => state.profileReducer);
  const [updateProfile, setUpdateProfile] = useState({
    name: "",
    email: "",
    image: null,
    bankName: "",
    bankAccount: "",
  });
  const navigate = useNavigate()

  useEffect(() => {
    setUpdateProfile({
      name: profile.name,
      email: profile.email,
      image: profile.image,
      bankName: profile.bankName,
      bankAccount: profile.bankAccount,
    });
  }, [profile]);

  const [uploadImage, setUploadImage] = useState();
  // eslint-disable-next-line no-unused-vars
  const [isUpload, setIsUpload] = useState(false);
  function handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      setUpdateProfile({...updateProfile, image: e.target.files[0]})
      let reader = new FileReader();

      reader.onload = function (e) {
        setUploadImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }
  
  const submitProfile = () => {
    let form = new FormData();
    form.append('name', updateProfile.name)
    form.append('email', updateProfile.email)
    form.append('image', updateProfile.image)
    form.append('bankName', updateProfile.bankName)
    form.append('bankAccount', updateProfile.bankAccount)
    dispatch(UpdateProfileAction(form))
    navigate('/profile')
  }

  const Update = (e) => {
    setUpdateProfile({
      ...updateProfile,
      [e.target.name]: e.target.value,
    });
  };

  // eslint-disable-next-line no-unused-vars
  const submitUpdateProfile = () => {
    dispatch(UpdateProfileAction(updateProfile));
  };

  return (
    <Card
      container
      sx={{
        borderRadius: 4,
        mt: "72px",
        ml: "267px",
        mr: "203px",
        mb: "211px",
        p: 2,
      }}
    >
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontFamily: "nunito",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "24px",
            lineHeight: "33px",
          }}
        >
          My Profile
        </Typography>
      </Grid>
      <CardContent>
        <div className={styles.editProfile}>
          {/* {!isUpload ? ( */}
          <Grid container sx={{ display: "flex", justifyContent: "center" }}>
            <Avatar
              variant="square"
              src={uploadImage ? uploadImage :updateProfile.image}
              sx={{ width: 200, height: 200 }}
              name="image"
              onChange={(e) => handleImageChange(e)}
            ></Avatar>
          </Grid>
          {/* ) : ( */}
          <div className={styles.uploadInput}>
            <Grid
              container
              sx={{ mt: 2, display: "flex", justifyContent: "center" }}
            >
              <input
                style={{ visibility: "hidden" }}
                id="upload-input"
                accept="image/*"
                type="file"
                onChange={handleImageChange}
              />
            </Grid>
            <label
              onClick={() => {
                setIsUpload(false);
                setUploadImage(null);
              }}
              htmlFor="upload-input"
            >
              <Link
                to="#"
                htmlFor="upload-input"
                sx={{
                  fontFamily: "nunito",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "14px",
                  lineHeight: "19px",
                  color: "#1D94A8",
                  textDecoration: "underline",
                  cursor: 'pointer'
                }}
              >
                Change Image Profile
              </Link>
            </label>
          </div>
          {/* )} */}
        </div>
        <Box component="form" sx={{ mt: 3 }}>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <TextField
              size="large"
              required
              id="name"
              label="Name"
              defaultValue="Hasegawa Aiko"
              value={updateProfile.name || ''}
              variant="standard"
              name="name"
              onChange={(e) => Update(e)}
            />
            <TextField
              disabled
              id="email"
              label="Email"
              defaultValue="aiko@mail.com"
              value={updateProfile.email || ''}
              variant="standard"
              name="email"
              onChange={(e) => Update(e)}
            />
          </Grid>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              mt: 2,
            }}
          >
            <TextField
              margin="dense"
              required
              id="nameBank"
              label="Bank Name"
              defaultValue="Bank BCA"
              value={updateProfile.bankName || ''}
              variant="standard"
              name="bankName"
              onChange={(e) => Update(e)}
            />
            <TextField
              margin="dense"
              required
              id="accountNumber"
              label="Bank Account Number"
              defaultValue="1234567"
              value={updateProfile.bankAccount || ''}
              variant="standard"
              name="bankAccount"
              onChange={(e) => Update(e)}
            />
          </Grid>
          <Grid
            container
            sx={{ pt: 6 }}
            spacing={50}
            direction="row"
            alignItems="flex-end"
            justifyContent="flex-end"
          >
            <Grid item xs={5}>
              <Button
                onClick={submitProfile}
                sx={{
                  borderRadius: "3px",
                  background: "#A43F3C",
                  "&:Hover": {
                    background: "#A43F3A",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "nunito",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "16px",
                    lineHeight: "22px",
                    letterSpacing: "1px",
                    color: "#FFFFFF",
                  }}
                >
                  SAVE CHANGES
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}
