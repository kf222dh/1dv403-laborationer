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
	}
}