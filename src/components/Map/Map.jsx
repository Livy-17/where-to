import React from 'react';
import GoogleMapReact from 'google-map-react';
import { useMediaQuery } from '@mui/material';
import useStyles from './styles';
import Marker from './Marker';
import { MapStyleLight, MapStyleDark } from './MapStyles';
import WeatherMarker from './WeatherMarker';

const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked, weatherData, mode }) => {

  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width:600px)');
  
  return ( 
    <div className={classes.mapContainer}>
      <GoogleMapReact 
        bootstrapURLKeys={{ key: process.env.REACT_APP_GM_API_KEY}} 
        defaultCenter={Object.keys(coordinates).length ? coordinates : { lat: 51.5072, lng: 0.1276 }}
        center={Object.keys(coordinates).length ? coordinates : { lat: 51.5072, lng: 0.1276 }}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true, styles: mode === 'light' ? MapStyleLight : MapStyleDark }}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw});
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <Marker key={i} place={place} isDesktop={isDesktop} lat={Number(place.latitude)} lng={Number(place.longitude)} />
        ))}
        
        {weatherData?.list?.map((data, i) => {
          const url=`https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
          return (
            <WeatherMarker key={i} lat={data.coord.lat} lng={data.coord.lon} url={url} />
          )}
        )}
      </GoogleMapReact>
    </div>
   );
}
 
export default Map;