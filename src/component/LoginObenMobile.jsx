import React, {useState} from "react";
import LoginObenMobileCss from "../Style/LoginObenMobileCss.css"
import next2 from "../images/next2.png"
import next1 from "../images/next1.png"
import tischReservieren from "../images/tischReservieren.png"
import Essen from "../images/essenBestellen.png"
import Terasse from "../images/Terasse.png"
import Resto from "../images/Resto.png"
import Bar from "../images/Bar.png"
import Soundanlage from "../images/Soundanlage.png"
function LoginObenMobile(){

    const [count, setCount] = useState(1)

    const next2F = ()=>{
        if (count === 1){
            setCount(2)
        } else {
            setCount(1)
        }
    }

    const next1F = ()=>{
        if (count === 1){
            setCount(2)
        } else {
            setCount(1)
        }
    }

    return(
        <div className="Div mt-5">
            <div className="next2Div">
                <img className="next2" src={next2} alt="flash" onClick={next2F}/>
            </div>
            <div className={`mitteDiv1Active flex-column ${count === 1 ? 'd-none' : 'd-flex'}`}>
                <h5 className="mb-4">Tisch Reservieren</h5>
                <img className="tischReservieren" src={tischReservieren} alt=""/>
                <button className="btnBestellen btn mt-4">jetzt Reservieren</button>
            </div>
            <div className={`mitteDiv2Active  flex-column ${count === 1 ? 'd-flex ' : 'd-none'}`}>
                <h5 className="mb-4">Essen Bestellen</h5>
                <img className="tischBestellen" src={Essen} alt=""/>
                <button className="btnBestellen btn mt-4">jetzt Bestellen</button>
            </div>
            <div className="next1Div">
                <img className="next1" src={next1} alt="flash" onClick={next1F}/>
            </div>
        </div>
    )
}

export default LoginObenMobile;