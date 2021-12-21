import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { forgotPasswordStart } from '../../Store/Actions/authAction/authAction'
import { useDispatch } from 'react-redux'
import {
    Card,
    Typography,
    TextField,
    Button,
    Grid,
    Box
} from '@mui/material'

const schema = yup.object({
    email: yup
        .string()
        .email('enter valid email')
        .required('required'),
})

export default function ForgotPassword() {


    const dispatch = useDispatch()

    return (
        <Formik
            validationSchema={schema}
            onSubmit={(values) => { console.log(values); dispatch(forgotPasswordStart(values.email)) }}
            initialValues={{
                email: '',
            }}
        >
            {({
                handleSubmit,
                handleChange,
                values,
                touched,
                errors
            }) => (
                <Card
                    container
                    sx={{
                        borderRadius: 4,
                        mt: "72px",
                        ml: "267px",
                        mr: "203px",
                        mb: "213px",
                        p: 2
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
                            forgot password?
                        </Typography>
                    </Grid>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Typography component="div">
                            <Box sx={{ textAlign: 'center', m: 3, fontSize: '16px', lineHeight: '24px'}}>
                                Please enter the e-mail address you use when creating <br /> 
                                your account, we’ll send you instructions to reset<br/> 
                                your password.
                            </Box>
                        </Typography>
                        <Grid
                            container
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',

                            }}
                        >
                            <TextField
                                sx={{ width: '390px' }}
                                required
                                label="Email"
                                name="email"
                                variant="outlined"
                                values={values.email}
                                onChange={handleChange}
                                error={touched.email && Boolean(errors.email)}
                                helperText={touched.email && errors.email}
                            />
                            <Button
                        type="submit"
                        size="large"
                        variant="contained"
                        sx={{
                            mt: 3, mb: 2, height: '49px', backgroundColor: '#A43F3C', color: "#fff", '&:hover': {
                                background: '#A43F3C'
                            },
                        }}
                    >
                        Send Reset Instructions
                    </Button>
                        </Grid>
                        
                    </Box>
                </Card>
            )}
        </Formik>
    )
}
