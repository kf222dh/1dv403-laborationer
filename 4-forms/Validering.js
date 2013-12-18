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
};

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
};

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
};

Validator.prototype.checkphoneNr = function()
{
		
		var pattern = /^[0-9]+$/;
		var phonenr = this.form.elements["phoneNr"].value;
		var error = document.getElementById("phonenr");
		var PNId = document.getElementById("PN");

		if (phonenr.match(pattern))
		{ 
			if (error.className == "error")
			{
				var errSpan = document.getElementById("errorPN");
				PNId.removeChild(errSpan);
			}
			error.className = "ok";
		} 
		else
		{ 
			if (error.className != "error") 
			{
				var id = "errorPN";
				var span = this.createErrorMark(id);
				PNId.appendChild(span);
			}
			error.className = "error";
		}
};

Validator.prototype.checkePost = function()
{
		
		var pattern = /^[a-z0-9!#$%&'*+/=?^_'{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_'{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
		var epost = this.form.elements["ePost"].value;
		var error = document.getElementById("epost");
		var EPId = document.getElementById("EP");

		if (epost.match(pattern))
		{ 
			if (error.className == "error")
			{
				var errSpan = document.getElementById("errorEP");
				EPId.removeChild(errSpan);
			}
			error.className = "ok";
		} 
		else 
		{ 
			if (error.className != "error")
			{
				var id = "errorEP";
				var span = this.createErrorMark(id);
				EPId.appendChild(span);
			}
			error.className = "error";
		}
};

Validator.prototype.checkForm = function()
{
		var that = this;
		var aTag = document.getElementById("tag");
		if ((document.getElementById("firstname").className === "ok") && (document.getElementById("lastname").className === "ok") && (document.getElementById("zipcode").className === "ok") && (document.getElementById("phonenr").className === "ok") && (document.getElementById("epost").className === "ok"))
		{
			aTag.onclick = function()
			{
				that.checkInfoWindow();
			};	
		}
		else 
		{
			aTag.onclick = function()
			{
				return;
			};	
		}
};

Validator.prototype.changeSubmitButton = function()
{
		var send = document.getElementById("sendButton");
		var submit = document.getElementById("submit");
		send.removeChild(submit);
		var aTag = document.createElement("a");
		aTag.href = "#";
		aTag.id = "tag";
		var text = document.createTextNode("Skicka uppgifter");
		aTag.appendChild(text);
		send.appendChild(aTag);
};

Validator.prototype.checkInfoWindow = function(){
	
		var that = this;
	
		var on = true;
		this.enableDisableForm(on);
		
		var background = document.createElement("div");
		background.id = "background";
		document.body.appendChild(background);
		
		var content = document.getElementById("content");
	
		var placeholder = document.createElement("div");
		placeholder.id = "placeholder";
		content.appendChild(placeholder);
		
		var infowindow = document.createElement("div");
		infowindow.id = "infowindow";
		placeholder.appendChild(infowindow);
		
		var header = document.createElement("h1");
		var headerText = document.createTextNode("Kontrollera dina uppgifter:");
		header.appendChild(headerText);
		infowindow.appendChild(header);
		
		var pFN = document.createElement("p");
		var textFN = document.createTextNode("Förnamn: "+this.form.elements["firstName"].value);
		pFN.appendChild(textFN);
		infowindow.appendChild(pFN);
		
		var pLN = document.createElement("p");
		var textLN = document.createTextNode("Efternamn: "+this.form.elements["lastName"].value);
		pLN.appendChild(textLN);
		infowindow.appendChild(pLN);
		
		var pZC = document.createElement("p");
		var textZC = document.createTextNode("Postnummer: "+this.form.elements["zipCode"].value);
		pZC.appendChild(textZC);
		infowindow.appendChild(pZC);
		
		var pPN = document.createElement("p");
		var textPN = document.createTextNode("Telefon: "+this.form.elements["phoneNr"].value);
		pPN.appendChild(textPN);
		infowindow.appendChild(pPN);
		
		var pEP = document.createElement("p");
		var textEP = document.createTextNode("E-post: "+this.form.elements["ePost"].value);
		pEP.appendChild(textEP);
		infowindow.appendChild(pEP);
		
		var pML = document.createElement("p");
		var textML = document.createTextNode("Prismodell: "+this.form.elements["MODELL"].value);
		pML.appendChild(textML);
		infowindow.appendChild(pML);
		
		var pButtons = document.createElement("p");
		infowindow.appendChild(pButtons);
		
		var button = document.createElement("input");
		button.type = "button";
		button.value = "Ändra uppgifter";
		button.onclick = function()
		{
			placeholder.removeChild(infowindow);
			document.body.removeChild(background);
			var off = false;
			that.enableDisableForm(off);
		}
		pButtons.appendChild(button);
		
		var sendForm = document.createElement("input");
		sendForm.type = "submit";
		sendForm.name = "submit";
		sendForm.value = "Gå vidare";
		sendForm.onclick = function()
		{
			placeholder.removeChild(infowindow);
			document.body.removeChild(background);
			var off = false;
			that.enableDisableForm(off);
			document.forms["form"].submit();
		}
		pButtons.appendChild(sendForm);
}

}
};
	
window.onload = Validering.init;