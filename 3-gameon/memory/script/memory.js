(function()

{
    "use strict";
    //Funktion som generar rader och kolummer samt id
    function MemoryBoard(memoryID, rows, cols)
    {
        //Sparar random arrayen från random.js
        this.randomArray = [];

        this.init = function ()
        {
            var i = 0;
            var x = 0;
            var countPic = 0;// Variabel som räknar.
            var picUp = 0;
            var countGuesses = 0;//För att uppmärksamma användaren om hur många försök som hon / han behövde
            var duoFounded = 0;//Räknar rätt par
            var This = this;
            var lastAlternativ = null;
            //Huvudlayout element
            var againButton = document.createElement("button");
            var p = document.createElement("p");
            var pressDiv = document.createElement("div");//Skapar div-tagg och lägger dem i HTML-dokumentet
            var table = document.createElement("table");//Skapar en tabell och lägger den i HTML-dokumentet
            var div = document.getElementById(memoryID);
            var clickEvent;
            var img;
            var anchor;
            var tr;
            var td;
            //Generar arrayen som spelplanen bygger på
            this.randomArray = RandomGenerator.getPictureArray(rows, cols);
            //Skapar div för information
            pressDiv.setAttribute("id", memoryID + "info");
            
            pressDiv.setAttribute("class", "Boardinfo");
            
            pressDiv.appendChild(p);
            //Skapar starta igen knapp
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
            //Kollar ifall man klickar på något kort
            clickEvent = function (e)
            {
                var currentChoice = e.currentTarget.getAttribute("id");
                
                e.preventDefault();//Förhindrar standardåtgärden webbläsaren gör på den händelsen

                if (lastAlternativ === currentChoice)
                {
                } 
                
                else
                {
                    
                    if (picUp < 2)
                    {
                        
                        This.turnUp(currentChoice);
                        
                        picUp += 1;
                        
                        if (!lastAlternativ) 
                        {
                            
                            lastAlternativ = currentChoice;
                            
                        }
                    }
                    
                    if (picUp >= 2)
                    {
                        
                        if (This.compareSrc(currentChoice, lastAlternativ))
                        {
                            This.setEventToNull(currentChoice);
                            
                            This.setEventToNull(lastAlternativ);
                            
                            picUp = 0;
                            
                            lastAlternativ = null;
                            
                            countGuesses += 1;
                            
                            duoFounded += 1;
                            //Skriver ut antal försök som gjorts
                            This.writeInfo("Antal par kvar att hitta: " + (This.randomArray.length / 2 - duoFounded) + "<br />Antal gjorda gissningar: " + countGuesses);
                        }
                        
                        else
                        {
                            
                            setTimeout(function ()
                            {
                                
                                This.turnDown(currentChoice);
                                
                                This.turnDown(lastAlternativ);
                                
                                picUp = 0;
                                
                                lastAlternativ = null;
                                
                                countGuesses += 1;
                                //Br-tagg läggs till för radbrytning
                                This.writeInfo("Antal par kvar att hitta: " + (This.randomArray.length / 2 - duoFounded) + "<br />Antal gjorda gissningar: " + countGuesses);
                                
                            }, 
                            1000);
                        }
                    }
                    //Kollar ifall alla kort är uppvända och spelet över
                    if (duoFounded >= This.randomArray.length / 2)
                    {
                        
                        againButton.removeAttribute("disabled");
                        
                        againButton.removeAttribute("class");
                        
                        This.writeInfo("Du behövde " + countGuesses + " gissningar för att vinna!");
                        
                    }
                }

            };
            //Skapar och skriver ut spelplanen för presentation
            for (i = 1; i <= rows; i += 1) 
            {
                
                tr = document.createElement("tr");
                
                for (x = 1; x <= cols; x += 1)
                {
                    //Skapar bilderna
                    img = document.createElement("img");
                    //För att bilderna ska synas från början
                    img.setAttribute("src", "pics/0.png");
                    
                    anchor = document.createElement("a");
                    
                    anchor.setAttribute("class", (this.randomArray[countPic] + " Klickbar") );
                    
                    anchor.setAttribute("id", countPic + memoryID);
                    //a.href används för att kunna tabba och använda enter på bilderna. Blir länkar
                    anchor.setAttribute("href", "#");
                    
                    td = document.createElement("td");
                    
                    anchor.appendChild(img);
                    
                    td.appendChild(anchor);
                    
                    tr.appendChild(td);

                    countPic += 1;//Räknar upp
                    
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
        //Variabel som är en img-tagg med hänvisning till en viss bild
        this.turnDown = function (nodeId)
        {
            
            var node = document.getElementById(nodeId);
            
            node.firstChild.setAttribute("src", "pics/0.png");
            
        };
        //Variabel som innehåller bild på ovansidan kortet.
        this.turnUp = function (nodeId)
        
        {
            var node = document.getElementById(nodeId);
            
            var index = parseInt(node.getAttribute("class"));
            
            node.firstChild.setAttribute("src", "pics/" + index + ".png");
            
        };
    }
    //Kör detta allra först när sidan laddas
    new MemoryBoard("Board", 4, 4).init();
    //Kolumner 4x4 bilder
    //Antal rader 4x4 bilder
}
());