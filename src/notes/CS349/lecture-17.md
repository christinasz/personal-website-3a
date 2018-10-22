## CS349 Lecture 17

### Midterm info

* Exam's focus on lecture material, not assignments
* Everything up to hit testing is covered
  * Anything covered in class could potentially be on the exam
  * Focus on key concepts from each lecture
* Format: short answer, T/F, multiple choice, explanations
  * Emphasis on understanding and demonstrating key concepts (not code)
* Not expected to write code from scratch, but should be able to answer question about code on a slide
* Sample exams are different because instructors emphasize different material

### Predictive Text

* Use language characteristics to predict input
  * Given characters/words typed so far, what is the most likely intended word/next word
  * T9 9-key text entry:
    * Given an ambiguous set of characters, what is the most likely word?
  * Possible problems
    * Collisions between common words
    * Hard to enter words that aren't in dictionary:
    * ![](https://i.imgur.com/aQ2Q5F4.png)

### Gestural Text Input

* Swype (based on ShapeWrite research project)
  * Uses QWERTY keyboard (awkward shapes traded off for familiarity of keyboard)
  * Researcher found out that if you swapped certain characters you might actually get more accuracy
* 8Pen keyboard
  * Breaks away from QWERTY so that gestures are more natural
  * Most words would be made from doing figure-8 like moves

### Performance Rates

* Uncompromised QWERTY keyboard: 80+ WPM, record 150 WPM
* Thumb QWERTY (Blackberry with physical keys): 60 WPM
* Soft Keyboards (iPad touch type): 45 WPM, similarly T9: 45 WPM possible for experts
* Gestural: ~30 WPM for 8Pen, Expert ShapeWriter 80WPM
* Handwriting: 33 WPM
* Graffiti (Palm pilot): 9 WPM

### Positional Input

It's been around for a long time! See etch-a-sketch and old school keyboards trying to emulate it with dials and joysticks.

### Properties of Positional Input Devices

#### Force vs. Displacement Sensing

* Force == Isometric, device can detect pressure and direction
  * e.g. Joystick and red nib in ThinkPads
* Displacement == Isotonic, doesn't sense force but movement across a surface
  * e.g. mouse

#### Position vs. Rate Control Transfer Function

* Force sensing should be matched to rate - (joystick, pedal)
* Displacement sensing should me mapped to position

#### Direct vs. Indirect Input

* Indirect: controlled by an external device, e.g. mouse or joystick on controller
* Direct: controlled by direct contact with screen, e.g. touchscreen

#### Absolute vs. Relative Position

* Absolute: mapping of input device to a display input position, 1-to-1 correspondence to changes in input position
  * Example: (calibrated) graphics tablet and touch screens
* Relative: position maps changes in input device to changes in display input position
  * As you're moving the mouse, there's a corresponding movement on the screen
  * Example: touchpads, mice

#### Clutching

* What do you do when you hit the edge of the desk before you finish positioning the mouse?
  * One solution: **clutching** is when you repeatedly move to achieve the target
  * An example is in a maps app where you have to repeatedly move when you're zoomed in to find your target

#### Control-Display Gain (CD Gain)

* E.g. mouse sensitivity/acceleration
* Ratio of display pointer to the device control movement
  * Expressed in velocity
  * Works for rate control and position control
* CDgain = Vpointer/Vdevice

#### Pointer Acceleration

* Dynamically change CD gain based on device velocity (e.g. slowing down when you reach your target)

#### Combinations

* Absolute direct - tablet computer where you use a pen on the screen
* Relative direct - graphics tablet when the driver is broken :(

#### Gestural Input

* Gestures map movements to commands like swipe, zoom, pinch, pan, etc
* Instead of pressing the bus bar you wave your hand

