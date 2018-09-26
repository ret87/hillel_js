'use strict';
console.log('Objects THIS');

        // THIS 


console.log("Лекционная практика");
console.log("Задача 1");
// Задан обьект с любым количеством свойств. Одно из свойств является функция renderObject(), которая описана в window. 
// При вызове метода obj.renderObject() -> выводит в document всё содержимое объекта, кроме самого метода renderObject
obj = { 
x: 10, 
y: 20, 
renderObject: function(){
        for(var key in this){
                
        }
        
}
}
 obj.renderObject() //-> x:10, y: 20