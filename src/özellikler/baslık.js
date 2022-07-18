import React from "react";

function Baslık({number,increment}){
    console.log("asdasd");
    return(
        <div>
            Baslık - {number}
            <button onClick={increment}>Click</button>
<br>
</br>
<br>

</br>
            
        </div>
    )
}
export default React.memo(Baslık);