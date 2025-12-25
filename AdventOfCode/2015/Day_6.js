/*

    --- Day 6: Probably a Fire Hazard ---
    Because your neighbors keep defeating you in the holiday house decorating contest year after year, you've decided to deploy one million lights in a 1000x1000 grid.

    Furthermore, because you've been especially nice this year, Santa has mailed you instructions on how to display the ideal lighting configuration.

    Lights in your grid are numbered from 0 to 999 in each direction; the lights at each corner are at 0,0, 0,999, 999,999, and 999,0. The instructions include whether to turn on, turn off, or toggle various inclusive ranges given as coordinate pairs. Each coordinate pair represents opposite corners of a rectangle, inclusive; a coordinate pair like 0,0 through 2,2 therefore refers to 9 lights in a 3x3 square. The lights all start turned off.

    To defeat your neighbors this year, all you have to do is set up your lights by doing the instructions Santa sent you in order.

    For example:

    turn on 0,0 through 999,999 would turn on (or leave on) every light.
    toggle 0,0 through 999,0 would toggle the first line of 1000 lights, turning off the ones that were on, and turning on the ones that were off.
    turn off 499,499 through 500,500 would turn off (or leave off) the middle four lights.
    After following the instructions, how many lights are lit?

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
                    grid[i][j] = 1;
                } else if (operation === "off") {
                    grid[i][j] = 0;
                } else if (operation === "toggle") {
                    grid[i][j] = grid[i][j] === 1 ? 0 : 1;
                }
            }
        }

    }

    let count = 0;

    for (const row of grid) {
        for (const col of row) {
            if (col === 1) count++;
        }
    }

    return count;

}

console.log(calculateLightsOn(input));
