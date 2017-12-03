# Lecture 23
November 28, 2017

## File I/O
* **Files:** persistent named data objects
* Read, write, seek
  - Encourages reading and writing in a consecutive way
  - Seek lets you jump non-sequentially
* `lseek` is the Linux syscall for seek
  - lseek isn't actually touching the file, just how you look at it
  - changes the file position
  - next read or write is at this new file position

### Directories and File Names
* A directory maps file names to i-numbers
  - i-numbers are unique identifiers
  - Really, they're indexes to arrays
  - the i-number is the REAL name for the file
* Directories provide a way for applications to group related files
* This lets us have a tree of sorts where you can get to directories and files
* If we have directories, and the directories associate names with i-numbers, we can think of these associations as links!

## Links
* A *hard link* is an association between a name and an i-number
  - each entry in a directory is a hard link
* Once a file is created, you can make additional links. Then you can see the same data through two files.
  - They appear to be two different files because they have different paths, but the i-numbers are the same
  - We don't want to link directories to avoid cycles
* Permissions are stored with the i-number
  - You can't have `foo/myA` be accessible to different people than `docs/a.txt` if they are the same file
* Hard links can be removed using `unlink`.
  - Data will only be deleted when there are no links left
    - We keep track of this using a counter
  - There is no delete syscall on unix, just unlink.
* `rm == unlink`

## Multiple File Systems
* DOS uses two-part file names - file system name, pathname within file system
  - Windows 7 implemented a VFS
* Unix has a virtual file system, VFS
  - Say our real file system has `/home`, `/bin`
  - Say we do `mount(~, /home)`, then it gets stored on a separate file system, but the VFS makes it seem like one file system
  - You cannot hard link between file systems
* Mounting does not make two file systems, it just creates a single *view*.

## Implementation of File Systems
* What needs to be stored persistently? (stored on disk)
  - File data, metadata
  - Directories and links
  - File system metadata
* Non-persistent information
  - Open files per process
  - File position for open file
  - cached copies of persistent data

### File System Example
* Let's use an extremely small disk as an example: 256 kb
* Group every 8 consecutive sectors into a block for better spatial locality (fewer seeks)
* Reduces the number of block pointers
* 4 kb is convenient for demand paging
  - so 64 total blocks on this disk
* Most of the space on the disk is for actual data in the files, and some space for metadata and stuff - for this example, we give 56 blocks for user data
* Assuming each i-node is 256 bytes, dedicate 5 blocks for i-nodes
  - Gives 80 total i-nodes/files
