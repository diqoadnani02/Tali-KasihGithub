import React from 'react'
import {
  Paper,
  Typography,
  Grid,
  Button,
  Box
} from '@mui/material'
import DonationCard from './DonationCard'
import data from './data'

export default function MyDonation() {
  const [list, setList] = React.useState([]);
  const [end, setEnd] = React.useState(4);

  React.useEffect(() => {
    const getData = () => {
        setList(data.donation)
    };
    getData();
  }, []);
  const sliced = list.slice(0, end)


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
      <Box container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', p: '2px 35px'}}>
        {sliced.map((item) => (
          <DonationCard
            time={item.time}
            title={item.title}
            fund={item.fund}
            description={item.description}
            />
        ))} 
      </Box>
      <Grid container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        >
        <Grid item xs={5}>
          <Button onClick={() => setEnd(end + 3)} variant="outlined" sx={{mt: 3, mb: 2
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
