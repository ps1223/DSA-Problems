/*

    Longest Repeating Character Replacement
    You are given a string s consisting of only uppercase english characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character.

    After performing at most k replacements, return the length of the longest substring which contains only one distinct character.

    Example 1:

    Input: s = "XYYX", k = 2

    Output: 4
    Explanation: Either replace the 'X's with 'Y's, or replace the 'Y's with 'X's.

    Example 2:

    Input: s = "AAABABB", k = 1

    Output: 5
    Constraints:

    1 <= s.length <= 1000
    0 <= k <= s.length

*/

const characterReplacement = (s, k) => {

    let left = 0;
    let maxFreq = 0;
    let map = {};
    let max = 0;

    for(let right = 0; right < s.length; right++) {
        map[s[right]] = (map[s[right]] || 0) + 1;
        maxFreq = Math.max(maxFreq, map[s[right]]);
        const windowLength = right - left + 1;
        const changesNeeded = windowLength - maxFreq;
        if(changesNeeded > k) {
            map[s[left]]--;
            left++;
        }

        max = Math.max(max, right - left + 1);

    }

    return max;

}

// console.log(characterReplacement("AABABBA", 1));
console.log(characterReplacement("XYYX", 2));
