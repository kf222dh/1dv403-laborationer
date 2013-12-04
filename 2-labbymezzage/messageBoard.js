"use strict";

var MessageBoard =
{
	messages: [],
	
	init: function(e)
	{
		var mess = new Message(e, new Date());
        var arrayNumbeer = this.messages.push(mess);
		this.renderMessages();
		this.countMessages();
    },
    
    createMessage: function(messageID)
    {
		var listMessage  = document.getElementById("listMessage");
		
		var meddelanden = document.createElement("div");
		
		meddelanden.className = "meddelande";
		
		listMessage .appendChild(meddelanden);
		
		var p = document.createElement("p");
		
		p.innerHTML = this.messages[messageID].getHTMLText();
		
		meddelanden.appendChild(p);
		
		var ikoner = document.createElement("div");

		ikoner.className = "ikoner";

		meddelanden.insertBefore(ikoner, meddelanden.firstChild);
		
		var icons = document.createElement("p");
		
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
				
		var aTagg = document.createElement("a");

		aTagg.href = "#";
		
		var imgDel = document.createElement("img");

		imgDel.src = "bilder/taBort.png";

		imgDel.alt = "Ta bort";

		imgDel.onclick = function()
		{
			MessageBoard.removeMessage(messageID);
		}
		
		aTagg.appendChild(imgDel);

		icons.appendChild(aTagg);

		ikoner.appendChild(icons);
	},
	
	renderMessages: function()
	{
		
	document.getElementById("listMessage").innerHTML = "";
		
	for (var i = 0; i < this.messages.length; ++i)
	{
		this.createMessage(i);
	}
	
	},
	
	removeMessage: function(messageID)
{	
	var conf = window.confirm("Säker på att du vill radera meddelandet?");
	
	if (conf)
	{
	    this.messages.splice(messageID, 1);
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
}