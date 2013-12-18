"use strict";

var validatorStart = {

	init: function(){
	
		var validator = new Validator();
		validator.start();
	}
};
	
window.onload = validatorStart.init;