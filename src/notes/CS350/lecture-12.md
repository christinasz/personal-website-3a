# Lecture 12

October 19, 2017

## Paging continued

* The MMU has a *page table base register* that points to the page in the current process

**How to translate a virtual address:**
1. MMU determines page number and offset
	* Page number: virtual address divided by page size
	* Offset: virtual address modulo page size
2. Look up the page entry (PTE) in the page table, using page number
3. If entry is not valid, raise exception
4. Else combine page's frame number and offset to get physical address

**Example (Process A):**
 Page size: 4096

0x102c -> maps to frame 0x26 and offset 02c, so p = 0x2602c

0x9800 -> invalid so no physical address (raise exception)

0x0024 -> maps to frame 0x0f and offset 024 so p = 0xf024

**Example (Process B):**

0x102c -> different frame, same offset, so p = 0x1502c

Different locations in physical memory!

0x9800 -> 0x32800

This one is valid in process B!

0x0024 -> 0x14024

**Other things found in PTEs:**
* Write protection bit - sets a page to read only (an exception will be raised if you try to write to this page)
* Page usage bits
	* Reference bit: has the process been used?
	* Dirty bit: have the contents been changed?
	* Set by the MMU!

**Kernel:**
* Manages MMU registers
* Creates and manages page tables
* Manages physical memory
* Handles exceptions from MMU

**MMU:**
* Translates virtual/physical addresses
* Checks and raises exceptions

Example:

Process a:
* pid = 1
* vm = a
* one thread

Process b:
* pid = 2
* parent = 1
* vm = b
* one thread
* exit code

![](https://i.imgur.com/jJ6snmJ.png)