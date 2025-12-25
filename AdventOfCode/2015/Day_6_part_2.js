/*

    --- Part Two ---
    You just finish implementing your winning light pattern when you realize you mistranslated Santa's message from Ancient Nordic Elvish.

    The light grid you bought actually has individual brightness controls; each light can have a brightness of zero or more. The lights all start at zero.

    The phrase turn on actually means that you should increase the brightness of those lights by 1.

    The phrase turn off actually means that you should decrease the brightness of those lights by 1, to a minimum of zero.

    The phrase toggle actually means that you should increase the brightness of those lights by 2.

    What is the total brightness of all lights combined after following Santa's instructions?

    For example:

    turn on 0,0 through 0,0 would increase the total brightness by 1.
    toggle 0,0 through 999,999 would increase the total brightness by 2000000.

*/

const input = require("./input/Day6");

const calculateLightsOn = (input) => {

    const grid = new Array(1000).fill(null).map(_ => new Array(1000).fill(0));

    for (const line of input.split("\n")) {

        const [fromRange, to] = line.split(" through ");

        const start = fromRange.split(" ");

        const operation = start.length === 3 ? start[1] : start[0];

        const [fromI, fromJ] = start[start.length - 1].split(",").map(Number);
        const [toI, toJ] = to.split(",").map(Number);

        for (let i = fromI; i <= toI; i++) {
            for (let j = fromJ; j <= toJ; j++) {
                if (operation === "on") {
                    grid[i][j]++;
                } else if (operation === "off") {
                    if(grid[i][j] > 0)
                        grid[i][j]--;
                } else if (operation === "toggle") {
                    grid[i][j] += 2;
                }
            }
        }

    }

    let count = 0;

    for (const row of grid) {
        for (const col of row) {
            count += col;
        }
    }

    return count;

}

console.log(calculateLightsOn(input));
