import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar,Toolbar, Typography, InputBase, Box } from '@mui/material';
import { Search, LightMode, DarkMode } from '@mui/icons-material';
import useStyles from './styles';

const Header = ({ setCoordinates, colorMode, mode, setMode }) => {
  
  const classes = useStyles();

  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => setAutocomplete(autoC);
  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
  };

  return ( 
    <AppBar position='static'>
      <Toolbar className={`${classes.toolbar} ${ mode === 'light' ? classes.bgLight : classes.bgDark }`}>
        <Typography variant='h5' sx={ mode === 'light' ? {fontFamily: 'Shadows Into Light', color: 'black'} : {fontFamily: 'Shadows Into Light'} }>
          WhereTo
        </Typography>
        <Box display='flex' alignItems='center'>
          <Typography variant='h6' className={classes.displayLg} sx={ mode === 'light' ? {fontFamily: 'Dancing Script', color: 'black'} : {fontFamily: 'Dancing Script'}}>
            Find your destinations
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged} >
             <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <Search sx={ mode === 'light' ? {color: 'gray', zIndex: '2'} : {color: 'white'}} />
                </div>
                <InputBase placeholder='Search...' className={classes.searchInput} sx={ mode === 'light' ? {backgroundColor: '#f2f2f2', borderRadius: '5px'} : {backgroundColor: ''}} />
             </div>
          </Autocomplete>
          {mode === 'dark' ? 
            <Box className={classes.sunIcon} onClick={colorMode.toggleColorMode}><LightMode/></Box>
            : 
            <Box className={classes.moonIcon} onClick={colorMode.toggleColorMode}><DarkMode sx={{color: 'black'}}/></Box>
          }
        </Box>
      </Toolbar>
    </AppBar>
   );
}
 
export default Header;