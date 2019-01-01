var res= [];
function fib(n){
    if (n === 1){
        return [0,1];
    } else {
        var s = fib(n-1);
        console.log(s);
        s.push(s[s.length -1] + s[s.length - 2]);
        return s;
    }
    // return fib(n-1) + fib(n-2);

}
console.log(fib(6))