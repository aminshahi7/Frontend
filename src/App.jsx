import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home"
import Reservierung from "./pages/Reservierung"
import Bestellung from "./pages/Bestellung"
import Bestaetigung from "./pages/Bestaetigung"
import Admin from "./pages/Admin"
function App(){
    return(

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/reservierung" element={<Reservierung/>}/>
                <Route path="/bestellung" element={<Bestellung/>}/>
                <Route path="/bestaetigung" element={<Bestaetigung/>}/>
                <Route path="/admin" element={<Admin/>} />
            </Routes>
    );
}

export default App;