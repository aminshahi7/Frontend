import { useState , useEffect } from "react";
import bestellungCss from "../styles/betellungCss.css"

function Bestellung(){
    const [person, setPerson] = useState();
    useEffect(
        ()=>{
            fetchDate()
        }, []
    );
    const fetchDate = async ()=>{
        const response = await fetch("/control")
        const data = await response.json();
        setPerson(data)
    }
    function amin(){
        console.log(person.email)
    }
    
    return (
        <>

            <div className="buttonsDiv">
                <button onClick={amin}>Tisch 11</button>
                <button>Tisch 22</button>
            </div>



        </>
    );
}

export default Bestellung;