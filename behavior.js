document.addEventListener("DOMContentLoaded", function(event) {
    var thumbnailElement = document.getElementById("escudo");
    thumbnailElement.addEventListener("click", function() {
	if (thumbnailElement.className == "small") {
	    thumbnailElement.className = "";
	}
	else {
	    thumbnailElement.className = "small";
	}
    });
    var wes = document.getElementById("wes");
    wes.addEventListener("click", function() {
	if (wes.className == "small") {
	    wes.className = "";
	}
	else {
	    wes.className = "small";
	}
    });
    var urunipon = document.getElementById("urunipon");
    urunipon.addEventListener("click", function(){
	if(urunipon.className == "small"){
	    urunipon.className = "";
	}
	else{
	    urunipon.className = "small";
	}
    });
    var orionxp = document.getElementById("orionxp");
    orionxp.addEventListener("click", function(){
	if(orionxp.className == "small"){
	    orionxp.className = "";
	}
	else{
	    orionxp.className = "small";
	}
    });
    var fred = document.getElementById("fred");
    fred.addEventListener("click", function(){
	if(fred.className == "small"){
	    fred.className ="";
	}
	else{
	    fred.className ="small";
	}
    });
    var pelon = document.getElementById("pelon");
    pelon.addEventListener("click", function(){
	if(pelon.className == "small"){
	    pelon.className = "";
	}
	else{
	    pelon.className = "small";
	}
    });
});
