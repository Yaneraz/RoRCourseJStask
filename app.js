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
        result = obj;

    for (var i = 0; i < pathArr.length; i++){
        result = result[pathArr[i]];
    }

    return result;
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


var Person = function(args){
    return args;
};

var p = new Person({
    name: 'Jack',
    age: '10',
    jump: function(){ return "My name is " + this.name + " and I can jump.";}
});

//console.log(p.name)

//Задача №3
//Модифицируйте конструктор из прошлой задачи, добавив к нему геттеры\сеттеры для каждого переданного свойства.
//
//    var p = new Person({
//    name: ‘Jack’,
//age: ’10’
//});
//p.getName() // ‘Jack’
//p.name // undefined
//p.getAge() // 10
//p.age // undefined
//console.log(p.jump()) // “My name is Jack and I can jump.”
//console.log(p.getJump) // undefined

var Person2 = function(args){
    var res = {};

    for (var prop in args) {
        if (args.hasOwnProperty(prop)){
            var propValue = args[prop];

            (function(prop){
                var firstLetter = prop.charAt(0).toUpperCase();

                res['get' + firstLetter + prop.slice(1)] = function(){
                    return args[prop];
                };
            })(prop);
        }
    }

    res.jump = function(){
        if (args.name !== undefined){
            return "My name is " + args.name + " and I can jump.";
        } else {
            return "I have no name";
        }
    };


    return res;
};


var p2 = new Person2({
    name: 'Jack',
    age: '10'
});

//console.log(p2.getName())
//console.log(p2.name)
//console.log(p2.getAge())
//console.log(p2.age)
//console.log(p2.jump())
//console.log(p2.getJump)


//Задача №4.
//Реализация функции deepCopy - для копирования объекта с учетом вложенных объектов:
//    var a = {b: ‘c’, d: {e: ‘f’}},
//b = deepCopy(a);
//a.d = 12;
//b.d // {e: ‘f’}

var a = {
        b: 'c',
        d: {
            e: 'f'
        }
    },
    b = deepCopy(a);

function deepCopy(obj){
    var res = {};

    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)){
            res[prop] = obj[prop];
        }
    }

    return res;
}

a.d = 12;

//console.log(b);
//console.log(b.d);