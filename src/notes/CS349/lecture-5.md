# CS349 Lecture 5

## Event Driven Programming
* Nothing happens unless something else happens - responsive
* Events: an observable occurrence, often extraordinary occurrence
* Examples:
  - Keyboard
  - Window crossing
  - Timer events

Role of the Base Window System
* Collect event information
* Put relevant info in a known structure
  - XLib has a structure it uses
* Order events by time
  - Why is this important? Imagine keyboard text input
* Decide who gets event
* Deliver event


* There is no abstraction to the events stuff in XWindows
  - In Java it's hidden
  - Applications are responsible for their own events


* Don't do the blocking call below:
  ```
  while(true) {
    XNextEvent(display, &event);
  }
  ```
  We will do it better next class.
