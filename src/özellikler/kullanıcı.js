import {useEffect,useState} from "react";

function Kullanıcı(){
    const[kullanıcı,setKullanıcı]=useState([]);
    const[isLoad,setLoad]=useState(true);
    useEffect(()=>{
            fetch( "https://jsonplaceholder.typicode.com/users")
            .then(res=>res.json())
            .then((data)=>{setKullanıcı(data)})
            .catch((e)=>console.log(e))
            .finally(()=>{setLoad(false)})
            

    },[])
    return (
    <div>
       <h1>Kullanıcılar</h1>
       {isLoad&&<div>Loading.....</div>}
       {
           kullanıcı.map((kullanıcı) =>
           
               <div key={kullanıcı.id}>{kullanıcı.name}</div>
           )
       } 
    </div>
)

}
export default Kullanıcı;