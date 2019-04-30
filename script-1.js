// passing functions as arguments
/*
1. A function is an instance of the Object type.
2. A function behaves like any other object.
3. We can store functions in a variable.
4. We can pass a function as an argument to another function.
5. We can return a function from a function.
 */

 function calAge(el){
    return 2016 - el;
 }

 function experienceCalc(el){
     return 'exp '+ (2018 - el);
 }

 var years = [1990, 1965, 1937, 2005, 1998];

 // Without function passing
 function arrayCalc_1(arr){
    var arrRes = [];
    for(var i = 0 ; i < arr.length ; i++){
        arrRes.push(calAge(arr[i]));
    }
    return arrRes;
 }

 function arrayCalc_3(arr){
    var arrRes = [];
    for(var i = 0 ; i < arr.length ; i++){
        arrRes.push(experienceCalc(arr[i]));
    }
    return arrRes;
 }

 var ages1 = arrayCalc_1(years);
 console.log(ages1);

 var ages3 = arrayCalc_3(years);
 console.log(ages3);

 // With function passing
 /*
 Here we can make a generic function who can accept any function having same parameters
 */
function arrayCalc_2(arr, fn){
    var arrRes = [];
    for(var i = 0 ; i < arr.length ; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

 var ages2 = arrayCalc_2(years,calAge);
 console.log(ages2);

 var ages4 = arrayCalc_2(years, experienceCalc);
 console.log(ages4);