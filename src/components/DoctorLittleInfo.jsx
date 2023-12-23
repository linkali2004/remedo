import { Avatar, Box, Button, Typography } from '@mui/material'
import React from 'react'

export default function SomeDetails() {
  return (
   <Box sx={{padding:"16px"}}>
    <Box sx={{marginLeft:"15px" , marginRight:"15px",paddingTop:"24px" , paddingBottom:"8px" , display:"flex"}}>
        <Box sx={{paddingLeft:"15px" , paddingRight:"15px"}}>
        <Avatar style = {{backgroundColor:"#ff6767" , width:"75px" , height:"75px" , cursor:"pointer" }} src='/OMUNMN0.jpg'></Avatar>
        </Box>
        <Box sx={{paddingLeft:"15px" , paddingRight:"15px"}}>
           <Typography variant = "body1" sx={{fontWeight:"bold"}}>Dr. Manik Dalvi</Typography>
           <Typography variant = "subtitle1" sx={{fontSize:{xs:"14px"}}}>Obstetrics & Gynecology</Typography>
           <Button variant="outlined" size = "small" sx={{marginTop:"8px" , fontWeight:"bold"}}>View Profile</Button>
        </Box>
    </Box>
   </Box>
  )
}
