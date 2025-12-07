/*

    Trapping Rain Water
    You are given an array of non-negative integers height which represent an elevation map. Each value height[i] represents the height of a bar, which has a width of 1.

    Return the maximum area of water that can be trapped between the bars.

    Example 1:

    Input: height = [0,2,0,3,1,0,1,3,2,1]

    Output: 9
    Constraints:

    1 <= height.length <= 1000
    0 <= height[i] <= 1000


*/

const findTrappedWaterVolume = (input) => {

    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let totalWater = 0;
    
    while (left <= right) {
        if (height[left] <= height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                totalWater += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                totalWater += rightMax - height[right];
            }
            right--;
        }
    }
    
    return totalWater;

}


console.log(findTrappedWaterVolume([0,1,0,2,1,0,1,3,2,1,2,1]));
