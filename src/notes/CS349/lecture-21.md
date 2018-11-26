# Lecture 21

## Direct Manipulation cont'd

### Evaluating Instruments

How do we determine a instruments' effectiveness?

#### Degree of Indirection

* Spacial/temporal offset to go from domain object to instrument you need to use
* Spacial Dimension
  * Near: drag to translate/handles to resize because you cursor probably near the object already
  * Med: scrollbars
  * Far: dialog boxes
* Temporal Dimension
  * Short: direct dragging response
  * Medium: Activate tool in toolbar and start direct manipulation 
  * Long: using dialogue, finishing drag and drop

Something like resize handle is super fast and super close so it's the kind that you want to use more, while dialogue boxes are far away and high temporal cost.

Recently Windows and Mac have been trying to stray away from dialogues as much as possible.

#### Degree of Integration

* Ratio between degrees of freedom (DOF) and DOF of the input device
  * suitability of the input device to the instrument
* e.g. Scrollbar has one degree of freedom because it can only go up and down in pos/neg x/y
  * Good for going up and down blocks of text/images
  * Anything with at least one degree of freedom will work, like a mouse, which has 2 degrees of freedom.
    * Mouse wheel is 1 DOF
* e.g. 3D model has 3 DOF but mouse has only 2
  * Sometimes we use scroll wheel or lock an axis

#### Degree of Compatibility

Similarity between physical actions and the response of the object

* How natural does it feel to perform an action?
* Dragging = high because it's almost the same
* Scrolling = medium (depending on the scroll direction, natural = high, regular = medium)
* Dialogue = low

### Using Analogy in Direct Manipulation

Direct manipulation relies heavily on making it feel analogous to real world behaviour. You want to build upon things that people already know.

Affordances - to design with visual cues that tell people how something is supposed to be used.

Example: trash can

| **Real world**           | **DM interface**                   |
| ------------------------ | ---------------------------------- |
| Object to be discarded   | Icon of the object to be discarded |
| Move hand to object      | Move cursor to object              |
| Pick up object           | Click to acquire object            |
| Trash can                | Trash can icon                     |
| Move to trash can        | Drag object to trash can icon      |
| Release object from hand | Release mouse button               |

### Issues with Direct Manipulation

* Visually impared users can't see graphics: more on our accessibility lecture
* Not space efficient
* Switching between keyboard/pointer is time consuming
* Analogies may not be clear

## Undo-Redo

Very core to the GUI experience that it's almost an expected feature of any GUI

**Benefits of Undo/Redo**

* There's no memorization and mainly **exploratory learning**
  * We mainly use undo/redo to explore an application
  * You can try something that you don't know the consequences of and undo if you don't like it (no fear/commitment)
* Lets you **recover from errors**
  * Work quickly without fear
* Undo-Redo lets you **evaluate modification**
  * undo-redo cycle to evaluate your last change

### Checkpointing

* Manual undo method that lets you save the current state so you can rollback later
* Like in a video game:
  * Kill some monsters
  * Save game
  * Try to kill boss
  * Die
  * Reload saved game
  * Kill boss successfully
  * Save game
* Source code repos are a type of checkpointing

### Undo-Redo Design Choices

There's no global undo-redo, nothing that is built in that does it for you. You will have to do it yourself.

1. **Undoable Actions:** what should (or can) be undone?

   * Not everything you do in an UI is not undoable, like window resizing or scrolling
   * What you really want to save is the data
   * Some actions are descructive and not easily undone
     * e.g. quitting program with unsaved data, emptying your trash
   * Some actions can't be undone
     * e.g. printing, email (except in gmail now!)
   * Suggestions:
     * Changes to the document/model should be undoable
     * Changes to the view or document's interface state, it should be undoable if they are extremely tedious or require significant effort
     * Ask for confirmation before doing a destructive action which cannot be easily undone

2. **State restoration:** what part of the UI is restored after an undo?

   * If you select an icon, and then you delete the icon, and then you undo that, does the icon come back selected or not? What about text?
     * Try it! It usually comes back selected because that is the state the user remembers it being in.
     * This is application-level behaviour - it is not enforced but is rather a convention.
   * State should be meaningful after undo/redo
     * Change selection to objects changed
     * Scroll to show selection if necessary
     * Give focus to the control that is hosting the changed state
   * These provide additional feedback 

3. **Granularity: **how much should be undone at a time?

   * What defines one undoable "chunk"? If you type a bunch of words and delete them what's a chunk?
     * This one is application dependent
       * Visual Studio: string delimited by whitespace - word by word because coding is usually by keyword
       * MS Word/Google Docs: string delimited by a command - a meaningful operation is a manipulation to the text (e.g. bold, italics), not text
       * iOS Mail: Chunks based on all text because of key focus
   * Drawing example: mouse press to start line, drag to define line path, release to end line.
     * press + drag + release = 1 chunk
     * Don't delete a point a time! Even though your data is structured that way.
   * Suggestions:
     * Ignore direct manipulation intermediate states like resizing/moving an object
     * Chunk all changes resulting from a single interface event
       * e.g. find and replace multiple words at once because to the user that was one operation
     * Delimit on discrete input break

4. **Scope:** is undo-redo global, local, or in-between?

   * It's tempting to say Application Level but consider an application with many tabs!
     * You make some changes in one tab, switch tabs, and when you hit undo, it changes things in your previous tab

   * Undo/redo happens at the Document level/in a single view 
     * Because there is no generic undo/redo that would fit every application's rules and data model
   * NEVER DO WIDGET LEVEL UNDO
     * It would only recognize undo/redo *within* the widget so you would have to switch focus

