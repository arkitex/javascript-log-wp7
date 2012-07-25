/*
* Author: Ethan Lo 
* This snippet will send javascript console.log statements to the native layer.
* https://github.com/arkitex
*
* Including JSON is optional. Get it here: https://github.com/douglascrockford/JSON-js
*/

if (!window.console) {
	var outputFunction = function(type, logMessage) {	
		if (typeof logMessage === "object") {
			if (typeof JSON === "undefined" ) {
				top.external.notify("JSON is not defined");
			} else {
				top.external.notify(type + JSON.stringify(logMessage));
			}
		} else {
			top.external.notify(type + logMessage);
		}
	};
	
	var logFunction = function(logMessage) { outputFunction("LOG: ", logMessage); };
	var debugFunction = function(logMessage) { outputFunction("DEBUG: ", logMessage); };
	var errorFunction = function(logMessage) { outputFunction("ERROR: ", logMessage); };
	var infoFunction = function(logMessage) { outputFunction("INFO: ", logMessage); };
	var warnFunction = function(logMessage) { outputFunction("WARN: ", logMessage); };
	
	window.console = { log:logFunction
					 , debug:debugFunction
					 , error:errorFunction
					 , info:infoFunction
					 , warn:warnFunction };	
}