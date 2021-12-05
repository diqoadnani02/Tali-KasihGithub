import React from 'react'
import {
  Paper,
  Typography,
  Grid,
  Button
} from '@mui/material'
import DonationCard from './DonationCard'

export default function MyDonation() {
  return (
    <Paper container sx={{
      mt: '72px',
      ml: '263px',
      mr: '207px',
      p: 2,
      borderRadius: '4px'
    }}
    >
      <Typography
        sx={{
          fontFamily: "nunito",
          fontStyle: 'normal',
          fontWeight: 'bold',
          fontSize: '24px',
          lineHeight: '33px'
        }}
      >
        My Donation(23)
      </Typography>
      <Grid container spacing={4} sx={{ p: 6, pt: 2 }}>
        <Grid item xs={6} >
          <DonationCard />
        </Grid>
        <Grid item xs={6} >
          <DonationCard />
        </Grid>
        <Grid item xs={6}>
          <DonationCard />
        </Grid>
        <Grid item xs={6}>
          <DonationCard />
        </Grid>
      </Grid>
      <Grid container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        >
        <Grid item xs={5}><Button variant="outlined" sx={{mt: -2, mb: 2
          , borderRadius: '3px', border: '1px solid #1D94A8' }}>
          <Typography
          sx={{
            fontFamily: 'nunito',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '16px',
            lineHeight: '22px',
            letterSpacing: '1px',
            color: '#1D94A8'
          }}
          >
            Load More
            </Typography>
          </Button>
          </Grid>
      </Grid>
    </Paper>
  )
}
