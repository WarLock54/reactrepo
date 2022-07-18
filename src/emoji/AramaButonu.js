import React ,{PureComponent}from "react";
import PropTypes from "prop-types";
import "../emoji/Header.css";
export default class AramaButonu extends PureComponent{
    static deger={
        yazıdegiskeni:PropTypes.func
    };

   handleChange= (event)=>{
            this.props.yazıdegiskeni(event);
    };
    render(){
        return(
            <div className="yeter">
                <input onChange={this.handleChange} />
            </div>
        )
    }
}

