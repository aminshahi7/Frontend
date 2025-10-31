import React from "react";
import { useState, useEffect } from "react";
import Produkt from "../component/Produkt"
import gemischtePlatte from "../images/gemischtePlatte.png"
import veganePlatte from "../images/veganePlatte.png"
import BestellenCss from "../Style/BestellenCss.css"
import untenPfeile from "../images/untenPfeile.png"


function Bestellen(){

    const foods = ["Pizza", "Pasta"];

    return(
        <div>
            <h1 className={"Header"}>Hauptgericht</h1>
            <div className={"PfeileDiv"}>
                <img src={untenPfeile} alt="Pfeile" className={"Pfeile"}/>
            </div>
            <div className={"Hauptdiv"}>
            <Produkt food={gemischtePlatte} text="Gemischte Platte" zahl={1}/>
            <Produkt food={veganePlatte} text="Vegane Platte" zahl={2}/>
            </div>
        </div>
    )
}

export default Bestellen;