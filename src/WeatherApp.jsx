import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike:25.92,
        humidity: 18,
        temp: 26.82,
        tempMax: 26.82,
        tempMin: 26.82,
        weather: "clear sky"
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{
            textAlign:"center",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            // background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            padding:"20px"
        }}>
            <h2 style={{color:"black", fontSize:"2.5em", marginBottom:"30px"}}>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}