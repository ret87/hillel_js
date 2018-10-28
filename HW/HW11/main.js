'use strict';
console.log('OOP');


var obj = {
    X: 12,
    Y: 3,
    znak: '/'
};
function SuperMath(){
    this.check = function(obj){
        var result;
        if(confirm('12 / 3 ?') === true){
            if(obj.znak == '/'){
                result = obj.X / obj.Y
            } return console.log(result);
        } else this.input1(); 
    };
    this.input1 = function(){
        var result;
        var X = prompt('vvedite X ', 10);
        var Y = prompt('vvedite Y ', 2);
        var znak = prompt('vvedite znak ', '/');
        if(znak == '/'){
            result = X / Y
        } 
        else if (znak == '+'){
            result = X + Y
        } 
        else if (znak == '-'){
            result = X - Y
        } 
        else if (znak == '*'){
            result = X * Y
        } 
        else if (znak == '%'){
            result = X % Y
        };
        return console.log(result);
    };
};
var p = new SuperMath();
p.check(obj);
