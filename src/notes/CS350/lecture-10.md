# Lecture 10

October 12, 2017

* Processes are created and destroyed
* Kernel keeps track of processes

||Linux|OS161|
|---|---|---|
|Creation|`fork, execv` |`fork, execv`|
|Destruction|`_exit, kill`|`_exit`|
|Synchronization|`wait, waitpid, pause, ...`|`waitpid`|
|Attribute Management|`getpid, getuid, nice, getrusage...`|`getpid`|

### fork
* creates a new process (child) that is a clone of the original (parent)
	* after `fork`, both parent and child are executing *copies* of the same program.
	* at the time you called fork, the memory is *identical*
		* the one difference is that `fork` returns a different value.
		* called once and returned twice. Returns a different value to a child than it does the parent
			* parent gets pid, child gets 0
	* if one touches a global variable, the other might not!

You can get your own pid by doing `getpid`.

### _exit and waitpid
* `_exit` terminates process.
	* can give a return code (exit status) as an argument
	* kernel records that code in case another process asks for it

* `waitpid` lets you wait for another process to terminate, then retrieve its exit status code
	* the thread that calls `waitpid` is blocked until that process exits

The child might end before the parent does, so we need more of a relationship between these processes. So we've established that the child *must* die before its parent.

So parents can `waitpid(child_pid, &child_exit, 0)`, (wait for its child), but its child cannot. We can only communicate upwards.

If a parent dies without having checked the child's exit status, we call that an orphan process. :'(

### execv

Fork gives us a new *process*, not a new program. If we want a new program, we call `execv`.

* First argument: what program you want to load
* Second argument: argv array (arguments to the program) where args[3] is null

## Virtual Memory

The biggest lie of all: memory addresses don't exist! We actually have some limited amount of physical memory, and there's a layer (translation layer, or "layer of lies") where the virtual memory gets mapped to some part of physical memory. The program itself will never know!