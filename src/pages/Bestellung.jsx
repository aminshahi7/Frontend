import React from "react";
import Header from "../component/Header";
import HeaderMobile from "../component/HeaderMobile";
import ObenLogin from "../component/ObenLogin"
import Body from "../component/Body"
import LoginObenMobile from "../component/LoginObenMobile"
import Footer from "../component/Footer";
import Bestellen from "../component/Bestellen";

function Bestellung(){
    return(
        <div>
            <Header/>
            <HeaderMobile/>
            <Bestellen/>
            <Footer/>
        </div>
    )
}

export default Bestellung;