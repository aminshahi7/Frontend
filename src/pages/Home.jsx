import React from "react";
import Header from "../component/Header";
import HeaderMobile from "../component/HeaderMobile";
import ObenLogin from "../component/ObenLogin"
import Body from "../component/Body"
import LoginObenMobile from "../component/LoginObenMobile"
import Footer from "../component/Footer";

function Home(){
    return(
        <div>
            <Header/>
            <HeaderMobile/>
            <ObenLogin/>
            <LoginObenMobile/>
            <Body/>
            <Footer/>
        </div>
    )
}

export default Home;