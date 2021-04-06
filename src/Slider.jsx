import { Component, createElement } from "react";
import Big from "big.js";
import SliderWidget from "@material-ui/core/Slider";
import "./ui/Slider.css";

export default class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: undefined
        };

        this.onInputChange = this.handleChange.bind(this);
        this.onCommitChange = this.handleChangeCommited.bind(this);
    }

    handleChange = (event, newValue) => {
        this.setState({ value: newValue });
    };

    /**
     * This function gets called when a slider is released and sets the value attributes and handles the onchange action.
     * @param {*} event event source of the callback
     * @param {*} newValue the new value. In case of a range slider, an array is returned. Else a single decimal value is returned.
     */
    handleChangeCommited = (event, newValue) => {
        // Check if no range slider
        if (!this.props.secondValueAttribute) {
            this.props.valueAttribute.setValue(Big(newValue));
        } else {
            this.props.valueAttribute.setValue(Big(newValue[0]));
            this.props.secondValueAttribute.setValue(Big(newValue[1]));
        }

        const { onChangeAction } = this.props;
        if (onChangeAction && onChangeAction.canExecute) {
            onChangeAction.execute();
        }
    };
    /**
     * This function makes sure the slider cant be dragged over the min or max values
     * @param {*} min The min value of the slider
     * @param {*} max The max value of the slider
     * @param {*} value The current value of the
     */
    convertValue(min, max, value) {
        if (value < min) {
            value = min;
        } else if (value > max) {
            value = max;
        }
        return value;
    }

    componentDidUpdate(prevProps) {
        const newValue = this.convertValue(
            Number(this.props.min.value),
            Number(this.props.max.value),
            Number(this.props.valueAttribute.value)
        );
        //Check if no range slider
        if (!this.props.secondValueAttribute) {
            if (prevProps.valueAttribute !== this.props.valueAttribute) {
                this.setState({ value: newValue });
            }
        } else {
            if (
                prevProps.valueAttribute !== this.props.valueAttribute ||
                prevProps.secondValueAttribute !== this.props.secondValueAttribute
            ) {
                const secondValue = this.convertValue(
                    Number(this.props.min.value),
                    Number(this.props.max.value),
                    Number(this.props.secondValueAttribute.value)
                );

                this.setState({
                    value: [newValue, secondValue]
                });
            }
        }
    }

    render() {
        let orientation;

        let valueLabelDisplayVar;

        switch (this.props.valueLabelDisplayType) {
            case "on":
                valueLabelDisplayVar = "on";
                break;
            case "off":
                valueLabelDisplayVar = "off";
                break;
            case "auto":
                valueLabelDisplayVar = "auto";
                break;
            default:
                valueLabelDisplayVar = "auto";
        }

        if (this.state.value === undefined) {
            return "";
        }

        if (this.props.isVertical) {
            orientation = "vertical";
        } else {
            orientation = "horizontal";
        }

        return (
            <SliderWidget
                step={Number(this.props.stepNr.value)}
                value={this.state.value}
                onChange={this.onInputChange}
                onChangeCommitted={this.onCommitChange}
                valueLabelDisplay={valueLabelDisplayVar}
                min={Number(this.props.min.value)}
                max={Number(this.props.max.value)}
                orientation={orientation}
                disabled={this.props.valueAttribute.readOnly}
            />
        );
    }
}
