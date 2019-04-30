/*
The difference between Object.create and function constructor pattern is that
Object.create builds an object that inherits directly from the one that we have 
passed into the first argument.
While on the other hand the function constructor, newly created object inherits 
from the constructor's prototype property.
*/
// Function constructor
var Person = function(name, birthYear, sex){
    this.name = name,
    this.birthYear = birthYear,
    this.sex = sex
};

Person.prototype.calcAge = function(){
    this.age = 2019 - this.birthYear;
};

var sb = new Person('Satyajit Barman', 1995, 'M');
var db = new Person('Dwipayan Barman', 1997, 'M');


//Object.create()
var Employee = {
    experience : function(){
        return 2019 - this.joinYear;
    }
};

var satya = Object.create(Employee);
var dip = Object.create(Employee);

satya['joinYear'] = 2017;
satya.name = 'Satyajit Barman';

dip['joinYear'] = 2016;
dip.name = 'Dwipayan Barman';



