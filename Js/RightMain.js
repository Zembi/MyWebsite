	//RIGHT MAIN CLASS
	class RightMain {
		constructor(status) {
			this.status = status;

			//FUNCTIONS AT THE START OF THE OBJECT
			this.Main();
		}

		getStatus() {
			return this.status;
		}

		//EVENT FUNCTIONS FROM HERE
		Main() {
			this.CreatePatronOfRightMainScreen();
			this.MainActionsAndEvents();
		}

		CreatePatronOfRightMainScreen() {
			var alreadyElements = document.getElementById("downRightC").innerHTML;
			document.getElementById("downRightC").innerHTML = '<div id="rightMainScreenC"><div id="rightMainTopMenuC"><div id="changeBackgroundBtnC" class="rightMainTopMenuItemBtnC"><button id="changeBackgroundBtn" class="rightMainTopMenuItemBtn" title="Picassos Button"><img id="changeBackgroundBtnImg" class="rightMainTopMenuItemImg"></button></div></div></div>' + alreadyElements;
		}

		//ALL EVENTS AND FUNCTIONS THAT ARE AT ALL MAIN CONTENT PAGES CONTAINERS
		MainActionsAndEvents() {
			//INITIALIZE VARIABLES
			var changeBackgroundBtn = document.getElementById("changeBackgroundBtn");
			var downRightC = document.getElementById("downRightC");

			//CHANGE BACKGROUND OF MAIN BACKGROUND SCREEN FUNCTION
			changeBackgroundBtn.name = sessionStorage.getItem("pageBackgroundProfile");

			changeBackgroundBtn.name = ChangeBackgroundBtnStatus(changeBackgroundBtn, downRightC, false);

			changeBackgroundBtn.addEventListener("click", function() {
				this.name = ChangeBackgroundBtnStatus(this, downRightC, false);
			});

			function ChangeBackgroundBtnStatus(btn, contentToChange, firstTime) {
				sessionStorage.setItem("pageBackgroundProfile", btn.name);

				if(btn.name == "prof1") {
					contentToChange.style.background = "transparent";
					if(!firstTime) {
						btn.name = "prof2";
					}
				}
				else {
					contentToChange.style.background = "rgb(117, 42, 6, 0.7)";
					if(!firstTime) {
						btn.name = "prof1";
					}
				}

				return btn.name;
			}
		}
	}