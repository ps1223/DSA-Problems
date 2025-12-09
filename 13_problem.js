/*

    Longest Substring Without Repeating Characters
    Solved 
    Given a string s, find the length of the longest substring without duplicate characters.

    A substring is a contiguous sequence of characters within a string.

    Example 1:

    Input: s = "zxyzxyz"

    Output: 3
    Explanation: The string "xyz" is the longest without duplicate characters.

    Example 2:

    Input: s = "xxxx"

    Output: 1
    Constraints:

    0 <= s.length <= 1000
    s may consist of printable ASCII characters.

*/

const lengthOfLongestSubstring = (s) => {
    if(s.length === 0) return 0;

    let max = 0;

    let left = 0;
    let right = 0;

    let set = {};

    while(right < s.length) {

        while(set[s[right]]) {
            delete set[s[left]];
            left++;
        }

        set[s[right]] = true;

        max = Math.max(max, right - left + 1);
        right++;
    }

    return max;

}

// console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("dvdf"));
