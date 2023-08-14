import React from 'react';
const Notify = ({ data }) => {
  let weatherNotification = "";
    const weatherIcons = {
        "01d": "Thời tiết đẹp để đi chơi",
        "02d": "Thời tiết đẹp để đi chơi",
        "03d": "Trời đẹp để đi làm",
        "04d": "Bạn nên mang theo ô phòng mưa",
        "09d": "Bạn nên mang theo ô",
        "10d": "Bạn nên mang theo ô",
        "11d": "Trời xấu bạn nên ở nhà hoặc không ra đường lúc mưa to",
        "13d": "Trời lạnh giá bạn nên mặc áo ấm",
        "50d": "Bạn nên mang đèn pin hoặc áo mưa",
        "01n": "Thời tiết đẹp để đi chơi",
        "02n": "Thời tiết đẹp để đi chơi",
        "03n": "Trời đẹp để đi làm",
        "04n": "Bạn nên mang theo ô phòng mưa",
        "09n": "Bạn nên mang theo ô",
        "10n": "Bạn nên mang theo ô",
        "11n": "Trời xấu bạn nên ở nhà hoặc không ra đường lúc mưa to",
        "13n": "Trời lạnh giá bạn nên mặc áo ấm",
        "50n": "Bạn nên mang đèn pin hoặc áo mưa"
    };
    const icon = data.weather[0].icon;
    if (weatherIcons.hasOwnProperty(icon)) {
        weatherNotification = weatherIcons[icon];
    }
    // hasownproperty xác định xem một đối tượng có chứa một thuộc tính cụ thể không. Phương thức này trả về một giá trị boolean
return (<div>{weatherNotification}</div>);
};
export default Notify;