import React from 'react'
import MyDonation from '../../Components/DonationCard/MyDonation'
import MyCampaign from '../../Components/MyCampaign/MyCampaign'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'


export default function Profile() {
    return (
        <>
            <ProfileCard />
            <MyDonation />
            <MyCampaign />
        </>
    )
}
