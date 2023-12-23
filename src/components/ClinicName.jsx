import { Box, Typography } from '@mui/material'
import React from 'react'
import AlbumIcon from '@mui/icons-material/Album';

export default function ClinicName() {
  return (
     <Box sx={{padding:"15px"}}>
          <Box>
            <Typography variant = "body1" sx={{fontWeight:550}}>Clinic Name</Typography>
          </Box>
          <Box sx={{padding:"8px" , display:"flex" , gap:1}}>
            <AlbumIcon sx={{color:"#3eb03e"}}></AlbumIcon>
            <Typography variant = "body2">Manik Dalvi's Clinic, Kalyan Naka, Rk Business Centre, Opp. Bopal Nagar, Maharashtra, 421302</Typography>
          </Box>
     </Box>
  )
}
