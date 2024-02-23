
// callback function hosse---jokhon kono ekta function ke parameter hisebe pathano hobe and vitore ekta call kora hobe setakey callback function bole//

function greetings(greetingsHandler, name){
   greetingsHandler(name);

}


function greetingsHandler(name){
    console.log('Good Morning', name);
}

greetings(greetingsHandler, 'ashik');
greetings(greetingsHandler, 'kowshik');
greetings(greetingsHandler, 'roshik');



// another one

function submitHandler(){
    console.log('submit button clicked');
}


document.getElementById('btn-submit').addEventListener('click', submitHandler);