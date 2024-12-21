import { useState, useEffect } from "react";
import Libro from "./Libro";
import API_URL from '../config';

function Libri({ isHome = false }) {

    const [libri, setLibri] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchLibri = async () => {
        try {
            const res = await fetch(`${API_URL}/catalogo`);

            if (!res.ok) {
                throw new Error("Errore nella richiesta");
            }

            let data = await res.json();  // Usa let qui per poter modificare la variabile

            // Se siamo nella home, limitiamo a 3 libri
            if (isHome) {
                data = data.slice(-3).reverse();  // Limita i libri a 3
            }

            setLibri(data);
        } catch (error) {
            console.log("Errore!! ", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchLibri();
    }, []);

    if (loading)
        return <div>Caricamento...</div>

    return (
        <section className="bg-yellow-800 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                {isHome && (
                    <h2 className="text-3xl font-bold text-black mb-6 text-center">
                        Ultime Uscite:
                    </h2>
                )}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {libri.length > 0 ? (
                        libri.map(libro => (
                            <Libro key={ libro.id } libro={libro} />
                        ))
                    ) : (
                        <p>Nessun libro disponibile</p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Libri;
