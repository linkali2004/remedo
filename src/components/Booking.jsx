import React from 'react'
import Appbar from './Appbar';
import WestIcon from '@mui/icons-material/West';
import { Box, Divider, Grid, IconButton, Link, Typography } from '@mui/material';
import DoctorLittleInfo from './DoctorLittleInfo'
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Mobilenumber from './Mobilenumber';
import FAQ from './FAQ';

function handleClick(navigate)
{
    navigate("/");
}


export default function Booking() {
    const navigate = useNavigate()
  return (
    <>
    <Appbar>
                <WestIcon sx={{color:"black" , width:"30px" , height:"30px" , marginRight:"20px" ,cursor:"pointer"}} onClick={()=>handleClick(navigate)}></WestIcon>
                <Typography variant = "body1" sx={{ fontWeight: 550 , color:"black"}}>In-Clinic Consultation</Typography>
    </Appbar>
    <Box sx={{position:"relative",top:0,zIndex:0,backgroundColor:"white" , marginLeft:{xs:0 , md:"104px" ,sm:0 , lg:"324px"} , marginRight:{xs:0 , md:"104px" ,sm:0 , lg:"324px"} , paddingBottom:"20px"}}>
        <DoctorLittleInfo></DoctorLittleInfo>
        <Divider></Divider>
        <Box sx={{padding:"16px"}}>
    <Grid container rowSpacing={{xs:3}}>
        <Grid item xs={12} sm={12} md={6} lg={8}>
            <Grid container>
                <Grid item xs={8} md={12} sm={6} lg={8} sx={{paddingBottom:{lg:"8px"} , paddingLeft:{lg:"18px"}}}>
                    <Typography variant = "body1" sx={{fontWeight:550}}>Appointment Summary</Typography>
                </Grid>
                <Grid item xs={4} md={12} sm={6} lg={4}>
                    <Box>
                    <Typography variant ="subtitle2" sx={{color:"green" ,fontSize:{xs:"12px"}}}>Fees approx ₹ 500</Typography>
                <Typography variant = "subtitle2" sx={{color:"#6f42c1" , fontWeight:550 , fontSize:{xs:"12px"}}}>(pay at clinic)</Typography>
                        </Box> 
                </Grid>
                <Grid item xs={12} md={12} sm={12} lg={7} sx={{padding:{lg:2} , paddingTop:{xs:"18px"} , paddingBottom:{xs:"18px"}}}>
                  <Box sx={{display:"flex" , alignItems:"center" , gap:1}}>
                    <IconButton sx={{borderRadius:"50%" , backgroundColor:"#bcf7c8"}}>
                        <HomeIcon sx={{color:"#3eb03e"}}></HomeIcon>
                    </IconButton>
                  <Typography variant ="subtitle2" sx={{color:"black" ,fontSize:{xs:"16px"} , fontWeight:550}}>In-Clinic Consultance</Typography>
                  </Box>
                  <Box sx={{display:"flex" , alignItems:"center" , gap:1 , marginTop:"8px"}}>
                    <IconButton>
                        <AccessTimeIcon sx={{color:"#3eb03e"}}></AccessTimeIcon>
                    </IconButton>
                  <Typography variant ="subtitle2" sx={{color:"black" ,fontSize:{xs:"16px"}}}>10:00pm</Typography>
                  </Box>
                  <Box sx={{display:"flex" , alignItems:"center" , gap:1}}>
                    <IconButton>
                        <CalendarMonthIcon sx={{color:"#3eb03e"}}></CalendarMonthIcon>
                    </IconButton>
                  <Typography variant ="subtitle2" sx={{color:"black" ,fontSize:{xs:"16px"}}}>24-12-2023</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={12} sm={6} lg={5} sx={{display:"flex" , alignItems:"center" , justifyContent:"center"}}>
                    <Link sx={{fontSize:"16px"}}>Change Time and Date</Link>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    <Mobilenumber></Mobilenumber>
   </Box>
        </Box>
        <Box sx={{position:"relative",top:0,zIndex:0,backgroundColor:"white" , marginLeft:{xs:0 , md:"50px" ,sm:0 , lg:"104px"} , marginRight:{xs:0 , md:"50px" ,sm:0 , lg:"104px"}}}>
            <FAQ></FAQ>
        </Box>
    </>
  )
}
