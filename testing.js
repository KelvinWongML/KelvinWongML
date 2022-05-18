var anObject = {
    name : 'kelvin',
    age  : 17,
}

console.log(anObject.age);
console.log(anObject.valueOf());

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

var p = 0 ;

    for ( let p = 0 ; p<10 ; p++){
      console.log('p = '+p);
    }


