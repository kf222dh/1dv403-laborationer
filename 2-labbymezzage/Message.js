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
    return this.getText()+" ("+this.getDate()+")";
}

Message.prototype.getHTMLText = function() {
	return this.getText().replace(/[\n]/g, "<br />");
}

Message.prototype.getDateText = function() {
	return "Skapades den: " +this.getFullDate();
}