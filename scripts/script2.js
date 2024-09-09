let nums = [4, 37, 25, 72, 63, 87, -17, -9];
// let min = nums[0];
// let sum = 0;
// for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
// }
// console.log(sum);
let evensum = 0;
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 == 0) {
//         evensum += nums[i];
//     }
// }
// console.log(evensum);
// let alternation = 0;
// for (let i = 0; i < nums.length; i += 2) {
//     alternation += nums[i];
// }
// console.log(alternation);
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < min) {
//         min = nums[i];
//     }
// }
// console.log(min);
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 != 0 && nums[i] > 0) {
//         evensum += nums[i];
//     }
// }
// console.log(evensum);
for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
        evensum += nums[i];
    }
}
console.log(evensum);