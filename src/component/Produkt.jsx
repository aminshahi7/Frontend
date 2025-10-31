import React from "react";
import { useState, useEffect } from "react";
import ProduktCss from "../Style/ProduktCss.css"
import KasseGemischt from "../pages/KasseGemischt"
import {useNavigate } from "react-router-dom";

function Produkt(probs){

    const [zahl, setZahl] = useState(0);
    const navigate = useNavigate();

    const navigation = ()=>{
        if(probs.zahl==1){
            setZahl(1);
        } else if(probs.zahl == 2){
            setZahl(2);
        }
        
        if(zahl == 1){
            navigate("/KasseGemischt", {state : zahl} );
        }else if(zahl == 2){
            navigate("/KasseVegan", {state : zahl} );
        }
        
    }
    return(
        <div className={"HauptDiv"}>
            <img src={probs.food} alt="platte" className={"food"}/>
            <h5 className={"Header"}>{probs.text}</h5>
            <div className={"ButtonDiv"}>
                <button onClick={navigation} className={"Button"}>Bestellen</button>
            </div>

                

        </div>


    );
}

export default Produkt;