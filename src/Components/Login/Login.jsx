import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, Typography, Grid, TextField, Box, Button, Divider, Alert, AlertTitle } from "@mui/material";
import Google from "./google.png";
import { logInStart, googleLoginStart } from "../../Store/Actions/authAction/authAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  email: yup.string().email("enter valid email").required("required"),
  password: yup.string().required("required"),
});

export default function Login() {
  const theme = createTheme({
    typography: {
      fontFamily: ["nunito", "cursive"].join(","),
    },
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, status, error } = useSelector((state) => state.auth);

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => {
        dispatch(logInStart(values));
      }}
      initialValues={{
        email: "",
        password: "",
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
                backgroundColor: '#F1EDE4'
                
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
              LOGIN
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
              New user? <Link href="#">Create an account</Link>
            </Typography>
          </Grid>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ marginTop: 5 }}>
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
              values={values.password}
              onChange={handleChange}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />
            <Typography variant="caption" display="block" gutterBottom textDecoration="underlined" color="" onClick={() => navigate("/forget-password")} sx={{ cursor: "pointer" }}>
              <Link href="#">Forget Password?</Link>
            </Typography>
            {error !== null && (
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                <strong>EMAIL AND/OR PASSWORD INVALID</strong>
              </Alert>
            )}
            <Button
              type="submit"
              fullWidth
              size="large"
              variant="contained"
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
              Sign in
            </Button>
          </Box>
          <Divider variant="middle" />
          <Button onClick={() => dispatch(googleLoginStart(values))} sx={{ mt: 3, mb: 2 }} fullWidth variant="Contained" startIcon={<img src={Google} alt="Google" />}>
            Connect With Google
          </Button>

          {/* </Paper> */}
        </ThemeProvider>
      )}
    </Formik>
  );
}
