/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), for N > 1.
Given N, calculate F(N).
*/

// var fib = function(n) {
//   if (n < 2) return n;
//   return fib(n-1) + fib(n-2);
// };

var fib = function(n) {
  var mem = {};

  var helper = function(n, mem) {
    if (n < 2) {
      mem[n] = n;
    }
    else if (!mem[n]) {
      mem[n] = helper(n-1, mem) + helper(n-2, mem);
    }
    return mem[n];
  }

  return helper(n, mem);
};

// var fib = function(n) {
//   const f = {};
//   f[0] = 0;
//   f[1] = 1;


//   for (let i = 2; i < n + 1; i++) {
//     f[i] = f[i-2] + f[i-1];
//   }

//   return f[n];
// }

module.exports = fib;
