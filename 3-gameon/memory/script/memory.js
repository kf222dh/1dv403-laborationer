"use strict";

function MemoryBoard(memoryID, rows, cols)
{
    this.randomArray = [];
    
    this.init = function()
    {
        this.randomArray = RandomGenerator.getPictureArray(rows, cols);
        
        var i = 0;
        var x = 0;
        var picCounter = 0;
        
        var lastAlternative = null;
        var picUp = 0;
        var This = this;
        
        

        var table = document.createElement("table");
        var div = document.getElementById(memoryID);
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
               
               anchor.setAttribute("id", picCounter + memoryID);
               
               anchor.onclick = function (e)
               {
                   
                    e.preventDefault();
                    
                    var presentAlternative = e.currentTarget.getAttribute("id");
                    
                    if (lastAlternative === presentAlternative)
                    {

                        return;

                    }
                    
                    else
                    {

                        if (picUp < 2)
                        {

                            This.turnUp(presentAlternative);

                            picUp += 1;

                        }

                        if (!lastAlternative)
                        {

                            lastAlternative = presentAlternative;

                        }

                        if (picUp >= 2)
                        {

                            setTimeout(function ()
                            {

                                This.turnDown(presentAlternative);

                                This.turnDown(lastAlternative);

                                picUp = 0;

                                lastAlternative = null;

                            },
                            
                            10000);

                        }

                    }

                };

               picCounter += 1;
               
            }

            table.appendChild(tr);

        }

        div.appendChild(table);
        
    };
    
        this.turnDown = function (nodeId)
        {

        node.firstChild.setAttribute("src", "pics/0.png");
        
        var node = document.getElementById(nodeId);

        }
        
        this.turnUp = function (nodeId)
        {
            
        node.firstChild.setAttribute("src", "pics/" + index + ".png");

        var node = document.getElementById(nodeId),

        index = node.getAttribute("class");

    }
    
}

window.onload = function()
{
    
    new MemoryBoard("Board1", 4, 4).init();
    
}