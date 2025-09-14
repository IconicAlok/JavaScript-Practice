const square = function(x){
    return x * x;
}

console.log(square(12));

const makeNoise = function(){
    console.log("Pling!");
}
makeNoise();


const roundTo = function (n,step){
    let reminder = n%step;
    return n - reminder + (reminder<step /2 ? 0:step ); //render = 3 // 23-3 + 0
};
console.log(roundTo(23,10));

//nested

const hummans = function(factor){
    const ingredient = function(amount,unit,name){
        let ingredientAmount = amount*factor;
        if(ingredientAmount>1){
           unit+="s"; 
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1,"can","chickpeas");
    ingredient(0.25,"cup","tahini");
    ingredient(0.25,"cup","tahini");
    ingredient(1,"clove","garlic");
    ingredient(2,"tablespoon","olive oil");
    ingredient(0.5,"teaspoon","cumin");
};
hummans(10);