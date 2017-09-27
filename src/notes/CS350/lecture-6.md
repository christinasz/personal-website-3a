# Lecture 6

September 26, 2017

* Generally avoid using semaphores as locks

### Condition Variables

Allows us to communicate that some condition is true

* Very similar to Wait Channels, but there are some differences
* Designed to work *with* locks - they are used *within* a critical section

Three operations:
* `wait` - causes thread to block, releases lock, and reacquires lock when thread is unblocked
	* Difference between `wait` and `wchan_sleep` - `wait` is associated with a lock
* `signal` - wakes one
* `broadcast` - wakes all

Example: wait until a certain condition is true, and some other thread comes in, makes it true and signals 

**Producer/Consumer Example with Condition Variables**

```
int volatile count = 0; /* must initially be 0 */
struct lock *mutex; /* for mutual exclusion */
struct cv *notfull, *notempty; /* condition variables */

/* Initialization Note: the lock and cv’s must be created
 * using lock create() and cv create() before Produce()
 * and Consume() are called */

Produce(itemType item) {
  lock acquire(mutex);
  while (count == N) {
    cv wait(notfull, mutex); /* wait until buffer is not full
  }
  add item to buffer (call list append())
  count = count + 1;
  cv signal(notempty, mutex); /* signal that buffer is not empty
  lock release(mutex);
}
```

When you call `cv wait`, we leave the critical section - this has to happen or else nobody can signal. When we come back we have to check because what used to be true might not be anymore, which is why we have a while loop.

Now we have:
* Locks
	* Spinlocks
* Semaphores - adds the power of an actual integer/value
* Condition Variable - even more power by giving you waiting and signaling

### Deadlocks

* Consider a situation where two threads and two locks are initially unlocked
* Suppose this happens:
	* Thread1 acquires lock A
	* Thread2 acquires lock B
	* Thread1 tries to acquire lock B and blocks, because Thread2 has it
	* Thread2 tries to acquire lock A and blocks, because Thread1 has it
* The two threads are now deadlocked - neither thread will make progress. They are stuck forever :'(

There are two techniques to handle this:
* **No Hold and Wait:** prevent threads from requesting resources if it currently has resources allocated to it. If it wants several resources, it must make a single request for all of them.
* **Resource Ordering:** Number the resource types, and require that each thread acquire resources in increasing order. i.e, a thread may make no requests for resources of type $\leq i$ if it is currently holding resources of type $i$.