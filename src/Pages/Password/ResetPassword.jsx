import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import {
    Card,
    TextField,
    Box,
    Grid,
    Typography,
    Button
} from '@mui/material'
import {useDispatch,useSelector} from 'react-redux'
import { resetPasswordStart } from '../../Store/Actions/authAction/authAction'
import {ProfileAction} from '../../Store/Actions/profile'
import Redirect from '../../Components/Redirect'



const schema = yup.object({
    password: yup
        .string('Please Enter your Password')
        .required('Password must be required')
        .matches(
            // eslint-disable-next-line
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Password Must be at least 8 Characters"
        ),
    confirmPassword: yup
        .string()
        .required('Re-enter your password')
        .oneOf([yup.ref("password"), null], "Password must match")
})

export default function ResetPassword() {
const Token = localStorage.getItem("token");
const {profile} = useSelector((state) => state.profileReducer.profile)
const {message} = useSelector((state) => state.auth)
const dispatch = useDispatch()

React.useEffect(() => {
    if (Token) {
        dispatch(ProfileAction());
    }
}, [Token, dispatch])


    
    return (
        <Card
            sx={{
                mt: '72px',
                mb: '213px',
                ml: '267px',
                mr: '203px',
                p: 2,
            }}
        >
            <Grid
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: 'nunito',
                                fontStyle: 'normal',
                                fontWeight: 'bold',
                                fontSize: '24px',
                                lineHeight: '33px'
                            }}
                        >
                            Reset Password
                        </Typography>
                    </Grid>
            <Box component="form" sx={{ mt: 2 }}>
                <Grid
                    container
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly'
                    }}
                >
                    <TextField
                        disabled
                        id="name"
                        label="Name"
                        values={`${profile && profile.name}`}
                        variant="standard"
                        sx={{ width: '384px' }}
                    />
                    <TextField
                        disabled
                        id="email"
                        label="Email"
                        values={`${profile && profile.email}`}
                        variant="standard"
                        sx={{ width: '384px' }}
                    />
                </Grid>
                <Formik
                    validationSchema={schema}
                    onSubmit={(values,e) => { console.log(values, "values"); e.preventDefault();dispatch(resetPasswordStart(values))}}
                    initialValues={{
                        password: '',
                        confirmPassword: ''
                    }}
                >
                    {({
                        handleSubmit,
                        handleChange,
                        values,
                        touched,
                        errors
                    }) => (
                        <Grid
                            container
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-evenly'
                            }}
                            
                        >
                            <TextField
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                values={values.password}
                                onChange={handleChange}
                                error={touched.password && Boolean(errors.password)}
                                helperText={touched.password && errors.password}
                                variant="standard"
                                sx={{ width: '384px' }}
                            />
                            <TextField
                                id="confirmPassword"
                                label="Confirm Password"
                                name="confirmPassword"
                                type="password"
                                values={values.confirmPassword}
                                onChange={handleChange}
                                error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                                helperText={touched.confirmPassword && errors.confirmPassword}
                                variant="standard"
                                sx={{ width: '384px' }}
                            />
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
                                    type="submit"
                                    onSubmit={handleSubmit}
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
                                            RESET PASSWORD
                                        </Typography>
                                    </Button>
                                    {message !== null && <Redirect />}
                                </Grid>
                            </Grid>
                        </Grid>
                    )}
                </Formik>
            </Box>
        </Card>
    )
}
