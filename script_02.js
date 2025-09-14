function minus(a,b){
    if (b===undefined) return -a;
    else return a-b;
}
console.log(minus(10));
console.log(minus(10,5));

function roundTo(n, step=1){
    let reminder = n % step;
    return n - reminder + (reminder < step / 2 ? 0 : step);
}
console.log(roundTo(4.5));
console.log(roundTo(4.5,2));

console.log("C","O",2);

function warpValue(n){
    let local = n;
    return ()=> local;
}
let warp1 = warpValue(1);
let warp2 = warpValue(2);

console.log(warp1());
console.log(warp2());

// function multiplier(factor){
//     return number = function(){
//         return number * factor;
//     };
// }

function multiplier(factor){
    return number => number*factor;
}
let twice = multiplier(2);
console.log(twice(5));


//recurtion

function power(base,exponent){
    if(exponent==0){ //base case
        return 1;
    }else{
        return base*power(base,exponent-1);
    }
}

console.log(power(2,3));


function findSolution(target){
    function find(current,history){
        if (current == target){
            return history;
        }else if(current > target) {
            return null;
        }else{
            return find(current+5,`(${history}+5)`)??
                    find(current*3,`(${history}*3)`);
        }
    };
    return find(1,"1");  
}
console.log(findSolution(24));