import React from 'react'
import {
  Paper,
  Typography,
  Grid,
  Button,
  Box
} from '@mui/material'
import DonationCard from './DonationCard'
// import data from './data'
import {getMydonationStart} from '../../Store/Actions/mydonationAction/mydonationAction'
import {useDispatch, useSelector} from 'react-redux'

export default function MyDonation() {
  // const [list, setList] = React.useState([]);
  const [end, setEnd] = React.useState(4);
  const dispatch = useDispatch()

  React.useEffect(() => {
    console.log('useEffect')
    dispatch(getMydonationStart())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const {myDonate} = useSelector(state => state.mydonationReducer)
  console.log(myDonate)
  // const sliced = list.slice(0, end)


  return (
    <Paper container sx={{
      mt: '72px',
      ml: '263px',
      mr: '207px',
      p: 2,
      borderRadius: '4px',
      width: 'fit-content'
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
        My Donation
      </Typography>
      <Box container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', p: '2px 35px', width: '926.927px'}}>
        {myDonate.map((item) => (
          <DonationCard
            time={item.donateTime}
            title={item.campaign.title}
            fund={item.amount}
            description={item.message}
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
