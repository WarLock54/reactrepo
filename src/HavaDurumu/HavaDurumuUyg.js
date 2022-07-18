import HavaDurumuAcıklama from "./HavaDurumuAcıkla";
import HavaDurumuForm from "./HavaDurumuForm";
import HavaDurumuMap from "./HavaDurumuMap";
import {useState,useEffect} from "react";
import Loading  from "./Loading";
export default function HavaDurumuUyg(){
    const [weather,setWeather]=useState(null);
    useEffect(()=>{
        loadİnfo();
    },[]);

    useEffect(()=>{
        document.title=`Weather | ${weather?.location.country}`;
    },[weather]);

    async function loadİnfo(city="Ecuador"){
        try{
            const data=await fetch(
                `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}}`
            );
            const response=await data.json();
            setWeather(response);

            
        }
        catch(error){
            console.log("Hataaaaa!!!!!!");
        }

    }

    function handleChangeCity(city){
        setWeather(null);
        loadİnfo(city);
    }
    return (
<div className="weather-app">

<HavaDurumuForm  onChangeCity={handleChangeCity}/>
{
    weather?(
        <>
            <HavaDurumuAcıklama  weather={weather} /><HavaDurumuMap weather={weather} />
        </>
    ):(
        <Loading />

    )
};
</div>
    
    
    
    );

}