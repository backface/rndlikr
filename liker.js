var lkr_count = 0;

function give_random_like() {
	var elements = document.getElementsByClassName('UFILikeLink');
	nr = elements.length;
	r = Math.floor((Math.random() * nr)); 
	elements[r].click();
}

var myPort = browser.runtime.connect({name:"port-from-cs"});
myPort.postMessage({greeting: "We have a facebook page!"});

myPort.onMessage.addListener(function(m) {
  console.log("rndlikr: In content script, received message from background script: " + m.cmd);
  if (m.cmd == "like") {
	lkr_count += 1;
  } else if (m.cmd == "info") {
	alert("rndlikr active. clicked "+ lkr_count + 
		" times in this session.\n" +
		" Next click scheduled in " + Math.xfloor(m.next * 60) + " seconds."
	);
  }
});

document.body.addEventListener("click", function() {
  myPort.postMessage({greeting: "they clicked the page!"});
});

