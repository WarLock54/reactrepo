import {useState} from "react";

let normalitem=[
    {
        name:" ITEM A",
    },
    {
        name:" ITEM B",
    },
    {
        name:" ITEM C",
    }
]
function ToDoo(){

 
    let [yaz,setYaz]=useState("");
    let [item,setİtem]=useState(normalitem);
    
   


return(
    <div>
<label >Giriş
<input value={yaz} onChange={(e)=>{setYaz(e.target.value)}}></input>
</label>
<button onClick={()=>setİtem((prev)=>[...prev, {name: yaz}])}>Ekle</button>
<br />
{
    item.map((item,key)=>(
        <div key={key}>{item.name}</div>
    )

    )
}
    </div>
)

}

export default ToDoo;