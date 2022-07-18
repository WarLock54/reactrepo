import {useState,useEffect} from "react";
import "../emoji/yapcss.css";
function Yap(){
const [emoitem,setEmoitem]=useState([]);

const itemlist=[
    {
        name:"100",
        emoji:"100",
    },
    {
        name:"1234",
        emoji:"1234",
    },
    {
        name:"Grining",
        emoji:"Grining",
    },
    {
        name:"Grimacing",
        emoji:"Grimacing",
    },
    {
        name:"Grin",
        emoji:"Grin",
    },
    {
        name:"Joy",
        emoji:"Joy",
    },
    {
        name:"Smiley",
        emoji:"Smiley",    
    },
    {
        name:"Smile",
        emoji:"Smile",
    },
    {
        name:"SeetSmile",
        emoji:"SeetSmile",
    },


]
    return (
        <div>
            <h1>Emoji Search</h1>

            <label>        
<input value={emoitem} placeholder="emojiler" onChange={(e)=>{
    setEmoitem(e.target.value);
}} />
</label>
    <br />
        {
            emoitem.map((item,key)=>{

                <div className="dene" key="key" >{item.emoji}  {item.name}</div>
            })
        }
        </div>
    )

}
export default Yap;