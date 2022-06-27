import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar,Toolbar, Typography, InputBase, Box } from '@mui/material';
import { Search, LightMode, DarkMode } from '@mui/icons-material';
import useStyles from './styles';

const Header = ({ setCoordinates, colorMode, isDark, setIsDark }) => {
  
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
      <Toolbar className={classes.toolbar}>
        <Typography variant='h5'>
          WhereTo
        </Typography>
        <Box display='flex' alignItems='center'>
          <Typography variant='h6' className={classes.displayLg}>
            Find your destinations
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged} >
             <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <Search />
                </div>
                <InputBase placeholder='Search...' className={classes.searchInput} />
             </div>
          </Autocomplete>
          {isDark ? 
            <Box className={classes.sunIcon} onClick={colorMode.toggleColorMode}><LightMode/></Box>
            : 
            <Box className={classes.moonIcon} onClick={colorMode.toggleColorMode}><DarkMode/></Box>
          }
        </Box>
      </Toolbar>
    </AppBar>
   );
}
 
export default Header;