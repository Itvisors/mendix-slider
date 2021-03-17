## Slider
A dynamic slider that has several features implemented in it. This documentation describes these features and how to setup the slider.

## Domain Model
### Attribute
An attribute has to be linked to the slider. This is the attribute were the value will be stored.
### SecondAttribute
A second attribute can be linked to the slider in case you want a range slider. When a second value is linked the slider will automatically become a range slider.

## Features
### Single Slider
A single slider is supported by the widget and can be used by configuring the attribute field.
### Range Slider
A range slider is supported by the widget by configuring the attribute and second attribute field. When the first value is dragged over the second value the first value will become the second value.
### Steps
Customs steps are supported and can be filled in. This can be an integer as well as a decimal. Please ensure a value greater then 0 is filled in.
#### Continuous Slider
A continuous slider is supported by the widget by setting the steps to a value greater then 1. If for example a step of 3 is filled in when dragging the slider it will 'click' per 3 steps.
#### Discrete slider
A discrete slider is supported by the widget by setting the steps to the value 1. This means the slider will drag in a discrete flow.
### Min Value
The min value were the slider can start. Can be an integer or decimal
### Max Value
The max value were the slider can end. Can be an integer or decimal
### Vertical Slider
The slider can be set to a vertical slider by setting the is vertical slider option to yes.
### Show Value Label
The label can be shown on hover (auto), turned off so that its never visible or turned on so that its always visible.
### Mendix Functions
Several mendix functions are implemented like.
#### Editable
Determines if the widget can be edited or not.
#### Visibility
Determines if the widget is visible or not
#### Show Label
Determines if the label will be visible or not
#### OnChange
An onchange microflow can be linked to the widget which gets kicked off after the widget gets dragged.
