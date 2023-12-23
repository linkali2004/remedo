import '../App.css'
import Appbar from './Appbar'
import Middlecontainer from './Middlecontainer'
import { Avatar, Box, Link } from '@mui/material';


function clickhandle()
{
    window.scrollTo(0,1000);
}

export default function Mainpage() {
    return (
        <>
            <Appbar>
                <Box sx={{ flexGrow: 1 }}>
                    <Avatar style={{ backgroundColor: "#ff6767", width: "45px", height: "45px", cursor: "pointer" }}>MD</Avatar>
                </Box>

                <Link color="primary" underline="none" onClick={clickhandle} style={{ fontWeight: 550 }}>Help?</Link>
            </Appbar>
            <Middlecontainer></Middlecontainer>
        </>
    )
}
