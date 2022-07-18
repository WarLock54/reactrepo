import {useEffect,useState} from "react";
import { send } from "./socketApi";

function Palatte({actifcolor}){
const [color,setColor]=useState("");

    return (
        <div className="Palette">
          <input type="color" value={actifcolor} onChange={(e)=>setColor(e.target.value)

          }/>
          {color}
          <button onClick={()=>send(color)}>Tıkla</button>
        </div>
    )

}
export default Palatte;