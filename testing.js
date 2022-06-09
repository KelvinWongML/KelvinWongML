html======
<!DOCTYPE html>
<html lang="en">
<head>
    <title>testing:)</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="testing.js"></script>
</head>
<body>
    <p id="k1">something</p>
    <button onclick="Change(1);"></button>
    <p id="k2">hi</p>
    <button onclick="press();"></button>
</body>
</html>



js=====
var anObject = {
    name : 'kelvin',
    age  : 17,
}

console.log(anObject.age);
console.log(anObject.valueOf());
//revision -16/5/2022

var a = 'Kelvin is ';
var b = 'handsome';

function raise(x){
    for (var i = 1 ; !(i > x) ; i = i+1){
       a = a + 'so ';
       console.log(a+b);
       if (i === x){
           a = 'Kelvin is ';
           return;
       }
    }
}
//learn about for loop -18/5/2022

var p = 0 ;

    for ( let p = 0 ; p<10 ; p++){
      console.log('p = '+p);
    } 
// learn about the difference between let and var -18/5/2022

let jedilist = ['Anakin' , 'Luke' , 'Ahsoka'];

function addfellow(list){
    list.push('Yoda');
}
//learn about array , concept of 'Call By Sharing' -20/5/2022

var Astring = 'abcde';
var Bnumber = 1018;
var Cnull = null ;  
//learn about function of console -23/5/2022

var change = 'k' ; 
 
function Change(num) {
    document.getElementById(change+num).innerHTML = 'Surprise!';
};
//learn new method which can improve my 'five' project 1/6/2022

var PRESS = 0;
function press(){
    PRESS ++;
};
function MD (){
    if (PRESS === 3){
        document.getElementById('k2').innerHTML = "Bingo!";
    };
};
self.addEventListener('click',MD)
//learn addEventListener with using mouse and click 9/6/2022

