


	function preopen() {
	  var x = document.getElementById("preopen");
	  if (x.style.display === "none") {
		x.style.display = "block";
	  } else {
		x.style.display = "none";
	  }

	
  var x = document.getElementById("toggle-hide");
  if (x.innerHTML === "⬆ Hide") {
    x.innerHTML = "⬇ Show";
  } else {
    x.innerHTML = "⬆ Hide";
  }
	}



	function preclosed1() {
	  var x = document.getElementById("preclosed1");
		if (x.style.display === "block") {
			x.style.display = "none";
		} else {
			x.style.display = "block";
		}

	var y = document.getElementById("block1");
	if (y.style.display === "grid") {
		y.style.background = "#f6f6f6";
		y.style.display = "block";
	} else {
		y.style.background = "#fff";
		y.style.display = "grid";
	}
	
	var x = document.getElementById("block-toggle-show1");
		if (x.innerHTML === "+") {
			x.innerHTML = "-";
		} else {
			x.innerHTML = "+";
		}
	}

	function preclosed2() {
	  var x = document.getElementById("preclosed2");
		if (x.style.display === "block") {
			x.style.display = "none";
		} else {
			x.style.display = "block";
		}

	
		var y = document.getElementById("block2");
	if (y.style.display === "grid") {
		y.style.background = "#f6f6f6";
		y.style.display = "block";
	} else {
		y.style.background = "#fff";
		y.style.display = "grid";
	}
	
	var x = document.getElementById("block-toggle-show2");
		if (x.innerHTML === "+") {
			x.innerHTML = "-";
		} else {
			x.innerHTML = "+";
		}
	}

	function preclosed3() {
	  var x = document.getElementById("preclosed3");
		if (x.style.display === "block") {
			x.style.display = "none";
		} else {
			x.style.display = "block";
		}

	var y = document.getElementById("block3");
	if (y.style.display === "grid") {
		y.style.background = "#f6f6f6";
		y.style.display = "block";
	} else {
		y.style.background = "#fff";
		y.style.display = "grid";
	}
	
	var x = document.getElementById("block-toggle-show3");
		if (x.innerHTML === "+") {
			x.innerHTML = "-";
		} else {
			x.innerHTML = "+";
		}
	}

	function preclosed4() {
	  var x = document.getElementById("preclosed4");
		if (x.style.display === "block") {
			x.style.display = "none";
		} else {
			x.style.display = "block";
		}

	var y = document.getElementById("block4");
	if (y.style.display === "grid") {
		y.style.background = "#f6f6f6";
		y.style.display = "block";
	} else {
		y.style.background = "#fff";
		y.style.display = "grid";
	}
	
	var x = document.getElementById("block-toggle-show4");
		if (x.innerHTML === "+") {
			x.innerHTML = "-";
		} else {
			x.innerHTML = "+";
		}
	}

	function preclosed5() {
	  var x = document.getElementById("preclosed5");
		if (x.style.display === "block") {
			x.style.display = "none";
		} else {
			x.style.display = "block";
		}

	var y = document.getElementById("block5");
	if (y.style.display === "grid") {
		y.style.background = "#f6f6f6";
		y.style.display = "block";
	} else {
		y.style.background = "#fff";
		y.style.display = "grid";
	}
	
	var x = document.getElementById("block-toggle-show5");
		if (x.innerHTML === "+") {
			x.innerHTML = "-";
		} else {
			x.innerHTML = "+";
		}
	}


