/*
* Author: Ethan Lo 
* This snippet will send javascript console.log statements to the native layer.
* https://github.com/arkitex
*/

if (!window.console) {
	var logFunction = function(logMessage) {	
		if (top === window) {
			top.external.notify(logMessage);
		} else {
			window.parent.postMessage('{"windowsExternalNotifyLog":"'+logMessage+'"}', "*");
		}
	};
	window.console = {log:logFunction};	
}