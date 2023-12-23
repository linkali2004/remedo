import { Box, Button, FormControl, FormHelperText, Input, InputLabel, TextField, Typography, useFormControl } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import React, { useRef, useState } from 'react'

function validate(element,pasValue , setDisabled)
{
    if(pasValue.length > 0)
    {
        element.current.innerText="";
    }
    if(pasValue.length>=10)
    {
        setDisabled(false)
    }
    if(pasValue.length < 10)
    {setDisabled(true)}
}

function handleValidation(setValue,value ,e,helperText,setDisabled)
{
    setValue(e.target.value);
    validate(helperText , value , setDisabled)
}

function blurHandler(setValue,value,e, helperText,setDisabled)
{
 if(e.target.value.length === 0)
 {
    helperText.current.innerText="Please enter your mobile number";
 }   
}

export default function Mobilenumber() {
    const [value , setValue] = useState("");
    const [disabled,setDisabled] = useState(true);
    const inputControl = useRef();
    const helperText = useRef()
    return (
    <Box sx={{padding:"24px" , borderRadius:"10px" , border:"1px solid #6c757d" , marginTop:"14px"}}>
        <Typography variant = "body1" sx={{fontWeight:550 , fontSize:{xs:"14px"}}}>Enter phone number to continue</Typography>
        <Typography variant = "body1" sx={{fontSize:{lg:"14px" , xs:"12px"} , color:"#6c757d" , marginBottom:"14px"}}>Please enter your WhatsApp number to receive timely updates.</Typography>
        <Box sx={{display:"flex" , alignItems:"center" , gap:2}}>
        <FormControl variant="standard" fullWidth ref={inputControl}>
        <InputLabel htmlFor="component-error">Mobile Number</InputLabel>
        <Input type="number"
          id="component-error"
          aria-describedby="component-error-text"
          onChange={(e)=>handleValidation(setValue,value,e, helperText,setDisabled)}
          onBlur={(e)=>blurHandler(setValue,value,e, helperText,setDisabled)}
        />
        <FormHelperText id="component-error-text" ref = {helperText} sx={{color:"red"}}></FormHelperText>
      </FormControl>
        <WhatsAppIcon sx={{color:"#3eb03e" , marginTop:"26px"}}></WhatsAppIcon>
        </Box>
        <Typography variant = "body1" sx={{fontSize:"12px" , color:"#6c757d" , marginTop:"24px" , marginBottom:"12px"}}>Please enter the mobile number of the patient. You will receive a confirmation message on this number.</Typography>
        <Box sx={{padding:2, display:"flex" , justifyContent:"flex-end"}}>
        <Button variant = "contained" disabled ={disabled}>Send OTP</Button>
    </Box>
    </Box>
  )
}
