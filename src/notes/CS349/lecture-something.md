## September 24, 2018

### Drawing with Swing
You can either:
1. Use swing components
  * Build your UI entirely out of Swing GUI components fuck my life he skipped the slide again
2. Draw on a canvas

A1 will be Swing components
A2 will be graphics transformations

### UI Widget
Widgets is a generic name for anything graphical that goes on the screen (AKA components or controls)

Widgets do two things:
  * Provide feedback to the user
  * Capture input

**e.g.** clicking on buttons, scrolling through lists

Though they've changed a lot graphically, in terms of interactivity, widgets haven't really changed.

### Logical Device
A logical device is what the widget *does*

**e.g.** Logical number devices: sliders, spinners, textbox

**e.g.** Logical boolean devices: checkbox, radio button, toggle button

### Widget Architecture as MVC
* Widgets can be MVC devices as well
* Logical device is the Model

### Simple Widgets
#### Labels/Images
* Not meant to be interactive
* This is a widget that has no model because it is stateless

#### Button
* Simplest interactive widget
* No model bc no state

#### Boolean
* True/false model, changed device

#### Number
* Model: real number, changed event
* Sliders, scrollbars, progress bars

#### Text
* Model: string, changed, selection, insertion events
* Properties: formatters
* Text is quite hard because you have to format to the localization, as well as operations and events such as cut/copy/paste
  - No one expects to copy/paste a slider

#### Special Value widgets
* Colour/file/date/time pickers

### Widget Toolkits
* Also called GUI toolkits/GUI APIs/GUI libraries
* Usually provided by the language provider/toolkit vendor

#### Toolkit Design Goals
1. Complete
  * What you really need: (AKA the "mac 7")
    - buttonSlider
    - Pulldown menu
    - checkbox
    - Radio buttons
    - Text Field
    - Spinner
2. Consistent
3. Customizable
