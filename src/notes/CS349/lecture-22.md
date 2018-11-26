# Lecture 22

## Undo/Redo cont'd

### Implementing Undo/Redo

Forward Undo

* Go back to the beginning and then roll forward to the state that you want

Reverse Undo

* Just undo/unapply the last change and go back to state 1

Supporting Undo/Redo requires two stacks!

Generally if you do anything new, you clear the redo stack. (except in emacs)

#### Change Record Implementation

**Change Record -** encapsulation of the change that you made, depends on data you're working with and how you chunk

Option 1: **Memento** Pattern

* Save snapshots of each document state
  * Either complete state/difference from last state
* Huge performance issues - e.g. changes to a giant file

Option 2: **Command** Pattern

* Save commands to execute/un-execute to change state
* Effectively "what the user did"

Java and almost everything else uses Command pattern (specifically, Java uses reverse undo with command pattern)

#### Reverse Undo Command Pattern (e.g. Java)

* User issues command
  * Execute the command to create a new document state
  * Push the *reverse* command on to the undo stack
  * Clear redo stack
  * e.g. user does `insert(name)`
    * change record stores `delete(name)`
    * clear redo stack
* Undo: pop reverse command and executes it (new document state)
  * Push original command (reverse of reverse) on redo stack
* Redo: pop command off redo stack and execute it to new current state
  * Push reverse onto undo stack

##### Java Undo

* UndoManager is usually in the model

### Reverse Command Undo Problems

An example where commands don't work:

* If you have a bitmap paint application with only 2 commands: stroke and erase
  * Draw something
  * Draw a line over it
  * Undo that line
  * Everything from that canvas is erased
* Solution: use memento

## Clipboard, Drag-and-Drop

### Data Transfer

* Clipboards have a couple different functions that all use the same underlying mechanisms
* Fundamental way for transferring data within applications

#### Clipboard Transfer

* Uses a system-level generic data buffer
  * One of the fundamental problems is that you may potentially be putting sensitive information into a system-wide storage
* Clipboard is expected in a GUI
* Can't negotiate image file format on the clipboard
  * A reference is stored on the clipboard, not the image itself
  * Program A stores a reference and then Program B asks for it as well as the formats it supports

##### Clipboard Supported Data Formats

* The application indicates formats
* macOS Human Interface Guidelines specifies that all applications must
  * At least support/accept plaintext/image on/from clipboard

### Java Clipboard API

* Data transfer package with classes that help you manage the clipboard
* DataFlavour - a format
* Transferable - data you put on the clipboard
* Supports local and system clipboards
  * You can create a clipboard that only your application deals with???
    * Deals with security issues in Java
  * Meant for people writing applets
* Each OS has one clipboard
  * You get access to it using `Toolkit.getDefaultToolkit().getSystemClipboard`