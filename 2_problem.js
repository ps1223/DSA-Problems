/*
        Top K Frequent Elements
        Solved 
        Given an integer array nums and an integer k, return the k most frequent elements within the array.

        The test cases are generated such that the answer is always unique.

        You may return the output in any order.

        Example 1:

        Input: nums = [1,2,2,3,3,3], k = 2

        Output: [2,3]
        Example 2:

        Input: nums = [7,7], k = 1

        Output: [7]
        Constraints:

        1 <= nums.length <= 10^4.
        -1000 <= nums[i] <= 1000
        1 <= k <= number of distinct elements in nums.
*/

/*

    Thoughts: Maybe find the frequency hash map initially and sort the frequency to get the maximum count items and get the top k characters.

        This will lead to a O(n log(n))

    Later approach:
    Or use space complexity of O(n) to create a array and place the item in the frequency array, say if 3 is available 3 times - push 3 into 3rd index
    By this way we can itrate from backwards and get the k items

    This will be a O(n) complexity

*/


class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const frequency = {};
        const result = [];

        for(let i = 0; i < nums.length; i++) {
            if(frequency[nums[i]] !== undefined) {
                frequency[nums[i]]++;
            } else {
                frequency[nums[i]] = 1;
            }
        }

        const frequencyBucket = new Array(nums.length + 1).fill(null).map(() => []);

        for(const i in frequency) {
            frequencyBucket[frequency[i]].push(parseInt(i));
        }

        for(let i = nums.length; i >= 0 && result.length < k; i--) {
            if(frequencyBucket[i].length > 0) {
                result.push(...frequencyBucket[i]);
            }
        }

        return result;

    }

}

