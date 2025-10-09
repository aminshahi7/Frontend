import React from "react";
import FooterCss from "../Style/FooterCss.css"
import Imherzen from "../images/imherzen.png"
import Insta from "../images/insta.png"

function Footer(){
    return(
        <>
            <div className="footer">

                <div className="footerOben">
                    <img alt="dd" src={Imherzen} className="imherzen"/>
                    <img alt="dd" src={Insta} className="insta"/>
                </div>

                <div className="linie"></div>
                <br/>
                <br/>

                <div className="div1">
                    <div className="div11">
                        <h1>Im Herzen Afrikas </h1>
                        <p>Gutleutstraße 13</p>
                        <p>60329 Frankfurt</p>

                        <br/>
                        <br/>
                        <br/>


                        <h1>Reservierungsanfragen <br/> und <br/> Stornierungen</h1>

                        <br/>
                        <h1>jetzt Reservieren</h1>
                        <br/>
                        <p>reservierung@imherzenafrikas-frankfurt.de</p>

                        <br/>
                        <br/>
                        <br/>
                        <br/>



                        <h1>Sonstige Anfragen</h1>
                        <p>info@imherzenafrikas-frankfurt.de</p>

                        <br/>
                        <br/>
                        <br/>
                        <br/>


                        <h1>
                            Mit den öffentlichen Verkehrsmitteln
                        </h1>
                        <p>Ausstieg „Willy-Brandt-Platz“</p>
                        <p>mit der U1, U2, U3, U4, U5 und</p>
                        <p>Strassenbahn Linie 11, 12</p>


                        <br/>
                        <br/>

                        <p>Ausstieg „Hauptbahnhof“</p>
                        <p>mit der U4, U5 sowie S1-9</p>

                    </div>
                    <div className="div12">
                        <h1>Telefonische Reservierung</h1>
                        <p>Di - Sa von 16:00 bis 21:30 Uhr</p>
                        <h1>+49 69 24 24 60 80</h1>

                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h1>Öffnungszeiten</h1>
                        <p>Di - Fr: von 16 bis 23 Uhr</p>
                        <p>Samstags: von 14 bis 23 Uhr</p>
                        <p>Sonntags & Montags: Geschlossen</p>


                        <br/>
                        <br/>
                        <h1>Parkhäuser</h1>
                        <p>„Am Theater“</p>
                        <p>Willy-Brandt-Platz 5, 60311 Frankfurt</p>
                        <br/>
                        <br/>

                        <p>„Untermainanlage“</p>
                        <p>Untermainanlage 1, 60329 Frankfurt</p>

                    </div>
                </div>

                <br/>
                <br/>

                <div className="linie"></div>

                <br/>

            </div>


        </>
    );
}
export default Footer;