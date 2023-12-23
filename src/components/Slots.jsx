import { Button, Grid } from '@mui/material'
import React, { useContext } from 'react'
import {Btncontext} from "./context/Btncontext";
import { useNavigate, useNavigation } from 'react-router-dom';


function GridItem({setDisabled })
{
    return(       
         <Grid item xs={4} sm={4} md={4} lg={4}>
        <Button type = "contained" sx={{border:"1px solid #d0d0d0",}} onClick={()=>handleClick(setDisabled)}>10:00 pm</Button>
        </Grid>
        )
}


function handleClick(setDisabled)
{
      setDisabled(false)
}


export default function Slots() {
    const {disabled , setDisabled} = useContext(Btncontext);
    const timing = [1,2,3,4,5,6];
  return (
    <Grid container spacing={2}> 
      {timing.map((data)=>{
        return (<GridItem setDisabled={setDisabled} key={data}></GridItem>)
      })}    
    </Grid>
  )
}
