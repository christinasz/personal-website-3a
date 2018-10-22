## Lecture 14 - Graphics cont'd

### Matrix Representation

Transformations can be combined by multiplication. All graphics UIs use matrices.

Can a 2x2 matrix represent all transformations? Yes for scale, rotate, and mirror, but not transformations. We solve this using homogenous coordinates.

#### Homogeneous Coordinates

Adds an extra component w to each coordinate. To get x and y, you divide them by w. You can represent translation with a 3x3 matrix.

For 2D graphics, you will always use a 3x3 matrix.

#### Affine Transformation Matrix

$$
T(t_x, t_y) = \begin{bmatrix}
1 & 0  & t_x \\
0 & 1 & t_y \\
0 & 0 & 1 
\end{bmatrix} R(\theta) = \begin{bmatrix}
\cos(\theta) & -\sin(\theta) & 0 \\
\sin(\theta) & \cos(\theta) & 0 \\
0 & 0 & 1 
\end{bmatrix} S(s_x, s_y) =  \begin{bmatrix}
s_x & 0 & 0 \\
0 & s_y& 0 \\
0 & 0 & 1 
\end{bmatrix}
$$



You should know these for the midterm!

This 3x3 matrix is an Affine Transformation Matrix that can express any combination of translate, rotate, and scale.
$$
\begin{bmatrix}
x' \\ y' \\ 1
\end{bmatrix} =
\begin{bmatrix}
A & B & C \\ E & D & F \\ 0 & 0 & 1
\end{bmatrix}\begin{bmatrix}
x \\ y \\ 1
\end{bmatrix} =
\begin{bmatrix}
Ax + By + C \\ Ex + Dy + F \\ 1
\end{bmatrix}
$$


Transformations are applied right to left (post-multiplication)

To read slide 15: take a point, scale it, rotate it, then translate it to get your new point.