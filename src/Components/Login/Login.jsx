import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Link, Paper, Typography, Grid, TextField, Box, Button } from '@mui/material'


export default function Login() {
    const theme = createTheme({
        typography: {
            fontFamily: [
                'nunito',
                'cursive',
            ].join(','),
        },
    })
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <ThemeProvider theme={theme}>
            <Paper 
            elevation={0} 
            variant="outlined" 
            sx={{
                padding: '140px',
                height: '70vh',
                width: '30vw',
                margin: "20px auto",
                backgroundColor: '#F1EDE4'
            }}
            >
                <Grid item xs={8} sx={{margin: '-50px'}}>
                    <Typography sx={{
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        fontSize: '48px',
                        lineHeight: '65px',
                        letterSpacing: '-0.05rem',
                        color: '#1D94A8'
                    }}
                    >
                        LOGIN
                    </Typography>
                    <Typography
                        sx={{
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            fontSize: '14px',
                            lineHeight: '19px',
                            letterSpacing: '1px',
                            textDecoration: 'underline'
                        }}
                    >
                        New user? <Link href="#">Create an account</Link>
                    </Typography>
                </Grid>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{width: 500, maxWidth: "100%", marginTop: '100px'}}>
                    <TextField
                    variant="filled"
                    fullWidth
                    margin="normal"
                    id="email"
                    name="email"
                    label="Email"
                    
                    />
                    <TextField
                    variant="filled"
                    fullWidth
                    margin="normal"
                    required
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    />
                    <Typography variant="caption" display="block" gutterBottom textDecoration="underlined" color=""><Link href="#">Forget Password?</Link></Typography>
                </Box>
                <Button
                type="submit"
                fullWidth
                size="large"
                variant="contained"
                sx={{mt: 3, mb: 2, backgroundColor: '#A43F3C', color: "#fff"}}
                >
                    Sign in
                </Button>
            </Paper>
        </ThemeProvider>
    )
}

