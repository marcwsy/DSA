const sumRange = (n) => {
    if (n <= 0) return n;
    
    return n + sumRange(n - 1)

}
console.log(sumRange(3))