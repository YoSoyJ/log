document.getElementById("loginForm").addEventListener("submit", function function_name(event) {
event.preventDefault();

var email = document.getElementById("email").value

var password = document.getElementById("password").value

if (email === "lcm@gmail.com" && password==="lcm123") {
	window.location.href = "CompuServicios/compuservicios.html";
} else{
	document.getElementById("message").innerHTML = "Acceso denegado.";
}
});