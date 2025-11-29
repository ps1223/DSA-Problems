/*

    Encode and Decode Strings

    Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

    Please implement encode and decode

    Example 1:

    Input: ["neet","code","love","you"]

    Output:["neet","code","love","you"]
    Example 2:

    Input: ["we","say",":","yes"]

    Output: ["we","say",":","yes"]
    Constraints:

    0 <= strs.length < 100
    0 <= strs[i].length < 200
    strs[i] contains only UTF-8 characters.

*/


/*

    Initial thoughts - can use ascii values.... But it will not be unique and only hashing can be done and the strings can't be decoded

    Not sure

    Hint - Try to encode and decode the strings using a smart approach based on the lengths of each string. How can you differentiate between the lengths and any numbers that might be present in the strings?

    With the given hint, I can see the length of array and each string will give us the details about its structure

    construct a string with the array size 'n' and any delimiter and followed by 'n' lengths of each string seprated by delimiters.
    Once the string lengths are written, we can just add each to the encoded string and retrive based on the size

*/

class Solution {

    DELIMITER = "-";
    /**U
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length === 0) return "";
        const encodedValues = [strs.length];
        let entireString = "";
        for(const str of strs) {
            encodedValues.push(str.length);
            entireString += str;
        }
        encodedValues.push(entireString);
        return encodedValues.join(this.DELIMITER);
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str.length === 0) return [];
        const encodedValues = str.split(this.DELIMITER);
        const result = [];
        const length = parseInt(encodedValues[0]);
        const encodedString = encodedValues[encodedValues.length - 1];
        let index = 0;
        for(let i = 1; i <= length; i++) {
            const stringLength = parseInt(encodedValues[i]);
            result.push(encodedString.substring(index, index + stringLength));
            index += stringLength;
        }
        return result;
    }
}

const solution = new Solution();

const encoded = solution.encode(["neet", "code", ":", "string"]);

console.log(solution.decode(encoded));
