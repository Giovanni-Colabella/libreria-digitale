import { Link } from "react-router-dom";
import Card from './Card';

function HomeCards() {
    return (
        <section className="bg-yellow-800 py-5">
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    <Card>
                        <h2
                            className="font-mono font-bold text-xl"
                        >
                            Esplora Libreria
                        </h2>
                        <p>
                            Esplora il Nostro Catalogo e Scopri il Libro che Racconta Chi Sei: Storie, Emozioni e Conoscenza per Esprimere al Meglio la Tua Unicità
                        </p>
                        <br />
                        <Link
                            className="border rounded-lg p-3 bg-zinc-900 text-slate-200"
                            to="/catalogo"
                        >
                            Catalogo
                        </Link>
                    </Card>

                    <Card>
                        <h2
                            className="font-mono font-bold text-xl"
                        >
                            Aggiungi un libro
                        </h2>
                        <p>
                            Personalizza la tua esperienza! Con l'opzione 'Aggiungi Libro', puoi arricchire la tua collezione personale selezionando i titoli che più ami. 
                        </p>
                        <br />
                        <Link
                            className="border rounded-lg p-3 bg-zinc-900 text-slate-200"
                            to="/aggiungi-libro"
                        >
                            Aggiungi
                        </Link>
                    </Card>
                </div>
            </div>
        </section>
    );
}

export default HomeCards;