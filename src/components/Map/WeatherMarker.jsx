import React from 'react';

const WeatherMarker = ({ url }) => {
  return ( 
    <div>
      <img src={url} alt='Weather' />
    </div>
   );
}
 
export default WeatherMarker;