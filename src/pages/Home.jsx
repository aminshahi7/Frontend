import Header from "../components/Header"
import EssenOben from "../components/EssenOben.jsx"
import Willkommen from "../components/Willkommen"
import Footer from "../components/Footer"

function HomeJs(){
    return(
        <div>
            <Header/>
            <EssenOben/>
            <Willkommen/>
            <Footer/>
        </div>
    );
}

export default HomeJs;