/*

    Two Integer Sum II

    Given an array of integers numbers that is sorted in non-decreasing order.

    Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.

    There will always be exactly one valid solution.

    Your solution must use 
    O(1)
    O(1) additional space.

    Example 1:

    Input: numbers = [1,2,3,4], target = 3

    Output: [1,2]
    Explanation:
    The sum of 1 and 2 is 3. Since we are assuming a 1-indexed array, index1 = 1, index2 = 2. We return [1, 2].

    Constraints:

    2 <= numbers.length <= 1000
    -1000 <= numbers[i] <= 1000
    -1000 <= target <= 1000

*/

/*

    Thoughts: This is also a 2 pointer problem since the array is ordered the ascending order
    With first and last pointer We can add those and check with the target, if target is less need to increase the front pointer
    and if the sum is less than target we can decrease the end pointer. Thus the complexity will be O(n/2) thus Big O(n)

*/

const twoSum = (numbers, target) => {
    let i = 0;
    let j = numbers.length - 1;
    while(i < j) {
        const sum = numbers[i] + numbers[j];
        if(sum === target) {
            return [i + 1, j + 1];
        } else if(sum < target) {
            i++;
        } else {
            j--;
        }
    }
}
