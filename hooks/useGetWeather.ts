import { useState, useEffect } from "react";
import * as Location from "expo-location";
import Constants from 'expo-constants';

export const useGetWeather = () => {
    const apiKey = Constants.expoConfig?.extra?.APIKEY;
  
  
    const [loading, setLoading] = useState(true);
    const[error, setError]=useState<string | null>(null);
    const[weather, setWeather]=useState([]);
    const[lat, setLat]=useState<number | null>(null);
    const[lon, setLon]=useState<number | null>(null);
  
    const fetchWeather = async () => {
      try{
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
        );
        const data = await response.json();
        setWeather(data);
      }
      catch(error){
        setError('Error fetching weather data');
      }
      finally{
        setLoading(false);
      }
    }
    
    useEffect(()=>{
      (async()=>{
        let { status }=await Location.requestForegroundPermissionsAsync ()
        if(status !== "granted"){
          setError("Permission to access location was denied")
          return
        }
        let location = await Location.getCurrentPositionAsync({})
        setLat(location.coords.latitude);
        setLon(location.coords.longitude);
        fetchWeather()
      })()
    },[lat,lon])

    return [loading, error, weather]
}