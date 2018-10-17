'use strict';
console.log('OOP Personal classes');


        // Свои классы на прототипах
// Обычный конструктор - как мы ранее уже объявляли через new по стандартным классам









console.log('');
    // Обычный конструктор - как мы ранее уже объявляли через new по стандартным классам

function Constr (name) {
    this.speed = 0;
    this.name = name;
    this.run = function(speed){
        this.speed += speed;
        console.log(this.name + ' бежит со скоростью ' + this.speed);
    };
    this.time = function(time){
        this.time = 0;
        this.time += time;
        console.log(this.name + ' бежит ' + this.time + ' часов');
    };
    this.stop = function(){
        this.speed = 0;
        console.log(this.name + ' стоит');
    };
}
var cat = new Constr ('simba');
console.log(cat['speed']);
cat.run(3);
cat.time(5);
cat.run(12);
cat.stop();

    // Класс через прототип
