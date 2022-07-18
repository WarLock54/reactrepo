import {useState} from "react";

function Sayac(){
const [say,setSay]=useState(0);
const artırma=()=>{setSay(say+1)};
 let azaltma=()=>{
    setSay(say-1);
 }

    return(
        <div>
                <h1>{say}</h1>
                <button onClick={artırma}>Artırma</button>
                <button onClick={azaltma}>Azaltma</button>

        </div>
    )
}
export default Sayac;
