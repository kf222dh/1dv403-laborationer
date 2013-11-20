"use strict";

var makePerson = function(persArr)
{
    var summa = 0;
    for (var i = 0; i < persArr.length; i++)    {
        summa += parseInt(persArr[i].age);
    }
    var average = Math.round(summa / persArr.length);
    persArr.sort(function (a, b)
    {
        return a.name.localeCompare(b.name)
    }
    );
    var min = Math.min.apply(null, Object.keys(persArr).map(function (e)
    {
        return persArr[e]['age'];
    }
    )
    );
    var max = Math.max.apply(null, Object.keys(persArr).map(function (e)
    {
        return persArr[e]['age'];
    }
    )
    );
    var str = persArr.map(function (pers)
    {
        return pers.name;
    }
    )
    .join(", ");
    var resultat =
    {
        minAge:min,maxAge:max,averageAge:average,names:str
    };
    return resultat;
}
var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
var result = makePerson(data);
console.log(result);

