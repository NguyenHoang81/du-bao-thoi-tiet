import './App.css';
import Search from './component/search/search';
import CurrentWeather from './component/current-weather/current-weather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import { useState, useEffect } from 'react';
import ForeCast from './component/forecast/forecast';
import { MdLocationOn } from 'react-icons/md';
import Thoigiancity from './component/time/timecr';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lon: longitude });
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ');

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric&lang=vi`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric&lang=vi`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  const handleSetCurrentLocation = () => {
    if (currentLocation) {
      const latLonString = `${currentLocation.lat} ${currentLocation.lon}`;
      const searchData = { value: latLonString, label: 'Hanoi VN' };
      handleOnSearchChange(searchData);
    }
  };
  return (
    <>
      <div className="container">
      <div className='search'>
      {Thoigiancity(currentWeather?.timezone)}
      </div>
        <div className="search">
          <span className='search1'><Search onSearchChange={handleOnSearchChange} /></span>
          <button className="location-icon" onClick={handleSetCurrentLocation}>
            <MdLocationOn />
          </button>
        </div>
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast && <ForeCast data={forecast} />}
      </div>
    </>
  );
}
export default App;
//Toán tử ?. trong JavaScript được gọi là toán tử optional chaining (optional chaining operator). 
//Nó được sử dụng để truy cập các thuộc tính hoặc phương thức của một object mà có thể là null hoặc undefined mà không gây ra lỗi.