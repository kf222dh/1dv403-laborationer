"use strict";

var MessageBoard =
{
    //Arrayen som kommer att innehålla alla meddelanden.
	messages: [],
	//Startar applikationen
	init: function(e)
	{
	    // Skapar ett nytt meddelandeobjekt
		var mess = new Message(e, new Date());
        var arrayNumbeer = this.messages.push(mess);
		this.renderMessages();
		this.countMessages();
    },
    
    createMessage: function(messageID)
    {
		var listMessage  = document.getElementById("listMessage");
		//Skapar div class = "meddelanden"
		var meddelanden = document.createElement("div");
		
		meddelanden.className = "meddelande";
		
		listMessage .appendChild(meddelanden);
		
		var p = document.createElement("p");
		
		p.innerHTML = this.messages[messageID].getHTMLText();
		
		meddelanden.appendChild(p);
		//Skapar div class = "ikoner"
		var ikoner = document.createElement("div");

		ikoner.className = "ikoner";

		meddelanden.insertBefore(ikoner, meddelanden.firstChild);
		
		var icons = document.createElement("p");
		//Skapar Tidstämpel-bild
		var aTagg2 = document.createElement("a");

		aTagg2.href = "#";
		
		var imgKlock = document.createElement("img");

		imgKlock.src = "bilder/Klocka.png";

		imgKlock.alt = "Tidsstämpel!";

		var that = this;

		imgKlock.onclick = function()
		{
			alert(that.messages[messageID].getDateText());
		}
		
		aTagg2.appendChild(imgKlock);

		icons.appendChild(aTagg2);
		//Skapar Ta bort-bild		
		var aTagg = document.createElement("a");

		aTagg.href = "#";
		
		var imgDel = document.createElement("img");

		imgDel.src = "bilder/taBort.png";

		imgDel.alt = "Ta bort";

		imgDel.onclick = function()
		{
			MessageBoard.removeMessage(messageID);
		}
		// Lägger till de nya elementen i den nya divtaggen
		aTagg.appendChild(imgDel);

		icons.appendChild(aTagg);

		ikoner.appendChild(icons);
	},
	//Renderar alla meddelanden
	renderMessages: function()
	{
	//Ta bort alla meddelanden	
	document.getElementById("listMessage").innerHTML = "";
	//Visa alla meddelanden
	for (var i = 0; i < this.messages.length; ++i)
	{
		this.createMessage(i);
	}
	
	},
	
	removeMessage: function(messageID)
    {	
	var conf = window.confirm("Säker på att du vill radera meddelandet?");//Frågar om man verkligen vill radera meddelandet
	
	if (conf)
	{
	    this.messages.splice(messageID, 1);//Tar bort ett meddelande med unikt ID
	}
	
	else {}
	    this.renderMessages();
    	this.countMessages();
	},
	
	countMessages: function()
	{
	    
	var antal = document.getElementById("antal");
	
	antal.innerHTML = "";
	
	var temp = "<p>";
	
	temp += "Antal meddelanden: " +this.messages.length;
	
	temp += "</p>";
	
	antal.innerHTML = temp;
	
	}
};