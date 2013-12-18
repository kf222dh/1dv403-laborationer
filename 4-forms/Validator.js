function Validator()
{
	
		this.form = document.getElementById("form");
		
		this.firstName = this.form.elements.FirstName;
		
		this.lastName = this.form.elements.LastName;
		
		this.zipCode = this.form.elements.ZipCode;
		
		this.phoneNo = this.form.elements.PhoneNo;
		
		this.email = this.form.elements.Email;
		
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
			that.fn = that.checkFirstName();
		};
		
		this.lastName.onchange = function()
		{
			that.ln = that.checkLastName();
		};
		
		this.zipCode.onchange = function()
		{
			that.zc = that.checkZipCode();
		};
		
		this.phoneNo.onchange = function()
		{
			that.pn = that.checkPhoneNo();
		};
		
		this.email.onchange = function()
		{
			that.em = that.checkEmail();
		};
		
		this.firstName.onfocus = function()
		{
			var fn = document.getElementById("firstname");
			var pos = that.findPos(fn);
			var id = "fnToolTip";
			var infotext = "Enbart bokstäver, blanksteg, punkt eller bindestreck.";
			var div = that.createTooltip(id, pos, infotext);
			tooltipPlaceholder.appendChild(div);
		};
		
		this.lastName.onfocus = function()
		{
			var ln = document.getElementById("lastname");
			var pos = that.findPos(ln);
			var id = "lnToolTip";
			var infotext = "Enbart bokstäver, blanksteg eller bindestreck.";
			var div = that.createTooltip(id, pos, infotext);
			tooltipPlaceholder.appendChild(div);
		};
		
		this.zipCode.onfocus = function()
		{
			var zc = document.getElementById("zipcode");
			var pos = that.findPos(zc);
			var id = "zcToolTip";
			var infotext = "Ange postnummer på formen XXX-XX.";
			var div = that.createTooltip(id, pos, infotext);
			tooltipPlaceholder.appendChild(div);
		};
		
		this.phoneNo.onfocus = function()
		{
			var pn = document.getElementById("phoneno");
			var pos = that.findPos(pn);
			var id = "pnToolTip";
			var infotext = "Endast siffror.";
			var div = that.createTooltip(id, pos, infotext);
			tooltipPlaceholder.appendChild(div);
		};
		
		this.email.onfocus = function()
		{
			var em = document.getElementById("email");
			var pos = that.findPos(em);
			var id = "emToolTip";
			var infotext = "Ange en giltig e-postadress.";
			var div = that.createTooltip(id, pos, infotext);
			tooltipPlaceholder.appendChild(div);
		};
		
		this.firstName.onblur = function()
		{
			var div = document.getElementById("fnToolTip");
			tooltipPlaceholder.removeChild(div);
			that.checkForm();
		};
		
		this.lastName.onblur = function()
		{
			var div = document.getElementById("lnToolTip");
			tooltipPlaceholder.removeChild(div);
			that.checkForm();
		};
		
		this.zipCode.onblur = function()
		{
			var div = document.getElementById("zcToolTip");
			tooltipPlaceholder.removeChild(div);
			that.checkForm();
		};
		
		this.phoneNo.onblur = function()
		{
			var div = document.getElementById("pnToolTip");
			tooltipPlaceholder.removeChild(div);
			that.checkForm();
		};
		
		this.email.onblur = function()
		{
			var div = document.getElementById("emToolTip");
			tooltipPlaceholder.removeChild(div);
			that.checkForm();
		};
};

Validator.prototype.checkFirstName = function()
{
	
		var pattern = /^[a-zåäö]+(\s|\-|\.|[a-zåäö])[a-zåäö]+([a-zåäö]|\.)$/i;
		var firstname = this.form.elements.FirstName.value;
		var error = document.getElementById("firstname");
		var fnId = document.getElementById("fn");

		if (firstname.match(pattern))
		{ 
			if (error.className == "error") 
			{
				var errSpan = document.getElementById("errorFN");
				fnId.removeChild(errSpan);
			}
			error.className = "ok";
		} 
		else { 
			if (error.className != "error")
			{
				var id = "errorFN";
				var span = this.createErrorMark(id);
				fnId.appendChild(span);
			}
			error.className = "error";
			
		}
};

Validator.prototype.checkLastName = function()
{
		
		var pattern = /^[a-zåäö]+(\s|\-|[a-zåäö])[a-zåäö]+$/i;
		var lastname = this.form.elements.LastName.value;
		var error = document.getElementById("lastname");
		var lnId = document.getElementById("ln");

		if (lastname.match(pattern))
		{ 
			if (error.className == "error") 
			{
				var errSpan = document.getElementById("errorLN");
				lnId.removeChild(errSpan);
			}
			error.className = "ok";
		} 
		else 
		{ 
			if (error.className != "error") 
			{
				var id = "errorLN";
				var span = this.createErrorMark(id);
				lnId.appendChild(span);
			}
			error.className = "error";
		}
};

