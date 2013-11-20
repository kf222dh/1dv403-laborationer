"use strict";

window.onload = function(){

	
	var birthday = function(date)
	{
	    // Din kod här.
	    var input = new RegExp("^([0-9]{4})-([0-9]{2})-([0-9]{2})");
        var CheckInput = input.exec(date);
        var dateSplit = date.split("-");
        var now = new Date()
        var thisYear = now.getFullYear()
        var dateEnd = new Date(thisYear, dateSplit[1] - 1, dateSplit[2]);
        
        if (!CheckInput) 
        {
            throw new Error("ERROR! Ange såhär ÅÅÅÅ-MM-DD.");
        }
        else if(dateEnd - now < 0)
        {
            dateEnd.setFullYear(thisYear);
        }
        return Math.ceil((dateEnd - now) / (1000*60*60*24));
        sadfasdfasdf
	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};