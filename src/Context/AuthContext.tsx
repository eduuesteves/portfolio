import { createContext } from "react";
import { IPokemon } from "../Types/Pokemon";
import { IUser } from "../Types/User"
import { IWeather } from "../Types/Weather";

export type AuthContextType = {
    user: IUser | null;
    pokemon: IPokemon | null;
    weather: IWeather | null;
    useGithub: (username: string) => {};
    useWeather: (lat: number, lon: number) => {}; 
    usePokedex: (pokemon: string) => {}; 
}

export const AuthContext = createContext<AuthContextType>(null!)