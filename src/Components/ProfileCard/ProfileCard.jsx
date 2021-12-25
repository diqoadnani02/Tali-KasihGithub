import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Link,
  Avatar,
  TextField,
  Box,
} from "@mui/material";

import { useDispatch, useSelector } from 'react-redux'
import { ProfileAction } from '../../Store/Actions/profile'
import { useNavigate } from 'react-router-dom'





export default function ProfileCard() {

  const logOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  const dispatch = useDispatch()
  const navigate = useNavigate()

  React.useEffect(() => {
    dispatch(ProfileAction())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { profile } = useSelector(state => state.profileReducer)
  console.log(profile)
  console.log(profile && profile.name)

  return (
    <Card
      container
      sx={{ borderRadius: 4, mt: "72px", ml: "267px", mr: "203px", p: 2 }}
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
        <Link
          sx={{
            margin: 1,
            fontFamily: "nunito",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "14px",
            lineHeight: "19px",
            color: "#A43F3C",
            textDecoration: "underline",
            cursor: 'pointer'
          }}
          to="#"
          onClick={logOut}
        >
          Logout
        </Link>
      </Grid>
      <CardContent>
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar
            variant="square"
            src={profile && profile.image}
            sx={{ width: 200, height: 200 }}
          ></Avatar>
        </Grid>
        <Grid
          container
          sx={{ mt: 2, display: "flex", justifyContent: "center" }}
        >
          <Link
            onClick={() => {
              navigate('/edit-profile')
            }}
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
            Edit Profile
          </Link>
        </Grid>
        <Box component="form" sx={{ mt: 3 }}>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              flexWrap: 'wrap'
            }}
          >
            <TextField
              disabled
              id="name"
              label="Name"
              value={`${profile && profile.name}`}
              sx={{ width: "384px" }}
              variant="standard"
            />
            <TextField
              disabled
              id="email"
              label="Email"
              value={`${profile && profile.email}`}
              sx={{ width: "384px" }}
              variant="standard"
            />
            <Box sx={{flexGrow: 1,justifyContent: 'space-evenly'}}>
            <TextField
          disabled
          margin="dense"
          id="bankInfo"
          label="Bank Info"
          sx={{ width: "384px" }}
          value={`${profile && profile.bankName} - ${profile && profile.bankAccount}`}
          variant="standard"
        />
        </Box>
        </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}
