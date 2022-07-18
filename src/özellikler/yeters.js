import {BrowserRouter,Routes,Route,Outlet,NavLink} from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
function Yeters(){
    const [yeters,setYeters]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
axios(`https://jsonplaceholder.typicode.com/users`).then((res)=>setYeters(res.data)).finally(()=>setLoading(false));

    },[])

 return(
<div>
    <h1>Kullanıcılar</h1>
    {loading && <div>Loading....</div>}
    <ul>
        
{
    yeters.map((kullanıcı)=>(
        <li key={kullanıcı.id}>
            <NavLink activeClassName="underline" path={`/yeter/${kullanıcı.id}`}>{kullanıcı.name}</NavLink>
        </li>
    ))
}

    </ul>


<Outlet />

</div>
 );
}
export default Yeters;