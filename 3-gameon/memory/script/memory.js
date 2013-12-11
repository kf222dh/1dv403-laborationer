"use strict";

function MemoryBoard(memoryID, rows, cols)
{
    randomArray = [];
    
    this.init = function()
    {
        this.randomArray = RandomGenerator.getPictureArray(rows, cols);
        
        var i = 0;
        var x = 0;
        var picCounter = 0;

        table = document.createElement("table");
        div = document.querySelector("div#" + memoryID);
        var tr = document.createElement("tr");
        var img = document.createElement("img");
        var anchor = document.createElement("a");
        var td = document.createElement("td");

        for (i = 1; i <= rows; i += 1)
        {
            
           for (x = 1; x <= cols; x += 1)
           {
               
               img.setAttribute("src", "pics/0.png")

               anchor.appendChild(img);

               td.appendChild(anchor);

               tr.appendChild(td);
               
               anchor.setAttribute("class", this.memoryCards[picCounter])

               anchor.setAttribute("href", "#");
               
               anchor.addEventListener("click", function (e)
               {
                   
                    e.preventDefault();

                    e.currentTarget.firstChild.setAttribute("src", "pics/" + e.currentTarget.getAttribute("class") + ".png");

                },
                false);

               picCounter += 1;
               
            }

            table.appendChild(tr);

        }

        div.appendChild(table);
        
    };
    
}
window.onload = function()
{
    
    new MemoryBoard("Board1", 4, 4).init();
    
}