import React, {useState} from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import Header from "../component/Header"
import HeaderMobile from "../component/HeaderMobile";
import TestCss from "../Style/Test.css"
import Test from "../Test.css"
import Footer from "../component/Footer"
import { format } from "date-fns";

const App = ()=>{

    
    const [selectedDate, setSelectedDate] = useState(null);
    const [hilfe, setHilfe] = useState(0);
    const [nachricht, setNachricht] = useState('');

    useEffect(() => {
    fetch('http://localhost:3000/api/message') // URL anpassen je nach Deployment
      .then((res) => res.json())
      .then((data) => setNachricht(data.message))
      .catch((err) => console.error('Fehler beim Abrufen:', err));
  }, []);
    

    const disabledDate = (date) => {

    }

    const changeHandle = (date)=>{
        setSelectedDate(date); 
        
        const formattedDate = format(date, 'dd.MM.yyyy'); // z. B. 14.08.2025
        console.log(formattedDate)
        
        if(formattedDate == "18.08.2025"){
            console.log("yes");
        }
    }

    

    return(
        <div>

            <div>
            <Header />
            <HeaderMobile />
            </div>

            <div className="KalenderWahl">
            <DatePicker 
            selected={selectedDate}
            onChange={changeHandle}
            placeholderText="Wähle ein Datum"
            />
            </div>

            <div>
                <h1>Nachricht vom Backend:</h1>
                <p>{nachricht}</p>
            </div>

            <Footer/>




        </div>
    );
}

export default App;