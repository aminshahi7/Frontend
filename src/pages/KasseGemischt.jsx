import React from "react";
import { useState, useEffect } from "react";
import Header from "../component/Header"
import KasseGemischtCss from "../Style/KasseGemischtCss.css";
import Korb0 from "../images/Korb0.png"
import Korb1 from "../images/Korb1.png"
import gemischtePlatte from "../images/gemischtePlatte.png"

function KasseGemischt(probs){
    const [hilfe, setHilfe] = useState(0);

  
    return(
        
        
        <div>
            <Header/>
            <div>
                <h1 className={"HeaderH1"}>Gemischte Platte</h1>
            </div>
            <div className={"imgDiv"}>
                <img className={"Platte"} src={gemischtePlatte} alt="Platte" />
            </div>
            <div className={"CheckBoxDiv"}>
                <div className={"CheckBoxDiv2"}>
                <label>
                    <input type="checkbox" />
                    <b>Zigni </b> <span>geschnetzeltes Lammfleisch in scharfer Soße</span>
                </label>
                </div>
                <div className={"CheckBoxDiv2"}>
                <label>
                    <input type="checkbox" />
                    <b>Sega ms Yehmlti </b> <span>lammfleisch mit wechs. Gemüsesorten, Zwiebeln gedünstet, mild</span>
                </label>
                </div>
                <div className={"CheckBoxDiv2"}>
                <label>
                    <input type="checkbox" />
                    <b>Dorho </b> <span>gekochtes Hähnchen in scharfer Tomatensoße</span>
                </label>
                </div>
                <div className={"CheckBoxDiv2"}>
                <label>
                    <input type="checkbox" />
                    <b>Ful vegetarisch </b> <span>braune Fava Bohnen mit Zwiebeln, Kreuzkümmel und Feta</span>
                </label>
                </div>
                <div className={"CheckBoxDiv2"}>
                <label>
                    <input type="checkbox" />
                    <b>Timtimo pikant vegan </b> <span>rote Linsen in Tomatensoße pikant, Zwiebeln</span>
                </label>
                </div>
                <div className={"CheckBoxDiv2"}>
                <label>
                    <input type="checkbox" />
                    <b>Alicha mild vegan </b> <span>Kartoffeln, Weißkohl, Karotten, Zwiebeln gekocht</span>
                </label>
                </div>
                <div className={"CheckBoxDiv2"}>
                <label>
                    <input type="checkbox" />
                    <b>Hamli vegan </b> <span>geschnetzeltes Lammfleisch in scharfer Soße</span>
                </label>
                </div>
                <div className={"CheckBoxDiv2"}>
                <label>
                    <input type="checkbox" />
                    <b>Schiro </b> <span>gemahlene Kichererbsen in pikanter Tomatensoße</span>
                </label>
                </div><div className={"CheckBoxDiv2"}>
                <label>
                    <input type="checkbox" />
                    <b>Yehmlti vegan </b> <span>gelbe Erbsen mit Steckrüben und Zwiebeln in eritreischer Soße</span>
                </label>
                </div>
            </div>
            
        </div>



        
    );
}

export default KasseGemischt;