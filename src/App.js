import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import Footer from './components/Footer/Footer';
import { useMediaQuery, createTheme, useTheme, ThemeProvider, Box, CssBaseline, Grid } from "@mui/material";
import { getPlacesData, getWeatherData } from './api';

function App() {

  const theme = useTheme();

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light');
  const colorTheme = useMemo(
    () => 
    createTheme({
      palette: {
        mode
      }
    }), [mode]
  );
  const colorMode = useMemo(
    () => ({
            toggleColorMode: () => {
              setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            }
          }), []
  );

  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  const [childClicked, setChildClicked] = useState(false); 
  const [isLoading, setIsLoading] = useState(true);
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude }}) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    const filteroutPlaces = places.filter((place) => place.rating > rating);
    setFilteredPlaces(filteroutPlaces);
  }, [rating]);

  useEffect(() => {
    if (bounds) {
      getWeatherData(coordinates.lat, coordinates.lng)
        .then(data => setWeatherData(data))
    }
  }, [bounds]);

  useEffect(() => {
    if (bounds) {
      setIsLoading(true);

      getPlacesData(type, bounds.sw, bounds.ne)
        .then((data) => {
          return data?.filter(item => 'address' in item)
        })
        .then((data) => {
          setPlaces(data.filter(place => place.name));
          setFilteredPlaces([]);
          setChildClicked(false);
          setIsLoading(false);
        });
    }
  }, [bounds, type]);

  if ( mode === 'light' ) {
    document.body.style = 'background-color: #f2f2f2;';
  } else if ( mode === 'dark' ) {
    document.body.style = 'background-color: #121212;';
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ThemeProvider theme={colorTheme}>
          <CssBaseline />
          <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
            <Header
            setCoordinates={setCoordinates}
            colorMode={colorMode}
            mode={mode}
            setMode={setMode}
            />
            <Grid container spacing={3} sx={{width: "100%"}}>
              <Grid item xs={12} lg={4}>
                <List
                  places={filteredPlaces.length ? filteredPlaces : places}
                  childClicked={childClicked}
                  isLoading={isLoading}
                  type={type}
                  setType={setType}
                  rating={rating}
                  setRating={setRating}
                  mode={mode}
                />
              </Grid>
              <Grid item xs={12} lg={8} >
                <Map
                setCoordinates={setCoordinates}
                setBounds={setBounds} 
                coordinates={coordinates}
                places={filteredPlaces.length ? filteredPlaces : places}
                setChildClicked={setChildClicked}
                weatherData={weatherData}
                mode={mode}
                />
              </Grid>
            </Grid>
            {/* <Footer /> */}
          </Box>
        </ThemeProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;