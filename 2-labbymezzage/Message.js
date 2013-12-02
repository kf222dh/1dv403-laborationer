"use strict";

function Message(message, date)
{
	this.getText = function()
	{
		return message;
	}
	
	this.setText = function(_text)
	{
		message = text;
	}
	
	this.getDate = function()
	{
	    return dateSorted(date, "HH:MM:ss");
	}
	
	this.setDate = function(_date)
	{
	    date = date;
	}
	
	this.getFullDate = function()
	{
		return dateSorted(date, "d mmmm yyyy t HH:MM:ss");
	}
}
	
Message.prototype.toString = function()
{
    return this.getString()+ "<p class=\"Time\">" +this.getDate()+"</p>";
}