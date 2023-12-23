import { Box, Button, Divider } from '@mui/material'
import React, { useState } from 'react'
import DoctorLittleInfo from './DoctorLittleInfo'
import AppointmentContainer from './AppointmentContainer'
import ClinicName from './ClinicName'
import Timings from "./Timings";
import FAQ from './FAQ'
import {Btncontext} from "./context/Btncontext";
import { useNavigate } from 'react-router-dom'

function handleClick(disabled , navigate)
{
  if(!disabled)
  {
    navigate("/bookSlot");
  }
}


export default function Middlecontainer() {
  const [disabled, setDisabled] = useState(true)
  const navigate = useNavigate();
  return (
<Box sx={{position:"relative",top:0,zIndex:0,backgroundColor:"white" , marginLeft:{xs:0 , md:"50px" ,sm:0 , lg:"104px"} , marginRight:{xs:0 , md:"50px" ,sm:0 , lg:"104px"}}}>
    <DoctorLittleInfo></DoctorLittleInfo>
    <Divider sx={{backgroundColor:"#e5e5e5"}}></Divider>
    <AppointmentContainer></AppointmentContainer>
    <ClinicName></ClinicName>
    <Divider sx={{marginBottom:4}}></Divider>
    <Btncontext.Provider value = {{disabled,setDisabled}}>
    <Timings ></Timings>
    </Btncontext.Provider>
    <Box sx={{padding:2, display:"flex" , justifyContent:"flex-end"}}>
        <Button variant = "contained" disabled = {disabled} onClick={()=>handleClick(disabled,navigate)}>Continue</Button>
    </Box>
    <FAQ></FAQ>
</Box>
  )
}
