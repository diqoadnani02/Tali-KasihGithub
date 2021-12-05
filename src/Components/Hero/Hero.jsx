import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import HeroImage from './Assets/HeroImage.png'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Button from '@mui/material/Button'
import HeroImage2 from './Assets/HeroImage2.png'
import HeroImage3 from './Assets/HeroImage3.png'
import Carousel from 'react-material-ui-carousel'

export default function Hero() {
    const font = "'Nunito', sans-serif"
    const theme = createTheme({
        typography: {
            fontFamily: font,
        }
    })
        var items = [
            {
                hashtag: "#EducationForEveryone",
                description: "Proper education is not just a dream",
                image: HeroImage
            },
            {
                hashtag: "#HealthCareForEveryone",
                description: "Help them to get speedy recovery",
                image: HeroImage2
            },
            {
                hashtag: "#CleanAirForEveryone",
                description: "Together to solve enviromental problem",
                image: HeroImage3
            }
        
        ];
        return(<>
        <Carousel navButtonAlwaysInvisible={true} animation="fade" indicators={false}>
            {
                items.map( (item,i) => <Item key={i} item={item} />)
            }
        </Carousel>
        </>);

    function Item(props)
    {
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
                backgroundImage: `url(${props.item.image})`
                
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
                        {props.item.hashtag}
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
                        {props.item.description}
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
}


