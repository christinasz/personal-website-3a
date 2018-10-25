# Lecture 19

### Fitt's Law cont'd

Fitt's Law only works in 2D space, by the way.

$$MT = a + b\log_2(\frac{D}{W} + 1)$$

MT = movement time

D = distance between starting point and centre of target

W = Constraining size of the target

a and b are experimentally derived characteristics of your input device b/c it's easier to point with different devices

* You will probably never have to figure it out (you are usually given it)

#### Index of Difficulty

index of performance (IP) = $$\frac{1}{b}$$

index of difficulty (ID) = $$\log_2(\frac{D}{W} + 1)$$

You typically get linear performance of devices

### 2D Targets?

Distance is always your starting point to the centre of the target. Doesn't matter how big the target is, we tend to shoot for the middle.

What is W? The minimum of the height and width. You can write it as $$MT = a + b\log_2(\frac{D}{\min(W, H)} + 1)$$ but usually we just assume it's the minimum of target W and H.

**Fitt's Law Example**

Using a mouse to point (a = -107 and b = 223), what is the movement time to click on a 80 pixel by 32 pixel Cancel button located 400 pixels away? 
$$
\begin{aligned}
MT &= a + b\log_2(\frac{D}{W} + 1) \\
&= -107 + 223 \log_2(\frac{400}{32} + 1) \\
&= 729 ms
\end{aligned}
$$

#### Menu Target Size in OSX and Windows

Windows has the menu within each window

Mac has menu anchored to the top of the screen and whichever menu has focus will change the top.

Which is faster? Jef Raskin would say Mac since you have an infinitely sized target regardless of window size.

You could also argue that Windows is faster because the distance is smaller.

### Context Menus, Pie Menus, Marking Menus

Context menu - the thing that shows up when you right click. There's lower D but every item is closer together.

Pie menu - intended to replace context menu. When you right click, your mouse appears in the centre and you choose from within the ring

Which is faster? Pie menu becasue of shorter distance, but it's not quite scalable. Once you add items, each wedge gets smaller. At about 10 or 11 it's not as effective as a context menu.

Marking menu - lets you choose it without even showing up

 ### macOS Dock Expansion

macOS Dock expands in visual space (bigger size), but not in motor space (motions you do) since it scales. This actually messes up what you see because you get a different effect with each motion you do.

Fitts' Law says selecting an expanded target on the dock is no easier than the default small targets.

Why does macOS do it then? It doesn't really hurt but it doesn't help. It might help people with visual impairment.

### Motor Space vs Screen Space

Dynamically change CD gain based on the position of your cursor.

* If you make cursor move more slowly when you're moving over the save button it makes it larger in "motor space"
* It looks the same on screen but the save button is sticky
* Another example: Photoshop snapping your selection space and guidelines

### Steering Law

An adaptation of Fitts' Law because it doesn't work in every state

There are specific times where you have to follow a path, not go from point A to point B.

* Example: Photoshop tracing, traversing nested menus

**Goal Passing**

With only goals at the end points you have Fitt's law, but with Steering Law you add N goals that subdivide your path such that it each goal follows our path.

$$ID_N = N log_2(\frac{A}{N \times W} + 1)$$