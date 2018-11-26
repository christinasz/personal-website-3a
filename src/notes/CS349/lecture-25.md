# Lecture 25

### Mobile Design Standards/Guidelines

* Platform specific design guidelines that can provide specific usage examples and hints, beyond these basic guidelines
* e.g. developer.android.com, developer.apple.com
* If you want to develop something, it isn't enough just to give you language docs - they go beyond that now and give you guidelines on how to design your applications

#### Android Design: Creative Vision

* Fundamentally they want you to *think differently about mobile than desktop*
  * Interaction is different
  * Tasks performed are different
    * Small microtasks that you do on the go
* "Enchant me"
  * Fast transitions
  * Good typography and layout
  * Easy to parse
* "Simplify my life"
  * Mobile interaction should be simple and not consume a lot of time
  * Consistent UI (e.g. navigation, widgets)
* "Make me amazing"
  * Make important things fast
  * Certain things need to be fast - like the camera
* Help users enter information
  * Provide the right data entry tool
  * Predict input
* Help users find correct actions
  * Highlight new content
  * Quick access to frequent actions
  * You will never see a Microsoft Office-like tool bar with 20 icons across the screen on a mobile app
  * Tailor for specific tasks and specific workflows
* Help Users Find Correct Actions
  * Make Actions Obvious
    * Shazam: there's only one button!
* Avoid Clutter
  * Hide Metadata
  * Hide secondary menus
    * Swipe to reveal options in TableViews
    * Bezel swipes to reveal context menus

## Android Basics

### Android Design Constraints

* Different life cycle: limited resources like memory, processing, battery
  * Android "stops" your app when not in use
* Primary touch interaction
* Application model
  * "Full screen" application model

### App Components

* Essential building blocks of an Android app
* Each component is an entry point through which the system or a user can enter your app
* First thing: What kind of application are you building?
  * Most of the time you are building an activity (a screen, or view)

| **Components**     | **Description**                                              |
| ------------------ | ------------------------------------------------------------ |
| Activity           | Single-screen of an application                              |
| Service            | Long-running background process (like phone, music streaming, video) |
| Content provider   | Provides shared set of application data                      |
| Broadcast receiver | Responds to system broadcast events                          |

### Activities

* Like a model and a view in one
* Typically represents a single screen
* Main entry point (equivalent to main() method)
* For most purposes, this is your application class

#### Activity Lifecycle

* Multiple activites going on, each activity is separate, and each activity has a lifecycle.
* You always have one activity at a time, never concurrent
  * You are swapping activities around as your application is running

#### Managing the Activity Lifecycle

* An activity goes through a number of states over the course of its lifetime
* A series of callbacks is used to handle transitions between states
  * `onCreate()`
  * `onStart()`
  * `onResume`
  * `onPause()`
  * `onStop()`
  * `onRestart()`
  * `onDestroy()`
* You don't need to implement *all* of these
* Remember to save your data before you switch activities! (`onStop` and `onDestroy`)
* Android reserves the right to kill your app if it's using too much memory
* Like viewDidLoad(), viewWillAppear() in iOS

### Intents

* One of the design goals of Android: don't need to rewrite existing services. Don't want every application that ever uses the camera to write their own camera function
* Ask the OS to give you something that performs that action
  * Create an intent that says "I need a picture taken", OS decides
* Use Activity startActivity() to launch with intent.Explicit (named activity) vs implicit (capabilities, e.g. camera)

Apps are made of Activities and Intents!

### Fragments

Google looked at existing applications and realized they SUCKED (for complex applications)

* Fragments can be thought of portions of a UI for fine-grained control
* An activity can contain (and manage) multiple fragments
  * Fragments have their own lifecycle, and their own layout
  * Alternative to multiple activities

### Views

(widgets for Android!)

`android.view.View`

* Base widget class (drawing and event handling)
* ViewGroup - abstract container class

### Layouts

* Defines structure for a user interface

#### Common Layouts

* Linear Layout
  * Horizontal/vertical that organizes its children into a single horizontal/vertical row
* Relative Layout
  * Provide hints like "X to the left of Y widget"
* Grid View

### UI Definition and Layout

* Up until now you've done layout programattically, but layout can be handled in two ways:
  * Programmatically
  * XML to describe your layout
* Using XML is the preferred way (Android Studio & IntelliJ both include a GUI builder to make this easier)

### Pixel Density

* Number of pixels that fit into an inch 
  * 160dpi = 160 pixel per inch

#### dp Layout Units

* Uses density-independent pixels (dp) "dips"
* To calculate dp:
  * dp = (width in pixels * 160) / screen density

### Events

* Java event model with additional mobile events
  * e.g onClick, onLongClick, onTouch