Validator.prototype.checkZipCode = function()
{
		
		var pattern = /^[0-9]{3}-[0-9]{2}$/;
		var zipcode = this.form.elements.ZipCode.value;
		var error = document.getElementById("zipcode");
		var zcId = document.getElementById("zc");

		if (zipcode.match(pattern))
		{ 
			if (error.className == "error") 
			{
				var errSpan = document.getElementById("errorZC");
				zcId.removeChild(errSpan);
			}
			error.className = "ok";
		} 
		else
		{ 
			if (error.className != "error")
			{
				var id = "errorZC";
				var span = this.createErrorMark(id);
				zcId.appendChild(span);
			}
			error.className = "error";
		}
};

Validator.prototype.checkPhoneNo = function()
{
		
		var pattern = /^[0-9]+$/;
		var phoneno = this.form.elements.PhoneNo.value;
		var error = document.getElementById("phoneno");
		var pnId = document.getElementById("pn");

		if (phoneno.match(pattern))
		{ 
			if (error.className == "error") 
			{
				var errSpan = document.getElementById("errorPN");
				pnId.removeChild(errSpan);
			}
			error.className = "ok";
		} 
		else 
		{ 
			if (error.className != "error") 
			{
				var id = "errorPN";
				var span = this.createErrorMark(id);
				pnId.appendChild(span);
			}
			error.className = "error";
		}
};

Validator.prototype.checkEmail = function()
{
		
		var pattern = /^[a-z0-9!#$%&'*+/=?^_'{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_'{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
		var email = this.form.elements.Email.value;
		var error = document.getElementById("email");
		var emId = document.getElementById("em");

		if (email.match(pattern))
		{ 
			if (error.className == "error") 
			{
				var errSpan = document.getElementById("errorEM");
				emId.removeChild(errSpan);
			}
			error.className = "ok";
		} 
		else 
		{ 
			if (error.className != "error") 
			{
				var id = "errorEM";
				var span = this.createErrorMark(id);
				emId.appendChild(span);
			}
			error.className = "error";
		}
};

Validator.prototype.checkForm = function()
{
		var that = this;
		var aTag = document.getElementById("tag");
		if ((document.getElementById("firstname").className === "ok") && (document.getElementById("lastname").className === "ok") && (document.getElementById("zipcode").className === "ok") && (document.getElementById("phoneno").className === "ok") && (document.getElementById("email").className === "ok"))
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
		var skicka = document.getElementById("skickaknapp");
		var submit = document.getElementById("submit");
		skicka.removeChild(submit);
		var aTag = document.createElement("a");
		aTag.href = "#";
		aTag.id = "tag";
		var text = document.createTextNode("Genomför köp");
		aTag.appendChild(text);
		skicka.appendChild(aTag);
};

Validator.prototype.checkInfoWindow = function()
{
	
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
		var textFN = document.createTextNode("Förnamn: "+this.form.elements.FirstName.value);
		pFN.appendChild(textFN);
		infowindow.appendChild(pFN);
		
		var pLN = document.createElement("p");
		var textLN = document.createTextNode("Efternamn: "+this.form.elements.LastName.value);
		pLN.appendChild(textLN);
		infowindow.appendChild(pLN);
		
		var pZC = document.createElement("p");
		var textZC = document.createTextNode("Postnummer: "+this.form.elements.ZipCode.value);
		pZC.appendChild(textZC);
		infowindow.appendChild(pZC);
		
		var pPN = document.createElement("p");
		var textPN = document.createTextNode("Telefon: "+this.form.elements.PhoneNo.value);
		pPN.appendChild(textPN);
		infowindow.appendChild(pPN);
		
		var pEM = document.createElement("p");
		var textEM = document.createTextNode("E-post: "+this.form.elements.Email.value);
		pEM.appendChild(textEM);
		infowindow.appendChild(pEM);
		
		var pML = document.createElement("p");
		var textML = document.createTextNode("Kön: "+this.form.elements.Modell.value);
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
		};
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
			document.forms.form.submit();
		};
		pButtons.appendChild(sendForm);
		
};

Validator.prototype.findPos = function(obj)
{
		var curleft = curtop = 0;
		if (obj.offsetParent)
		{
			do {
				curleft += obj.offsetLeft;
				curtop += obj.offsetTop;
			}
			while (obj = obj.offsetParent);
		}
		return [curleft,curtop];
};

Validator.prototype.createTooltip = function(id, pos, infotext)
{
		var div = document.createElement("div");
		div.id = id;
		div.className = "tooltip";
		div.style.position = "fixed";
		div.style.top = pos[1]+"px";
		div.style.left = pos[0]+"px";
		var p = document.createElement("p");
		p.className = "fix";
		var infotext = document.createTextNode(infotext);
		p.appendChild(infotext);
		div.appendChild(p);
		return div;
};

Validator.prototype.enableDisableForm = function(onoff)
{
		this.form.elements.FirstName.disabled = onoff;
		this.form.elements.LastName.disabled = onoff;
		this.form.elements.ZipCode.disabled = onoff;
		this.form.elements.PhoneNo.disabled = onoff;
		this.form.elements.Email.disabled = onoff;
		this.form.elements.Modell.disabled = onoff;
};

