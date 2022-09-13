const fibonacci = (n) => {
    if (n < 2) {
        return [1,1];
    } 

    const fibRec = fibonacci(n - 1);

    fibRec.push(fibRec[fibRec.length - 1] + fibRec[fibRec.length - 2]);
    return fibRec;
};
console.log(fibonacci(8));