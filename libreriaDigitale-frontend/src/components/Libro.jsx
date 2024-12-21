import { Link } from "react-router-dom";

function Libro({ libro }) {
    return (
        <div className="p-4 bg-white shadow-md rounded">
            <h3 className="font-bold text-lg">{libro.titolo}</h3>
            <p>{libro.autore}</p>
            <p>{libro.categoria}</p>
            <p>{libro.descrizione}</p>
            <p>Disponibile: {libro.disponibile ? 'Sì' : 'No'}</p>
            <p>Quantita: {libro.quantita}</p>
            <p><strong>Prezzo:</strong> €{libro.prezzo}</p>
            <br />
            <div className="flex flex-col lg:flex-row justify-between mb-4">
                <Link
                    to={`/catalogo/${libro.id}`}
                    className="h-[36px] bg-black hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                    Leggi
                </Link>
            </div>
        </div>
    );
}

export default Libro;