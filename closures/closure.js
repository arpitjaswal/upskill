


function outer(){
    let count=0;
    return function() {
        return ++count;
    }
}

const inner = outer();

console.log(inner())//1;
console.log(inner())//2
console.log(inner())//3
