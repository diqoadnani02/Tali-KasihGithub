import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography, Grid, TextField, Box, Button, Divider, Alert, AlertTitle, Modal } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import { registerStart } from "../../Store/Actions/authAction/authAction";
import { useDispatch, useSelector } from "react-redux";
// import Paper from '@mui/material/Paper'
import Google from "./google.png";
import Login from "../Login/Login";

const schema = yup.object({
  name: yup.string().required("The field is required"),
  email: yup.string().email("Enter a valid Email").required("Email is Required"),
  password: yup
    .string("Please Enter your Password")
    .required("Password must be required")
    .matches(
      // eslint-disable-next-line
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Password Must be at least 8 Characters"
    ),
  confirmPassword: yup
    .string()
    .required("Re-enter your password")
    .oneOf([yup.ref("password"), null], "Password must match"),
});

export default function Register(handleCloseRegister) {
  const { user, error } = useSelector((state) => state.auth);
  console.log(user, error);
  // const [status, setStatusBase] = React.useState("");
  const theme = createTheme({
    typography: {
      fontFamily: ["nunito", "cursive"].join(","),
    },
  });

  const [openLogin, setOpenLogin] = React.useState();
  const handleOpen = () => setOpenLogin(true);
  const handleClose = () => setOpenLogin(false);

  const styleLogin = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "#F1EDE4",
    boxShadow: 24,
    p: 4,
    pt: "60px",
    pb: "100px",
  };

  // const submitRegister = async () => {
  //     setStatusBase({msg: "register successful", key: Math.random() })
  // }

  // const [credentials, setCredentials] = React.useState({name: '', email: '', password: '', confirmPassword: ''})
  const dispatch = useDispatch();
  const { id } = useParams();
  // const handleChange = (event) =>
  //     setCredentials({...credentials, [event.target.name]: event.target.value})
  //     console.log(credentials)

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values, "values");
        dispatch(registerStart(values));
      }}
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <ThemeProvider theme={theme}>
          {/* <Paper 
            elevation={0} 
            variant="outlined" 
            sx={{
                padding: '140px',
                height: '70vh',
                width: '30vw',
                margin: "20px auto",
                backgroundColor: '#F1EDE4',
                flexGrow: 1
            }}
            > */}
          <Grid item xs={8}>
            <Typography
              sx={{
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "48px",
                lineHeight: "65px",
                letterSpacing: "-0.05rem",
                color: "#1D94A8",
              }}
            >
              REGISTER
            </Typography>
            <Typography
              sx={{
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "14px",
                lineHeight: "19px",
                letterSpacing: "1px",
                textDecoration: "underline",
              }}
            >
              Already have an account{" "}
              <Link to="#" onClick={handleOpen} onClose={handleCloseRegister}>
                Sign in
              </Link>
            </Typography>
            <Modal open={openLogin} onClose={handleClose}>
              <Box sx={styleLogin}>
                <Login handleClose={handleClose} />
              </Box>
            </Modal>
          </Grid>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField variant="filled" fullWidth margin="normal" id="name" name="name" label="Name" value={values.name} onChange={handleChange} error={touched.name && Boolean(errors.name)} helperText={touched.name && errors.name} />
            <TextField variant="filled" fullWidth margin="normal" id="email" name="email" label="Email" onChange={handleChange} error={touched.email && Boolean(errors.email)} helperText={touched.email && errors.email} />
            <TextField
              variant="filled"
              fullWidth
              margin="normal"
              required
              name="password"
              label="Password"
              type="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />
            <TextField
              variant="filled"
              fullWidth
              margin="normal"
              required
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              onChange={handleChange}
              value={values.confirmPassword}
              error={touched.confirmPassword && Boolean(errors.confirmPassword)}
              helperText={touched.confirmPassword && errors.confirmPassword}
            />
          </Box>
          <Link to={`/${id}`}>
            <Button
              type="submit"
              fullWidth
              size="large"
              variant="contained"
              onClick={handleSubmit}
              sx={{
                mt: 3,
                mb: 2,
                height: "49px",
                backgroundColor: "#A43F3C",
                color: "#fff",
                "&:hover": {
                  background: "#A43F3C",
                },
              }}
            >
              Register
            </Button>
          </Link>
          {error !== null && (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              <strong>EMAIL ALREADY REGISTERED</strong>
            </Alert>
          )}
          <Divider variant="middle" />
          <Button sx={{ mt: 3, mb: 2 }} fullWidth variant="Contained" startIcon={<img src={Google} alt="Google" />}>
            Connect With Google
          </Button>
          {/* </Paper> */}
        </ThemeProvider>
      )}
    </Formik>
  );
}
