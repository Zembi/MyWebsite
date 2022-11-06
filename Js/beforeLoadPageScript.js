
//CHECK USER PAGE STATUS BEFORE LOAD
function CheckIfPageThatIsAboutToLoadIsInCurrentStatus() {
	var check = sessionStorage.getItem("siteIsLoaded");
	
	//CHECK IF SITE IS ALREADY LOADED IN THE CURRENT SESSION
	if(check == null) {
		window.location.href = "../index.html";
	}
}

CheckIfPageThatIsAboutToLoadIsInCurrentStatus();
////


//PAGE BACKGROUND BUTTON STATUS LOAD
function InitializePageBackgroundStatus() {
	if(sessionStorage.getItem("pageBackgroundProfile") == null) {
		sessionStorage.setItem("pageBackgroundProfile", "prof1");
	}
}
	
InitializePageBackgroundStatus();
////


//GET PAGE WIDTH
function GetPageWidth() {
	var width =  Math.max(document.body.scrollWidth,
		document.documentElement.scrollWidth,
		document.body.offsetWidth,
		document.documentElement.offsetWidth,
		document.documentElement.clientWidth);

	return width;
}
////


//CLEAR ALL INTERVALS
function ClearAllIntervals() {
	var intervalId = window.setInterval(function() {}, Number.MAX_SAFE_INTEGER);
	
	//CLEAR ANY TIMEOUT/INTERVAL UP TO THAT ID
	for(var i = 1; i < intervalId; i++) {
		window.clearInterval(i);
	}
}
////


