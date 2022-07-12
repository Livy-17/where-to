import React from 'react';
import useStyles from './styles';
import { Rating, Typography, Box, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@mui/material';
import { LocationOn, Phone } from '@mui/icons-material';

const Details = ({ place, selected, refProp }) => {

  const classes = useStyles();

  if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return ( 
    <Card elevation={6} sx={{ boxShadow: 'none' }}>
      <CardMedia 
      sx={{height: 350}}
      image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
      title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant='h5'>{place.name}</Typography>
        <Box display='flex' justifyContent='space-between'>
          <Rating value={Number(place.rating)} readOnly />
          <Typography variant='subtitle1' gutterBottom>out of {place.num_reviews} reviews</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Price</Typography>
          <Typography variant='subtitle1' gutterBottom>{place.price_level}</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Ranking</Typography>
          <Typography variant='subtitle1'>{place.ranking}</Typography>
        </Box>
        {/* {place?.awards?.map((award, i) => (
          <Box key={i} display='flex' justifyContent='space-between' alignItems='center' my={1}>
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant='subtitle2' color='textSecondary'>{award.display_name}</Typography>
          </Box>
        ))} */}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} label={name} size='small' className={classes.chip} />
        ))}
        {place?.address && (
          <Typography variant='subtitle2' color='textSecondary' gutterBottom className={classes.subtitle} mt='10px'>
            <LocationOn /> {place.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography variant='subtitle2' color='textSecondary' gutterBottom className={classes.spacing} mt='10px'>
            <Phone /> {place.phone}
          </Typography>
        )}
        <CardActions>
          <Button size='small' color='primary' onClick={() => window.open(place.web_url, '_black')}>TripAdvisor</Button>
          <Button size='small' color='primary' onClick={() => window.open(place.website, '_black')}>Website</Button>
        </CardActions>
      </CardContent>
    </Card>
   );
}
 
export default Details;