"use strict";

var makePerson = function(persArr)
{
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
    var obj =
    {
        minAge:min,maxAge:max,averageAge:average,names:str
    };
}

