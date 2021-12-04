import React from 'react'
import {
    Card,
    Typography,
    CardContent
} from '@mui/material'

export default function My() {
    return (
        <Card sx={{ minWidth: 200 }}>
            <CardContent>
                <Typography sx={{ fontFamily: 'nunito', fontStyle: 'normal', fontWeight: 'normal', lineHeight: '16px', fontSize: '12px', display: 'flex', justifyContent: 'flex-end' }} color="text.secondary" gutterBottom>
                    12 minute ago
                </Typography>
                <Typography sx={{ fontFamily: 'nunito', fontStyle: 'normal', fontWeight: 'bold', fontSize: '14px', lineHeight: '16px', textDecoration: 'underline' }}>
                    Aid for necessary items to help our country
                </Typography>
                <Typography sx={{ mt: 1, fontFamily: 'nunito', fontStyle: 'normal', fontWeight: 'bold', fontSize: '18px', lineHeight: '25px', color: '#1D94A8' }}>Rp. 320.000</Typography>
                <Typography variant="body1" sx={{ mt: 1, fontFamily: 'nunito', fontStyle: 'normal', fontWeight: 'normal', lineHeight: '16px' }}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc pellentesque enim ultrices nunc. Pretium massa, vel viverra id mi sed sit. In faucibus leo etiam cras elit malesuada augue. In faucibus leo etiam cras elit malesuada augue “</Typography>
            </CardContent>
        </Card>
    )
}
