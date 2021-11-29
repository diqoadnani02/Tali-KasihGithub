import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import HeroImage from './Assets/HeroImage.png'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Button from '@mui/material/Button'

export default function Hero() {
    const font = "'Nunito', sans-serif"
    const theme = createTheme({
        typography: {
            fontFamily: font,
        }
    })

    return (
        <ThemeProvider theme={theme}>
        <Paper
            sx={{
                width: '100vw',
                height: '100vh',
                backgroundColor: 'grey.800',
                color: '#fff',
                mb: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                position: 'relative',
                backgroundImage: `url(${HeroImage})`
                
            }}
        >
            
            <Grid container>
                <Grid item md={8}>
                    <Box
                        sx={{
                            position: 'relative',
                            padding: '140px'
                        }}
                    >
                        <Typography 
                        sx={{
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: '36px',
                            lineHeight: '49px',
                            color: '#1D94A8'
                        }}
                        >
                        #EducationForEveryone
                        </Typography>
                        <Typography 
                        sx={{
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontSize: '24px',
                            lineHeight: '33px',
                            color: '#1D94A8'
                        }}
                        >
                        Proper education is not just a dream 
                        </Typography>
                        <br />
                        <Grid
                            container
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: '5px 34px'
                            }}
                        >
                            <Button
                            variant="contained"
                        
                            sx={{
                                background: '#A43F3C',
                                borderRadius: '20px',
                                color: '#fff',
                                flex: 'none',
                                order: 0,
                                flexGrow: 0,
                                margin: '0px 16px',
                                '&:hover': {
                                    background: '#A43F3C'
                                }
                            }}
                            >
                            DONATE
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    background: '#FFFF',
                                    border: '2px solid #A43F3C',
                                    boxSizing: 'border-box',
                                    borderRadius: '20px',
                                    color: '#A43F3C',
                                    '&:hover': {
                                        background: '#FFF'
                                    }
                                }}
                                >
                                    CREATE CAMPAIGN
                                </Button>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
        </ThemeProvider>
    );
}


