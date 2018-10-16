'use strict';
console.log('OOP Inherit classes');

function pow (x, n){
    if(n != 1){
        return x * pow(x, n-1);  
    } else 
    return x;
};
console.log(pow(5,3));