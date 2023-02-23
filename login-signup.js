var isBool = true;
function show() {
	if(isBool) {
		document.getElementById("password").setAttribute("type", "text");		
		isBool = false;
	} else {
		document.getElementById("password").setAttribute("text", "password");
		isBool = true;
	}
}
