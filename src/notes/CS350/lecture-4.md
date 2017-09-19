# Lecture 4

September 19, 2017

## Mutual Exclusion

* Mutual exclusion is used to prevent race conditions in critical sections (from last lecture)
* We enforce this using **locks**

(Slide 12)

Boolean lock doesn't work.

So we have hardware `xchg` (exchange) to implement a spin lock

(Slide 15)

Other synchronization instructions:

SPARC
* Compare and swap (`cas`)
* `cas addr, r1, r2`
	* If `addr = r1` then swap it with `r2`


MIPS
* Load-linked and store-conditional

OS161
* Spinlock: we can initialize, release, acquire