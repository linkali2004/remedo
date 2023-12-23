import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


export default function Appbar({children}) {
  return (
      <AppBar position="sticky" style={{margin:0 , backgroundColor:"white" ,paddingLeft:"30px" , paddingRight:"30px" }} sx={{zIndex:1}}>
        <Toolbar>
          {children}
        </Toolbar>
      </AppBar>
  );
}