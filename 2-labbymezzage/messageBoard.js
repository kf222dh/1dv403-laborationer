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
    }
}