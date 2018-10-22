# CS349 Lecture 18

## Input Performance

* You're designing an interface and would like to
  * Choose between candidate designs without building them
  * Estimate performance with new design
* You don't want to build a bunch of UIs and throw away the one you don't like
* We care about fatigue, time and error



### Keystroke Level Model (KLM)

* Summing up all the individual operations to estimate how long a task takes
* Still used and referenced today



**Example:** (using only physical operators)

Enter MM/DD/YYYY for today in KLM

First step: assumptions

- Hand already on mouse (for using transition time or not)
- Skill level of the typist (for this example, K = 0.3)

**One text field** 

PB H KKKKKKKKKK

PB - Focus, H - move hand back to keyboard, KKKKKKKK - MM/DD/YYYY

1.1 + 0.1 + 0.4 + 10 * 0.3 = 4.6s

**Three drop downs** 

Point to button, click, point to date and select it x 3 = PBPB PBPB PBPB = 7.2s

**Three text fields**

With tab: PB H KK K KK K KKKK = 4.6 s

Without tab: PB H KK HPB H HPB H KK HPB H KKKK = 8.0s

#### Including Mental Operators (M)

* Conscious and unconscious actions
  * As you learn to use an UI, commands and interactions become unconscious actions
  * For novices, every step in KLM would take a mental operation
* Put an M anytime people have to:
  * initiate a task
  * make a strategic decision
  * retrieve a chunk from memory
  * find something on the display
  * think of a task parameter
  * verify that the action is correct (e.g. display chages)
* Add an M in front of any action if they're a novice, for experts, you can put an M in front of all the interactions and state that your user is an expert **(Possible exam question)**

#### Critique of KLM

Benefits

* Easy to model and can be done from mockups

Drawbacks

* Some of the time estimates are out of date
* Some time estimates are variable (moving the mouse varies with distance)
* Doesn't model error, learning times, etc
* Doesn't model pointing very well
  * Some pointing devices are faster than others
  * Things that are bigger are easier to hit
  * Things that are closer are easier to hit
    * Unless you can accelerate the mouse into the corner or something

### Fitt's Law

A predictive model for pointing time considering device, distance, and target size based on rapid, aimed movements

### Distance vs. Size

* Larger the distance, longer time
* Smaller size, longer time
* $MT \propto \frac{D}{S}$