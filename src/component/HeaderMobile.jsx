import React from "react";
import HeaderMobilCss from "../Style/HeaderMobileCss.css"
import imherzen from "../images/imherzen.png"
import LogoMenu from "../images/menu.png"
import Postcard from "../images/Postcard.png"


function HeaderMobile(){
    return(
        <div>
            <div className="header justify-content-between align-items-center">
                <img className="Logo" src={imherzen} alt="Logo"/>
                <img className="LogoMenu" data-bs-toggle="collapse" data-bs-target="#Menu" src={LogoMenu} alt="LogoMenu"/>
            </div>
            <div id="Menu" className="Menu flex-column align-items-center collapse">
                <a className="items m-2" href="#">
                    Restaurant
                </a>
                <a className="items m-2" href="#">
                    Speisekarte
                </a>
                <a className="items m-2" href="#">
                    Reservierung
                </a>
                <a className="items m-2" href="#">
                    jetzt bestellen
                </a>
                <a className="items m-2 mb-4 dropdown dropdown-toggle" data-bs-toggle="dropdown" href="#">
                    Shop
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Gutscheine</a></li>
                    <li><a className="dropdown-item" href="#">Kaffeeliqueur</a></li>
                </ul>
            </div>
            <div className="postcardDiv">
                <img className="postcardFoto" src={Postcard} alt="postcard"/>
            </div>
        </div>
    )
}

export default HeaderMobile;