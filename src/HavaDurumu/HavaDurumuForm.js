import {useState} from "react";
import "./HavaDurumuFormu.css";
import {HiLocationMarker} from  "react-icons/hi";

export default function HavaDurumuForm ({onChangeCity}){
    const [city,setCity]=useState("");
    function handleSubmit(e){
                e.preventDefault();
                onChangeCity(city);
        }
        function onChange(e){
                const deger=e.target.value;
                if(deger===" "){
                        alert("Şehir Seçiniz...");
                }
                else{
                    setCity(deger);
                }
        }
        return (
            <form className="kutuForm" onSubmit={handleSubmit} action="">
                <input className="buttonArama input" onChange={onChange} type="text" placeholder="öğenmek istediğiniz şehiri yazınız...">
                    </input>
                    <HiLocationMarker className="buttonAramaİkon input" />

            </form>
        );
}