import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

const getWeatherBasedOnLocation = (location) => {
  return apiClient.get(
      `/weather?q=${location}&APPID=${process.env.REACT_APP_WEATHER_APP_API}&units=metric`)
    .then((res) => res.data);
};

const getForecast = (lat, lon) => {
  return apiClient
    .get(`/onecall?lat=${lat}&lon=${lon}&APPID=${process.env.REACT_APP_WEATHER_APP_API}&units=metric`)
    .then((res) => res.data);    
};

const fiveDayForecast = (lat, lon) => {
  return apiClient
    .get(`/onecall?lat=${lat}&lon=${lon}&APPID=${process.env.REACT_APP_WEATHER_APP_API}&units=metric&exclude=minutely,hourly,alerts`)
    .then((res) => res.data);    
};

export { getWeatherBasedOnLocation, getForecast, fiveDayForecast };
