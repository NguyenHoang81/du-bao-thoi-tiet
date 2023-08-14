import { Accordion, AccordionItemHeading, AccordionItem, AccordionItemPanel, AccordionItemButton } from "react-accessible-accordion";
import './forecast.css';
import React, { useState } from 'react';
import Notify from "../notify/notify";
const WEEK_DAYS = ['Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy', 'Chủ nhật'];
//
const ForeCast = ({ data }) => {
    const [selectedDays, setSelectedDays] = useState(3); //Lệnh này sử dụng React Hooks để khởi tạo một state 
    const dayInWeek = new Date().getDay();
    // selection số ngày
    const forecastDays = WEEK_DAYS.slice(dayInWeek,  WEEK_DAYS.length + selectedDays).concat(
        WEEK_DAYS.slice(0, dayInWeek)
    );
    const handleSelectChange = (event) => {
      setSelectedDays(parseInt(event.target.value)); // Update the selected number of days
    };
    console.log(forecastDays);
    ///    
    return (
        <>  
                <div className="title">
                    <label htmlFor="daySelect">Dự báo trong tuần </label>
                        <select className="select" value={selectedDays} onChange={handleSelectChange}>
                            <option value="3">3 ngày tới</option>
                            <option value="4">4 ngày tới</option>
                            <option value="5">5 ngày tới</option>
                            <option value="6">6 ngày tới</option>
                            <option value="7">7 ngày tới</option>
                        </select>
                </div>
                <Accordion allowZeroExpanded>
                    {data.list.slice(0, selectedDays).map((item, indx) => {
                    return (
                        <AccordionItem key={indx}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <div className="dialy-item">
                                        <img alt="weather" className="icon-small" src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />
                                        <label className="days">{forecastDays[indx]}</label>
                                        <label className="mota">{item.weather[0].mota}</label>
                                        <label><a className={Math.round(item.main.temp_max) <= 28 ? "min" : "max"}>{Math.round(item.main.temp_max)}°C</a> - <a className={Math.round(item.main.temp_min) <=28 ? "min":"max"}>{Math.round(item.main.temp_min)}°C</a></label>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="griddaily">
                                    <div className="itemdaily">
                                        <label className="text">Độ ẩm:</label>
                                        <label>{item.main.humidity}%</label>
                                    </div>
                                    <div className="itemdaily">
                                        <label>Mây:</label>
                                        <label>{item.clouds.all}%</label>
                                    </div>
                                    <div className="itemdaily">
                                        <label>Tốc độ gió:</label>
                                        <label>{item.wind.speed} m/s</label>
                                    </div>
                                    <div className="itemdaily">
                                        <label>Tầm nhìn xa:</label>
                                        <label>{item.main.sea_level} m</label>
                                    </div>
                                    <div className="dialyday">
                                        <label>Cảm giác như: </label>
                                        <label className={Math.round(item.main.feels_like) <= 28 ? "min" : "max"}>{Math.round(item.main.feels_like)}°C</label>
                                    </div>
                                    <div className="itemdaily">
                                        <label className="text">Dự báo:</label>
                                        <label><Notify data={item}/></label>
                                    </div>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    );
                })}
            </Accordion>
        </>
    );
}
export default ForeCast;
//dấu ba chấm là sao chép hết các trường giống hệt ví dụ ...state,keyword thì nó sao sao chepsra keyword