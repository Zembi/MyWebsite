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
			var rightMainScreenC = document.getElementById("rightMainScreenC");
			var thisItem = this;

			//CHANGE BACKGROUND OF MAIN BACKGROUND SCREEN FUNCTION
			changeBackgroundBtn.name = sessionStorage.getItem("pageBackgroundProfile");

			changeBackgroundBtn.name = ChangeBackgroundBtnStatus(changeBackgroundBtn, downRightC, false, thisItem);

			changeBackgroundBtn.addEventListener("click", function() {
				this.name = ChangeBackgroundBtnStatus(this, downRightC, false, thisItem);
			});

			function ChangeBackgroundBtnStatus(btn, contentToChange, firstTime, currentObj) {
				//HOME PAGE CHANGES INITIALIZE VARIABLES
				if(currentObj.getStatus() == "Home") {
					var homeLeftCoverIntroSymbolsC = document.getElementById("homeLeftCoverIntroSymbolsC");
					var homeRightCoverIntroSymbolsC = document.getElementById("homeRightCoverIntroSymbolsC");

					var homeContentTopLeftTitleH = document.getElementById("homeContentTopLeftTitleH");
					var homeContentTopRightTitleH = document.getElementById("homeContentTopRightTitleH");
					var homeContentTopDetailsTitleH = document.getElementById("homeContentTopDetailsTitleH");

					var homeContentDownLeftTextP = document.getElementById("homeContentDownLeftTextP");
					var homeContentDownRightTextP = document.getElementById("homeContentDownRightTextP");
					var homeContentDownDetailsTextParC = document.getElementById("homeContentDownDetailsTextParC");

					var highlightTxt1 = Array.from(document.getElementsByClassName("highlightTxt1"));
				}
				//RESUME PAGE CHANGES INITIALIZE VARIABLES
				else if(currentObj.getStatus() == "Resume") {
					var resumeIframe = document.getElementById("resumeIframe");
				}
				//ABOUT ME PAGE CHANGES INITIALIZE VARIABLES
				else if(currentObj.getStatus() == "About me") {
				}
				//CONTACT PAGE CHANGES INITIALIZE VARIABLES
				else if(currentObj.getStatus() == "Contact") {
				}

				sessionStorage.setItem("pageBackgroundProfile", btn.name);

				//LIGHT
				if(btn.name == "prof1") {
					rightMainScreenC.style.borderBottomColor = "transparent";
					rightMainScreenC.style.boxShadow = "0 0 2px black";
					contentToChange.style.background = "transparent";
					if(!firstTime) {
						btn.name = "prof2";
					}

					//HOME PAGE CHANGES PROF 1
					if(currentObj.getStatus() == "Home") {
						homeLeftCoverIntroSymbolsC.style.background = "rgb(2, 19, 35, 0.9)";
						homeRightCoverIntroSymbolsC.style.background = "rgb(2, 19, 35, 0.9)";

						homeContentDownLeftTextP.style.boxShadow = "0 0 3px black";
						homeContentDownRightTextP.style.boxShadow = "0 0 3px black";
						homeContentDownDetailsTextParC.style.boxShadow = "0 0 3px black";
					}
					//RESUME PAGE CHANGES PROF 1
					else if(currentObj.getStatus() == "Resume") {
						resumeIframe.style.boxShadow = "0 0 10px rgb(0, 16, 57)";
					}
					//ABOUT ME PAGE CHANGES PROF 1
					else if(currentObj.getStatus() == "About me") {
					}
					//CONTACT PAGE CHANGES PROF 1
					else if(currentObj.getStatus() == "Contact") {
					}

				}
				//LIGHTER
				else if(btn.name == "prof2") {
					contentToChange.style.background = "rgb(255, 255, 255, 0.4)";
					if(!firstTime) {
						btn.name = "prof3";
					}

					//HOME PAGE CHANGES PROF 2
					if(currentObj.getStatus() == "Home") {
						homeLeftCoverIntroSymbolsC.style.background = "rgb(136, 153, 148, 0.9)";
						homeRightCoverIntroSymbolsC.style.background = "rgb(136, 153, 148, 0.9)";

						var borderBotColor = "rgb(136, 153, 148)";
						homeContentTopLeftTitleH.style.borderBottomColor = borderBotColor;
						homeContentTopRightTitleH.style.borderBottomColor = borderBotColor;
						homeContentTopDetailsTitleH.style.borderBottomColor = borderBotColor;

						highlightTxt1.forEach(item => {
							item.style.color = borderBotColor;
						});
					}
					//RESUME PAGE CHANGES PROF 2
					else if(currentObj.getStatus() == "Resume") {
					}
					//ABOUT ME PAGE CHANGES PROF 2
					else if(currentObj.getStatus() == "About me") {
					}
					//CONTACT PAGE CHANGES PROF 2
					else if(currentObj.getStatus() == "Contact") {
					}
				}
				//DARK
				else if(btn.name == "prof3") {
					rightMainScreenC.style.borderBottomColor = "rgb(0, 40, 91, 0.5)";
					rightMainScreenC.style.boxShadow = "0 0 4px grey";
					contentToChange.style.background = "rgb(0, 0, 20)";
					if(!firstTime) {
						btn.name = "prof1";
					}

					//HOME PAGE CHANGES PROF 3
					if(currentObj.getStatus() == "Home") {
						homeLeftCoverIntroSymbolsC.style.background = "rgb(0, 0, 20, 0.9)";
						homeRightCoverIntroSymbolsC.style.background = "rgb(0, 0, 20, 0.9)";

						homeContentTopLeftTitleH.style.borderBottomColor = "rgb(0, 68, 128)";
						homeContentTopRightTitleH.style.borderBottomColor = "rgb(0, 68, 128)";
						homeContentTopDetailsTitleH.style.borderBottomColor = "rgb(0, 68, 128)";

						homeContentDownLeftTextP.style.boxShadow = "0 0 3px grey";
						homeContentDownRightTextP.style.boxShadow = "0 0 3px grey";
						homeContentDownDetailsTextParC.style.boxShadow = "0 0 3px grey";

						highlightTxt1.forEach(item => {
							item.style.color = "rgb(0, 93, 176)";
						});
					}
					//RESUME PAGE CHANGES PROF 3
					else if(currentObj.getStatus() == "Resume") {
						resumeIframe.style.boxShadow = "0 0 3px grey";
					}
					//ABOUT ME PAGE CHANGES PROF 3
					else if(currentObj.getStatus() == "About me") {
					}
					//CONTACT PAGE CHANGES PROF 3
					else if(currentObj.getStatus() == "Contact") {
					}
				}

				return btn.name;
			}
		}
	}