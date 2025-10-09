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

            <Footer/>


        </div>
    );
}

export default App;