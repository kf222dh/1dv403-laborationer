"use strict";

var messageApp =
{

	init: function()
	{
		
		var val = document.getElementById("send");
		
		var area = document.getElementById("area");

		val.onclick = function()
		{
			MessageBoard.init(area.value);
			
			area.value = "";
		};
		//Ser till att det går att skicka meddelande med enter-tagenten och att skapa ny rad med shift+enter.
		area.onkeypress = function(e)
		{
			e = e || event;
			if (e.keyCode === 13/*Enter-knappen*/ && e.shiftKey)
			{
				return "<br />";
			}

 			if (e.keyCode === 13 && !e.shiftKey)
 			{
    			MessageBoard.init(area.value);
				area.value = "";
  			}
  			return true;
		}
	}	
	
};
//När sidan har laddat då anropas init.
window.onload = messageApp.init;