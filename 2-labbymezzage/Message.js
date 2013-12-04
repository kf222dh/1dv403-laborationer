"use strict";

function Message(message, date)
{
	this.getText = function()
	{
		return message;
	}
	
	this.setText = function(_text)
	{
		message = _text;
	}
	
	this.getDate = function()
	{
	    return dateSorted(date, "HH:MM:ss");
	}
	
	this.setDate = function(_date)
	{
	    date = _date;
	}
	
	this.getFullDate = function()
	{
		return dateSorted(date, "d mmmm yyyy t HH:MM:ss");
	}
}
	
Message.prototype.toString = function()
{
    return this.getText()+ "<p class=\"tid\">" +this.getDate()+"</p>";
}
//Ersätter radbrytningarna, \n med <br /> och lägger till en p tagg med namnet tiden
Message.prototype.getHTMLText = function()
{
	return this.getText().replace(/[\n\r]/g, "<br />" )+ "<p class=\"tiden\">" +this.getDate()+"</p>";
}
//Funktionen som skickar tillbacka tiden
Message.prototype.getDateText = function()
{
	return "Skapades den: " +this.getFullDate();
}