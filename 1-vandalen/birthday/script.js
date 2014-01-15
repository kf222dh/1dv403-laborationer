"use strict";

window.onload = function(){

	
	var birthday = function(date)
	{
	// Din kod här.
	//Skapar ett Date-objekt
    var now = new Date();
    //Kollar om det man skriver in är i rätt format med regexp
    var input = new Date(date.replace(/(\d{4})\.(\d{2})\.(\d{2})/, '$3-$2-$1'));
    input.setFullYear(now.getFullYear());
    
    //Om det är inte ett nummer så kastas det ett undantag
    if(isNaN(input))
    {
    throw new Error("Ange i formatet YYYY-MM-DD");
    }
    
    //Om datumet redan passerat då läggs det på 1 på det nuvarande året. Det gör så att det skrivs ut heltal istället för negativa tal
    if(input.getTime() < now.getTime())
    {
        input.setFullYear(now.getFullYear() + 1);
    }
    
    if(now.getHours() > 12)
    {
    return Math.round((input.getTime() - now.getTime())/(1000*60*60*24) +1);
    }
    else
    {
    return Math.round((input.getTime() - now.getTime())/(1000*60*60*24));//Gör om det till dagar
    } 
    };
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens iltl DOM-noden med id="#value"
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