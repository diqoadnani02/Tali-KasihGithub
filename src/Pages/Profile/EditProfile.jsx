import React from 'react'
import { 
	Card, 
	CardContent, 
	Typography, 
	Grid, 
	Link, 
	Avatar, 
	TextField, 
	Box, 
	Button 
} 
from '@mui/material'
import aiko from './aiko.png'


export default function EditProfile() {
	return (
		<Card container sx={{ borderRadius: 4, mt: '72px', ml: '267px', mr: '203px',mb: '211px' , p: 2 }}>
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
			</Grid>
			<CardContent>
				<Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
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
							size="large"
							required
							id="name"
							label="Name"
							defaultValue="Hasegawa Aiko"
							variant="standard"
						/>
						<TextField
							required
							id="email"
							label="Email"
							defaultValue="aiko@mail.com"
							variant="standard"
							
						/>
					</Grid>
					<Grid container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', mt: 2 }}>
						<TextField
							margin="dense"
							required
							id="nameBank"
							label="Bank Name"
							defaultValue="Bank BCA"
							variant="standard"
						/>
						<TextField
							margin="dense"
							required
							id="accountNumber"
							label="Bank Account Number"
							defaultValue="1234567"
							variant="standard"
						/>
					</Grid>
					<Grid container
						sx={{pt: 6}}
						spacing={50}
						direction="row"
						alignItems="flex-end"
						justifyContent="flex-end"
					>
					<Grid item xs={5}>
						<Button sx={{
							borderRadius: '3px',
							background: '#A43F3C',
							'&:Hover':{
								background: '#A43F3A'
							}
						}}>
							<Typography
								sx={{
									fontFamily: 'nunito',
									fontStyle: 'normal',
									fontWeight: 'bold',
									fontSize: '16px',
									lineHeight: '22px',
									letterSpacing: '1px',
									color: '#FFFFFF'
								}}
							>
								SAVE CHANGES
							</Typography>
						</Button>
					</Grid>
					</Grid>
				</Box>
			</CardContent>
		</Card>
	)
}
