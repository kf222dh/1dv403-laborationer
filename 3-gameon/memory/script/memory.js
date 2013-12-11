(function()
{
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
        var pressDiv = document.createElement("div");
        var p = document.createElement("p");
        
        var countGuesses = 0;
        var duoFounded = 0;
        
        var againButton = document.createElement("button");
        var clickEvent;

        pressDiv.setAttribute("id", memoryID + "info");
        
        pressDiv.setAttribute("id", memoryID + "Info");
        
        pressDiv.setAttribute("class", "gameBoardinfo");

        p = document.createElement("p");

        pressDiv.appendChild(p);
        
        againButton.setAttribute("type", "button");
        
        againButton.innerHTML = "Nytt försök";
        
        againButton.setAttribute("disabled", "disabled");
        
        againButton.setAttribute("class", "notInUse");
        
        againButton.onclick = function ()
        {
            div.removeChild(table);
            div.removeChild(pressDiv);
            div.removeChild(againButton);
            This.init();
        };
        
                    clickEvent = function (e)
                    {
                   
                    e.preventDefault();
                    
                    var presentAlternative = e.currentTarget.getAttribute("id");
                    
                    if (lastAlternative === presentAlternative)
                    {

                    }
                    
                    else
                    {

                        if (picUp < 2)
                        {

                            This.turnUp(presentAlternative);

                            picUp += 1;
                            
                            if (!lastAlternative)
                            {
                                
                                lastAlternative = presentAlternative;
                                
                            }

                        }

                        if (picUp >= 2)
                        {

                            if (This.compareSrc(presentAlternative, lastAlternative))
                            {

                                This.setEventToNull(presentAlternative);

                                This.setEventToNull(lastAlternative);

                                picUp = 0;

                                lastAlternative = null;
                                
                                duoFounded += 1;
                                
                                countGuesses += 1;
                                
                                This.writeInfo("Par kvar att hitta: " + (This.memoryCards.length / 2 - duoFounded) + "<br />Antal gissningar kvar : " + countGuesses);
                                
                            }
                            
                            else
                            {
                                    setTimeout(function ()
                                    {
                                        
                                    This.turnDown(presentAlternative);

                                    This.turnDown(lastAlternative);

                                    picUp = 0;

                                    lastAlternative = null;
                                    
                                    countGuesses += 1;
                                    
                                    This.writeInfo("Par kvar att hitta: " + (This.memoryCards.length / 2 - duoFounded) + "<br />Antal gissningar kvar : " + countGuesses);

                                },
                                1000);
                            }

                        }
                        
                        if (duoFounded >= This.memoryCards.length / 2)
                        
                        {
                            
                        againButton.removeAttribute("disabled");
                        
                        againButton.removeAttribute("class");
                        
                        This.writeInfo("Du behövde " + countGuesses +
                            " gissningar för att vinna!");
                        }

                    }

                };

        for (i = 1; i <= rows; i += 1)
        {
            
           for (x = 1; x <= cols; x += 1)
           {
               
               img.setAttribute("src", "pics/0.png");

               anchor.appendChild(img);

               td.appendChild(anchor);

               tr.appendChild(td);
               
               anchor.setAttribute("class", (this.randomArray[picCounter] + "Klickbar!"));

               anchor.setAttribute("href", "#");
               
               anchor.setAttribute("id", picCounter + memoryID);
               
               picCounter += 1;
               
               anchor.onclick = clickEvent;

            }

            table.appendChild(tr);

        }

        div.appendChild(table);
        
        div.appendChild(pressDiv);
        
        div.appendChild(againButton);
        
        This.writeInfo("Par kvar att hitta: " + (This.memoryCards.length / 2 - duoFounded) + "<br />Antal gissningar kvar : " + countGuesses);
        
    };
    
        this.turnDown = function (nodeId)
        {
            
        var node = document.getElementById(nodeId);

        node.firstChild.setAttribute("src", "pics/0.png");

        };
        
        this.turnUp = function (nodeId)
        {
            
        var node = document.getElementById(nodeId),
        
        index = node.getAttribute("class");
            
        node.firstChild.setAttribute("src", "pics/" + index + ".png");


        };
        
        this.compareSrc = function (nodeId1, nodeId2)
        {

        var src1 = document.getElementById(nodeId1).firstChild.getAttribute("src");

        var src2 = document.getElementById(nodeId2).firstChild.getAttribute("src");

        return (src1 === src2);

        };

        this.setEventToNull = function (nodeId)
        {

            var node = document.getElementById(nodeId);

           node.onclick = null;

        };

        this.writeInfo = function (text) 
        {

        var node = document.getElementById(memoryID + "info");

        node.firstChild.innerHTML = text;

        };
    
}
    new MemoryBoard("Board1", 4, 4).init();
    
}());