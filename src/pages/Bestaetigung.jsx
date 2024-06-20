import React from "react";
import Header from "../components/Header"
import {useState, useEffect} from "react"
import BestaetigungCss from "../styles/bestaetigungCss.css"
import Footer from "../components/Footer"
import {useNavigate} from "react-router-dom"




function Bestaetigung(){

    let history = useNavigate();

    const [code, setCode] = useState("");
    const [number, setNummber] = useState(null);
    const [result, setResult] = useState(null)
    const [send, setSend] = useState(2);
    
    useEffect(()=>{
        if (send === 1){
            history("/home")
        }
    })

    useEffect(
        ()=>{
            resiveData();
        }
        , []
    )

    const resiveData = async ()=>{
        const response = await fetch("/person/data");
        const data = await response.json();
        await setNummber(data);
    }



    const codeHandle = (e)=>{
        setCode(e.target.value);
    }

    const sendData = async ()=>{
        const data = await fetch("/person/data", {
            method: "POST",
            headers:{
                "Content-Type" : "text/plain"
            },
            body: code.toString()
        })
    }
    function submitHandle(e){
        e.preventDefault();
        sendData();
        console.log(number.number)
        console.log(code)
        {number !== null && number.number !== undefined && number.number === parseInt(code)?
            setResult(<h1>Richtig</h1>): setResult(<h1>Falsch</h1>)}
        {number !== null && number.number !== undefined && number.number === parseInt(code)?
            setSend(1): setSend(2)}
    }


    return(
        <>
            <Header/>
            <br/>

            <h1>
                Bitte geben Sie den Code ein, der Ihnen geschuckt wurde...

            </h1>

            <div >
                <form className="bestaetigungDiv" onSubmit={submitHandle}>
                    <input type="number" value={code} onChange={codeHandle}/>
                    <br/>
                    <input type="submit" value="send"/>
                </form>
            </div>
            <br/>
            <br/>
            <br/>

            {result}
            






            <Footer/>

        </>
    )
}

export default Bestaetigung;