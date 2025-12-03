/*

    Valid Palindrome

    Given a string s, return true if it is a palindrome, otherwise return false.

    A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

    Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).

    Example 1:

    Input: s = "Was it a car or a cat I saw?"

    Output: true
    Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

    Example 2:

    Input: s = "tab a cat"

    Output: false
    Explanation: "tabacat" is not a palindrome.

    Constraints:

    1 <= s.length <= 1000
    s is made up of only printable ASCII characters.

*/

/*

    Thoughts: Its pretty straight forward, we just need to iterate through the string with two pointer from start and end and just skip if its either not a alphabet or number
    verify whether the front pointer and end pointer are same and doesn't change till it meets at the middle

*/

const isPalindrome = (s) => {

    s = s.toLowerCase();
    let i = 0, j = s.length - 1;
    while(i <= j) {
        const firstChar = s[i];
        const secondChar = s[j];
        if(!((firstChar.charCodeAt() >= 48 && firstChar.charCodeAt() <= 57)
            || (firstChar.charCodeAt() >= 97 && firstChar.charCodeAt() <= 122))) {
            i++;
        } else if(!((secondChar.charCodeAt() >= 48 && secondChar.charCodeAt() <= 57)
            || (secondChar.charCodeAt() >= 97 && secondChar.charCodeAt() <= 122))) {
            j--;
        } else {
            if(s[i] !== s[j]) return false;
            i++;
            j--;
        }
    }

    return true;

}
