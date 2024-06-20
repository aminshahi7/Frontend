import { useState, useEffect} from "react";
import Header from "../components/Header"
import reservierungCss from "../styles/reservierungCss.css"
import Footer from "../components/Footer"
import { useNavigate } from 'react-router-dom';
function Reservierung() {

    let history = useNavigate();

    const [person, setPerson] = useState({fname: "", lname: "", email: "", telefon: "", tischnummer: ""});

    const fnameChangeHandle = (e)=>{
        setPerson({...person, fname: e.target.value});
    }
    const lnameChangeHandle = (e)=>{
        setPerson({...person, lname: e.target.value});
    }
    const emailChangeHandle = (e)=>{
        setPerson({...person, email: e.target.value});
    }
    const telefonnummerChangeHandle = (e)=>{
        setPerson({...person, telefon: e.target.value});
    }
    const tischnummerHandle = (e)=>{
        setPerson({...person, tischnummer: e.target.value});
    }
    const sendData = async ()=>{
        const data = await fetch("https://backeend-7tee.onrender.com/person/data", {
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({person})
        });
        const lastData = data.json();
    }
    const submitHandle = (e)=>{
        e.preventDefault();
        sendData();
        console.log("sendet")
        history('/bestaetigung');
    }





    return (

              <>
                  <Header/>

                  <h1 className="header">Reservierung</h1> <br/> <br/> <br/>
                  <form className="rsrvForm" onSubmit={submitHandle}>
                      <input className="inputs" type="text" value={person.fname} id="fname" placeholder="First Name" onChange={fnameChangeHandle} required={true}/> <br/>
                      <input className="inputs" type="text" value={person.lname} id="lname" placeholder="Last Name" onChange={lnameChangeHandle} required={true}/> <br/>
                      <input className="inputs" type="email" value={person.email} id="email" placeholder="Email" onChange={emailChangeHandle} required={true} /> <br/>
                      <input className="inputs" type="tel" value={person.telefon} id="telefon" placeholder="Telefonnummer" onChange={telefonnummerChangeHandle} required={true}/> <br/>
                      <input className="inputs" type="text" value={person.tischnummer} id="tischnummer" placeholder="Tischnummer" onChange={tischnummerHandle}/> <br/>
                      <input className="submits" type="submit" value="Fertig"/>
                  </form>
                  <br/>
                  <br/>
                  <br/>


                  <Footer/>
              </>
    );
}

export default Reservierung;