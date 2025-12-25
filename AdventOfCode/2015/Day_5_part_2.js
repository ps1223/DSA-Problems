/*

    --- Part Two ---
    Realizing the error of his ways, Santa has switched to a better model of determining whether a string is naughty or nice. None of the old rules apply, as they are all clearly ridiculous.

    Now, a nice string is one with all of the following properties:

    It contains a pair of any two letters that appears at least twice in the string without overlapping, like xyxy (xy) or aabcdefgaa (aa), but not like aaa (aa, but it overlaps).
    It contains at least one letter which repeats with exactly one letter between them, like xyx, abcdefeghi (efe), or even aaa.
    For example:

    qjhvhtzxzqqjkmpb is nice because is has a pair that appears twice (qj) and a letter that repeats with exactly one letter between them (zxz).
    xxyxx is nice because it has a pair that appears twice and a letter that repeats with one between, even though the letters used by each rule overlap.
    uurcxstgmygtbstg is naughty because it has a pair (tg) but no repeat with a single letter between them.
    ieodomkazucvgmuy is naughty because it has a repeating letter with one between (odo), but no pair that appears twice.
    How many strings are nice under these new rules?

*/

const input = require("./input/Day5");

const calculateTotalNiceStrings = (input) => {

    let count = 0;

    let length = 1;
    for (const str of input.split("\n")) {

        const twoCharMap = new Map();
        let hasDiffCharInBetween = false;
        let hasMultiTwoChar = false;

        if (str.length < 4) continue;

        let i = 0, j = 1;

        while (j < str.length) {
            if (j > 1) {
                if (str[i] === str[j]) {
                    hasDiffCharInBetween = true;
                }
                i++;
            }
            const twoChar = `${str[i]}${str[j]}`;
            if (twoCharMap.has(twoChar)) {
                if (twoCharMap.get(twoChar) < i) {
                    hasMultiTwoChar = true;
                }
            } else {
                twoCharMap.set(twoChar, j);
            }
            j++;
        }

        if (hasMultiTwoChar && hasDiffCharInBetween) {
            count++;
        }

        console.log(length, count);
        length++;

    }

    return count;

}

console.log(calculateTotalNiceStrings(input));
