import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Slots from './Slots';

function CustomTabPanel(props) {
  const { child, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {child}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Timings() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', display:"flex" , justifyContent:"center" , alignItems:"center" , flexDirection:"column"}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant ="scrollable" scrollButtons="auto">
          <Tab label="Today" {...a11yProps(0)} sx={{paddingLeft:{lg:10}, paddingRight:{lg:10}}}/>
          <Tab label="Tomorrow" {...a11yProps(1)}   sx={{paddingLeft:{lg:10}, paddingRight:{lg:10}}}/>
          <Tab label="Mon, 25 Dec" {...a11yProps(2)}  sx={{paddingLeft:{lg:10}, paddingRight:{lg:10}}} />
         
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} child ={<Slots></Slots>}></CustomTabPanel>
      <CustomTabPanel value={value} index={1} child ={<Slots></Slots>}>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2} child ={<Slots></Slots>}>
      </CustomTabPanel>
    </Box>
  );
}