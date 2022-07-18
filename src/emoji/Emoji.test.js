import {render,screen}from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Başlık from "./Header";
import AramaButonu from "./AramaButonu";
import AramaSonucu from "./AramaSonucu";
import AramaButonuSatır from "./AramaButonuSatır";
import Filterele from "./FiltreleEmoji";
import App from "../App";

describe("Test başladı",()=>{


    test("Başlık çalışıyor mu?",()=>{
        render(<Başlık />)
        let baslik=screen.getByText(/Emoji Arama/i);
        expect(baslik).toBeInTheDocument();
    })

    test("Listedeki emojileri içeriyor mu?",()=>{
        render(<App />);

            let emojiler=screen.getAllByTestId("yeter");
            expect(emojiler.length).toEqual(10);

    })
    test("Liste filtrelenirken renderlanıyor mu",()=>{
        render(<App />);
        const deneme=screen.getByText("1234");
        expect(deneme).toBeInTheDocument("1234");
    })
    test("Emojiye tıklanıldıgında kopyalanıyor mu?",()=>{
        render(<App />);
        // let kopya=screen.getAllByText("Tıkla Emojiyi Kaydet");
        // userEvent.type(span, kopya)
        // userEvent.click(kopya);
        let tıkla=screen.getAllByTestId("yeter");
        expect(tıkla[0]).toHaveAttribute("data-clipboard-text")
    })
    test(" ",()=>{

    })

})