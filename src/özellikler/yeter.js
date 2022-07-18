import { useEffect,useState } from "react";
import {Link, useParams} from "react-router-dom";
import { Route } from "react-router-dom";
import axios from "axios";
function Yeter(){
    const [kullanıcı,setKullanıcı] = useState({});
    const [loading,setLoading]=useState(true);
    const {id}=useParams();
    useEffect(()=>{
        axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res)=>{
            setKullanıcı(res.data);
        })
    }     
    )
return (
    <div>
        <h2>  Kullanıcı:    </h2>
       
       id: {id}
       <pre>
        {JSON.stringify(kullanıcı)}
       </pre>
       {loading && <p>Loading....</p>}
       <br>
       </br>
      <Link to={`/yeter/${parseInt(id)+1}`}> Sonraki Kullanıcı :{parseInt(id)}    </Link>
      
      
    </div>
)
}
export default Yeter;