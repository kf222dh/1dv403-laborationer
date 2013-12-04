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
		
		area.onkeypress = function(e)
		{
			e = e || event;
			if (e.keyCode === 13 && e.shiftKey)
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
window.onload = messageApp.init;