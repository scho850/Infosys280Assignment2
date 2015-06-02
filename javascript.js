function bulbonoff() {
	if (document.getElementById("logo1").getAttribute('src')=== 'turnon.png' && document.getElementById("logo2").getAttribute('src')=== 'turnon.png'))
	{
		document.getElementById("logo1").src = "turnoff.png";
		document.getElementById("logo2").src = "turnoff.png";
	}
	else 
	{
		document.getElementById("logo1").src = "turnon.png";
		document.getElementById("logo2").src = "turnon.png";
	}
};

$(document).ready(function(){
	$("#button2").click(function(){
		$("#button1").css("color", "green");
		$("#button2").css("color", "blue");
		$("#button3").css("color", "yellow");
		$("h1").css("font-family", "verdana", "sans-serif");
	});
});

$(document).ready(function(){
	$("#button3").click(function(){
		$("#mainnav").animate({
			width: "800px",
		    opacity: 0.75});
	});
});

function testinput(){
	if (document.getElementById("textbox").value === "") {
		alert('Input could not be blank');
	}
	if (document.getElementById("textbox").value !== Number) {
		alert=('Input should be a number');
	}
	else {
		var newnumber = document.getElementById("textbox").value;
		newnumber = newnumber*newnumber;
		document.getElementById("textbox").value = newnumber;
		}
};

function testinput2(){
	if (document.getElementById("box1").value === ""
		|| document.getElementById("box2").value === ""
		|| document.getElementById("box3").value === ""
		|| document.getElementById("box4").value === ""
		|| document.getElementById("box5").value === ""
		|| document.getElementById("box6").value === ""
		|| document.getElementById("box7").value === ""
		|| document.getElementById("box8").value === ""
		|| document.getElementById("box9").value === "") {
			alert('Input could not be blank');
		}
	if (document.getElementById("box1").value !== Number
		|| document.getElementById("box2").value !== Number
		|| document.getElementById("box3").value !== Number
		|| document.getElementById("box4").value !== Number
		|| document.getElementById("box5").value !== Number
		|| document.getElementById("box6").value !== Number
		|| document.getElementById("box7").value !== Number
		|| document.getElementById("box8").value !== Number
		|| document.getElementById("box9").value !== Number) {
			alert=('Input should be a number');
		}
	if (document.getElementById("box1").value / document.getElementById("box9").value < 0
		|| document.getElementById("box2").value / document.getElementById("box9").value < 0
		|| document.getElementById("box3").value / document.getElementById("box9").value < 0
		|| document.getElementById("box4").value / document.getElementById("box9").value < 0
		|| document.getElementById("box5").value / document.getElementById("box9").value < 0
		|| document.getElementById("box6").value / document.getElementById("box9").value < 0
		|| document.getElementById("box7").value / document.getElementById("box9").value < 0
		|| document.getElementById("box8").value / document.getElementById("box9").value < 0) {
			alert('Divison values must be positive');
		}
	
	if (document.getElementById("box1").value / document.getElementById("box9").value === 0
		&& document.getElementById("box2").value / document.getElementById("box9").value === 0
		&& document.getElementById("box3").value / document.getElementById("box9").value === 0
		&& document.getElementById("box4").value / document.getElementById("box9").value === 0
		&& document.getElementById("box5").value / document.getElementById("box9").value === 0
		&& document.getElementById("box6").value / document.getElementById("box9").value === 0
		&& document.getElementById("box7").value / document.getElementById("box9").value === 0
		&& document.getElementById("box8").value / document.getElementById("box9").value === 0
		&& document.getElementById("box9").value / document.getElementById("box9").value === 0) {
			alert('Each number divided by Divison valye gets are remainder of 0');
		}
	else {
			alert('Not all of these numbers divided by Division value get a remainder of 0');
		}
};