import { useEffect, useState } from "react";
import { useApi } from "../Hook/useApi";
import { IPokemon } from "../Types/Pokemon";
import { IUser } from "../Types/User";
import { IWeather } from "../Types/Weather";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }: { children: JSX.Element}) {

    const [user, setUser] = useState<IUser | null>(null);
    const [pokemon, setPokemon] = useState<IPokemon | null>(null);
    const [weather, setWeather] = useState<IWeather | null>(null);

    const api = useApi();

    async function useGithub(username: string) {
        const data = await api.useGithub(username);
        if(data) {
            setUser(data);
        }
    }

    useEffect(() => {
        useGithub("eduddz");
    }, [])

    async function usePokedex(pokemon: string) {
        const data = await api.usePokedex(pokemon)
        if(data) {
            setPokemon(data);
        }
    }

    async function useWeather(lat: number, lon: number) {
        const data = await api.useWeather(lat, lon)
        if(data) {
            setWeather(data);
        }
    }

    return (
        <AuthContext.Provider value={{ user, pokemon, weather, useGithub, usePokedex, useWeather }}>
            {children}
        </AuthContext.Provider>
    )
}