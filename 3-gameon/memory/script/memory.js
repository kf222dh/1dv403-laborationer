(function()

{
    "use strict";

    function MemoryBoard(memoryID, rows, cols)
    {

        this.randomArray = [];

        this.init = function ()
        {
            var i = 0;
            var x = 0;
            var countPic = 0;
            var picUp = 0;
            var countGuesses = 0;
            var duoFounded = 0;
            var This = this;
            var lastAlternativ = null;
            var againButton = document.createElement("button");
            var p = document.createElement("p");
            var pressDiv = document.createElement("div");
            var table = document.createElement("table");
            var div = document.getElementById(memoryID);
            var clickEvent;
            var img;
            var anchor;
            var tr;
            var td;

            this.randomArray = RandomGenerator.getPictureArray(rows, cols);
            
            pressDiv.setAttribute("id", memoryID + "info");
            
            pressDiv.setAttribute("class", "Boardinfo");
            
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
                var presentAlternativ = e.currentTarget.getAttribute("id");
                
                e.preventDefault();

                if (lastAlternativ === presentAlternativ)
                {
                } 
                
                else
                {
                    
                    if (picUp < 2)
                    {
                        
                        This.turnUp(presentAlternativ);
                        
                        picUp += 1;
                        
                        if (!lastAlternativ) 
                        {
                            
                            lastAlternativ = presentAlternativ;
                            
                        }
                    }
                    
                    if (picUp >= 2)
                    {
                        
                        if (This.compareSrc(presentAlternativ, lastAlternativ))
                        {
                            This.setEventToNull(presentAlternativ);
                            
                            This.setEventToNull(lastAlternativ);
                            
                            picUp = 0;
                            
                            lastAlternativ = null;
                            
                            countGuesses += 1;
                            
                            duoFounded += 1;
                            
                            This.writeInfo("Antal par kvar att hitta: " + (This.randomArray.length / 2 - duoFounded) + "<br />Antal gjorda gissningar: " + countGuesses);
                        }
                        
                        else
                        {
                            
                            setTimeout(function ()
                            {
                                
                                This.turnDown(presentAlternativ);
                                
                                This.turnDown(lastAlternativ);
                                
                                picUp = 0;
                                
                                lastAlternativ = null;
                                
                                countGuesses += 1;
                                
                                This.writeInfo("Antal par kvar att hitta: " + (This.randomArray.length / 2 - duoFounded) + "<br />Antal gjorda gissningar: " + countGuesses);
                                
                            }, 
                            1000);
                        }
                    }
                    
                    if (duoFounded >= This.randomArray.length / 2)
                    {
                        
                        againButton.removeAttribute("disabled");
                        
                        againButton.removeAttribute("class");
                        
                        This.writeInfo("Du behövde " + countGuesses + " gissningar för att vinna!");
                        
                    }
                }

            };

            for (i = 1; i <= rows; i += 1) 
            {
                
                tr = document.createElement("tr");
                
                for (x = 1; x <= cols; x += 1)
                {
                    
                    img = document.createElement("img");
                    
                    img.setAttribute("src", "pics/0.png");
                    
                    anchor = document.createElement("a");
                    
                    anchor.setAttribute("class", (this.randomArray[countPic] + " Klickbar") );
                    
                    anchor.setAttribute("id", countPic + memoryID);
                    
                    anchor.setAttribute("href", "#");
                    
                    td = document.createElement("td");
                    
                    anchor.appendChild(img);
                    
                    td.appendChild(anchor);
                    
                    tr.appendChild(td);

                    countPic += 1;
                    
                    anchor.onclick = clickEvent;
                    
                }
                
                table.appendChild(tr);
                
            }

            div.appendChild(table);
            
            div.appendChild(pressDiv);
            
            div.appendChild(againButton);
            
            this.writeInfo("Antal par kvar : " + (this.randomArray.length / 2 - duoFounded) + "<br />Antal gissningar: " + countGuesses);
            
        };
        
        this.setEventToNull = function (nodeId)
        {
            
            var node = document.getElementById(nodeId);
            
            node.setAttribute("class", (node.getAttribute("class").replace("Klickbar", "Oklickbar")));
            
            node.onclick = null;
            
        };
        
        this.writeInfo = function (text)
        {
            
            var node = document.getElementById(memoryID + "info");
            
            node.firstChild.innerHTML = text;
            
        };
        
        this.compareSrc = function (nodeId1, nodeId2)
        
        {
            var src1 = document.getElementById(nodeId1).firstChild.getAttribute("src");
            
            var src2 = document.getElementById(nodeId2).firstChild.getAttribute("src");
            
            return (src1 === src2);
            
        };

        this.turnDown = function (nodeId)
        {
            
            var node = document.getElementById(nodeId);
            
            node.firstChild.setAttribute("src", "pics/0.png");
            
        };
        
        this.turnUp = function (nodeId)
        
        {
            var node = document.getElementById(nodeId);
            
            var index = parseInt(node.getAttribute("class"));
            
            node.firstChild.setAttribute("src", "pics/" + index + ".png");
            
        };
    }
    
    new MemoryBoard("Board", 4, 4).init();
    
}
());