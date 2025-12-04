/*

    --- Day 4: Printing Department ---
    You ride the escalator down to the printing department. They're clearly getting ready for Christmas; they have lots of large rolls of paper everywhere, and there's even a massive printer in the corner (to handle the really big print jobs).

    Decorating here will be easy: they can make their own decorations. What you really need is a way to get further into the North Pole base while the elevators are offline.

    "Actually, maybe we can help with that," one of the Elves replies when you ask for help. "We're pretty sure there's a cafeteria on the other side of the back wall. If we could break through the wall, you'd be able to keep moving. It's too bad all of our forklifts are so busy moving those big rolls of paper around."

    If you can optimize the work the forklifts are doing, maybe they would have time to spare to break through the wall.

    The rolls of paper (@) are arranged on a large grid; the Elves even have a helpful diagram (your puzzle input) indicating where everything is located.

    For example:

    ..@@.@@@@.
    @@@.@.@.@@
    @@@@@.@.@@
    @.@@@@..@.
    @@.@@@@.@@
    .@@@@@@@.@
    .@.@.@.@@@
    @.@@@.@@@@
    .@@@@@@@@.
    @.@.@@@.@.
    The forklifts can only access a roll of paper if there are fewer than four rolls of paper in the eight adjacent positions. If you can figure out which rolls of paper the forklifts can access, they'll spend less time looking and more time breaking down the wall to the cafeteria.

    In this example, there are 13 rolls of paper that can be accessed by a forklift (marked with x):

    ..xx.xx@x.
    x@@.@.@.@@
    @@@@@.x.@@
    @.@@@@..@.
    x@.@@@@.@x
    .@@@@@@@.@
    .@.@.@.@@@
    x.@@@.@@@@
    .@@@@@@@@.
    x.x.@@@.x.
    Consider your complete diagram of the paper roll locations. How many rolls of paper can be accessed by a forklift?

*/

/*

    Thoughts: Couldn't understand the problem itself clearly....
    On checking with online support, the grid is a 2D matrix and 8 adjacent elements should be calculated

    Lets see whether we can iterate each item and calculate the 8 cells manually and break if the count if more than 3 or add it to the count

*/

const input = require("./input/Day_4");

const sampleInput = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`

const calculateValidPaperRolls = (input) => {

    const length = input.length;
    let validPaperRolls = 0;

    for(let i = 0; i < length * length; i++) {

        const row = Math.floor(i / length);
        const column = i % length;

        const item = input[row][column];

        if(item === "@") {
            if(isAdjacentPaperRollsLessThanFour(input, row, column)) {
                validPaperRolls++;
            }
        } else {
            continue;
        }

    }

    return validPaperRolls;

}

const isAdjacentPaperRollsLessThanFour = (input, row, column) => {

    let adjacentPaperRolls = 0;

    for(let i = 0; i < 9; i++) {
        const tempRow = row + Math.floor(i / 3) - 1;
        const tempColumn = column + (i % 3) - 1;
        if(tempRow < 0 || tempColumn < 0 || tempRow >= input.length || tempColumn >= input.length || (row === tempRow && column === tempColumn)) {
            continue;
        } else if(input[tempRow][tempColumn] === "@") {
            adjacentPaperRolls++;
        }
        if(adjacentPaperRolls >= 4) return false;
    }

    return true;

}

// const formattedInput = sampleInput.split("\n");
const formattedInput = input.split("\n");

for(let i = 0; i < formattedInput.length; i++) {
    formattedInput[i] = formattedInput[i].split("");
}

console.log(calculateValidPaperRolls(formattedInput));
