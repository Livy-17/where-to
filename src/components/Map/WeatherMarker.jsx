import React from 'react';

const WeatherMarker = ({ url }) => {
  return ( 
    <div>
      <img src={url} alt='Weather' width='auto' height='auto' />
    </div>
   );
}
 
export default WeatherMarker;