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
			document.getElementById("downRightC").innerHTML = `
				<div id="rightMainScreenC">
					<div id="rightMainTopMenuC">
						<div id="changeBackgroundBtnC" class="rightMainTopMenuItemBtnC">
							<button id="changeBackgroundBtn" class="rightMainTopMenuItemBtn" title="Picassos Button">
								<img id="changeBackgroundBtnImg" class="rightMainTopMenuItemImg">
							</button>
						</div>
					</div>
				</div>
			` + alreadyElements;
		}

		//ALL EVENTS AND FUNCTIONS THAT ARE AT ALL MAIN CONTENT PAGES CONTAINERS
		MainActionsAndEvents() {
			//INITIALIZE VARIABLES
			var changeBackgroundBtn = document.getElementById("changeBackgroundBtn");
			var downRightC = document.getElementById("downRightC");
			var rightMainScreenC = document.getElementById("rightMainScreenC");
			var thisItem = this;
			//PROFS FUNCTION
			var prof1 = 1;
			var prof2 = 0;
			var prof3 = 1;

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

				//SEE THROUGH
				if(btn.name == "prof1" && prof1) {
					rightMainScreenC.style.borderBottomColor = "rgb(56, 62, 87, 0.7)";
					contentToChange.style.background = "transparent";
					if(!firstTime) {
						if(prof2) {
							btn.name = "prof2";
						}
						else if(prof3) {
							btn.name = "prof3";
						}
					}

					var colorText = "rgb(117, 42, 6)";

					//HOME PAGE CHANGES PROF 1
					if(currentObj.getStatus() == "Home") {
						homeContentTopLeftTitleH.style.borderBottomColor = colorText;
						homeContentTopRightTitleH.style.borderBottomColor = colorText;
						homeContentTopDetailsTitleH.style.borderBottomColor = colorText;
						highlightTxt1.forEach(item => {
							item.style.color = colorText;
						});

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
						document.documentElement.style.setProperty("--highlightTextColor", colorText);
	
						currentObj.AboutMeChartChanges();

						//ARROWS CHANGES
						var changeArrowImg = "url('../Assets/arrow5.png')";
						document.documentElement.style.setProperty("--upArrowUrl", changeArrowImg);
						document.documentElement.style.setProperty("--downArrowHoverUrl", changeArrowImg);
					}
					//CONTACT PAGE CHANGES PROF 1
					else if(currentObj.getStatus() == "Contact") {
					}

				}
				//LIGHTER
				/*else if(btn.name == "prof2" && prof2) {
					contentToChange.style.background = "rgb(255, 255, 255, 0.4)";
					if(!firstTime) {
						if(prof3) {
							btn.name = "prof3";
						}
						else if(prof1) {
							btn.name = "prof1";
						}
					}

					//HOME PAGE CHANGES PROF 2
					if(currentObj.getStatus() == "Home") {
						//homeLeftCoverIntroSymbolsC.style.background = "rgb(136, 153, 148, 0.9)";
						//homeRightCoverIntroSymbolsC.style.background = "rgb(136, 153, 148, 0.9)";

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
				}*/
				//DARK
				else if(btn.name == "prof3" && prof3) {
					rightMainScreenC.style.borderBottomColor = "rgb(56, 62, 87, 0.7)";
					contentToChange.style.background = "rgb(56, 62, 87, 1)";
					if(!firstTime) {
						if(prof1) {
							btn.name = "prof1";
						}
						else if(prof2) {
							btn.name = "prof2";
						}
					}

					var colorText = "rgb(87, 126, 161)";

					//HOME PAGE CHANGES PROF 3
					if(currentObj.getStatus() == "Home") {
						homeContentTopLeftTitleH.style.borderBottomColor = colorText;
						homeContentTopRightTitleH.style.borderBottomColor = colorText;
						homeContentTopDetailsTitleH.style.borderBottomColor = colorText;
						highlightTxt1.forEach(item => {
							item.style.color = colorText;
						});

						homeContentDownLeftTextP.style.boxShadow = "0 0 3px grey";
						homeContentDownRightTextP.style.boxShadow = "0 0 3px grey";
						homeContentDownDetailsTextParC.style.boxShadow = "0 0 3px grey";
					}
					//RESUME PAGE CHANGES PROF 3
					else if(currentObj.getStatus() == "Resume") {
						resumeIframe.style.boxShadow = "0 0 3px grey";
					}
					//ABOUT ME PAGE CHANGES PROF 3
					else if(currentObj.getStatus() == "About me") {
						document.documentElement.style.setProperty("--highlightTextColor", colorText);
						
						currentObj.AboutMeChartChanges();

						//ARROWS CHANGES
						var changeArrowImg = "url('../Assets/arrow6.png')";
						document.documentElement.style.setProperty("--upArrowUrl", changeArrowImg);
						document.documentElement.style.setProperty("--downArrowHoverUrl", changeArrowImg);
					}
					//CONTACT PAGE CHANGES PROF 3
					else if(currentObj.getStatus() == "Contact") {
					}
				}

				return btn.name;
			}
		}

		AboutMeChartChanges() {
			if(changeBackgroundBtn.name == "prof1") {
				//1ST BARS AND LINE
				var color0 = "rgb(255, 255, 255)";
				var dataOpacity0 = "0.8";
				
				var color2 = "white";

				//2ND BARS AND LINE
				var color1 = "rgb(87, 126, 161)";
				var dataOpacity1 = "0.8";

				var color3 = "rgb(87, 126, 161)";
			}
			else if(changeBackgroundBtn.name == "prof3") {
				//1ST BARS AND LINE
				var color0 = "rgb(0, 4, 40)";
				var dataOpacity0 = "0.6";

				var color2 = "rgb(0, 4, 40)";

				//2ND BARS AND LINE
				var color1 = "rgb(143, 56, 14)";
				var dataOpacity1 = "0.6";

				var color3 = "rgb(143, 56, 14)";
			}

			//CHECK IF GLOBAL GOOGLE CHART EXISTS
			if(globalVars.getEduGoogleChart() != null) {
				globalVars.getEduGoogleChart().RecolorSeries(0, color0, dataOpacity0);
				globalVars.getEduGoogleChart().RecolorSeries(1, color1, dataOpacity1);
				globalVars.getEduGoogleChart().RecolorSeries(2, color2, 0);
				globalVars.getEduGoogleChart().RecolorSeries(3, color3, 0);
			}
		}
	}