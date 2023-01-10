console.clear();
require('colors');
const fs = require('fs');
const os = require('os');
const path = require('path');
const readline = require('readline');
const { exec } = require('child_process');

function formatSize(size) {
    if (size < 1000) return `${size} bytes`;
    else if (size < 1000000) return `${(size / 1000).toFixed(2)}KB`;
    else if (size < 1000000000) return `${(size / 1000000).toFixed(2)}MB`;
    else if (size < 1000000000000) return `${(size / 1000000000).toFixed(2)}GB`;
    else return `${(size / 1000000000000).toFixed(2)}TB`;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function welcome() {
    console.log("\n" + "—".repeat(50).green);
    console.log("—".repeat(50).green);
    console.log(
        "— Welcome to our Temp File Clearing Tool!".green
    );
    console.log("— Are you tired of constantly having to manually search for and delete ".grey + "temporary files".red + " on your computer? Our tool makes it easy to clean up all those pesky temp files that can slow down your system and take up valuable storage space. With just a few clicks, you can say goodbye to all those unnecessary files and hello to a faster and more efficient computer. Thank you for choosing our tool and we hope it helps to improve your computing experience. *".grey);
    console.log("—".repeat(50).green);
    console.log("—".repeat(50).green);
    console.log("\n");
}

async function deleteTempFiles() {
    // Construct the full path to the Temp directory
    const tempDirs = [
        os.tmpdir(),
        path.join(process.env.SystemRoot, 'Temp'), // X:\Windows\Temp
        path.join(process.env.LOCALAPPDATA, 'Temp'), // X:\Users\{username}\AppData\Local\Temp
        path.join(process.env.SystemRoot, 'Prefetch') // X:\Windows\Prefetch
    ];

    let totalSize = 0;
    let fileCount = [];
    console.log('[-]'.cyan + ' Deleting temporary files... (This may take a while)\n'.yellow);

    await Promise.all(tempDirs.map(async tempDir => {
        try {
            const files = await fs.promises.readdir(tempDir);
            for (const file of files) {
                const filePath = path.join(tempDir, file);
                const stats = await fs.promises.stat(filePath);
                if (stats.isDirectory()) continue;
                await fs.promises.unlink(filePath);
                await logWithDelay(`[+] Deleted ${file.yellow} ${formatSize(stats.size).green}`);
                totalSize += stats.size;
                fileCount.push(file);
            }
        } catch (e) {
            null
        }
    }));

    if (fileCount.length === 0) {
        console.log("No temporary files were found".bgRed.white);
        return;
    } else {
        console.log(`\n—— Deleted ${formatSize(totalSize).green} of temporary files`);
    }
}

async function logWithDelay(message) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, 150);
    });
}

async function main() {
    let exec = require("child_process").exec; // eslint-disable-line 
    let isWindows = (require("os").platform().indexOf("win32") >= 0); // eslint-disable-line

    if (!isWindows) return console.log("This tool is only for Windows");

    exec("net session", async function (err, stdout, stderr) {
        if (err) {
            return console.log("You must run this tool as administrator".red);
        } else {
            await welcome();
            await deleteTempFiles();
            console.log("Press any key to exit...");
            process.stdin.setRawMode(true);
            process.stdin.resume();
            process.stdin.on("data", process.exit.bind(process, 0));
        }
    });
    console.log("Press any key to exit...");
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.on("data", process.exit.bind(process, 0));
}


main();