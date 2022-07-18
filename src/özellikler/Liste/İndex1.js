import {useState} from "react";

function List({contacts}){
const [filtreyazı,setFiltreYazi]=useState("");
const filtred=contacts.filter((item)=>{
    return (Object.keys(item).some((key)=>
        item[key].toString().toLowerCase().includes(filtreyazı.toLocaleLowerCase())
));
});

return(
    <>
    <input placeholder="Filtreleme" value={filtreyazı}
    onChange={(e)=>setFiltreYazi(e.target.value)}
    />
   <ul className="lisT">
       
       {
           filtred.map((contact,i)=><li key={i}>
               <span>
               {contact.fullname}
               </span>
                <span>
                {contact.phone_number}
                </span>
           </li>
           )
       }
    </ul>
    <p>{filtred.length}</p>
    </>
)

}


export default List;