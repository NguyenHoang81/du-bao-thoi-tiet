const Swapanh = (data) => {
    const weatherIcons = {
      "01d": "itmay",
      "02d": "troinang",
      "03d": "nhieumay",
      "04d": "uam",
      "09d": "troimua",
      "10d": "muanang",
      "11d": "troigiong",
      "13d": "tuyetroi",
      "50d": "suongmu",
      "01n": "itmay",
      "02n": "troinang",
      "03n": "nhieumay",
      "04n": "uam",
      "09n": "troimua",
      "10n": "troimua",
      "11n": "troigiong",
      "13n": "tuyetroi",
      "50n": "suongmu"
    };
  
    const icon = data.weather[0].icon;
    let swapanh = "";
    if (weatherIcons.hasOwnProperty(icon)) {
      swapanh = weatherIcons[icon];
    }
  
    const body = document.querySelector('body');
    body.className = swapanh;
  };
  
  export default Swapanh;