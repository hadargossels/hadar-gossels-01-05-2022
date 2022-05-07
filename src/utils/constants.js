export const BASE_URL = `https://dataservice.accuweather.com/`

export const END_POINT = {
  LOCATION: `locations/v1/cities/autocomplete`,  
  CURRENT: `currentconditions/v1`, 
  FORECAST: `forecasts/v1/daily/5day` 
};

export const APP_KEY = process.env.REACT_APP_API_KEY