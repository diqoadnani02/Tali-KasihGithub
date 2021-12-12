import React from 'react'
import {
    Card,
    Typography,
    CardContent
} from '@mui/material'

const DonationCard = ({time, title, fund, description}) => {
    return (
        <Card  sx={{ maxWidth: 415, p: 2, m: 1}}>
            <CardContent>
                <Typography sx={{ fontFamily: 'nunito', fontStyle: 'normal', fontWeight: 'normal', lineHeight: '16px', fontSize: '12px', display: 'flex', justifyContent: 'flex-end' }} color="text.secondary" gutterBottom>
                    {time}
                </Typography>
                <Typography sx={{ fontFamily: 'nunito', fontStyle: 'normal', fontWeight: 'bold', fontSize: '14px', lineHeight: '16px', textDecoration: 'underline' }}>
                    {title}
                </Typography>
                <Typography sx={{fontFamily: 'nunito', fontStyle: 'normal', fontWeight: 'bold', fontSize: '18px', lineHeight: '25px', color: '#1D94A8' }}>{fund}</Typography>
                <Typography variant="body1" sx={{ mt: 1, fontFamily: 'nunito', fontStyle: 'normal', fontWeight: 'normal', lineHeight: '16px' }}>{description}</Typography>
            </CardContent>
        </Card>
    )
}

export default DonationCard;
