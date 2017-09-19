window.onload = function() {

	var htmlSection = document.getElementById("htmlSection");
	var cssSection = document.getElementById("cssSection");
	var jsSection = document.getElementById("javascriptSection")

	htmlSection.onclick = function(e) {
		var dropdown = htmlSection.getElementsByClassName("htmlContent");

		for (var i = 0; i < dropdown.length; i++) {
			dropdown[i].classList.toggle("show");
		}
	}

	cssSection.onclick = function(e) {
		var dropdown = cssSection.getElementsByClassName("cssContent");

		for (var i = 0; i < dropdown.length; i++) {
			dropdown[i].classList.toggle("show");
		}
	}

	jsSection.onclick = function(e) {
		var dropdown = javascriptSection.getElementsByClassName("javascriptContent");

		for (var i = 0; i < dropdown.length; i++) {
			dropdown[i].classList.toggle("show");
		}
	}
}