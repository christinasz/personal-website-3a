# Lecture 5

September 21, 2017

### Locks

Spinlocks spin, locks *block.* Blocking puts things into a wait queue. To implement locks in OS161, Wait channels are used.

#### Wait Channels
* `wchan_sleep(struct wchan *wc)` - blocks the calling thread and causes context switch
* `wchan_wakeall(struct wchan *wc)` - unblocks all threads on `wc`
* `wchan_wakeone(struct wchan *wc)` - unblocks one thread on `wc`
* `wchan_lock(struct wchan *wc)` - prevents operations on `wc`


### Semaphores

* Object with an integer value with 2 operations:
	* `P` - if semaphore > 0, P decrements. Otherwise, wait until it's > 0 and then decrement it
		* Every call to P is waiting for a call to V
	* `V` - increment the value of the semaphore

By definition, `P` and `V` are atomic.

We can use Semaphores for locking as well!

#### Producers and Consumers example

```
struct semaphore *Items,*Spaces;

Items = sem_create("Buffer Items", 0); /* initially = 0 */
Spaces = sem_create("Buffer Spaces", N);/* initially = N */
struct semaphore *Buffer_Sem = sem_create("", 1);

void producer() {
	P(Spaces);
	P(Buffer_Sem);
	/*produce*/
	if (some condition) {
		V(Buffer_Sem);
	}
	V(Buffer_Sem);
	V(Items);
}

Consumer’s Pseudo-code:
void consumer() {
	P(Items);
	P(Buffer_Sem);
	/*produce*/
	if (some condition) {
		V(Buffer_Sem);
	}
	V(Buffer_Sem);
	V(Spaces);
}

```

Lesson: Don't use `P` and `V` for things other than locks