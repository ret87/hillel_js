'use strict';
window.onload = function(){

    console.log('DOM events 14');

    // // Изменение: change, input, cut, copy, paste
// «Одалживание метода»
function printArgs(){
    arguments.join = [].join;
    console.log(arguments.join(':'));
};
printArgs(1,2,3);

};