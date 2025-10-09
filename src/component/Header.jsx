import React, {useEffect} from "react";
import HeaderCss from "../Style/HeaderCss.css"
import imherzen from "../images/imherzen.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Header(){




    return(
        <div className="d-lg-flex divHaupt justify-content-between container-fluid p-4 ">
            <div className="d-flex divFoto">
                <img src={imherzen} className="imgLogo align-self-center" alt="Logo"/>
            </div>
            <div className="dropdown d-flex divNavH">
                <a className="aTag" href="#"><h4 className="li p-3 m-0 align-self-center navH">Restaurant </h4></a>
                <a className="aTag" href="#"><h4 className="li p-3 m-0 align-self-center navH">Speisekarte</h4></a>
                <a className="aTag" href="#"><h4 className="li p-3 m-0 align-self-center navH">Reservierung </h4></a>
                <a className="aTag" href="#"><h4 className="li p-3 m-0 align-self-center navH">jetzt bestellen</h4></a>
                <h4 className="li p-3 m-0 align-self-center dropdown dropdown-toggle navH" data-bs-toggle="dropdown">
                    Shop
                </h4>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Gutscheine</a></li>
                    <li><a className="dropdown-item" href="#">Kaffeeliqueur</a></li>
                </ul>
            </div>
        </div>


    )
}

export default Header;