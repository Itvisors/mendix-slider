import {Component, createElement} from "react";
import Slider from '@material-ui/core/Slider';

export class HelloWorldSample extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 30
        }

        this.onInputChange = this.handleChange.bind(this);
    }

    valuetext(value) {
        return `${value}°C`;
    }

    handleChange = (event, newValue) => {
        this.setState({value: newValue});
    }

    render() {
        //marks moeten op een value komen value = markpoint
        // marks krijgen een text = markstring
        //vullen met marks in de frontend. Hoe

/*         const markList = this.props.markList.map(markItem =>
            {
                const mark = {value:markItem.markPoint, label: markItem.markSrting}
                return mark;
            });
 */

            return(<Slider 
                value={this.state.value} 
                onChange={this.onInputChange} 
                aria-labelledby={this.props.isContinuous ? "continuous-slider":"discrete-slider"}
                getAriaValueText={this.valuetext}
                valueLabelDisplay="auto"
                min={this.props.startumber}
                max={this.props.endnumber} />
            )
    }
}

// Is continues boolean maken
// is disabled?
// steps

// Start and end slider
// mendix kan er wat mee
// 