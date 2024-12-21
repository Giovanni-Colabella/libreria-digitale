import Libri from "../components/Libri";
import Footer from "../components/Footer";
import Principale from "../components/Principale";

function Catalogo() {
    return (
        <section>
            <Principale></Principale>
            <Libri></Libri>
            <Footer></Footer>
        </section>
    );
}

export default Catalogo;
