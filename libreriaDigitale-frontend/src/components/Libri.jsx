import { useState, useEffect } from "react";
import Libro from "./Libro";
import API_URL from "../config";

function Libri({ isHome = false }) {
    const [libri, setLibri] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
    const [searching, setSearching] = useState(false); // Stato per il caricamento della ricerca

    // Debouncing: aggiorna il termine di ricerca dopo un ritardo
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 500); // Ritardo di 500 ms

        return () => {
            clearTimeout(handler); // Cancella il timer se l'utente continua a digitare
        };
    }, [searchTerm]);

    // Funzione per recuperare i libri
    const fetchLibri = async (keyword = "") => {
        setLoading(true);
        setSearching(true); // Attiva lo stato di ricerca

        try {
            let endpoint;

            if (keyword) {
                // Endpoint per la ricerca
                endpoint = `${API_URL}/catalogo/cerca?keyword=${encodeURIComponent(keyword)}`;
            } else {
                // Endpoint per l'intero catalogo
                endpoint = `${API_URL}/catalogo`;
            }

            const res = await fetch(endpoint);

            if (!res.ok) {
                throw new Error("Errore nella richiesta");
            }

            let data = await res.json();

            if (isHome && !keyword) {
                // Limita i libri a 3 nella home
                data = data.slice(-3).reverse();
            }

            setLibri(data);
        } catch (error) {
            console.error("Errore!! ", error);
        } finally {
            setLoading(false);
            setSearching(false); // Disattiva lo stato di ricerca
        }
    };

    // Effetto per aggiornare i risultati in base al termine di ricerca "debounced"
    useEffect(() => {
        fetchLibri(debouncedSearchTerm);
    }, [debouncedSearchTerm]);

    if (loading && !searching) return <div>Caricamento...</div>;

    return (
        <section className="bg-yellow-800 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                {isHome && !searchTerm && (
                    <h2 className="text-3xl font-bold text-black mb-6 text-center">
                        Ultime Uscite:
                    </h2>
                )}

                {/* Campo di input per la ricerca */}
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Cerca un libro..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-3 rounded-md border border-gray-300"
                    />
                </div>

                {/* Aggiungi un indicatore di caricamento per la ricerca */}
                {searching && <div className="text-center">Ricerca in corso...</div>}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {libri.length > 0 ? (
                        libri.map((libro) => <Libro key={libro.id} libro={libro} />)
                    ) : (
                        <p>Nessun libro disponibile</p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Libri;
