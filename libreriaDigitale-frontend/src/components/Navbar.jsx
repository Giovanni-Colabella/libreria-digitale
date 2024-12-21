import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';

function Navbar() {

    const linkClass = "text-black hover:text-indigo-300";

    return (
        <nav className="bg-yellow-800 border-yellow-700 p-5">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between ">
                    <div className="flex items-center space-x-4">
                        <img src={logo} alt="logo"
                            className="h-16 w-auto" 
                        />
                        <span className="text-black text-lg font-semibold">
                            Libreria Digitale
                        </span>
                    </div>
                    
                    {/* Menu Links */}
                    <div className="flex space-x-4">
                        <Link
                            to="/"
                            className={linkClass}
                        >
                            Home
                        </Link>

                        <Link
                            to="/catalogo"
                            className={linkClass}
                        >
                            Esplora
                        </Link>

                        <Link
                            to="/aggiungi-libro"
                            className={linkClass}
                        >
                            Aggiungi un libro
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;