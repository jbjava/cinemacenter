window.onload = function() {
    document.title = document.getElementById("article-title").innerHTML + " - The Cinema Center";
    var starsE = document.getElementById("stars");
	var stars = starsE.innerHTML.split(", ");
	starsE.innerHTML = "";
    for (var i = 0; i < stars.length; i++) {
		var li = document.createElement("li");
		li.innerHTML = stars[i];
        starsE.appendChild(li);
    }
}