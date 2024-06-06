import willlkommenCss from "../styles/willkkommenCss.css"
import Ubuntu from "../images/ubuntu.jpg"
import Sand from "../images/sand.png"
import Leute from "../images/leute.png"
import Eingang from "../images/eingang.png"
import Resto from "../images/resto.png"
function willkommen(){

     function reservierung(){
        window.location.href = "/reservierung"
    }
    function bestellung(){
       window.location.href = "/bestellung"
    }

    return(
        <>
            <div className="willkommenDiv">
                <h1 className="willkommenHeader">Herzlich Willkommen</h1>
            </div>

            <div className="willkommenPrgrf">
                <div>
                    <p className="prgrf1">In unserem ostafrikanischen Restaurant in <br/>
                        Frankfurt erwarten Euch kulinarische<br/>
                        Köstlichkeiten aus Eritrea. Unsere <br/>
                        Familienküche bereitet das Essen mit viel Liebe <br/>
                        frisch zu.
                    </p>
                </div>
                <div>
                    <p className="prgrf2">Wir haben die Familienrezepte so angepasst, <br/>
                        dass wir viele vegane Gerichte anbieten<br/>
                        können. Ein bewusster Umgang mit <br/>
                        Lebensmitteln liegt uns am Herzen, weshalb wir <br/>
                        bevorzugt regionale Produkte verarbeiten.
                    </p>
                </div>
            </div>

            <div className="btns">
                <button className="btn1" onClick={bestellung}>
                    jetzt bestellen
                </button>
                <button className="btn2 " onClick={reservierung}>
                    jetzt reservieren
                </button>
            </div>



            <div className="ubuntuDiv">
                <img src={Ubuntu} className="ubuntuImg"/>
            </div>

            <div className="willkommenDiv">
                <h1 style={{color: "#DAAFACFF", marginTop: "5%"}}className="willkommenHeader">Ubuntu ist unsere Philosophie</h1>
            </div>

            <div className="willkommenPrgrf">
                <div>
                    <p className="prgrf1">Das Wir ist für uns das Wichtigste.<br/>
                        Wechselseitiger Respekt und Anerkennung, <br/>
                        die Achtung eines Jeden und das Bestreben <br/>
                        nach einem harmonischen und friedlichen <br/>
                        Miteinander.
                    </p>
                </div>
                <div>
                    <p className="prgrf2">Denn zwischen der eigenen Persönlichkeit<br/>
                        und der Gemeinschaft besteht in der <br/>
                        Ubuntu-Philosophie eine sehr enge Beziehung. <br/>
                        Ein Jeder hat seinen Platz und Jeder hat seine Aufgabe.
                    </p>
                </div>
            </div>

            <div className="willkommenDiv">
                <h1 style={{color: "#DAAFACFF"}}className="willkommenHeader">Wir freuen uns auf Euch!</h1>
            </div>

            <div className="btns">
                <button className="btn2 " onClick={reservierung}>
                    jetzt reservieren
                </button>
            </div>

            <div className="fotos1">
                <div className="foto1">
                    <img src={Sand} className="firstFoto"/>
                </div>
                <div className="text1">
                    <h1 className="firstHeader">Barfuß in Afrika!</h1>
                    <p className="firstText">
                        Da muss man gewesen sein. Das Restaurant ist mit Sand <br/>
                        gefüllt, überall Bilder aus Afrika und Wandbemalung. Kleine <br/>
                        Stühle, Sessel und schöne Lange Tische. Weg von der Straße <br/>
                        rein nach Afrika.
                    </p>
                </div>
            </div>

            <div className="fotos2">
                <div className="text2">
                    <p className="secondText">
                        Als erstes fallen die Freundlichkeit und die gefühlte <br/>
                        Gastfreundschaft auf. Hier gibt es ein sehr schönes <br/>
                        Konzert, dass alle Mitarbeiter für alle Gäste da sind, <br/>
                        jedem Gast zur Verfügung stehen und jedem helfen. Man <br/>
                        hat immer das Gefühl, wichtig zu sein! Super! Weiter so!
                    </p>
                </div>
                <div className="foto2">
                    <img src={Leute} className="secondFoto"/>
                </div>

            </div>

            <div className="fotos3">
                <div className="foto3">
                    <img src={Resto} className="thirdFoto"/>
                </div>
                <div className="text3">
                    <p className="thirdText">
                        Wände mit fantasievoller Wandmalerei oder in <br/>
                        Lehmbauweise, alte Holztische und -stühle, ...und <br/>
                        detailreiche Beleuchtung – der Name ist <br/>
                        Programm: Im „Im Herzen Afrikas“ fühlt man sich <br/>
                        zweifelsohne als wäre man mitten in Afrika. Mit <br/>
                        viel Liebe zur traditionell afrikanischen Einrichtung <br/>
                        ist das Lokal in entspannter Atmosphäre gehalten.
                    </p>
                </div>
            </div>

            <div className="fotos4">
                <div className="text4">
                    <h1 className="secondHeader">Tolle Location, leckeres Essen, <br/>
                        Top Service</h1>
                    <p className="forthText">
                        Ja, man greift zusammen auf den Teller, wickelt das <br/>
                        Essen in Brot ein; aber es ist auch Eritreische Küche <br/>
                        und wenn ihr die authentisch und richtig lecker <br/>
                        haben wollt, geht ins Herzen Afrikas :)
                    </p>
                </div>
                <div className="foto4">
                    <img src={Eingang} className="forthFoto"/>
                </div>

            </div>

            <div className="willkommenDiv">
                <h1 className="willkommenHeader">Herzlich Willkommen</h1>
            </div>

            <div className="willkommenPrgrf">
                <div>
                    <p className="prgrf1">Wir verabeiten bevorzugt regionale Lebensmittel.<br/>
                        Unser Bier beziehen wir von der <br/>
                        FRANKFURTER BRAUUNION.
                    </p>
                </div>
                <div>
                    <p className="prgrf2">Bestellungen können mit dem nachhaltigen <br/>
                        REBOWL-System durch unabhängige frankfurter<br/>
                        Kurier*innen geliefert werden.
                    </p>
                </div>
            </div>

        </>
    )
}

export default willkommen;