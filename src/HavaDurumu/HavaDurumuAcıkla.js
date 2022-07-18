
import "../HavaDurumu/HavaDurumuAcıklaması.css";

import moment from "moment";

import { TiLocationOutline } from "react-icons/ti";

export default function HavaDurumuAcıklama({weather}){
    return (
        <section>
             <div className="havakutusu">
                <div>
                    <h1 className="havakutusuBaslık">Bugün</h1>
                    <p class="yazılar">
                            {moment(weather?.location.localtime).format("h:mm a")}

                    </p>
                </div>
              
                    <div>
                            <p className="yazılar">
                                {moment(weather?.location.localtime).format("MMM Do YY")}
                            </p>
                    </div>
                    <div className="havakutusuOrta">
                        <span className="havakutusuOrtaAna">
                            {weather?.current.temp_c}<span className="havakutusuOrtaDerece">*C</span>
                        </span>
                        <img width="220px" height="220px" src={weather?.current.condition.icon} alt={`Icon of ${weather?.location.country}`} />
                    </div>
                    <div className="havakutusuAlt">
                        <TiLocationOutline className="havakutusuİkon" />
                        <p className="yazılar">
                        {weather?.location.country},{weather?.location.name}
                        </p>
                    </div>
             </div>
        </section>
    )
}