//CREATE VERTICAL AND HORIZONTAL MENU OPTIONS
function CreateVerticalOrHorizontalMenu(items, placeToBe, counter, upBtn, downBtn, heightOfC, changingHeightOfC) {
	var counterHelp = 0;
	var verticalDragElmntC = null;
	//HEIGHT OF EACH PAR
	var verticalDragPElmntHeight = heightOfC;
	//MAKE IT RESPONSIVE
	var onChangeVerticalDragPElmntHeight = changingHeightOfC;

	//
	if(GetPageWidth() > 850) {
		placeToBe.style.height = verticalDragPElmntHeight + "px";
	}
	else {
		placeToBe.style.height = onChangeVerticalDragPElmntHeight + "px";
	}
	//RESPONSIVENESS REASON
	window.addEventListener("resize", function() {
		if(GetPageWidth() > 850) {
			placeToBe.style.height = verticalDragPElmntHeight + "px";
		}
		else {
			placeToBe.style.height = onChangeVerticalDragPElmntHeight + "px";
		}
	});
	//

	placeToBe.innerHTML = '<div class="verticalDragC"></div>';

	items.forEach(item => {
		var text = item[0];
		var funct = item[1];

		var titleFirstPart = item[0].substring(0, item[0].indexOf("'") + 1);
		var titleSecondPart = item[0].substring(item[0].indexOf("'") + 1, item[0].length);

		var verticalDragC = document.getElementsByClassName("verticalDragC")[counter];
		var elmnt = document.createElement("p");
		elmnt.className = "verticalDragP";
		elmnt.id = "verticalDragP" + counter + "" + counterHelp;
		elmnt.innerHTML = '<span class="verticalMenuSemesterSp">' + titleFirstPart + ' </span><span class="verticalMenuTextSp">' + titleSecondPart + '</span>';

		verticalDragC.appendChild(elmnt);

		//
		if(GetPageWidth() > 850) {
			elmnt.style.height = verticalDragPElmntHeight + "px";
		}
		else {
			elmnt.style.height = onChangeVerticalDragPElmntHeight + "px";
		}
		//RESPONSIVENESS REASON
		window.addEventListener("resize", function() {
			if(GetPageWidth() > 850) {
				elmnt.style.height = verticalDragPElmntHeight + "px";
			}
			else {
				elmnt.style.height = onChangeVerticalDragPElmntHeight + "px";
			}
		});
		//

		if(counterHelp == 0) {
			elmnt.style.transform = "scale(1.3)";
		}

		verticalDragElmntC = verticalDragC;

		//
		if(GetPageWidth() > 850) {
			verticalDragPElmntHeight = elmnt.offsetHeight;
		}
		else {
			onChangeVerticalDragPElmntHeight = elmnt.offsetHeight;
		}
		//RESPONSIVENESS REASON
		window.addEventListener("resize", function() {
			if(GetPageWidth() > 850) {
				verticalDragPElmntHeight = elmnt.offsetHeight;
			}
			else {
				onChangeVerticalDragPElmntHeight = elmnt.offsetHeight;
			}
		});
		//

		counterHelp++;
	});

	placeToBe.name = 0;
	var semestersContentC = document.getElementById("semestersContentC");
	items[0][1]();
	upBtn.style.display = "none";

	//ADD LIFE TO MOVE UP MENU BUTTON
	upBtn.addEventListener("click", function() {
		var currentCounter = parseInt(placeToBe.name);

		if(currentCounter > 0) {
			placeToBe.name = currentCounter - 1;
			currentCounter = parseInt(placeToBe.name);
			
			//IF UP BUTTONS IS HIDDEN SHOW IT
			if(currentCounter == (items.length - 2)) {
				downBtn.style.display = "block";
				downBtn.style.opacity = 1;
			}

			//
			if(GetPageWidth() > 850) {			
				var newPos = (verticalDragPElmntHeight * (currentCounter));

				verticalDragElmntC.style.marginTop = -newPos + "px";
			}
			else {
				var newPos = (onChangeVerticalDragPElmntHeight * (currentCounter));

				verticalDragElmntC.style.marginTop = -newPos + "px";
			}
			//RESPONSIVENESS REASON
			window.addEventListener("resize", function() {
				if(GetPageWidth() > 850) {			
					var newPos = (verticalDragPElmntHeight * (currentCounter));

					verticalDragElmntC.style.marginTop = -newPos + "px";
				}
				else {
					var newPos = (onChangeVerticalDragPElmntHeight * (currentCounter));

					verticalDragElmntC.style.marginTop = -newPos + "px";
				}
			});
			//

			//TRANSFORM CURRENT PAR SELECTED
			var helpForCurPar = "verticalDragP" + counter + currentCounter;
			var currentPar = document.getElementById(helpForCurPar);
			currentPar.style.transform = "scale(1.3)";

			//TRANSFORM PREVIOUS PAR SELECTED
			helpForCurPar = "verticalDragP" + counter + (currentCounter + 1);
			currentPar = document.getElementById(helpForCurPar);
			currentPar.style.transform = "scale(1)";

			//IF REACHES MIN OPTION
			if(currentCounter == 0) {
				setTimeout(function() {
					upBtn.style.display = "none";
				}, 200);
				upBtn.style.opacity = 0;
			}

			//CONTENT OF SEMESTER
			semestersContentC.style.opacity = 0;
			semestersContentC.style.animation = "none";
			setTimeout(function() {
				semestersContentC.style.opacity = 1;
				items[currentCounter][1]();
			}, 300);
		}
	});

	//ADD LIFE TO MOVE DOWN MENU BUTTON
	downBtn.addEventListener("click", function() {
		var currentCounter = parseInt(placeToBe.name);

		if(currentCounter < (items.length - 1)) {
			//IF UP BUTTONS IS HIDDEN SHOW IT
			if(currentCounter == 0) {
				upBtn.style.display = "block";
				upBtn.style.opacity = 1;
			}

			//
			if(GetPageWidth() > 850) {
				var newPos = (verticalDragPElmntHeight * (currentCounter + 1));

				verticalDragElmntC.style.marginTop = -newPos + "px";
			}
			else {
				var newPos = (onChangeVerticalDragPElmntHeight * (currentCounter + 1));

				verticalDragElmntC.style.marginTop = -newPos + "px";
			}
			//RESPONSIVENESS REASON
			window.addEventListener("resize", function() {
				if(GetPageWidth() > 850) {
					var newPos = (verticalDragPElmntHeight * (currentCounter + 1));

					verticalDragElmntC.style.marginTop = -newPos + "px";
				}
				else {
					var newPos = (onChangeVerticalDragPElmntHeight * (currentCounter + 1));

					verticalDragElmntC.style.marginTop = -newPos + "px";
				}
			});
			//
			
			//TRANSFORM CURRENT PAR SELECTED
			var helpForCurPar = "verticalDragP" + counter + (currentCounter + 1);
			var currentPar = document.getElementById(helpForCurPar);
			currentPar.style.transform = "scale(1.3)";

			//TRANSFORM PREVIOUS PAR SELECTED
			helpForCurPar = "verticalDragP" + counter + currentCounter;
			currentPar = document.getElementById(helpForCurPar);
			currentPar.style.transform = "scale(1)";

			//IF REACHES MAX OPTION
			if(currentCounter == (items.length - 2)) {
				setTimeout(function() {
					downBtn.style.display = "none";
				}, 200);
				downBtn.style.opacity = 0;
			}

			//CONTENT OF SEMESTER
			semestersContentC.style.opacity = 0;
			semestersContentC.style.animation = "none";
			setTimeout(function() {
				semestersContentC.style.opacity = 1;
				items[currentCounter + 1][1]();
			}, 300);

			placeToBe.name = currentCounter + 1;
		}
	});
}
////