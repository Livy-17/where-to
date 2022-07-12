import React, { useState, useEffect, createRef } from 'react';
import { Button, Box, CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import useStyles from './styles';
import Details from '../Details/Details';
import { useTheme } from '@mui/material';

const List = ({ places, childClicked, isLoading, type, setType, rating, setRating, mode }) => {

  const classes = useStyles();
  const theme = useTheme();

  const [ elemRefs, setElemRefs ] = useState([]);

  useEffect(() => {
    setElemRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
  }, [places]);

  return ( 
    <div className={classes.container}>
      <Box className={classes.displayXs} >
        <Typography variant='h6'>
          Start exploring
        </Typography>
      </Box>
      <Typography variant='h5' className={classes.displayLg} sx={{fontFamily: 'Nonito'}}>
        Restaurants, Hotels and Attractions around you
      </Typography>
      {isLoading ? (
        <div className={classes.loading}><CircularProgress size='5rem' /></div>
      ) : (
      <Box>
        <Box m='20px 0 40px 0'>
          <Grid container >
            <Grid item xs={12} lg={6} mb='10px'>
              <FormControl className={classes.select}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={ (e) => setType(e.target.value)} label='Type' sx={{height: '40px'}}>
                  <MenuItem value='restaurants'>Restaurants</MenuItem>
                  <MenuItem value='hotels' disabled>Hotels (API error)</MenuItem>
                  <MenuItem value='attractions'>Attractions</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} lg={6}>
              <FormControl className={classes.select}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={ (e) => setRating(e.target.value)} label='Rating' sx={{height: '40px'}}>
                  <MenuItem value={0}>All</MenuItem>
                  <MenuItem value={3}>About 3.0</MenuItem>
                  <MenuItem value={4}>About 4.0</MenuItem>
                  <MenuItem value={4.5}>About 5.0</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
        <Box className={classes.listContainer}>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid item ref={elemRefs[i]} key={i} xs={12} >
                <Details
                  place={place}
                  selected={Number(childClicked) === i}
                  refProp={elemRefs[i]}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      )}
    </div>
   );
}
 
export default List;