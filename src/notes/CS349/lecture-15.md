# CS349 Lecture 15

### Useful Graphics2D methods

`void rotate(double theta)` concatenates the current graphics2D transform with rotation

`void rotate(double theta, double x, double y)` moves it to the origin and rotates and puts it back

`void scale(double sx, double sy)`concatenates current graphics2D with scale, subsequent rendering is resized according to scaling factors relative to previous scaling

`void translate(double tx, double sy)` concatenates current graphics2D with transform

#### Java2D AffineTransform Class

Handles all matrix manipulations

`AffineTransform getTransform(), void setTransform(AffineTransform Tx)`returns/sets a copy of the current transform

**Static methods:**

`static AffineTransform getRotateInstance(double theta)`
`static AffineTransform getRotateInstance(double theta, double anchorx, double anchory)`
`static AffineTransform getScaleInstance(double sx, double sy)`
`static AffineTransform getTranslateInstance(double tx, double ty)`

**Concatenation methods:**

`void rotate(double theta)`
`void rotate(double theta, double anchorx,double anchory)`
`void scale(double sx, double sy)`
`void translate(double tx, double ty)`
`void concatenate(AffineTransform Tx)`

**Other:**

`AffineTransform createInverse()`

`void transform(Point2D[] ptSrc, int srcOff, Point2D[] ptDst, int dstOff, int numPts)` give point, apply matrix, gets point back

### Scene graphs

Hierarchy is known as an **interactive tree** or **scene graph:**

* Each part has a transform matrix 
* Each part draws its children relative to itself
* Body part rigging example:
  * Torso is root of the model, torso points relative to origine
  * Torso has its own affine transformation matrix
  * Everything else is described relative to torso, has its own matrix that describes how to draw it relative to parent 
* The reason why all subtrees of a scene graph follows along is because it's all concatenated

Like you go backwards when you apply transformations, you read the code bottom-up

### Benefits of Using Transformations

* Allow reuse of objects in scenes
* Specification of object in its own coordinate system
* Simplifies remapping of models after a change

## Graphics Hit Testing

### Implementing Direct Manipulation

* Users should be able to select content using a mouse
* Objective: test when a rendered shape is selected
  * Selections that "just miss" the shape should "snap" to shape
* How do we do this?
  * Create a model of the shape
  * Draw
  * Choose selection paradigm
  * Implement shape hit tests
  * Respond to events

### Selection Paradigms

* Hit-test selection
  * Open shapes like lines and polyline use edge hit-test
  * Closed shapes like rectangles and polygones use inside hit-test

### Line Segment hit-test

* A line model has no "thickness" so we pick a threshold distance (usually < 5 pixels) from mouse position to line
* Create another vector $\vec{u}$ that projects onto the line and find the closest point to mouse coordinates and calculate the distance towards them
* Use  `Line2D.ptSegDist(P0.x P0.y, P1.x, P1.y, M.x, M.y)`

### Rectangle/Circle hit-test

* Check if x, y are within rectangle

### Hit-testing with Transformed Shapes

* Mouse and shape model are in different coordinate systems
* Two options for hit testing:
  1. transform shape to mouse coordinates
  2. transform mouse to shape coordinates

#### Transform Shape Model to Mouse Coordinates

* Have to transform every point and/or parameter in shape model before running each hit-test
  * Does this for every shape so it takes a lot of time and lots of extra calculation

#### Transform Mouse to Shape Model Coordinates

* Matrix A applies all the transformations for the shape from the origin, if you take the inverse matrix it will reverse them
  * If apply the inverse with the mouse with that inverse you'll be moving the mouse back to the origin with the model
* Only one point to transform but need to adjust hit-test threshold
* This is better than shape model to mouse