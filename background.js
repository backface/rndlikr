var DELAY = 0.1;
var MAX_DELAY = 3;
var content_script_port;
var my_tab = 0;

// restartAlarm: clear all alarms, then set a new alarm for the given tab.
function restartAlarm(tabId) {
  //browser.alarms.clearAll();
  var gettingTab = browser.tabs.get(tabId);
  gettingTab.then((tab) => {
	  r = (Math.random() * MAX_DELAY);
      browser.alarms.create("lkrlrm", {delayInMinutes: r});
      browser.pageAction.show(tab.id);
      console.log("rndlikr: set alarm with " + r + " min.");
  });
}

// On alarm, send click cmd to content script and reset alaram
browser.alarms.onAlarm.addListener((alarm) => {
	if (content_script_port) {
		console.log("rndlikr: send like cmd");
		content_script_port.postMessage({cmd: "like"});
		browser.pageAction.show(tab.id);
		restartAlarm(my_tab);
	}
});

// On page action click, show info
browser.pageAction.onClicked.addListener(function () {
	if (content_script_port) content_script_port.postMessage(
		{cmd: "info",next: r});

});

// connect to content_script
function connected(p) {
  content_script_port = p;
  //content_script_port.postMessage({greeting: "hi there content script!"});
  content_script_port.onMessage.addListener(function(m) {
    console.log("rndlikr: In background script, received message from content script")
    var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
	gettingActiveTab.then((tabs) => {
		my_tab = tabs[0].id;
		restartAlarm(my_tab);
	});   
  });
}
browser.runtime.onConnect.addListener(connected);
