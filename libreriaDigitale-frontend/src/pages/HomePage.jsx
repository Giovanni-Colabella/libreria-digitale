import Principale from "../components/Principale";
import HomeCards from "../components/HomeCards";
import Libri from "../components/Libri";
import Footer from "../components/Footer";

function HomePage() {
    return (
        <>
            <Principale />
            <HomeCards />
            <Libri isHome={true}></Libri>
            <Footer></Footer>
        </>
    );
}

export default HomePage;