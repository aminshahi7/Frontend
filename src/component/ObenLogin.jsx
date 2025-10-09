import React, {useEffect, useState} from "react";
import ObenLoginCss from "../Style/ObenLoginCss.css"
import essenBestellen from  "../images/essenBestellen.png"
import tischReservieren from "../images/tischReservieren.png"
function ObenLogin(){

    const [isBlurred , setIsBlurred] = useState(false);

    useEffect(() => {
        const timer = setTimeout(()=>{
            setIsBlurred(true);
        },500);

        return ()=> clearTimeout(timer)

    }, []);

    return(
        <div  className={"hauptDiv d-lg-flex"}>
            <div className={`obenBackground ${isBlurred ? 'obenBackground2' : ''}`}></div>
            <div className={`loginDiv ${isBlurred ? 'loginDiv2' : ''}`}>
                <div className="loginDatei1 flex-column align-items-center justify-content-center">
                    <h4>Login</h4>
                    <h1>Coming soon</h1>
                </div>
                <div className="loginDatei2 flex-column align-items-center justify-content-center">
                    <h4 className="mb-5">Tisch Reservieren</h4>
                    <img className="tischReservieren mb-5" src={tischReservieren} alt="reservieren"/>
                    <button className="btnBestellen btn">jetzt Reservieren</button>
                </div>
                <div className="loginDatei3 flex-column align-items-center justify-content-center">
                    <h4 className="mb-5">Gemischte Platte</h4>
                    <img className="essenBestellen mb-5" src={essenBestellen} alt="Essen Bestellen"/>
                    <button className="btnBestellen btn">jetzt Bestellen</button>
                </div>
            </div>
        </div>
    )
}

export default ObenLogin;