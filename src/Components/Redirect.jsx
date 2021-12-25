import React from 'react'
import {
    Card,
    Button,
    Typography,
    Grid,
    Box
} from '@mui/material'
import tick from './tick.png'
import {useNavigate} from 'react-router-dom'

export default function Redirect() {
    const navigate = useNavigate()

    return (
        <Card
        sx={{
            borderRadius: 4,
            mt: '72px',
            mb: '213px',
            ml: '267px',
            mr: '203px',
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
                            Reset Password
                        </Typography>
                    </Grid>
                <Box container sx={{mt: 2}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', p: '12px'}}>
                        <img src={tick} alt="tick"/>
                    </div>
                    <Typography
                    sx={{fontWeight: 'bold', fontSize: '20px', lineHeight: '28px', textAlign: 'center'}}
                    >
                    Password Reset Successful
                    </Typography>
                    <Typography
                    sx={{fontSize: '16px', lineHeight: '24px', textAlign: 'center'}}
                    >
                        You are being redirected to another page,
                        <br/>it may take a few seconds, please wait...
                    </Typography>
                    <br/>
                    <Typography
                    sx={{fontSize: '16px', lineHeight: '24px', textAlign: 'center', color: '#9D9D9D'}}
                    >
                        If you haven’t been redirected in 30 seconds, please click this button.
                    </Typography>
                    <Grid 
                    container
                    sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Button
                        type="submit"
                        size="large"
                        variant="contained"
                        onClick={() => navigate('/')}
                        sx={{
                            mt: 3, mb: 2, height: '49px', backgroundColor: '#A43F3C', color: "#fff", '&:hover': {
                                background: '#A43F3C'
                            },
                        }}
                    >
                        CONTINUE TO HOMEPAGE
                    </Button>
                    </Grid>
                </Box>
        </Card>
    )
}
