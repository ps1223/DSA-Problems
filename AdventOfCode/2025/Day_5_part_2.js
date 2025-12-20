/*

    --- Part Two ---
    The Elves start bringing their spoiled inventory to the trash chute at the back of the kitchen.

    So that they can stop bugging you when they get new inventory, the Elves would like to know all of the IDs that the fresh ingredient ID ranges consider to be fresh. An ingredient ID is still considered fresh if it is in any range.

    Now, the second section of the database (the available ingredient IDs) is irrelevant. Here are the fresh ingredient ID ranges from the above example:

    3-5
    10-14
    16-20
    12-18
    The ingredient IDs that these ranges consider to be fresh are 3, 4, 5, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, and 20. So, in this example, the fresh ingredient ID ranges consider a total of 14 ingredient IDs to be fresh.

    Process the database file again. How many ingredient IDs are considered to be fresh according to the fresh ingredient ID ranges?

*/

const input = require("./input/Day_5");

const sampleInput = `3-5
10-14
16-20
12-18`;

const calculateFreshItemCount = (input) => {

    const inputList = input.split("\n")
        .filter(line => line.split("-").length > 1)
        .map(line => line.split("-").map(Number))
        .sort((a, b) => a[0] - b[0]);

    const ranges = [];
    let length = 0;

    let freshItemsCount = 0;

    for(const [start, end] of inputList) {

        if(length === 0 || ranges[length - 1][1] < start) {
            ranges.push([start, end]);
            length++;
        } else {
            ranges[length - 1][1] = Math.max(ranges[length - 1][1], end);
        }

    }

    for(const [start, end] of ranges) {
        freshItemsCount += (end - start + 1);
    }

    console.log(freshItemsCount);

    return freshItemsCount;

}

// calculateFreshItemIds(sampleInput);

calculateFreshItemCount(input);
