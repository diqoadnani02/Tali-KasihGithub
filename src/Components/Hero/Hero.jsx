import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import useMediaQuery from '@mui/material/useMediaQuery'
import HeroImage from './Assets/HeroImage.png'
import { createTheme, ThemeProvider, useTheme} from '@mui/material/styles'
import Button from '@mui/material/Button'
import HeroImage2 from './Assets/HeroImage2.png'
import HeroImage3 from './Assets/HeroImage3.png'
import Carousel from 'react-material-ui-carousel'
import { Link } from 'react-router-dom'
import Register from "../Register/Register";


export default function Hero() {
    const themes = useTheme()
    const matches = useMediaQuery(themes.breakpoints.up('sm'))
    
    const [openRegister, setOpenRegister] = React.useState();
    const handleOpenRegister = () => setOpenRegister(true);
    const handleCloseRegister = () => setOpenRegister(false);
    const font = "'Nunito', sans-serif"
    const theme = createTheme({
        typography: {
            fontFamily: font,
        },
        box: {
            [themes.breakpoints.down('sm')] : {
                padding: '120px'
            },
        },
    })
    const styleRegister = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#F1EDE4",
        width: 400,
        boxShadow: 24,
        p: 4,
        pt: "120px",
        pb: "110px",
    };
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
            description: "Together to solve environmental problem",
            image: HeroImage3
        }

    ];
    return (<>
        <Carousel navButtonAlwaysInvisible={true} animation="fade" indicators={false}>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    </>);

    function Item(props) {
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
                        backgroundImage: `url(${props.item.image})`,
                        matches: `${matches}`

                    }}
                >

                    <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                        <Grid item md={8}>
                            <Box
                                sx={{
                                    position: 'relative',padding: '2.55rem', minWidth: 600}}
                            >   
                                <Typography
                                    sx={{
                                        fontStyle: 'normal',
                                        fontWeight: 700,
                                        fontSize: '24px',
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
                                        fontSize: '18px',
                                        lineHeight: '33px',
                                        color: '#1D94A8',
                                    }}
                                >
                                    {props.item.description}
                                </Typography>
                                <Grid
                                    container
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        margin: '10px -10px'
                                    }}
                                >
                                    <Link to='/discover'>
                                        <Button
                                            variant="contained"
                                            size="small"
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
                                    </Link>
                                        <Button
                                            onClick={handleOpenRegister}
                                            open={openRegister}
                                            size="small"
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
                                        <Modal open={openRegister} onClose={handleCloseRegister}>
                                            <Box sx={styleRegister}>
                                                <Register />
                                            </Box>
                                        </Modal>
                                    
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </ThemeProvider>
        );
    }
}


