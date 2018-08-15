// alert prompt confirm


// alert

// alert( "Привет" );
// alert( "Привет1" );
// alert( "Привет2" );


// prompt

// var years = prompt('Сколько вам лет?', 100);
// alert('Вам ' + years + ' лет!');


// confirm

// var isAdmin = confirm ('вы админ?');
// alert(isAdmin);


// practice

// var urname = prompt('как вас зовут?', '')
// alert(urname);


// async defer 
// function addScript(src){
//     var script = document.createElement('script');
//     script.src = src;
//     script.async = false; // чтобы гарантировать порядок
//     document.head.appendChild(script);
//   }  
//   addScript('1.js'); // загружаться эти скрипты начнут сразу
//   addScript('2.js'); // выполнятся, как только загрузятся
//   addScript('3.js'); // но, гарантированно, в порядке 1 -> 2 -> 3


