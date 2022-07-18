import {render,screen}from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import ToDoo from "./ToDoo";

describe("todo testleri başladı...",()=>{
        let buton,input;
    beforeEach(()=>{
        render(<ToDoo />)
       buton = screen.getByText("Ekle");
      input = screen.getByLabelText("Giriş");


    })

    test("Varsayılan olarak 3 item vardır",()=>{
            const items=screen.getAllByText(/ITEM/i);
            expect(items.length).toEqual(3); 
    })
    test("İnput ve buton bulunmalı",()=>{
        expect(buton).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    })
    test("İnputa birşeyler gir ve butona tıklandıgında degerler girilmiş olsun",()=>{
        const name="Onur"
        userEvent.type(input, name);
        userEvent.click(buton);
        expect(screen.getByText(name)).toBeInTheDocument()
    })

})