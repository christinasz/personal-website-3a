# Lecture 8
October 3, 2017

## Processing and System Calls

A process is an environment in which an application program runs.
* Includes virtualized resources that its program can use:
	* One (or more threads)
	* Virtual memory for program's code and data
	* Other resources specific to the program

Process
/\
thread thread

Process
/\
thread thread

Kern - thread

`p` command - runs programs

Kernel's job is to load that program, make the process for it, and allow that process to run - given a thread, execute it.

`cs350-objdump -xD` - is a program that will tell you what's in a program file

Programs are ELF files, specifically ELF-32

`objdump` also tells you the symbols and source code

Processes are created and managed by the kernel and each program's process is *isolated*. If you want to share things, you have to ask the kernel.

System calls are the interface between the processes and the kernel, to request operating system services.

System Call Software Stack:

Application Code

System Call Library

--BARRIER

Kernel - handles the system call

### Kernel Privilege

Kernel code runs at a higher level of *execution privilege* than application code
* Two levels: kernel (ring 0) and user privilege (ring 1)
* Implemented by the CPU - magic!

There are only two things that make kernel code run:
* Interrupts
	* Hardware (devices)
	* Interrupt handler gets kernel privilege
* Exceptions
	* Instruction execution
	* Running program needs attention
	* Special kind of interrupt

Exception type `EX_SYS` = Syscall exception! There's a special instruction in MIPS: `syscall`

Kernel and linux are compiled with gnu/asm/unistd_64.h

System call timeline:

1. Application calls library wrapper function for system call
2. library function performs syscall
3. Kernel exception handler runs
	* Creates trap frame
	* Determines that this is system call exception
	* Determines which system call is being requested
	* Does the work for system call
	* Restores application and returns
4. Library wrapper function finishes and returns
5. Application continues

Code & code location are part of the kernel Application Binary Interface (ABI) - kernel and software must agree for software to work

`break` is obsolete, modern programs shouldn't use break. Why is it still in the ABI? Well if you want your ABI to be able to run all your old programs, then it should still be implemented. `mmap` is the equivalent.