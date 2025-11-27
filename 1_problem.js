/*
    Group Anagrams

    Example 1:
        Input: strs = ["act","pots","tops","cat","stop","hat"]
        
        Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
    
    Example 2:
    
        Input: strs = ["x"]
    
        Output: [["x"]]
    Example 3:
    
        Input: strs = [""]
    
        Output: [[""]]
    
    Constraints:
    
        1 <= strs.length <= 1000.
        0 <= strs[i].length <= 100
        strs[i] is made up of lowercase English letters.

*/

/*
    Thoughts:
        Sort each string and hash it to a key and push value is the key is same, Then hashmap values can be pushed as output

    

*/

const groupAnagrams = (arr) => {

    const out = {};

    for(const str of arr) {
        const alphabet = new Array(26).fill(0);
        for(const ch of str) {
            alphabet[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        const key = alphabet.join(".");
        if(out[key]) {
            out[key].push(str);
        } else {
            out[key] = [str];
        }
    }

    return Object.values(out);

}
