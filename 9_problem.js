/*

    Container With Most Water
    You are given an integer array heights where heights[i] represents the height of the 
    ith bar.

    You may choose any two bars to form a container. Return the maximum amount of water a container can store.

    Example 1:



    Input: height = [1,7,2,5,4,7,3,6]

    Output: 36
    Example 2:

    Input: height = [2,2,2]

    Output: 4
    Constraints:

    2 <= height.length <= 1000
    0 <= height[i] <= 1000

*/

/*

    Thoughts: This can be solved with a start and end pointer and find the volume by min(start, end) * distance between them 
    and move the min height pointer

*/

const calculateMostWater = (heights) => {

    let i = 0, j = heights.length - 1;
    let mostWater = 0;

    while(i < j) {

        const min = heights[i] > heights[j] ? heights[j] : heights[i];
        const sum = (j - i) * min;
        if(heights[i] < heights[j]) {
            i++;
        } else {
            j--;
        }

        if(sum > mostWater) mostWater = sum;

    }

    return mostWater;

}

console.log(calculateMostWater([1,7,2,5,4,7,3,6]))
console.log(calculateMostWater([2,2,2]))
