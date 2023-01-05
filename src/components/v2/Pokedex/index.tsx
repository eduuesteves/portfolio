import { useState, useEffect, ChangeEvent, useContext } from "react"
import { MdCatchingPokemon } from "react-icons/md";
import { AuthContext } from "../../../Context/AuthContext";

export function Pokedex2() {
    const [num, setNum] = useState('25');

    const { pokemon, usePokedex } = useContext(AuthContext)

    useEffect(() => {
        usePokedex(num)
    }, [num])

    const handleChange = (
        e: ChangeEvent<HTMLInputElement>
        ) => {
            if(
                e.currentTarget.value > '0' 
                && 
                e.currentTarget.value < '899'
            ) {
                setNum(e.currentTarget.value)
            }
    }

    return (
        <>
        <label>
            <MdCatchingPokemon 
                color="red" 
                size={30}
            />
            <input 
                type="number" 
                placeholder="25" 
                onChange={handleChange}
                value={num}
            />
        </label>

        <div>
            <h3 style={{padding: "1rem 0", background: "rgba(0, 0, 0, 0.3)", width: "100%", color: "white"}}>{pokemon?.name}</h3>
            <img 
                className="pokemon" 
                width="auto"
                height="auto"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`} 
                alt="Pokemon"
            />
        </div>
        </>
    )
}