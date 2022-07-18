import { useState} from "react";
import {useUser} from "../Context/UserContext";
function Profil(){
    const {user,setUser}=useUser();
    const [loading,setLoading]=useState(false);
    const handleLogin=()=>{
        setLoading(true)
            setTimeout(()=>{
                setUser({id:31, isim: "Kevin", bio: "asldjlkasjdasjd"})
            },[1500])
           setLoading(false);
    }
    const handleLogout=()=>{
        setUser(null);
    }
    return (
        <div>
<hr />
{!user && 
    <button onClick={handleLogin}>{loading ? "loading...":"Giriş"}</button>
}

<br>
</br>
{
    user && <button onClick={handleLogout}>Çıkış</button>
}
<br>

</br>
<code>{JSON.stringify(user)}</code>

        </div>
    );
}

export default Profil;