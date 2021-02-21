window.onload = function() {
    document.title = document.getElementById("article-title").innerHTML + " - The Cinema Center";
	if (document.getElementById("stars") != null) {
		var starsE = document.getElementById("stars");
		var stars = starsE.innerHTML.split(", ");
		starsE.innerHTML = "";
		for (var i = 0; i < stars.length; i++) {
			var li = document.createElement("li");
			li.innerHTML = stars[i];
			starsE.appendChild(li);
		}
	}
	var textE = document.getElementById("content-text");
	var lines = textE.innerHTML.split("\n");
	textE.innerHTML = "";
	for (var i = 0; i < lines.length; i++) {
		textE.innerHTML += '<p class="ind">' + lines[i] + '</p>';
	}
}