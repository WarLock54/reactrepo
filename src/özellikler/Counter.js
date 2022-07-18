import { useState } from "react";

import {useTheme} from "../Context/ThemeContext";
function  Counter(){
const [count,setCount]=useState(0);

const artırma =()=>{setCount(1)};


var azaltma=()=>{
setCount(count-1);
}
const {theme,setTheme}=useTheme();

    return(
<>
<h1>
    {count}
</h1>
<button onClick=
{artırma}

>Artır</button>
<button
onClick=
    {azaltma}
    
>Azalt</button>
<hr />
Aktif TEMA {theme}
<button onClick={()=>setTheme(theme==="Beyaz"?"Siyah":"Beyaz")} >Renk Degistir...</button>
 
</>
)

}
export default Counter;