import { useEffect , useState} from "react";
import Essen1 from "../images/essen1.png"
import Essen2 from "../images/essen2.png"
import Essen3 from "../images/essen3.png"
import Bananencreme from "../images/bananencreme.png"
import Humus from "../images/humus.png"
import Next1 from "../images/next1.png"
import Next2 from "../images/next2.png"
import EssenObenCss from "../styles/essenObenCss.css"

function EssenOben(){

    const [count, setCount] = useState(0);

    useEffect(
        ()=>{
            const timer = setTimeout(
                ()=>{
                    if(count === 0){
                        setCount(1);
                    }else if(count === 1){
                        setCount(2);
                    }else if (count === 2){
                        setCount(3);
                    }else if(count === 3){
                        setCount(4);
                    }else if(count === 4){
                        setCount(0);
                    }
                }, 10000
            )
            return ()=>{
                clearTimeout(timer);
            }
        }
    )
    const image = [
        Essen1, Essen2, Essen3, Humus, Bananencreme
    ]

    const nextImg = ()=>{
        if(count === 4){
            setCount(0);
        }else{
            setCount(count + 1);
        }
    }

    const lastImg = ()=>{
        if(count === 0){
            setCount(4)
        }else{
            setCount(count - 1);
        }
    }



    return(
        <>
            <div className="ganzkomponent">

                    <img src={Next2} className="next2" onClick={lastImg}/>

                    <img src={image[count]} className="essen1" />

                    <img src={Next1} className="next1" onClick={nextImg}/>

            </div>
        </>
    )



}

export default EssenOben;