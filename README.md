# Temp File Clearing Tool

This Node.js script is a command-line utility that helps users clear temporary files from their computer. These files can take up valuable storage space and slow down system performance, so it's important to periodically delete them.

Our tool makes it easy to clean up all those pesky temp files with just a few clicks. It searches for and deletes temporary files in several directories, including:

- `os.tmpdir()`
- `X:\Windows\Temp`
- `X:\Users\{username}\AppData\Local\Temp`
- `X:\Windows\Prefetch`

## Features

- Formats file sizes for readability (e.g. `1KB`, `2MB`, `3GB`, etc.)
The `formatSize` function takes in a file size in bytes and returns a human-readable string representation of the size. For example, `formatSize(1024)` would return `1KB`.

- Asynchronously deletes temporary files in parallel
The script uses the `Promise.all` method to asynchronously delete the temporary files in parallel. This helps to improve the performance of the script, as it can delete multiple files at the same time rather than waiting for each one to be deleted before moving on to the next.

- Logs the names and sizes of deleted files to the console
- Displays the total size of deleted files at the end

As the script is deleting each temporary file, it logs the name and size of the file to the console using the logWithDelay function. This function introduces a delay between log messages to make it easier to read the output.

At the end of the script, the total size of all deleted files is displayed to the user.

- Provides an option to retry the script or exit

After the temporary files have been deleted, the script prompts the user to either retry the script or exit. This allows the user to easily delete temporary files multiple times if needed.

## Usage

1. Ensure you have [Node.js](https://nodejs.org/) installed on your system.
2. Clone or download the repository.
3. Open a command prompt and navigate to the project directory.
4. Run the script with `node index.js`.
5. Follow the prompts to delete temporary files.

## Example Output
```
[-] Deleting temporary files... (This may take a while)

[+] Deleted file1.tmp 1KB
[+] Deleted file2.tmp 2KB
[+] Deleted file3.tmp 3KB
[+] Deleted file4.tmp 4KB
[+] Deleted file5.tmp 5KB

—— Deleted 15KB of temporary files

Would you like to retry or exit?
```
