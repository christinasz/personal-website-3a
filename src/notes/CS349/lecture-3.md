# CS 349 Lecture 3
September 12, 2018

### Graphical User Interface (GUI)
* Hardware interface
  - High resolution, high refresh graphics display
  - "Standard" keyboard
  - Pointing device (e.g. mouse)
* Software to support working with a graphical interface
* Typically WIMP (Windows, Icons, Menus, Pointer)

**GUI Characteristics**
* Handles *input* device events and what to do with them
  - keyboard and mouse/touch
* Expose *output* methods to display graphics
  - basic drawing primitives, bitmaps, text
* Manages *windows* as a place for visual application Content
  - methods to move, resize, re-order
    - you might only work with one window at a time but you have many behaviours that are built into the system that you can do - it's not the application, it's the system
    - *applications don't do the window manipulation*

A **windowing system** is a software layer that provides these services to the operating system

**Example: XWindows**
* Developed at MIT as a research product
* Standard windowing system for UNIX
* Open source
* Linux uses XWindows!

Window Managers
* XWindows supports a pluggable window manager
* Window managers define the look and feel of the application

XWindows is a client-server architecture
* It separates the UI from the applications
  - XClient handles all application logic
  - XServer handles display output and user Input
* Server handles request, processes data, and then returns results to client
* X inverts the conventional www server and client relationship
  - WHYYYYYY

XWindows as MVC Architecture
* Controller and view are handling input from the XServer

### XLib
* Library to wrap the low level XWindow protocol
* Uses buffered input and output queues that need to be flushed

Forwarding to an XServer
* DISPLAY environment variable should be set to the local display so that the XClient knows where to send the I/O
  - This is old school
* Alternatively, you can use the -Y flag and it will forward the display to the local machine

A typical X Program:
* Perform X Client initialization
* Connect to the XServer
* Perform X related initialization
* Initiate an event loop
  ```
  get events
  handle event:
    if quit message:
      exit loop
  do client-initiated work
  send drawing requests to XServer
  ```
* Close connection
* Clean up and exit app
