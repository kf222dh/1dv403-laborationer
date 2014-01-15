"use strict";

var makePerson = function(persArr)
{
    var summa = 0;
    for (var i = 0; i < persArr.length; i++)
    {
        summa += parseInt(persArr[i].age);
    }
    var average = Math.round(summa / persArr.length);//Medelvärdet med hjälp av en array
    persArr.sort(function (a, b)//Sorterar namnen i alfabetisk ordning
    {
        return a.name.localeCompare(b.name)
    }
    );
    var min = Math.min.apply(null, Object.keys(persArr).map(function (e)//Min värdet med hjälp av en array
    {
        return persArr[e]['age'];
    }
    )
    );
    var max = Math.max.apply(null, Object.keys(persArr).map(function (e)//Max värdet med hjälp av en array
    {
        return persArr[e]['age'];
    }
    )
    );
    var str = persArr.map(function (pers)//En sträng av de sorterade namnen
    {
        return pers.name;
    }
    )
    .join(", ");//Kommatecken efter vaje namn
    var resultat =
    {
        minAge:min,maxAge:max,averageAge:average,names:str//Skickas tillbaka
    };
    return resultat;
}
var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
var result = makePerson(data);
console.log(result);//Konsollog test resultat

