/**

    --- Part Two ---
    Now, given the same instructions, find the position of the first character that causes him to enter the basement (floor -1). The first character in the instructions has position 1, the second character has position 2, and so on.

    For example:

    ) causes him to enter the basement at character position 1.
    ()()) causes him to enter the basement at character position 5.
    What is the position of the character that causes Santa to first enter the basement?

*/

const input = require("./input/Day1");

const findBasementPosition = (input) => {

    let floor = 0;
    let position = 1;

    for (const char of input.split("")) {
        if (char === "(") {
            floor++;
        } else if (char === ")") {
            floor--;
        }
        if (floor === -1) return position;
        position++;
    }

    return 0;

}

console.log(findBasementPosition(input));
