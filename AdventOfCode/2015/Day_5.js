/*

    --- Day 5: Doesn't He Have Intern-Elves For This? ---
    Santa needs help figuring out which strings in his text file are naughty or nice.

    A nice string is one with all of the following properties:

    It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou.
    It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
    It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.
    For example:

    ugknbfddgicrmopn is nice because it has at least three vowels (u...i...o...), a double letter (...dd...), and none of the disallowed substrings.
    aaa is nice because it has at least three vowels and a double letter, even though the letters used by different rules overlap.
    jchzalrnumimnmhp is naughty because it has no double letter.
    haegwjzuvuyypxyu is naughty because it contains the string xy.
    dvszwmarrgswjxmb is naughty because it contains only one vowel.
    How many strings are nice?

*/

const input = require("./input/Day5");

const VOWELS = ['a', 'e', 'i', 'o', 'u'];
const BANNED_WORDS = ['ab', 'cd', 'pq', 'xy']

const calculateTotalNiceStrings = (input) => {

    let count = 0;

    for (const str of input.split("\n")) {

        let vowelsCount = 0;
        let hasConsecutiveChar = false;
        let hasBannedWords = false;

        if (str.length < 3) continue;

        let i = 0, j = 1;

        if (VOWELS.includes(str[i])) vowelsCount++;

        while (j < str.length) {
            if(VOWELS.includes(str[j])) vowelsCount++;
            if (str[i] === str[j]) {
                hasConsecutiveChar = true;
            }
            if (BANNED_WORDS.includes(`${str[i]}${str[j]}`)) {
                hasBannedWords = true;
            }
            i++;
            j++;
        }

        if (vowelsCount > 2 && hasConsecutiveChar && !hasBannedWords) {
            count++;
        }

    }

    return count;

}

console.log(calculateTotalNiceStrings(input));
