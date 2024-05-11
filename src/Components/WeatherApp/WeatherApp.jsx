import React from 'react';
import './WeatherApp.css';
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import drizzle_icon from '../assets/drizzle.png';
import humidity_icon from '../assets/humidity.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
import cloud_icon from '../assets/cloud.png';
import {useState} from 'react';
const WeatherApp = () => {
    let api_key="aa86d43f5c07338501f2c9bf8533f525";
    const humidity=document.getElementsByClassName("humidity-percent");
    const wind=document.getElementsByClassName("wind-rate");
    const temp=document.getElementsByClassName("weather-temp");
    const location=document.getElementsByClassName("weather-location");
    const [wicon,setWicon]=useState(cloud_icon);
    const [backgroundGradient, setBackgroundGradient] = useState('linear-gradient(180deg,#170e13,#7a7adb)');
    const search=async ()=>{
        const city=document.getElementsByClassName("cityInput");
        if(city[0].value===""){
            return 0;
        }
        try{
            
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${city[0].value}&units=Metric&appid=${api_key}`;
            const response=await fetch(url);
            let data=await response.json(); 
            humidity[0].innerHTML=`${data.main.humidity}%`;
            wind[0].innerHTML=`${Math.floor(data.wind.speed)} km/h`;
            temp[0].innerHTML=`${Math.floor(data.main.temp)}°c`;
            location[0].innerHTML=`${data.name}`
            // Determine background gradient based on temperature
            if (data.main.temp < 10 ) {
                setBackgroundGradient('linear-gradient(135deg, #2193b0, #6dd5fa)');
            } else if (data.main.temp >= 10 && data.main.temp < 25) {
                setBackgroundGradient('linear-gradient(135deg, #614385, #516395)');
            } else if (data.main.temp >25 && data.main.temp < 35) {
                setBackgroundGradient('linear-gradient(135deg, #09203f, #1d2671)');
            }
            else {
                setBackgroundGradient('linear-gradient(135deg, #c33764, #a890fe)');
            }
            // Set weather icon based on weather condition
            if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
                setWicon(clear_icon);
            } else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
                setWicon(cloud_icon);
            } else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
                setWicon(drizzle_icon);
            } else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
                setWicon(drizzle_icon);
            } else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
                setWicon(rain_icon);
            } else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
                setWicon(rain_icon);
            } else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
                setWicon(snow_icon);
            } else {
                setWicon(clear_icon);
            }
        }
        catch(err){
            humidity[0].innerHTML=`Not Found`;
            wind[0].innerHTML=`Not Found`;
            temp[0].innerHTML=`Not Found`;
            location[0].innerHTML=`Not Found`;
        }

    }
    
    
    
  return (
    <center> 
    <div className='container' style={{background:backgroundGradient}}>
        <div className='top-bar'>
            <input type="text" className='cityInput' placeholder='Search City'/>
            <div className='search-icon'>
                <img src={search_icon} alt="" onClick={()=>search()}/>
            </div>
        </div>
        <div className='weather-image'>
            <img src={wicon} alt="" />
        </div>
        <div className="weather-temp">24°c</div>
        <div className="weather-location">London</div>
        <div className="data-container">
            <div className='element'>
                <img src={humidity_icon} className='icon' />
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className='element'>
                <img src={wind_icon} className='icon' />
                <div className="data">
                    <div className="wind-rate">18 km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
        <div className='copyright'>
            Copyright &copy; <b>s1v4h3r3 &nbsp;&nbsp;{new Date().getFullYear()}</b>
        </div>
    </div>
    </center>
  )
}

export default WeatherApp


// import React, { useState } from 'react';
// import './WeatherApp.css';
// import search_icon from '../assets/search.png';
// import clear_icon from '../assets/clear.png';
// import drizzle_icon from '../assets/drizzle.png';
// import humidity_icon from '../assets/humidity.png';
// import rain_icon from '../assets/rain.png';
// import snow_icon from '../assets/snow.png';
// import wind_icon from '../assets/wind.png';
// import cloud_icon from '../assets/cloud.png';

// const WeatherApp = () => {
//     let api_key = "aa86d43f5c07338501f2c9bf8533f525";
//     const [backgroundGradient, setBackgroundGradient] = useState('linear-gradient(135deg, #2980b9, #6dd5fa)'); // State to hold background gradient

//     const humidity = document.getElementsByClassName("humidity-percent");
//     const wind = document.getElementsByClassName("wind-rate");
//     const temp = document.getElementsByClassName("weather-temp");
//     const location = document.getElementsByClassName("weather-location");
//     const [wicon, setWicon] = useState(cloud_icon);

//     const search = async () => {
//         const city = document.getElementsByClassName("cityInput");
//         if (city[0].value === "") {
//             return 0;
//         }
//         try {
//             let url = `https://api.openweathermap.org/data/2.5/weather?q=${city[0].value}&units=Metric&appid=${api_key}`;
//             const response = await fetch(url);
//             let data = await response.json();
//             humidity[0].innerHTML = `${data.main.humidity}%`;
//             wind[0].innerHTML = `${Math.floor(data.wind.speed)} km/h`;
//             temp[0].innerHTML = `${Math.floor(data.main.temp)}°c`;
//             location[0].innerHTML = `${data.name}`;
//             // Determine background gradient based on temperature
//             if (data.main.temp < 10) {
//                 setBackgroundGradient('linear-gradient(135deg, #2193b0, #6dd5fa)');
//             } else if (data.main.temp >= 10 && data.main.temp < 25) {
//                 setBackgroundGradient('linear-gradient(135deg, #2980b9, #6dd5fa)');
//             } else {
//                 setBackgroundGradient('linear-gradient(135deg, #eb5757, #faaca8)');
//             }
//             // Set weather icon based on weather condition
//             if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
//                 setWicon(clear_icon);
//             } else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
//                 setWicon(cloud_icon);
//             } else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
//                 setWicon(drizzle_icon);
//             } else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
//                 setWicon(drizzle_icon);
//             } else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
//                 setWicon(rain_icon);
//             } else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
//                 setWicon(rain_icon);
//             } else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
//                 setWicon(snow_icon);
//             } else {
//                 setWicon(clear_icon);
//             }

//         } catch (err) {
//             humidity[0].innerHTML = `Not Found`;
//             wind[0].innerHTML = `Not Found`;
//             temp[0].innerHTML = `Not Found`;
//             location[0].innerHTML = `Not Found`;
//         }

//     }

//     return (
//         <center>
//             <div className='container' style={{ background: backgroundGradient }}>
//                 <div className='top-bar'>
//                     <input type="text" className='cityInput' placeholder='Search City' />
//                     <div className='search-icon'>
//                         <img src={search_icon} alt="" onClick={() => search()} />
//                     </div>
//                 </div>
//                 <div className='weather-image'>
//                     <img src={wicon} alt="" />
//                 </div>
//                 <div className="weather-temp">24°c</div>
//                 <div className="weather-location">London</div>
//                 <div className="data-container">
//                     <div className='element'>
//                         <img src={humidity_icon} className='icon' />
//                         <div className="data">
//                             <div className="humidity-percent">64%</div>
//                             <div className="text">Humidity</div>
//                         </div>
//                     </div>
//                     <div className='element'>
//                         <img src={wind_icon} className='icon' />
//                         <div className="data">
//                             <div className="wind-rate">18 km/h</div>
//                             <div className="text">Wind Speed</div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='copyright'>
//                     Copyright &copy; <b>s1v4h3r3 &nbsp;&nbsp;{new Date().getFullYear()}</b>
//                 </div>
//             </div>
//         </center>
//     )
// }

// export default WeatherApp;
