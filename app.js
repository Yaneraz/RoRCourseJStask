//Задача №1
//Напишите реализацию функции getObject(path, obj), которая вернет значение аттрибута объекта obj по заданному пути:
//
//    var o = {a: {b: ‘c’}};
//getObject(‘a.b’, o) // ‘c’
//getObject(‘a’, o) // {b: ‘c’}
//getObject(‘d’, o) // undefined

var o = { a: { b: 'c' } };

function getObject(path, obj){
    var pathArr = path.split('.'),
        tempObj = obj;

    for (var i = 0; i < pathArr.length; i++){
        tempObj = tempObj[pathArr[i]];
    }

    return tempObj;
}

//console.log(getObject('a.b', o));
//console.log(getObject('a', o))
//console.log(getObject('d', o))

//----------------------------------

//Задача №2
//Напишите реализацию конструктора, принимающего на вход объект и создающего аттрибуты\методы по ключам этого объекта:
//
//    var Person = function(args){
//        // put your code here
//    };
//
//var p = new Person({
//    name: ‘Jack’,
//age: ’10’,
//jump: function(){ return “My name is ” + this.name + “ and I can jump.”;}
//});
//p.name // ‘Jack’
//p.age // 10
//console.log(p.jump()) // “My name is Jack and I can jump.”


function Person(){

}