import {useState} from "react";
 export default function GorevTo(props){
    console.log(" Görevler:"+props.gisim);
    const [yeniİsim,setYeni]=useState(props.gisim);
    console.log("Yeni görev"+yeniİsim);
    function handleChange(e){
        setYeni(e.target.value);
    }
    function handleSubmit(e){
            e.preventDefault();
            props.duzenYeni(props.id,yeniİsim);
            setYeni("");
            setDuzenle(false);
    }
    const [duzenli,setDuzenle]=useState(false);
    const duzenleTemp=(
        <form className="stack-small" onSubmit={handleSubmit}>
            <div class="form-group">
                <label className="todo-label todoinput" htmlFor={props.id}/>
                <input name={props.id} value={yeniİsim} type="text" onChange={handleChange}>

                </input>
            </div>
<div class=" btn-group">
        <button type="button" class="btn todo-cancel" onClick={()=>{
setYeni(props.gisim);
setDuzenle(false);
        }}></button>

    <button type="submit" className="btn btn__primary todo-edit" onClick={props.editTask(props.id,yeniİsim)}>Kalsın</button>
</div>

        </form>

    )
    const izleTemp=(
        <div className="todo stack-small">
            <div className="c-cb">
                <input id={props.id} 
                    type="checkbox"
                    className="checkbox"
                    defaultChecked={props.completed}
                    onChange={()=>{props.toggleTaskComplete(props.id)}}/>
                    <label  className="todo-label" htmlFor={props.id} >{props.gisim}</label>
        </div>
        <div className="btn-group">
            <button type="button" className="btn btn__danger" onClick={()=>{
               setDuzenle(true);
            }}>Düzenle</button>
        </div>
        <div className="btn-group">
            <button type="button " className="btn" onClick={()=>{
                props.deleteTask(props.id);
            }}>Sil</button>
        </div>

        </div>
    )

            return duzenli?duzenleTemp:izleTemp;

 }
