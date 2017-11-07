# Lecture 13

October 24, 2017

How do we use `waitpid`? From `widefork.c`:

Processes can die:
* From `_exit` (graceful)
* From exceptions: (not graceful)
	* Out of memory (accessing memory you don't own)

Exit codes are the parameter to `_exit`

32-bit rvalue:

30 bits is exit code

2 bits is exit status

How do you implement waitpid?
* Only the parent can call waitpid on its children
* If the random pid you made is an actual process, check if it's the child
	* Have the system call return an error
* Block if waitpid is called after child exits
* Zombie process: killed but kept around for pid
* Parent exits before children:
	* Let the parent die, children become orphans
* Encode exit code with `__WEXITED`, there's a macro that will do this for you

How do you implement getpid?
* getpid returns the PID of the current process
* implement this first!
* in the menu, you can start a process by doing `p (path to process)`
	* following the menu code, you see something similar to the `fork` code
* runprogram calls runcreate to create a process structure (like how fork calls runcreate)
	* assign PIDs inside the runprogram function?

Challenges with paging:
* Fragmentation is not completely solved; there is internal fragmentation
	* Fragmentation within the pages
	* Page tables can get really big

Problem: Page table is stored in memory - every time you want to look up something, the MMU has to go through memory and read that memory in the page table. This is two memory accesses, which is slow. The solution? A cache!

* The Translation Lookaside Buffer - in the MMU. Rather than going directly to the page table for the lookup, it goes to the TLB. (Hardware-managed TLB)
* MIPS has a software-managed TLB:
	* if there is an entry (p, f) in the TLB then
		* return f (TLB hit!)
	* else
		* raise exception (TLB miss)
* If there's a miss, the kernel must determine the frame number and add (p, f) to the TLB
* Instruction that caused the exception is re-executed

The MIPS TLB
* Each TLB is 64 bits in size
* Page # - 20 bits
* Frame # - 20 bits
* Page size - 12 bits
	* 4kb page
* The PID in TLB is used so that you don't have to flush everything
* Valid bit - whether or not entry is valid
* Dirty bit - whether or not entry has changed (allows you to write to that page in memory)

* TLB needs page and frame - 8 bytes, but Page Table only needs frame (index is page number) - 4 bytes
* Virtual memory can be very large in comparison to the programs that run in it
* Applications can use discontiguous segments of virtual memory
* Top half of address space is for kernel

Solutions to this problem: Segmentation
* Similar to dynamic relocation
* Separate mapping for each segment of virtual memory
* Instead of page numbers, you have segment numbers and offsets!
* The difference: segments can be different sizes

Implementing segmentation approaches:
* MMU has relocation and limit register for each segment
	* Similar to dynamic relocation
