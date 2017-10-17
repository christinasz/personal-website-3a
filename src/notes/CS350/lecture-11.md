## Lecture 11
October 17, 2017

## Virtual Memory Continued

### Physical Addresses
If physical addresses have $P$ bits, then the maximum amount of physical memory is $2^P$ bytes.
* Sys/161 MIPS processor uses 32 bit physical addresses (P = 32) which makes maximum physical memory 4 GB
	* this is a *physical* limitation
* This proved not to be sufficient, so we moved to 64 bit
	* Only 48 bits are actually used as physical addresses!
	* It ignores 16 bits

Kernel provides a separate, private *virtual* memory for each process.

We only have one physical address space, but many virtual.

### Virtual Addresses

If virtual addresses are V bits, the maximum size of a virtual memory is $2^V$ bytes.
* For MIPS, V = 32 (the same as its physical memory size!)
* On all modern systems, virtual word size = physical word size

We want a model where data grows up and stack grows down - they grow into each other.

### Address Translation
* Movement from virtual memory to physical memory
	* Done in hardware
* Information is given by kernel - it decides where everything is mapped, hardware just performs the action

How does the hardware decide this?

#### Dynamic Relocation
The simplest technique, albeit never used in practice.

CPU has a Memory Management Unit (MMU) with a *relocation register* and a *limit register.*

Relocation register - tells you offset, limit register - holds limit

Once we have that information, we can map. Every time you access an address,
1. If address beyond limit generate exception
2. Else physical address = virtual + relocation register

OS has to keep track of where everything is
Drawbacks: fragmentation

#### Paging
Physical memory is divided into fixed-size chunks (pages). We don't have fragmentation because chunks get mapped however we want to. This is the one that's actually used on real system.

Page table that has each page, frame, and a valid bit

Each process will have its own page table. The MMU includes a page table base register which points to the page table for the current process.
