import emojiList from "./emojiList.json"
export default function FiltreleEmoji(Ara,Sonuc){



    return emojiList.filter((emoji)=>{
        if(emoji.title.toLocaleLowerCase().includes(Ara.toLocaleLowerCase())){
            return true;
        }
        if(emoji.keywords.includes(Ara)){
            return true;
        }
        return false;
    }

    ).slice(0,Sonuc)

}