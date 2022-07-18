import {useState} from "react";
function GorevForm(props){
    const [gisim,setGisim]=useState("");

    function handleSubmit(e){
        e.preventDefault();
        props.gorevEkle(gisim);
        console.log(gisim);
        setGisim("");
    }
    function handleChange(e){
        setGisim(e.target.value);
    }
    return (
        <form className="toform" onSubmit={handleSubmit} >
            <div className="düzen">
                <input type="text" id="yenitodo" className="todoGiriş" autoComplete="off" placeHolder="Yeni todo..." value={gisim} onChange={handleChange}></input>
                    <button type="submit" className="subButon">Ekle</button>
            </div>

        </form>

    )
}
export default GorevForm;