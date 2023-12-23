import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

export default function CustomAccordian({heading , body}) {
  return (
    <div>
      <Accordion sx={{width:{lg:"698px" , sm:"500px" , md:"500px"}}} elevation="none">
        <AccordionSummary
          expandIcon={<ArrowCircleDownIcon  sx={{color:"#3eb03e"}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{color:"#8b8080" ,fontSize:"14px"}}>{heading}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant = "body1" sx={{fontSize:"12px"}}>
            {body}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}