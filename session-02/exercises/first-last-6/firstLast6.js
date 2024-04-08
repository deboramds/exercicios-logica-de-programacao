// Dado um array de números inteiros, retorne `true` se o número 6 aparecer como o
// primeiro ou o último elemento do array. O array terá comprimento 1 ou mais.

// __Exemplos:__

// ```js
//     firstLast6([1, 2, 6]) → true
//     firstLast6([6, 1, 2, 3]) → true
//     firstLast6([13, 6, 1, 2, 3]) → false
// ```
// Solução exercício 1(irst-last-6), sessão 02


function firstLast6(nums) {
    return nums[0] === 6 || nums[nums.length - 1] === 6;
}