import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar,Toolbar, Typography, InputBase, Box } from '@mui/material';
import { Search } from '@mui/icons-material';
import useStyles from './styles';

const Header = ({ setCoordinates }) => {
  
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
        <Box display='flex'>
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
        </Box>
      </Toolbar>
    </AppBar>
   );
}
 
export default Header;