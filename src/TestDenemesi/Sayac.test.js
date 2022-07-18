import {render,screen}from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Sayac from "./Sayac.js"




describe("Sayaç testi",()=>{
let artırla,azaltla,say;

    beforeEach(()=>{
        console.log("Her testten önce çalışacağım...")
        render(<Sayac />);

         say=screen.getByText("0");
    
     artırla=screen.getByText("Artırma");

      azaltla=screen.getByText("Azaltma");

    })
        beforeAll(()=>{
            console.log("1 DEFA ÇALIŞACAK");
        })

        afterAll(()=>{
            console.log("En son 1 kere çalışcagım...")
        })
        afterEach(()=>{
            console.log("Her testten SANRA çalışacak")
        })
    test("Artırma butonu ",()=>{
       
       
        userEvent.click(artırla);
        expect(say).toHaveTextContent("1");
    
    })
    test("Azaltma butonu ",()=>{
    
        userEvent.click(azaltla);
    
        expect(say).toHaveTextContent("-1");
    
    })

})



