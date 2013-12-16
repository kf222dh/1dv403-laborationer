"use strict";

var Validering =
{

	init: function()
	{
	    function Validator()
	    {
	
		this.form = document.getElementById("form");
		
		this.firstName = this.form.elements["firstName"];
		
		this.lastName = this.form.elements["lastName"];
		
		this.zipCode = this.form.elements["zipCode"];
		
		this.phoneNo = this.form.elements["phoneNr"];
		
		this.email = this.form.elements["ePost"];
		
		this.createErrorMark = function(id)
		{
			var errorSpan = document.createElement("span");
			errorSpan.className = "error";
			errorSpan.id = id;
			var asterix = document.createTextNode("*");
			errorSpan.appendChild(asterix);
			return errorSpan;
		}
}

	}
};
	
window.onload = Validering.init;