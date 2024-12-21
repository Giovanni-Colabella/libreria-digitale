import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AggiungiLibroPagina({aggiungiLibroSubmit}) {

    const [titolo, setTitolo] = useState('');
    const [descrizione, setDescrizione] = useState('');
    const [autore, setAutore] = useState('');
    const [categoria, setCategoria] = useState('Fantasy');
    const [prezzo, setPrezzo] = useState('');
    const [disponibile, setDisponibile] = useState(true);
    const [quantita, setQuantita] = useState(1);

    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();

        const nuovoLibro = {
            titolo,
            autore,
            categoria,
            descrizione,
            prezzo,
            disponibile,
            quantita
        }
        aggiungiLibroSubmit(nuovoLibro);

        return navigate("/catalogo");
    }

    return ( 
        <section className="bg-yellow-800">
            <div className="container m-auto max-w-2xl py-24">
                <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0 ">
                    <form onSubmit={submitForm}>
                        <h2 className="text-3xl text-center font-semibold m-6">Aggiungi un libro</h2>

                        {/* Titolo */}
                        <div className="mb-4">
                            <label htmlFor="titolo" className="block text-gray-700 font-bold mb-2">Titolo</label>
                            <input type="text"
                                id="titolo"
                                name="titolo"
                                className="border rounded w-full py-2 px-3 mb-2"
                                placeholder="Aggiungi un titolo..."
                                required
                                value={titolo}
                                onChange={(e) => setTitolo(e.target.value)}
                            />
                        </div>
                        {/* Descrizione */}
                        <div className="mb-4">
                            <label htmlFor="descrizione" className="block text-gray-700 font-bold mb-2">Descrizione</label>
                            <textarea
                                id="descrizione"
                                name="descrizione"
                                className="border rounded w-full py-2 px-3 mb-2"
                                rows="4"
                                placeholder="Aggiungi una descrizione..."
                                required
                                value={descrizione}
                                onChange={(e) => setDescrizione(e.target.value)}
                            ></textarea>
                        </div>
                        {/* Autore */}
                        <div className="mb-4">
                            <label htmlFor="autore" className="block text-gray-700 font-bold mb-2">Autore</label>
                            <input type="text"
                                id="autore"
                                name="autore"
                                className="border rounded w-full py-2 px-3 mb-2"
                                placeholder="Aggiungi autore"
                                required
                                value={autore}
                                onChange={(e) => setAutore(e.target.value)}
                            />
                        </div>
                        {/* Categoria */}
                        <div className="mb-4">
                            <label htmlFor="categoria" className="block text-gray-700 font-bold mb-2">Categoria</label>
                            <select name="categoria"
                                id="categoria"
                                className="border rounded w-full py-2 px-3"
                                required
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}
                            >
                                <option value="Fantasy">Fantasy</option>
                                <option value="Fantascienza">Fantascienza</option>
                                <option value="Mistero">Mistero</option>
                                <option value="Thriller">Thriller</option>
                                <option value="Romanzo Rosa">Romanzo Rosa</option>
                                <option value="Narrativa Storica">Narrativa Storica</option>
                                <option value="Horror">Horror</option>
                                <option value="Saggistica">Saggistica</option>
                                <option value="Biografia">Biografia</option>
                                <option value="Poesia">Poesia</option>
                                <option value="Avventura">Avventura</option>
                                <option value="Narrativa per Ragazzi">Narrativa per Ragazzi</option>
                                <option value="Letteratura per Bambini">Letteratura per Bambini</option>
                                <option value="Classici">Classici</option>
                                <option value="Fumetti">Fumetti</option>
                                <option value="Giallo">Giallo</option>
                                <option value="Letteratura Contemporanea">Letteratura Contemporanea</option>
                                <option value="Dramma">Dramma</option>
                                <option value="Satira">Satira</option>
                                <option value="Magia">Magia</option>
                                <option value="Realismo">Realismo</option>
                                <option value="Allegoria">Allegoria</option>
                                <option value="Utopia">Utopia</option>
                                <option value="Distopia">Distopia</option>
                                <option value="Epistolare">Epistolare</option>
                                <option value="Steampunk">Steampunk</option>
                                <option value="Cyberpunk">Cyberpunk</option>
                                <option value="Spionaggio">Spionaggio</option>
                            </select>
                        </div>
                        {/* Prezzo */}
                        <div className="mb-4">
                            <label htmlFor="prezzo" className="block text-gray-700 font-bold mb-2">Prezzo</label>
                            <input
                                type="number"
                                id="prezzo"
                                name="prezzo"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                min="0"
                                max="100"
                                step="0.01"
                                placeholder="Inserisci un prezzo"
                                required
                                value={prezzo}
                                onChange={(e) => setPrezzo(e.target.value)}
                            />
                        </div>
                        {/* Disponibile */}
                        <div className="mb-4">
                            <label htmlFor="disponibile" className="block text-gray-700 font-bold mb-2">Disponibile?</label>
                            <input
                                type="checkbox"
                                id="disponibile"
                                name="disponibile"
                                className="mr-2"
                                value={disponibile}
                                onChange={(e) => setDisponibile(e.target.value)}
                            />
                        </div>
                        {/* Quantità */}
                        <div className="mb-4">
                            <label htmlFor="qt" className="block text-gray-700 font-bold mb-2">Quantità</label>
                            <input
                                type="number"
                                id="qt"
                                name="qt"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                min="0"
                                max="50"
                                step="1"
                                placeholder="Inserisci una quantità"
                                required
                                value={quantita}
                                onChange={(e) => setQuantita(e.target.value)}
                            />
                        </div>
                        {/* Submit */}
                        <div>
                            <button
                                className="bg-green-600 hover:bg-green-900 text-black font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Aggiungi
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default AggiungiLibroPagina;