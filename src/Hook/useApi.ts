import axios from "axios";

export const useApi = () => ({
    useGithub: async (username: string) => {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        return response.data;
    },
    usePokedex: async (pokemon: string) => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        return response.data;
    },
    useWeather: async (lat: number, lon: number) => {
        const response = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
            params: {
                lat,
                lon,
                appid: "c550b3a2f032e12c151305ed289ca3a3",
                lang: 'pt',
                units: 'metric'
            }
        })
        return response.data;
    }
    
})