
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


//CREATE VERTICAL AND HORIZONTAL MENU OPTIONS
function CreateVerticalMenu(items, placeToBe, counter, upBtn, downBtn) {
	var counterHelp = 0;
	var verticalDragElmntC = null;
	//HEIGHT OF EACH PAR
	var verticalDragPElmntHeight = 30;
	placeToBe.style.height = verticalDragPElmntHeight + "px";
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
		elmnt.style.height = verticalDragPElmntHeight + "px";

		if(counterHelp == 0) {
			elmnt.style.transform = "scale(1.3)";
		}

		verticalDragElmntC = verticalDragC;
		verticalDragPElmntHeight = elmnt.offsetHeight;

		counterHelp++;
	});

	var getHeightOfSemtext = verticalDragPElmntHeight;

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

			var newPos = (getHeightOfSemtext * (currentCounter));
		
			verticalDragElmntC.style.marginTop = -newPos + "px";

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
		var newPos = (getHeightOfSemtext * (currentCounter + 1));

		if(currentCounter < (items.length - 1)) {
			//IF UP BUTTONS IS HIDDEN SHOW IT
			if(currentCounter == 0) {
				upBtn.style.display = "block";
				upBtn.style.opacity = 1;
			}

			verticalDragElmntC.style.marginTop = -newPos + "px";
			
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