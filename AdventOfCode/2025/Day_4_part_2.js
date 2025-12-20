/*

    --- Part Two ---
    Now, the Elves just need help accessing as much of the paper as they can.

    Once a roll of paper can be accessed by a forklift, it can be removed. Once a roll of paper is removed, the forklifts might be able to access more rolls of paper, which they might also be able to remove. How many total rolls of paper could the Elves remove if they keep repeating this process?

    Starting with the same example as above, here is one way you could remove as many rolls of paper as possible, using highlighted @ to indicate that a roll of paper is about to be removed, and using x to indicate that a roll of paper was just removed:

    Initial state:
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

    Remove 13 rolls of paper:
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

    Remove 12 rolls of paper:
    .......x..
    .@@.x.x.@x
    x@@@@...@@
    x.@@@@..x.
    .@.@@@@.x.
    .x@@@@@@.x
    .x.@.@.@@@
    ..@@@.@@@@
    .x@@@@@@@.
    ....@@@...

    Remove 7 rolls of paper:
    ..........
    .x@.....x.
    .@@@@...xx
    ..@@@@....
    .x.@@@@...
    ..@@@@@@..
    ...@.@.@@x
    ..@@@.@@@@
    ..x@@@@@@.
    ....@@@...

    Remove 5 rolls of paper:
    ..........
    ..x.......
    .x@@@.....
    ..@@@@....
    ...@@@@...
    ..x@@@@@..
    ...@.@.@@.
    ..x@@.@@@x
    ...@@@@@@.
    ....@@@...

    Remove 2 rolls of paper:
    ..........
    ..........
    ..x@@.....
    ..@@@@....
    ...@@@@...
    ...@@@@@..
    ...@.@.@@.
    ...@@.@@@.
    ...@@@@@x.
    ....@@@...

    Remove 1 roll of paper:
    ..........
    ..........
    ...@@.....
    ..x@@@....
    ...@@@@...
    ...@@@@@..
    ...@.@.@@.
    ...@@.@@@.
    ...@@@@@..
    ....@@@...

    Remove 1 roll of paper:
    ..........
    ..........
    ...x@.....
    ...@@@....
    ...@@@@...
    ...@@@@@..
    ...@.@.@@.
    ...@@.@@@.
    ...@@@@@..
    ....@@@...

    Remove 1 roll of paper:
    ..........
    ..........
    ....x.....
    ...@@@....
    ...@@@@...
    ...@@@@@..
    ...@.@.@@.
    ...@@.@@@.
    ...@@@@@..
    ....@@@...

    Remove 1 roll of paper:
    ..........
    ..........
    ..........
    ...x@@....
    ...@@@@...
    ...@@@@@..
    ...@.@.@@.
    ...@@.@@@.
    ...@@@@@..
    ....@@@...
    Stop once no more rolls of paper are accessible by a forklift. In this example, a total of 43 rolls of paper can be removed.

    Start with your original diagram. How many rolls of paper in total can be removed by the Elves and their forklifts?

*/

/*

    Thoughts: This is still the same problem update need to take a list of elements being removed in the first iteration and remove them and 
    call the function again until the function return 0

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
    let validPaperRolls = 0;

    let removedPaperRolls = [];

    do {
        removedPaperRolls = removeValidPaperRolls(input);
        validPaperRolls += removedPaperRolls.length;
        for(const [row, column] of removedPaperRolls) {
            input[row][column] = ".";
        }
    } while(removedPaperRolls.length > 0);

    return validPaperRolls;

}

const removeValidPaperRolls = (input) => {

    const length = input.length;
    let removedPaperRolls = [];

    for(let i = 0; i < length * length; i++) {

        const row = Math.floor(i / length);
        const column = i % length;

        const item = input[row][column];

        if(item === "@") {
            if(isAdjacentPaperRollsLessThanFour(input, row, column)) {
                removedPaperRolls.push([row, column]);
            }
        } else {
            continue;
        }

    }

    return removedPaperRolls;

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
