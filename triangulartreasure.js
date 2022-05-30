// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/525e5a1cb735154b320002c8/train/javascript

function triangular(n) {
    arr = []

    if(n<=0){
        return 0
    } else {
        for(i=n; i>=1; i--){
            console.log('*'.repeat(i))
            arr.push(i)
        }
        sumarr = arr.reduce(
            (a, b) => a + b,
        )
        console.log(sumarr)
    } 
}
triangular(15)
console.log('=====')
triangular(-10)