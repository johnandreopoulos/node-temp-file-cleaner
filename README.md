# Temp File Clearing Tool

The Temp File Clearing Tool is a command-line utility developed in Node.js for efficiently removing temporary files from your computer. Temporary files can accumulate over time, consuming valuable storage and slowing down system performance. This tool simplifies the cleanup process, allowing you to reclaim storage space with ease.

## Key Features

- **Human-Readable File Sizes**: Displays file sizes in easily understandable units (e.g., `1KB`, `2MB`, `3GB`).
- **Parallel Deletion**: Utilizes asynchronous operations to delete multiple temporary files simultaneously, enhancing performance.
- **Detailed Logging**: Provides real-time updates on the names and sizes of deleted files, and summarizes the total amount of space reclaimed.
- **Retry or Exit Option**: After the cleanup, you can choose to run the script again or exit.

## Supported Directories

The tool targets temporary files in the following locations:

- `os.tmpdir()`
- `X:\Windows\Temp`
- `X:\Users\{username}\AppData\Local\Temp`
- `X:\Windows\Prefetch`

## How to Use

### Using the Executable

You can run the `Cleaner.exe` file directly to start the cleanup process.

### Using Command Line

1. Ensure [Node.js](https://nodejs.org/) is installed on your system.
2. Clone or download the repository.
3. Open a command prompt as an Administrator and navigate to the project directory using `cd PATH`.
4. Install required dependencies with `npm install`.
5. Execute the script with `node index.js`.
6. Follow the on-screen instructions to delete temporary files.

![cmd_A544dykjX5](https://user-images.githubusercontent.com/39243722/211149243-db6c4403-5f36-493f-b6d3-2583ae828ff1.gif)

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

This tool ensures a smooth and efficient cleanup process, helping you maintain optimal system performance.
