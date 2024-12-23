import { useState, useEffect } from "react";
import { useParams, Link , useNavigate} from "react-router-dom";
import API_URL from "../config";

function LibroPagina() {

    const { id } = useParams();
    const [libro, setLibro] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchLibro = async () => {
            
            try {
                const res = await fetch(`${API_URL}/catalogo/${id}`);
                if (!res.ok) {
                    throw new Error("Errore nella risposta del server.");
                }
                const data = await res.json();
                setLibro(data);
            } catch (error) {
                console.error("Errore nel recupero dati: ", error);
            } finally {
                setLoading(false);
            }
        }

        fetchLibro();

    }, [id]);

    if (loading) {
        return <h2>Caricamento in corso...</h2>
    }

    if (!libro) {
        return <h2>Nessun articolo trovato...</h2>
    }

    const eliminaLibro = async () => {
        if (window.confirm("Sei sicuro di voler eliminare questo Libro?")) {
            try {
                const res = await fetch(`${API_URL}/catalogo/${id}`, {
                    method: 'DELETE'
                });

                if (!res.ok) {
                    throw new Error("Errore nell'eliminazione del libro...");

                }
                alert("Libro eliminato con successo");
                navigate('/');  
            } catch (error) {
                console.error("Errore nell'eliminazione del libro...");
                alert("Errore!!! Libro non eliminato.");
            }
        }
    }


    return (
        <div className="container mx-auto px-4 py-10">
            <div className="bg-yellow-100 p-5 rounded shadow-md">
                <h1 className="text-3xl font-bold mb-4">{libro.titolo}</h1>
                <h3 className="text-xl text-gray-700 mb-2">Autore: {libro.autore}</h3>
                <h4 className="text-lg text-gray-600 mb-4">Genere: {libro.categoria}</h4>
                <p className="text-md text-gray-800 mb-4">{libro.descrizione}</p>
                <p className="text-lg font-bold text-black">Prezzo: €{libro.prezzo.toFixed(2)}</p>
            </div>

            <div className="flex justify-between mt-6">
                {/* Pulsante per modificare */}
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
                    onClick={() => navigate(`/modifica/${id}`)}
                >
                    Modifica Libro
                </button>

                {/* Pulsante per cancellare */}
                <button
                    className="bg-red-600 text-white px-4 py-2 rounded shadow hover:bg-red-700"
                    onClick={eliminaLibro}
                >
                    Elimina Libro
                </button>
            </div>

            {/* Link per tornare alla home */}
            <Link
                to="/"
                className="mt-6 inline-block bg-yellow-600 text-white px-4 py-2 rounded shadow hover:bg-yellow-700"
            >
                Torna alla Home
            </Link>
        </div>
    );
}

export default LibroPagina;