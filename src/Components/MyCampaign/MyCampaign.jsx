import React from 'react'
import {
	Paper,
	Typography,
	Grid,
	Button,
	Box
} from '@mui/material'
import Card from '../Card/Card'
import data from '../Card/data'

const MyCampaign = () => {
	const [list, setList] = React.useState([]);
	const [end, setEnd] = React.useState(2);

	React.useEffect(() => {
		const getData = () => {
			setList(data.campaign)
		};
		getData();
	}, []);
	const sliced = list.slice(0, end)

	return (
		<Paper container sx={{
			mt: '72px',
			ml: '263px',
			mr: '205px',
			mb: '113px',
			p: 2,
			borderRadius: '4px'
		}}>
			<Typography
				sx={{
					fontFamily: "nunito",
					fontStyle: 'normal',
					fontWeight: 'bold',
					fontSize: '24px',
					lineHeight: '33px'
				}}
			>
				My Campaign(2)
			</Typography>
			<Box container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', padding: '0 100px' }}>
				{sliced.map((item) => (
					<Card
						image={item.image}
						category={item.category}
						title={item.title}
						author={item.author}
						data_funding={item.data_funding}
						raised={item.raised}
						goal={item.goal}
					/>
				))}
			</Box>
			<Grid container
				direction="column"
				alignItems="center"
				justifyContent="center"
			>
				<Grid item xs={5}>
					<Button onClick={() => setEnd(end + 2)} variant="outlined" sx={{
						mt: 3, mb: 2
						, borderRadius: '3px', border: '1px solid #1D94A8'
					}}>
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
	);
};

export default MyCampaign;