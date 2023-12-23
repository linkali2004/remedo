import { Avatar, Box, Button, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import VideoCallIcon from '@mui/icons-material/VideoCall';


export default function AppointmentContainer() {
  return (
   <Box sx={{padding:"16px"}}>
    <Grid container rowSpacing={{xs:3}}>
        <Grid item xs={12} sm={12} md={6} lg={8}>
            <Grid container>
                <Grid item xs={6} md={12} sm={6} lg={12}>
                    <Typography variant = "body1" sx={{fontWeight:550}}>Book Appointment</Typography>
                </Grid>
                <Grid item xs={6} md={12} sm={6} lg={12}>
                <Typography variant = "body2" sx={{color:"#948e8e"}}>Select Your Consultation Type</Typography>
                <Typography variant = "body2" sx={{color:"green", fontWeight:550}}>Fees approx ₹ 500</Typography>
                <Typography variant = "body2" sx={{color:"#6f42c1"}}>(pay at clinic)</Typography> 
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} sx={{paddingLeft:{lg:"120px"} , display:"flex" , justifyContent:{xs:"center" , lg:"flex-end" , md:"flex-end"} , gap:{xs:3,lg:2}}}>
             <IconButton sx={{border:"1px solid #948e8e" , width:"75px" , height:"75px" , borderRadius:"8px"  , backgroundColor:"#3eb03e"}}>
             <HomeIcon sx={{width:"35px" , height:"35px" , color:"white"}}></HomeIcon>
             </IconButton>
             <IconButton sx={{border:"1px solid #948e8e" , width:"75px" , height:"75px" , borderRadius:"8px" }}>
             <CallIcon sx={{width:"35px" , height:"35px"}}></CallIcon>
             </IconButton>
             <IconButton sx={{border:"1px solid #948e8e" , width:"75px" , height:"75px" , borderRadius:"8px"}}>
             <VideoCallIcon sx={{width:"35px" , height:"35px"}}></VideoCallIcon>
             </IconButton>
            </Grid>
    </Grid>
   </Box>
  )
}
