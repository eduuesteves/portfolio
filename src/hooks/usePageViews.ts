// src/hooks/usePageViews.ts
import { useState, useEffect } from 'react';

// Namespace único para o seu portfólio (substitua por um identificador exclusivo se quiser)
const NAMESPACE = 'eduardodorta-portfolio';
const KEY = 'visits';

export function usePageViews() {
    const [views, setViews] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function registerAndFetchView() {
            try {
                // O CountAPI incrementa e retorna o novo valor em uma única chamada hit
                const response = await fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`);
                const data = await response.json();
                setViews(data.value);
            } catch (error) {
                console.error("Erro ao registrar visita:", error);
                // Fallback caso a API esteja instável
                setViews(0);
            } finally {
                setLoading(false);
            }
        }

        registerAndFetchView();
    }, []);

    return { views, loading };
}