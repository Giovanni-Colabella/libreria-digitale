import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API_URL from "../config";

function ModificaLibro() {
    const { id } = useParams();
    const [libro, setLibro] = useState({
        titolo: "",
        autore: "",
        categoria: "",
        descrizione: "",
        prezzo: 0
    });
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
        };

        fetchLibro();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLibro((prevLibro) => ({
            ...prevLibro,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${API_URL}/catalogo/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(libro)
            });

            if (!res.ok) {
                throw new Error("Errore nell'aggiornamento del libro.");
            }

            alert("Libro aggiornato con successo!");
            navigate(`/catalogo/${id}`); // Torna alla pagina del libro dopo la modifica
        } catch (error) {
            console.error("Errore nell'aggiornamento del libro: ", error);
            alert("Errore nell'aggiornamento del libro.");
        }
    };

    if (loading) {
        return <h2>Caricamento in corso...</h2>;
    }

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-4">Modifica Libro</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <div className="mb-4">
                    <label htmlFor="titolo" className="block text-gray-700 font-bold">Titolo</label>
                    <input
                        type="text"
                        id="titolo"
                        name="titolo"
                        value={libro.titolo}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="autore" className="block text-gray-700 font-bold">Autore</label>
                    <input
                        type="text"
                        id="autore"
                        name="autore"
                        value={libro.autore}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="categoria" className="block text-gray-700 font-bold">Genere</label>
                    <input
                        type="text"
                        id="categoria"
                        name="categoria"
                        value={libro.categoria}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="descrizione" className="block text-gray-700 font-bold">Descrizione</label>
                    <textarea
                        id="descrizione"
                        name="descrizione"
                        value={libro.descrizione}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="prezzo" className="block text-gray-700 font-bold">Prezzo</label>
                    <input
                        type="number"
                        id="prezzo"
                        name="prezzo"
                        value={libro.prezzo}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
                >
                    Salva Modifiche
                </button>
            </form>
        </div>
    );
}

export default ModificaLibro;
