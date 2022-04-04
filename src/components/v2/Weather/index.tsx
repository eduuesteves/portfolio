import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthContext';
import { FaTemperatureHigh } from '../Icons';

export function Weather2() {

    //para ver se o usuário aprovou o uso da location
    const [location, setLocation] = useState(false);

    const { weather, useWeather } = useContext(AuthContext);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            useWeather(position.coords.latitude, position.coords.longitude);
            setLocation(true);
        });
    }, []);

    return(
        <>
        {
            location ?

            <>
                <h3>{weather?.name}, {weather?.sys.country}</h3>
                <p><FaTemperatureHigh color="white" size={30} /> {weather?.main.temp} ºC</p> 
                <p style={{textTransform: 'capitalize'}}>{weather?.weather[0].description}</p>
                <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt={weather?.weather[0].description} />
            </> 
            : 
            <p>você precisa habilitar a localização</p>
        }
        </>
    )
}