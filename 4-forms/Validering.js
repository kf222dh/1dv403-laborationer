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
		
		this.phoneNr = this.form.elements["phoneNr"];
		
		this.epost = this.form.elements["ePost"];
		
		this.createErrorMark = function(id)
		{
			var errorSpan = document.createElement("span");
			errorSpan.className = "error";
			errorSpan.id = id;
			var asterix = document.createTextNode("*");
			errorSpan.appendChild(asterix);
			return errorSpan;
		};
        }
        
        Validator.prototype.start = function()
        {
	
		var that = this;
		var content = document.getElementById("content");
		var tooltipPlaceholder = document.createElement("div");
		
		tooltipPlaceholder.id = "tooltipPlaceholder";
		content.appendChild(tooltipPlaceholder);
	
		this.changeSubmitButton();
		
		this.firstName.onchange = function()
		{
			that.firstname = that.checkfirstName();
		};
		
		this.lastName.onchange = function()
		{
			that.lastname = that.checklastName();
		};
		
		this.zipCode.onchange = function()
		{
			that.zipcode = that.checkzipCode();
		};
		
		this.phoneNr.onchange = function()
		{
			that.phonenr = that.checkphoneNr();
		};
		
		this.epost.onchange = function()
		{
			that.epost = that.checkePost();
		};
		
		this.firstName.onfocus = function()
		{
			var firstname = document.getElementById("firstname");
			var pos = that.findPos(firstname);
			var id = "FNToolTip";
			var infotext = "Enbart bokstäver, blanksteg, punkt eller bindestreck.";
			var div = that.createTooltip(id, pos, infotext);
			tooltipPlaceholder.appendChild(div);
		};
		
		this.lastName.onfocus = function()
		{
			var lastname = document.getElementById("lastname");
			var pos = that.findPos(lastname);
			var id = "LNToolTip";
			var infotext = "Enbart bokstäver, blanksteg eller bindestreck.";
			var div = that.createTooltip(id, pos, infotext);
			tooltipPlaceholder.appendChild(div);
		};
		
		this.zipCode.onfocus = function()
		{
			var zipcode = document.getElementById("zipcode");
			var pos = that.findPos(zipcode);
			var id = "ZCToolTip";
			var infotext = "Ange postnummer på formen XXX-XX.";
			var div = that.createTooltip(id, pos, infotext);
			tooltipPlaceholder.appendChild(div);
		};
		
		this.phoneNr.onfocus = function()
		{
			var phonenr = document.getElementById("phonenr");
			var pos = that.findPos(phonenr);
			var id = "PNToolTip";
			var infotext = "Endast siffror.";
			var div = that.createTooltip(id, pos, infotext);
			tooltipPlaceholder.appendChild(div);
		};
		
		this.epost.onfocus = function()
		{
			var epost = document.getElementById("epost");
			var pos = that.findPos(epost);
			var id = "EPToolTip";
			var infotext = "Ange en giltig e-postadress.";
			var div = that.createTooltip(id, pos, infotext);
			tooltipPlaceholder.appendChild(div);
		};
		
		this.firstName.onblur = function()
		{
			var div = document.getElementById("FNToolTip");
			tooltipPlaceholder.removeChild(div);
			that.checkForm();
		};
		
		this.lastName.onblur = function()
		{
			var div = document.getElementById("LNToolTip");
			tooltipPlaceholder.removeChild(div);
			that.checkForm();
		};
		
		this.zipCode.onblur = function()
		{
			var div = document.getElementById("ZCToolTip");
			tooltipPlaceholder.removeChild(div);
			that.checkForm();
		};
		
		this.phoneNr.onblur = function()
		{
			var div = document.getElementById("PNToolTip");
			tooltipPlaceholder.removeChild(div);
			that.checkForm();
		};
		
		this.epost.onblur = function()
		{
			var div = document.getElementById("EPToolTip");
			tooltipPlaceholder.removeChild(div);
			that.checkForm();
		};
};

Validator.prototype.checkfirstName = function()
{
	
		var pattern = /^[a-zåäö]+(\s|\-|\.|[a-zåäö])[a-zåäö]+([a-zåäö]|\.)$/i;
		var firstname = this.form.elements["firstName"].value;
		var error = document.getElementById("firstname");
		var FNId = document.getElementById("FN");

		if (firstname.match(pattern))
		{ 
			if (error.className == "error")
			{
				var errSpan = document.getElementById("errorFN");
				FNId.removeChild(errSpan);
			}
			error.className = "ok";
		} 
		else
		{ 
			if (error.className != "error")
			{
				var id = "errorFN";
				var span = this.createErrorMark(id);
				FNId.appendChild(span);
			}
			error.className = "error";
			
		}
}

Validator.prototype.checklastName = function()
{
		
		var pattern = /^[a-zåäö]+(\s|\-|[a-zåäö])[a-zåäö]+$/i;
		var lastname = this.form.elements["lastName"].value;
		var error = document.getElementById("lastname");
		var LNId = document.getElementById("LN");

		if (lastname.match(pattern))
		{ 
			if (error.className == "error")
			{
				var errSpan = document.getElementById("errorLN");
				LNId.removeChild(errSpan);
			}
			error.className = "ok";
		} 
		else 
		{ 
			if (error.className != "error")
			{
				var id = "errorLN";
				var span = this.createErrorMark(id);
				LNId.appendChild(span);
			}
			error.className = "error";
		}
}

Validator.prototype.checkzipCode = function()
{
		
		var pattern = /^[0-9]{3}-[0-9]{2}$/;
		var zipcode = this.form.elements["zipCode"].value;
		var error = document.getElementById("zipcode");
		var ZCId = document.getElementById("ZC");

		if (zipcode.match(pattern))
		{ 
			if (error.className == "error") 
			{
				var errSpan = document.getElementById("errorZC");
				ZCId.removeChild(errSpan);
			}
			error.className = "ok";
		} 
		else 
		{ 
			if (error.className != "error")
			{
				var id = "errorZC";
				var span = this.createErrorMark(id);
				ZCId.appendChild(span);
			}
			error.className = "error";
		}
}

}
};
	
window.onload = Validering.init;