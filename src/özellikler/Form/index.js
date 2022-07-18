import {useState} from "react";

function İndex({addContacts,contacts}){

    const [form,setForm]=useState({fullname:"",phone_number:""});
const onChangeInput= (e)=>{
    setForm({...form,[e.target.name]: e.target.value });
};
const OnSubmit=(e)=>{
    e.preventDefault();

    if(form.fullname===""||form.phone_number===""){
        return false;
    }
    addContacts([...contacts,form]);
    
    setForm({fullname:'',phone_number:''});
}
return (
    <form onSubmit={OnSubmit}>
        <div  >
                <input name="fullname" placeholder="fullname" value={form.fullname} onChange={onChangeInput} />
         </div>
         <div>
                <input name="phone_number" placeholder="phone number" value={form.phone_number} onChange={onChangeInput} /> 
         </div>
         <div>
         <button >Ekle</button>
         </div>
        
       
    </form>
);

}
export default İndex;