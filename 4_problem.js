/*

    Products of Array Except Self
    Solved 
    Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

    Each product is guaranteed to fit in a 32-bit integer.

    Follow-up: Could you solve it in O(n) time without using the division operation?

    Example 1:

    Input: nums = [1,2,4,6]

    Output: [48,24,12,8]
    Example 2:

    Input: nums = [-1,0,1,2,3]

    Output: [0,-6,0,0,0]
    Constraints:

    2 <= nums.length <= 1000
    -20 <= nums[i] <= 20

    Thoughts: To calculate total product of all items in N loop, then again loop through and divide the current item to get the desired output.
    But division is not recommended.

    Also we need to solve it in O(n). So for each element we need to find what is the product after its index and before its index.
    But for a iteration only product before the item can be calculated. So need to traverse again in reverse to calculate the product after the index
    Even better in the reverse traversal we can calculate the total product of each items by multiplying the prefix product with the calculated postfix.

    // [-1,0,1,2,3]
    // [1, -1, 0, 0, 0] ---- calculated prefix
    // [0, 6, 6, 3, 1] ---- calculated postfix
    // output -- [0, -6, 0, 0, 0]
    // [ [1, 0], [-1, 6], [0, 6], [0, 3], [0, 1] ]


*/

const productExceptSelf = (nums) => {
    const arr = Array(nums.length).fill(null).map(() => [0, 0]);

    for(let i = 0, j = nums.length - 1; i < nums.length && j >= 0; i++, j--) {
        if(i === 0) {
            arr[i][0] = 1;
            continue;
        }
        if(j === nums.length - 1) {
            arr[j][1] = 1;
            continue;
        }
        console.log(arr);
        arr[i][0] = arr[i - 1][0] * nums[i];
        arr[j][1] = arr[j + 1][1] * nums[i];
    }
    return arr.map(bucket => bucket[0] * bucket[1]);
}

console.log(productExceptSelf([1, 2, 4, 6]))
