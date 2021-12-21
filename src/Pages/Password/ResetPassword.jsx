import React from 'react'
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
import {useParams} from 'react-router-dom'



export default function ResetPassword() {
    const [password,setPassword] = React.useState("")
    const [confirmPassword, setConfirmPassword] = React.useState("")
const Token = localStorage.getItem("token");
const {profile} = useSelector((state) => state.profileReducer.profile)
const {message} = useSelector((state) => state.auth)
const dispatch = useDispatch()

React.useEffect(() => {
    if (Token) {
        dispatch(ProfileAction());
    }
}, [Token, dispatch])

const {token} = useParams()


const handleSubmit = () => {
    console.log(password,confirmPassword,"resetPasswordStart")
    dispatch(resetPasswordStart(
        {password, confirmPassword,token}
        
    ))
}

    
    return (
        <>
        {message !== null ? <Redirect /> :  
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
                            variant="standard"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            sx={{ width: '384px' }}
                        />
                        <TextField
                            id="confirmPassword"
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
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
                                onClick={handleSubmit}
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
                                
                            </Grid>
                        </Grid>
                    </Grid>
        </Box>
    </Card>}
    </>
    
    )
}
