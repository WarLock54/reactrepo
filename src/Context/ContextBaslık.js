
import {useTheme} from "../Context/ThemeContext";
function ContextBaslık(){
   const [theme,setTheme]=useTheme();
    return (
        <div>
            {theme}
           <button onClick={()=>setTheme(theme==="Siyah"?"Yeşil":"Siyah")}>renk degis</button>
        </div>
    )
}
export default ContextBaslık;