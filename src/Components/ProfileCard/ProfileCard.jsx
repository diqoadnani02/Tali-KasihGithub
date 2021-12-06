import React from 'react'
import { Card, CardContent, Typography, Grid, Link, Avatar, TextField, Box } from '@mui/material'
import aiko from './aiko.png'


export default function ProfileCard() {
	return (
		<Card container sx={{ borderRadius: 4, mt: '72px',ml:'267px',mr: '203px' , p: 2 }}>
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
					My Profile
				</Typography>
				<Link
					sx={{
						margin: 1,
						fontFamily: 'nunito',
						fontStyle: 'normal',
						fontWeight: 'bold',
						fontSize: '14px',
						lineHeight: '19px',
						color: '#A43F3C',
						textDecoration: 'underline'
					}}
					href="#">Logout</Link>
			</Grid>
			<CardContent>
				<Grid container sx={{ display: 'flex', justifyContent: 'center'}}>
					<Avatar variant="square" src={aiko} sx={{ width: 200, height: 200 }}></Avatar>
				</Grid>
				<Grid container sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
					<Link href="#" sx={{
						fontFamily: 'nunito',
						fontStyle: 'normal',
						fontWeight: 'bold',
						fontSize: '14px',
						lineHeight: '19px',
						color: '#1D94A8',
						textDecoration: 'underline'
					}}
					>
						Edit Profile
					</Link>
				</Grid>
				<Box component="form" sx={{ mt: 3 }}>
					<Grid container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
						<TextField
							disabled
							id="name"
							label="Name"
							defaultValue="Hasegawa Aiko"
							variant="standard"
						/>
						<TextField
							disabled
							id="email"
							label="Email"
							defaultValue="aiko@mail.com"
							variant="standard"
						/>
					</Grid>
					<Grid sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', padding: '10px 140px' }}>
						<TextField
							disabled
							id="bankInfo"
							label="Bank Info"
							defaultValue="BCA - *******457"
							variant="standard"
						/>
					</Grid>
				</Box>
			</CardContent>
		</Card>
	)
}
