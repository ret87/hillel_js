// чётность
var a = +prompt('введите целое число', 100);
console.log(a);
var b = +prompt('введите целое число', 100);
console.log(b);
var c = +prompt('введите целое число', 100);
console.log(c);
var sum = a + b + c;
console.log(sum);
alert(sum);

if ( a & 1 ) {
    // alert( "a нечётно" );
} else {
    alert( "a чётноe" );
}
if ( b & 1 ) {
    // alert( "b нечётно" );
} else {
    alert( "b чётноe" );
}
if ( c & 1 ) {
    // alert( "c нечётно" );
} else {
    alert( "c чётноe" );
}