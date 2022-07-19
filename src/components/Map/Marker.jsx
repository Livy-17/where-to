import React from 'react';
import { Rating, Paper, Typography } from '@mui/material';
import { LocationOnOutlined } from '@mui/icons-material';
import useStyles from './styles';

const Marker = ({ place, isDesktop }) => {

  const classes = useStyles();

  return ( 
    !isDesktop ? (
      <LocationOnOutlined color='primary' fontSize='large' />
    ) : (
      <Paper elevation={3} className={`${classes.paper} ${classes.markerContainer}`} sx={{ '&:hover': { cursor: 'pointer' } }}>
        <Typography gutterBottom variant='subtitle2' className={classes.typography}>
          {place.name}
        </Typography>
        {/* <img
          className={classes.pointer}
          src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
          alt={place.name}
        /> */}
        <Rating size='small' value={Number(place.rating)} readOnly sx={{ mt: '5px' }} />
      </Paper>
    )
   );
}
 
export default Marker;