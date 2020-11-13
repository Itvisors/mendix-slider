import { Component, createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/Slider.css";

export default class Slider extends Component {
    render() {
        return(
            <HelloWorldSample 
            sampleText={this.props.sampleText}
         /*    markList = {this.props.markList}
            markPoint = {this.props.markPoint}
            markString = {this.props.markString} */
            isContinuous = {this.props.isContinuous}
            startNumber = {this.props.startNumber}
            endNumber = {this.props.endNumber} />
        )
    }
}
