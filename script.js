window.onload = function() {

	var htmlSection = document.getElementsById("htmlSection");
	//var cssSection = ("cssSection");
	//var jsSection = findElementById("javaScriptSection");

	htmlSection.onclick = function(e) {
		var dropdown = document.getElementsByClassName("content");
		dropdown.classList.toggle("show");
	}
}