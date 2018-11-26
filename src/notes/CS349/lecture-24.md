# Lecture 24

### Stylus vs. Finger

Styluses keep coming back up over and over again

Different devices with different capabilities

Please don't memorize the table on slide 16

* Contacts - pen has one point of contact, touch has 1-10+ contact regions
* Occlusion - where your input device gets in the way of things you're trying to see
  * Pen - better for occlusion because its smaller and doesn't block very much
  * Touch - your finger is bigger and fat, and even more blockage when you do multi-touch
* Precision - pen is very precise, we don't have fine motor movement in our shoulders, but we have a lot in our hand/wrist, harder and more awkward with our hands (have to put on a surface)
* Hand - preferred/dominant hand for pen, but with touch you can use either hand or both
* Types of error 
  * Palm rejection - palm triggers accidental inputs
  * Midas touch problem - interface always active (Siri is similar)

### Multi-touch Input Characteristics

Devices can detect

* Number of points of contact (10+) and surface movement
* Finger pressure
* Device location and orientation (gyroscope, accelerometer, magnetometer)

Almost everything is multi-touch except for like ATMs and gas pump interfaces

Not widely available yet:

* Finger tracking (knowing which finger is being used)
* User orientation (sitting, standing)
* Context (running, walking)

#### Different Ways to Hold

Being able to tell how you're holding phone - how you hold your device changes how you interact with your device.

* You can optimize the interface to accomodate
* You have to consider that any of the vertical postures is a valid way to hold your phone, so you have to design around it

### Standard Gestures

* Simple one/two finger touches and swipes
  * Tap, double tap, pinch, spread, press, drag, flick, rotate
  * Why not more?
    * Direct manipulation! The most simple ones correlate with what you would do in real life

#### Expanded Gestures

* We *can* increase expressivity with time-based or contact-based gestures but they aren't standard across aplications

### Challenges

#### Challenge: Human Accuracy

* People have "fat fingers," which leads to occlusion and precision issues
* Touch targets need to be large
  * Apple recommends 15mm, Microsoft recommends 9mm (min 7mm, min spacing 2mm)

One solution: offset cursor

* When a popup shows up above our finger to show what you've selected

#### Challenge: Human Accuracy Varies by Position and Grip

* Factors that affect accuracy: Hand posture, finger vs. thumb, walking vs. sitting

#### Challenge: No Hover State in Touch

* Having a middle "tracking" state allows for hover
* Mouse typically supports 3 states (not touching, dragging, mouse-down)
* Touch input only has 2 (touching or not touching the screen)

#### Challenge: Multi-touch Dispatch Ambiguity

* In multi-touch, multiple fingers can hit a control simultaneously which leads to ambiguity
  * Difficult to figure out what the user intended for an input
* When is the click event generated?
  * Click events generated for buttons only when the last contact is lifted from the control
  * Click events generated every time a user taps a button, even if another finger is holding it down
  * Over-capture: multi-touch controls captured by more than one contact simultaneously
    * Example: selecting the thumb of a slider with two fingers can mean that it will not track directly undera single finger when moved

#### Challenge: Physical Constraints

* The way we set up multi-touch, it's intended to be a well executed instance of direct manipulation, but there are weird effects
  * When you move beyond bounds, direct touch breaks.
    * E.g. you hit the top of the screen it would stop immediately
    * Solution: elastic effects

It's fine to overload gestures, but you can't use those as the primary form of interaction. You need to provide hints or affordances that give people an idea of how to interact with them.

### Navigation

Always expected to have a widget that lets you go back to the previous screen, but gestures also exist (like swipe to go back on Safari)