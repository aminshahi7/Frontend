import Logo from "../images/imherzen.png";
import headerCss from "../styles/headerCss.css";
import Menu from "../images/menu.png";
import { useState } from "react";

function Header() {
    function sidebar() {
        if (count === 0) {
            setHeight('250px');
            setCount(1);
            setVisibility("1")
        } else {
            setHeight('0px');
            setCount(0);
            setVisibility("0")
        }
    }

    const amin = "center"

    const [height, setHeight] = useState("0px");
    const [visibility, setVisibility] = useState("hidden")
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="nav">
                <img alt="dd" className="logo" src={Logo} />
                <ul>
                    <a href=""><li className="navElement">RESTAURANT</li></a>
                    <a href=""><li>RESERVIERUNG</li></a>
                    <a href=""><li>SPEISEKARTE</li></a>
                    <a href=""><li className="sp">SHOP</li></a>
                </ul>
                <img alt="dd" onClick={sidebar} className="menu" src={Menu} />
            </div>

            <div className="navplus" style={{height: height }}>
                <p className="bar1" style={{opacity : visibility}}>RESTAURANT</p>
                <p className="bar2" style={{opacity : visibility}}>RESERVIERUNG</p>
                <p className="bar3" style={{opacity: visibility}}>SPEISEKARTE</p>
                <p className="bar4" style={{opacity : visibility}}>SHOP</p>
            </div>

        </>
    );
}

export default Header;