import React,{PureComponent} from "react";
import "../emoji/Header.css";
export default class Header extends PureComponent{
    render(){
        return (
            <h1 className="yeter">
            <img
              src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
              width="32"
              height="32"
              alt=""
            />
            Emoji Arama
            <img
              src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
              width="32"
              height="32"
              alt=""
            />
            </h1>
        )
    }
}
