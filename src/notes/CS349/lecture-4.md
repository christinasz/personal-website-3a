# CS349 Lecture 4

### After Windowing Systems
* Programs can now run simultaneously. each within their own window
* Windows are independent of one another

### Base Windowing System (BWS)
* Only one window "has focus" to receive input
  - The active window
* Responsible for dispatching and handling events

### Canvas Abstraction
* Program assumes its top left is 0, 0

### Window Manager (WM)
* Provides conceptually different functionality that is layered on top of BWS
  - Creates "look and feel" of windows
    - Colours, borders, font, etc.

#### Window vs Canvas
* Windowing system makes window
* Window manager manages interaction with window (min/max, title bar)
* Application manages canvas

Who handles scaling? Windowing system gets events, interprets it as resize, passes it to the application who decides what to do

### Why Separate BWS and Window Manager?
* So that you can swap the look and feel of the windowing system
* More robust since they're separate processes

### Separate vs. Combined Window Managers
* macOS, Windows combine "BWS" and Window Manager together (or don't distinguish)

## Drawing
Three conceptual models for drawing:

1. Pixel - pixel by pixel (obviously)
  * `SetPixel(x, y, colour)`
  * `DrawImage(x, y, w, h, img)`
2. Stroke - border
  * `DrawLine(x1, y1, x2, y2, colour)`
  * `DrawRect(x, y, w, h, colour)`
3. Region - figure out how to draw it for me and do it, constraint based
  * `DrawText("A", x, y, colour)`
  * `DrawRect(x, y, w, h, colour, thick, fill)`

We will use stroke most of the time in this course.

### Drawing Options
* `DrawLine()`
* Many options:
  - Colour, thickness, dashed/solid
* Observations:
  - Most choices are the same for multiple calls to DrawLine
  - there are lots of different parameters, but we may only want to set one or two

In earlier versions, to initialize these they just kept adding them as parameters, and the function call had way too many parameters

## Graphics Context (GC)
* Gathers all options into a structure, pass it into the draw routines
  - Easier to fall back onto default parameters
  - Easy to change only some parameters
  - Easy to switch between contexts
* In X, the graphics context (GC) is stored on the X Server
  - Inherit from a global context for the X Server
  - Fast to switch between contexts since reduced network traffic between X Server and X Client
* Modern systems like Java, OpenGL, UIKit (iOS), also have Graphics Context

## Painters Algorithm
* Draw from back to front and combine primitives

### Implementing Painters Algorithm
* Have a class for every primitive that you want to draw
* Keep a display list of Displayable objects
  - Order back-to-front like a FIFO stack
* To repaint
  - Clear the screen and repaint everything in the display list
