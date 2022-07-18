import React,{PureComponent} from "react";
import { PropTypes } from "prop-types";
import Clipboard from "react-use-clipboard";
import AramaButonuSatır from "./AramaButonuSatır";
export default class AramaSonucu extends PureComponent{

  static propTypes = {
    emojiData: PropTypes.array
  };
componentDidMount() {
//  this.clipboard = new Clipboard(".copy-to-clipboard");
}

componentWillUnmount() {
 // this.clipboard.destroy();
}


  render(){  return (
                            <div>
{
    this.props.emojiData.map((emojiData)=>(
        <AramaButonuSatır key={emojiData.title} symbol={emojiData.symbol} title={emojiData.title} data-testid={"yeter"} /> 
    )
    )
}

                        </div>
    )
  }
}