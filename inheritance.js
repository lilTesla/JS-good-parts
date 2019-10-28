let empty_object = {};
let stooge = {
    "first-name": "Jerome",
    "last-name": "Howard"
};
let flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }
};
stooge['first-name'] = 'Jerome';
stooge['middle-name'] = 'Lester';
stooge.nickname = 'Curly';
flight.equipment = {
    model: 'Boeing 777'
};
flight.status = 'overdue';

let Vehicle = function (capacity, speed){
    this.capacity = capacity;
    this.speed = speed;
};

Object.create = function(base){
    let newObj = function() {};
    newObj.prototype = base;
    return new newObj();
};

let Car = function(bodyType, capacity, speed){
    this.bodyType = bodyType;
};
Car.prototype = new Vehicle();
let f = function(){this.a = 5;}

let car = new Car("cab", 4, 250);

document.getElementById("btn").onclick = function () {
    alert($m.add(1,2));
};