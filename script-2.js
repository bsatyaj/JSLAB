//Function returning function

function a(x){
    return function(y){
        return x+y;
    }
}

var sum = a(30)(20);
console.log(sum);