/**

    --- Part Two ---
    Thanks in part to your analysis, the Elves have figured out a little bit about the issue. They now know that the problematic data path passes through both dac (a digital-to-analog converter) and fft (a device which performs a fast Fourier transform).

    They're still not sure which specific path is the problem, and so they now need you to find every path from svr (the server rack) to out. However, the paths you find must all also visit both dac and fft (in any order).

    For example:

    svr: aaa bbb
    aaa: fft
    fft: ccc
    bbb: tty
    tty: ccc
    ccc: ddd eee
    ddd: hub
    hub: fff
    eee: dac
    dac: fff
    fff: ggg hhh
    ggg: out
    hhh: out
    This new list of devices contains many paths from svr to out:

    svr,aaa,fft,ccc,ddd,hub,fff,ggg,out
    svr,aaa,fft,ccc,ddd,hub,fff,hhh,out
    svr,aaa,fft,ccc,eee,dac,fff,ggg,out
    svr,aaa,fft,ccc,eee,dac,fff,hhh,out
    svr,bbb,tty,ccc,ddd,hub,fff,ggg,out
    svr,bbb,tty,ccc,ddd,hub,fff,hhh,out
    svr,bbb,tty,ccc,eee,dac,fff,ggg,out
    svr,bbb,tty,ccc,eee,dac,fff,hhh,out
    However, only 2 paths from svr to out visit both dac and fft.

    Find all of the paths that lead from svr to out. How many of those paths visit both dac and fft?

*/

const input = require("./input/Day_11");

const sampleInput = `svr: aaa bbb
aaa: fft
fft: ccc
bbb: tty
tty: ccc
ccc: ddd eee
ddd: hub
hub: fff
eee: dac
dac: fff
fff: ggg hhh
ggg: out
hhh: out`

const calculateTotalRoutes = (input) => {

    const lines = input.split("\n");
    const map = {};

    for (const line of lines) {
        const splitter = line.split(": ");
        const device = splitter[0];
        const output = splitter[1].split(" ");

        map[device] = output;
    }

    const visited = new Set();
    const memo = new Map();

    findPathCount(map, 'svr', visited, false, false, memo);

}

const findPathCount = (map, device, visited, hasVisitedDac, hasVisitedFFT, memo) => {

    const memoKey = `${device}-${hasVisitedDac}-${hasVisitedFFT}`;

    if (memo.has(memoKey)) {
        return memo.get(memoKey);
    }

    if (device === 'out') {
        return hasVisitedDac && hasVisitedFFT ? 1 : 0;
    }

    visited.add(device);
    let count = 0;

    for (const outputDevice of map[device] || []) {
        if (!visited.has(outputDevice)) {
            const newVisitedDac = hasVisitedDac || outputDevice === "dac";
            const newVisitedFFT = hasVisitedFFT || outputDevice === "fft";
            count += findPathCount(map, outputDevice, visited, newVisitedDac, newVisitedFFT, memo);
        }
    }

    visited.delete(device);

    memo.set(memoKey, count);

    console.log(count);

    return count;

}

// calculateTotalRoutes(sampleInput);

calculateTotalRoutes(input);
