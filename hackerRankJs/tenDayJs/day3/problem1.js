function getSecondLargest(nums) {
    let maxNum = Math.max.apply(null, nums);
    let result;
    for (var i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === maxNum) {
            nums.splice(i, 1);
        }
        result = Math.max.apply(null, nums);
    }
    return result;
}