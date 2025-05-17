function analyze()
{
	localStorage.setItem("firstName", document.getElementById("firstName").value);
	localStorage.setItem("lastName", document.getElementById("lastName").value);
	localStorage.setItem("email", document.getElementById("email").value);
	localStorage.setItem("sex", document.getElementById("sex").value);
	localStorage.setItem("why", document.getElementById("why").value);
	return false
}
function retreive()
{
	document.getElementById("display_name").innerHTML = localStorage.getItem("firstName") + " " + localStorage.getItem("lastName");
	document.getElementById("display_email").innerHTML = localStorage.getItem("email");
	document.getElementById("display_sex").innerHTML = localStorage.getItem("sex");
	document.getElementById("display_why").innerHTML = localStorage.getItem("why");
	console.log(localStorage.getItem("firstName") + " " + localStorage.getItem("lastName"));
	console.log(localStorage.getItem("email"));
	console.log(localStorage.getItem("sex"));
	console.log(localStorage.getItem("why"));
	return false;
}