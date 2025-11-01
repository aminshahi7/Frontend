import React from "react";
import { useState, useEffect } from "react";
import Header from "../component/Header"
import KasseGemischtCss from "../Style/KasseGemischtCss.css";
import Korb0 from "../images/Korb0.png"
import Korb1 from "../images/Korb1.png"
import gemischtePlatte from "../images/gemischtePlatte.png"
import HeaderMobile from "../component/HeaderMobile"
import untenPfeile from "../images/untenPfeile.png"

function KasseGemischt(probs){

    const [count, setCount] = useState(0);
    const [zigniChecked, setZigniChecked] = useState(false);
    const [segaChecked, setSegaChecked] = useState(false);
    const [dorhoChecked, setDorhoChecked] = useState(false);
    const [fulChecked, setFulChecked] = useState(false);
    const [timtimoChecked, setTimtimoChecked] = useState(false);
    const [alichaChecked, setAlichaChecked] = useState(false);
    const [hamliChecked, setHamliChecked] = useState(false);
    const [schiroChecked, setSchiroChecked] = useState(false);
    const [yehmltiChecked, setYehmltiChecked] = useState(false);
    

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log("Hi Amin is There");
    }



    const handleChange1 = (event)=>{
        const checked = event.target.checked;
        if(event.target.checked){
            setCount(count + 1);
        }else{
            setCount(count - 1);
        };

        if(zigniChecked == false){
            setZigniChecked(true);
        }else if(zigniChecked == true){
            setZigniChecked(false);
        };
    }

    const handleChange2 = (event)=>{
        const checked = event.target.checked;
        if(event.target.checked){
            setCount(count + 1);
        }else{
            setCount(count - 1);
        }

        if(segaChecked == false){
            setSegaChecked(true);
        }else if(segaChecked == true){
            setSegaChecked(false);
        }
    }

    const handleChange3 = (event)=>{
        const checked = event.target.checked;
        if(event.target.checked){
            setCount(count + 1);
        }else{
            setCount(count - 1);
        }

        if(dorhoChecked == false){
            setDorhoChecked(true);
        }else if(dorhoChecked == true){
            setDorhoChecked(false);
        }
    }

    const handleChange4 = (event)=>{
        const checked = event.target.checked;
        if(event.target.checked){
            setCount(count + 1);
        }else{
            setCount(count - 1);
        }

        if(fulChecked == false){
            setFulChecked(true);
        }else if(fulChecked == true){
            setFulChecked(false);
        }
    }

    const handleChange5 = (event)=>{
        const checked = event.target.checked;
        if(event.target.checked){
            setCount(count + 1);
        }else{
            setCount(count - 1);
        }

        if(timtimoChecked == false){
            setTimtimoChecked(true);
        }else if(timtimoChecked == true){
            setTimtimoChecked(false);
        }
        
    }

    const handleChange6 = (event)=>{
        const checked = event.target.checked;
        if(event.target.checked){
            setCount(count + 1);
        }else{
            setCount(count - 1);
        }

        if(alichaChecked == false){
            setAlichaChecked(true);
        }else if(alichaChecked == true){
            setAlichaChecked(false);
        }
    }

    const handleChange7 = (event)=>{
        const checked = event.target.checked;
        if(event.target.checked){
            setCount(count + 1);
        }else{
            setCount(count - 1);
        }

        if(hamliChecked == false){
            setHamliChecked(true);
        }else if(hamliChecked == true){
            setHamliChecked(false);
        }

    }

    const handleChange8 = (event)=>{
        const checked = event.target.checked;
        if(event.target.checked){
            setCount(count + 1);
        }else{
            setCount(count - 1);
        }

        
        if(schiroChecked == false){
            setSchiroChecked(true);
        }else if(schiroChecked == true){
            setSchiroChecked(false);
        }
        
    }

    const handleChange9 = (event)=>{
        const checked = event.target.checked;
        if(event.target.checked){
            setCount(count + 1);
        }else{
            setCount(count - 1);
        }

        if(yehmltiChecked == false){
            setYehmltiChecked(true);
        }else if(yehmltiChecked == true){
            setYehmltiChecked(false);
        }
    }

  
    return(
        
        
        <div>
            <Header/>
            <HeaderMobile/>
            <div>
                <h1 className={"HeaderH1"}>Gemischte Platte</h1>
            </div>
            <div className={"imgDiv"}>
                <img className={"Platte"} src={gemischtePlatte} alt="Platte" />
            </div>
            <div>
                <h2 className={"HeaderH2"}>4 Suaßen Auswählen</h2>
            </div>
            <div className={"PfeileDiv"}>
                <img src={untenPfeile} alt="Pfeile" className={"Pfeile"} />
            </div>
            <form onSubmit={onSubmit}>
                 <div className={"CheckBoxDiv"}>
                <div className={"CheckBoxDiv2"}>
                <label>
                    <input type="checkbox" className={"checkbox"} onChange={handleChange1} disabled={count == 4 && !zigniChecked}/>
                    <b>Zigni </b> <span>geschnetzeltes Lammfleisch in scharfer Soße</span>
                </label>
                </div>
                <div className={"CheckBoxDiv2"}>
                <label>
                    <input type="checkbox" className={"checkbox"} onChange={handleChange2} disabled={count == 4 && !segaChecked}/>
                    <b>Sega ms Yehmlti </b> <span>lammfleisch mit wechs. Gemüsesorten, Zwiebeln gedünstet, mild</span>
                </label>
                </div>
                <div className={"CheckBoxDiv2"}>
                <label>
                    <input type="checkbox" className={"checkbox"} onChange={handleChange3} disabled={count == 4 && !dorhoChecked}/>
                    <b>Dorho </b> <span>gekochtes Hähnchen in scharfer Tomatensoße</span>
                </label>
                </div>
                <div className={"CheckBoxDiv2"}>
                <label>
                    <input type="checkbox" className={"checkbox"} onChange={handleChange4} disabled={count == 4 && !fulChecked}/>
                    <b>Ful vegetarisch </b> <span>braune Fava Bohnen mit Zwiebeln, Kreuzkümmel und Feta</span>
                </label>
                </div>
                <div className={"CheckBoxDiv2"}>
                <label>
                    <input type="checkbox" className={"checkbox"} onChange={handleChange5} disabled={count == 4 && !timtimoChecked}/>
                    <b>Timtimo pikant vegan </b> <span>rote Linsen in Tomatensoße pikant, Zwiebeln</span>
                </label>
                </div>
                <div className={"CheckBoxDiv2"}>
                <label>
                    <input type="checkbox" className={"checkbox"} onChange={handleChange6} disabled={count == 4 && !alichaChecked}/>
                    <b>Alicha mild vegan </b> <span>Kartoffeln, Weißkohl, Karotten, Zwiebeln gekocht</span>
                </label>
                </div>
                <div className={"CheckBoxDiv2"}>
                <label>
                    <input type="checkbox" className={"checkbox"} onChange={handleChange7} disabled={count == 4 && !hamliChecked}/>
                    <b>Hamli vegan </b> <span>geschnetzeltes Lammfleisch in scharfer Soße</span>
                </label>
                </div>
                <div className={"CheckBoxDiv2"}>
                <label>
                    <input type="checkbox" className={"checkbox"} onChange={handleChange8} disabled={count == 4 && !schiroChecked}/>
                    <b>Schiro </b> <span>gemahlene Kichererbsen in pikanter Tomatensoße</span>
                </label>
                </div>
                <div className={"CheckBoxDiv2"}>
                <label>
                    <input type="checkbox" className={"checkbox"} onChange={handleChange9} disabled={count == 4 && !yehmltiChecked}/>
                    <b>Yehmlti vegan </b> <span>gelbe Erbsen mit Steckrüben und Zwiebeln in eritreischer Soße</span>
                </label>
                </div> 
                <div>
                    <label>
                        <button type="submit" className={"button"}>
                            Kasse
                        </button>
                    </label>
                </div>
            </div>
            </form>
            
        </div>



        
    );
}

export default KasseGemischt;