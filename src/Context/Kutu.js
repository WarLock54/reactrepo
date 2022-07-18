

import ContextBaslık from "./ContextBaslık";
import Counter from "../özellikler/Counter";
import {useTheme} from "../Context/ThemeContext";
import Profil from '../özellikler/Profil';

function Kutu(){
    const {theme}=useTheme();
    console.log(theme);
    return (
        <div  className={`App ${theme}`}>
         
 <ContextBaslık />    
    <Counter />
    <Profil />
    
        </div>
    )
}
export default Kutu;