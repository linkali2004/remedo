import { Box, Typography } from '@mui/material'
import React from 'react'
import CustomAccordian from './CustomAccordian'

export default function FAQ() {
    const heading = ["What are the payment options available?" , "Do we serve all over India?" , "What are the walk-in options available?" , "Are online consultations available?" , "How long will my appointment take?" , "Is any referral required for appointments?" , "How can I book an appointment?" , "Do I need to bring anything at my first appointment?"]
    const body = ["E.g, You can pay using a variety of methods such as Internet Banking, Debit/Credit card, Wallet, UPI, and so on" , "We are currently based in Bhiwandi, however, we offer services nationwide via online consultations." , "We offer services at our clinics located at Bhiwandi" , "Yes, we offer teleconsultation and onlineservices. Book an appointment at link provided." , "The length of your appointment is determined by the condition or injuries being treated, as well as whether or not x-rays or an MRI are required. Please allow at least one hour for doctors to provide personalized attention and high-quality care." , "No, we do not require a referral for the appointments." , "You can book your appointment through the appointment tab displayed above." , "You may bring the following documents, if available: ID Proof Prior medication list Any prior diagnosis documentation X-RAY reports"];
  return (
       <Box sx={{backgroundColor:"#ddf198" , padding:{lg:15 , xs:5}}}>
        <Box sx={{marginLeft:{lg:"55px"}, marginRight:{lg:"55px"} , display:"flex" , flexDirection:"column" , alignItems:"center" , justifyContent:"center", gap:1}}>
            <Typography variant = "body1" sx={{marginBottom:"20px" , fontSize:{xs:"20px"} , fontWeight:500}}>Frequently asked questions</Typography>
            {heading.map((data,index)=>{
                return(<CustomAccordian heading={data} body={body[index]}></CustomAccordian>)
            })}
        </Box>
       </Box>
  )
}
