# Lecture 7

September 28, 2017

* Resource ordering is difficult because each piece of code could *look* right, but related locks could be called down the line

```
struct semaphore {
	struct spinlock *lock;
	sturct wchan *wc;
	unsigned int value;	
};

void P(struct semaphore *sem) {
	KASSERT(sem != NULL);
	spinlock_acquire(sem->lock);	
	while (sem->value == 0) {
		wchan_lock(sem->wc);
		spinlock_release(sem->lock);
		wchan_sleep(sem->wc);
		spinlock_acquire(sem->lock);
	}
	sem->value--;
	spinlock_release(sem->lock);
}

void V(struct semaphore *sem) {
	spinlock_acquire(sem->lock);
	sem->value++;
	wchan_wakeone(sem->wc);
	spinlock_release(sem->lock);
}
```

Thread starvation - when another thread never gets to make progress, because while nothing is technically blocking it, it just got there at the wrong time.

```
void a() {
  while (1) {
    lock_acquire(l);
    // do some long operation with s
    lock_release(l);
  }
}

void (b) {
  while(1) {
    lock_acquire(l);
    // do some long operation with s
	lock_release(l);
  }
}

```

Here, `b` starves.

Let's try to fix it:

```
void a() {
  while (1) {
    lock_acquire(l);
    // do some long operation with s
    lock_release(l);
    thread_yield();
  }
}

void (b) {
  while(1) {
    lock_acquire(l);
    // do some long operation with s
    lock_release(l);
    thread_yield();
  }
}

```

While this is better, it does not guarantee that `b` does not starve.


```
struct semaphore *sa, *sb;
unsigned int s;

void init() {
  sa = sem_create("A", 1);
  sb = sem_create("B", 1);
  // Just don't make both 0!
}

void a() {
  while (1) {
    P(sa);
    // do some long operation with s
    lock_release(l);
    V(sb);
  }
}

void (b) {
  while(1) {
    P(sb);
    // do some long operation with s
    lock_release(l);
    V(sa);
  }
}

```

There is another kind of lock situation, called "live-lock", sometimes used as a catch-all, where a thread isn't making progress, even though it is running.

## Processes

What are processes?

Multiple threads have different execution contexts, same code, same data.

Different processes have different code and data