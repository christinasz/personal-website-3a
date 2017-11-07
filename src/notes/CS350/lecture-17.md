Use runprogram, similar to execv

Execv is very similar, except that it takes arguments!
* Program that you want to run
* Arguments to that program - arguments is a pointer to strings where the last one is null, and the rest are arguments as argv
	* Convention: first one is name of program
* Caveat: all of these are pointers to virtual memory, which we are about to destroy
* Want to copy from user memory to kernel memory
	* don't want to copy array itself
	* create new array of same size and copy each string into kernel memory
	* Once it's in kernel memory, then you're safe to destroy
* New address space for new program:
	* Copy new strings into its memory space
	* Where do we put all of this data? How do we make it available?
		* Can't put it in code or data
		* Put it (all the variables) on the stack!
		* as_define_stack
* Pad each item so that they are 8-byte aligned
* Pointers to strings need to be 4-byte aligned

Address space example:

Virtual address: 0x0040 0004

Physical address: 
* 0x4 0000 + 8 * 0x1000
* = 0x408 0000
* = 0x0020 0004

(not sure if this is right)

How do we start an address space? (initialize)
* Fork makes an address space, but it duplicates it
* OS/161 preloads the address space before the program runs

## ELF Files

* What you want to load and where you want to load it
* `execv`'s job is to take all the parts of the ELF file and put them in memory
* Contains address space, segment descriptors

`dumbvm` insists that ELF file only has 2 segments: text and data
* ELF file does not describe the stack
* Just point to it with the stack pointer

Look at `syscall/loadelf.c` to see how OS/161 loads segments from ELF files