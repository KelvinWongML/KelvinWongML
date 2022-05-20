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

