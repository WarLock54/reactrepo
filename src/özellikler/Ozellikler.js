import {useState,useEffect} from "react";
import  "./style.css"
import List from "./Liste/İndex1";
import Form from "./Form/index"
function Ozellikler(){
    const [contacts,setContacts]=useState([
        {
            fullname:"onur",
            phone_number:"213412412"
        },
        {
            fullname:"hakan",
            phone_number:"578975831"
        },
        {
            fullname:"elif",
            phone_number:"948576"
        }
    ]);

    useEffect=(()=>{
        console.log(contacts);
    },[contacts]);

return (
   
    <div id="container">
        <h1>Veriler</h1>
        <List  contacts={contacts} />
       
        <Form  addContacts={setContacts} contacts={contacts}/>
    </div>
)
}
export default Ozellikler;