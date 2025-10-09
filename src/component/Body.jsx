import React from "react";
import UbuntuPostcard from "../images/UbuntuPostcard.png"
import BodyCss from "../Style/BodyCss.css"
import zebra from "../images/zebra.png"
import Resto from "../images/Resto.png";
import Terasse from "../images/Terasse.png";
import Bar from "../images/Bar.png";
import Soundanlage from "../images/Soundanlage.png";

function Body(){
    return(
        <div>
            <div className="body mt-5">

                <h3 className="willH">Herzlich Willkommen</h3>

                <div className="text1Div">
                    <p className="text1 m-3">
                        In unserem ostafrikanischen Restaurant in <br/>
                        Frankfurt erwarten Euch kulinarische Köstlichkeiten <br/>
                        aus Eritrea. Unsere Familienküche bereitet das Essen <br/>
                        mit viel Liebe frisch zu.
                    </p>
                    <p className="text2 m-3">
                        Wir haben die Familienrezepte so angepasst, dass <br/>
                        wir viele vegane Gerichte anbieten können. Ein bewusster <br/>
                        Umgang mit Lebensmitteln liegt uns am Herzen, weshalb <br/>
                        wir bevorzugt regionale Produkte verarbeiten.
                    </p>
                </div>

                <div className="btnRsrvDiv">
                    <button className="btn m-5 btnRsrv">
                        jetzt Reservieren
                    </button>
                </div>

                <div className="ubuntuDiv">
                    <img className="ubuntuPostcard" src={UbuntuPostcard} alt="posrcard"/>
                </div>

                <h3 className="willH2 m-5">Ubuntu ist unsere Philosophie</h3>

                <div className="text1Div">
                    <p className="text1 m-3">
                        Das Wir ist für uns das Wichtigste. <br/>
                        Wechselseitiger Respekt und Anerkennung, <br/>
                        die Achtung eines Jeden und das Bestreben <br/>
                        nach einem harmonischen und friedlichen Miteinander.
                    </p>
                    <p className="text2 m-3">
                        Denn zwischen der eigenen Persönlichkeit und <br/>
                        der Gemeinschaft besteht in der Ubuntu-Philosophie <br/>
                        eine sehr enge Beziehung. Ein Jeder hat seinen Platz <br/>
                        und Jeder hat seine Aufgabe.
                    </p>
                </div>

                <h3 className="willH2 m-5">Wir freuen uns auf Euch!</h3>

                <div className="zebraDiv">
                    <img className="zebra" src={zebra} alt="posrcard"/>
                </div>

                <h3 className="willH m-5">Gerne im Vorfeld reservieren</h3>

                <div className="text1Div">
                    <p className="text1 m-3">
                        Um Euch Wartezeiten zu ersparen und freie Plätze <br/>
                        mit dem passenden Service garantieren zu können, <br/>
                        arbeiten wir mit Reservierungen.
                    </p>
                    <p className="text2 m-3">
                        Gerne telefonisch oder auch online. Das Team von <br/>
                        „Im Herzen Afrikas“ freut sich auf Euren Besuch.
                    </p>
                </div>

                <div className="btnRsrvDiv">
                    <button className="btn m-5 btnRsrv">
                        jetzt Reservieren
                    </button>
                </div>

                <div id="demo" className="carousel slide" data-bs-ride="carousel">


                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                    </div>


                    <div className="carousel-inner">
                        <div className="carousel-item  active">
                            <img src={Resto} alt="Restaurant" className="d-block w-100"/>
                            <div className="carousel-caption">
                                <h3 className="CarouselHead">Barfuß</h3>
                                <p className="CarouselP">
                                    Da muss man gewesen sein. Das Restaurant ist mit Sand gefüllt,
                                    überall Bilder aus Afrika und Wandbemalung. Kleine Stühle,
                                    Sessel und schöne Lange Tische. Weg von der Straße rein nach
                                    Afrika.
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Terasse} alt="Terasse" className="d-block w-100"/>
                            <div className="carousel-caption">
                                <p className="CarouselP">Wände mit fantasievoller Wandmalerei oder in Lehmbauweise,
                                    alte Holztische und -stühle, ...und detailreiche Beleuchtung
                                    – der Name ist Programm: Im „Im Herzen Afrikas“ fühlt man sich
                                    zweifelsohne als wäre man mitten in Afrika. Mit viel Liebe zur
                                    traditionell afrikanischen Einrichtung ist das Lokal in entspannter
                                    Atmosphäre gehalten.
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Bar} alt="Restaurant" className="d-block  w-100"/>
                            <div className="carousel-caption">
                                <p className="CarouselP">
                                    Als erstes fallen die Freundlichkeit und die gefühlte Gastfreundschaft auf.
                                    Hier gibt es ein sehr schönes Konzert, dass alle Mitarbeiter für alle Gäste
                                    da sind, jedem Gast zur Verfügung stehen und jedem helfen. Man hat immer das
                                    Gefühl, wichtig zu sein! Super! Weiter so!
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Soundanlage} alt="Logo" className="d-block w-100"/>
                            <div className="carousel-caption">
                                <h3 className="CarouselHead">Tolle Location, leckeres Essen, Top Service</h3>
                                <p className="CarouselP">
                                    Ja, man greift zusammen auf den Teller, wickelt das Essen in Brot ein;
                                    aber es ist auch Eritreische Küche und wenn ihr die authentisch und
                                    richtig lecker haben wollt, geht ins Herzen Afrikas :)
                                </p>
                            </div>
                        </div>
                    </div>


                    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>

                <h3 className="willH mt-5">Nachhaltigkeit liegt uns am Herzen</h3>

                <div className="text1Div">
                    <p className="text1 m-3">
                        Wir verabeiten bevorzugt regionale Lebensmittel. <br/>
                        Unser Bier beziehen wir von der <a href="#">FRANKFURTER BRAUUNION</a>
                    </p>
                    <p className="text2 m-3">
                        Bestellungen können mit dem nachhaltigen <a href="#">REBOWL</a>-System <br/>
                        durch unabhängige frankfurter Kurier*innen geliefert werden.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Body;