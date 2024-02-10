import { AppBar, Button, Toolbar, Typography} from '@mui/material'
import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// const borderedButtonStyles = {
//     border: '2px solid',  
//     fontSize: 16,
//     fontFamily: 'Poppins',
//     fontWeight: 600,
//     lineHeight: 20,
//     wordWrap: 'break-word',
//   };

const Barfont = {
    color: '#7D6AE9',
    fontSize: 16,
    fontFamily: 'Poppins',
    fontWeight: '600',
    lineHeight: 20,
    wordWrap: 'break-word'
     // Duplicate key 'fontSize'
  };


const NavBar = () => {
  return (
    <AppBar position='static' color='primary' sx={{ boxShadow: 'none', // Remove box shadow
    backgroundColor: 'transparent'}}>
    <Toolbar>
    <Typography variant='h6' flexGrow={1} sx={{fontFamily: 'Poppins', fontWeight: '900'}}>
      <span style={{ color: 'black' }}>Amarnath</span>
      {' '}
      <span style={{ color: '#7D6AE9' }}>Devshatwar</span>
    </Typography>
    <Typography variant='h6' flexGrow={1} style={{Barfont}} endIcon={<KeyboardArrowDownIcon/>}>
        Home
    </Typography>
    <Typography variant='h6' flexGrow={1} style={{Barfont}} endIcon={<KeyboardArrowDownIcon/>}>
        About us
    </Typography>
    <Typography variant='h6' flexGrow={1} style={{Barfont}} endIcon={<KeyboardArrowDownIcon/>}>
        Service 
    </Typography>
    <Typography variant='h6' flexGrow={1}  style={{Barfont}} endIcon={<KeyboardArrowDownIcon/>}>
        Portfolio
    </Typography>

    <Button variant="contained"  sx={{borderRadius: '4px', backgroundColor: '#F0EFF5', border: '1px solid #D0D3D6'}}>
      <Typography variant="body1" sx={{color :'#7D6AE9'}} >
        Download CV
      </Typography>
    </Button>
    <Button variant="contained"   sx={{borderRadius: '4px', backgroundColor: '#9048DD', border: '1 #7D6AE9', marginLeft: '30px'}}>
      <Typography variant="body1" sx={{color :'#D0D3D6'}} >
        Contact
      </Typography>
    </Button>
    </Toolbar>



    </AppBar>
  )
}

export default NavBar