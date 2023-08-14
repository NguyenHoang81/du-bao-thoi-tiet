import "./current-weather.css";
import Notify from "../notify/notify";
import Swapanh from "../notify/swap";
//{ data } là một object được truyền vào component 
const CurrentWeather = ({ data }) => {
    Swapanh(data);
    return (     
        <div className="weather">
            <div className="top">
                <div>
                    <div className="country-city">
                        <p className="city">{data.city}</p>
                        <p className="country">{data.sys.country}</p>
                    </div>
                    <p className="motathoitiet">{data.weather[0].mota}</p>
                </div>
                <img alt="weather" className="weather-icon" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
            </div>
            <div className="bottom">
            <p className={Math.round(data.main.temp) <=28 ? "nhietdolanh" : "nhietdonong"}>{Math.round(data.main.temp)}°C</p>
                <div className="details">
                    <div className="thedubao">
                        <span className="thedubao-lebel">Dự báo</span>
                    </div>
                    <div className="thedubao">
                    <span className="thedubao-lebel"><Notify data={data}/></span>
                    </div>
                    <div className="thedubao">
                        <span className="thedubao-lebel">Cảm giác nhiệt độ</span>
                        <span className="thedubao-value">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="thedubao">
                        <span className="thedubao-lebel">Mây</span>
                        <span className="thedubao-value">{data.clouds.all}%</span>
                    </div>
                    <div className="thedubao">
                        <span className="thedubao-lebel">Tốc độ gió</span>
                        <span className="thedubao-value">{data.wind.speed} m/s</span>
                    </div>
                    <div className="thedubao">
                        <span className="thedubao-lebel">Độ ẩm</span>
                        <span className="thedubao-value">{data.main.humidity}%</span>
                    </div>
                    <div className="thedubao">
                        <span className="thedubao-lebel">Tầm nhìn xa</span>
                        <span className="thedubao-value">{data.main.sea_level} m</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CurrentWeather;
