/*	DELETE CONSOLE MESSAGE BY SETTING this.console TO FALSE
*/
//RIGHT MAIN CLASS
class RightMain {
	constructor(status) {
		this.console = globalVars.getConsole();

		this.status = status;

		//EDUCATION PAGE VARIABLES REALLY IMPORTANT FOR CHART'S CREATION AND DISPLAY
		this.eduChartValue = true;

		//SKILLS PAGE ARRAY REALLY IMPORTANT FOR CHART'S CREATION AND DISPLAY
		this.skillsChartValue = [];

		//FUNCTIONS AT THE START OF THE OBJECT
		this.Main();
	}

	getStatus() {
		return this.status;
	}

	getEduChartValue() {
		return this.eduChartValue;
	}
	setEduChartValue(eduChartValue) {
		this.eduChartValue = eduChartValue;
	}

	getSkillsChartValue() {
		return this.skillsChartValue;
	}
	setSkillsChartValue(skillsChartValue, counter) {
		this.skillsChartValue[counter] = skillsChartValue;
	}

	getSkillsChartsCounter() {
		return this.getSkillsChartValue().length;
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

		changeBackgroundBtn.addEventListener("click", function () {
			this.name = ChangeBackgroundBtnStatus(this, downRightC, false, thisItem);
		});

		function ChangeBackgroundBtnStatus(btn, contentToChange, firstTime, currentObj) {
			//HOME PAGE CHANGES INITIALIZE VARIABLES
			if (currentObj.getStatus() == "Home") {
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
			else if (currentObj.getStatus() == "Resume") {
				var resumeIframe = document.getElementById("resumeIframe");
			}
			//EDUCATION PAGE CHANGES INITIALIZE VARIABLES
			else if (currentObj.getStatus() == "Education") {
			}
			//SKILLS PAGE CHANGES INITIALIZE VARIABLES
			else if (currentObj.getStatus() == "Skills") {
			}
			//CONTACT PAGE CHANGES INITIALIZE VARIABLES
			else if (currentObj.getStatus() == "Contact") {
			}

			sessionStorage.setItem("pageBackgroundProfile", btn.name);

			//SEE THROUGH
			if (btn.name == "prof1" && prof1) {
				rightMainScreenC.style.borderBottomColor = "rgb(56, 62, 87, 0.7)";
				contentToChange.style.background = "transparent";
				if (!firstTime) {
					if (prof2) {
						btn.name = "prof2";
					}
					else if (prof3) {
						btn.name = "prof3";
					}
				}

				var colorText = "rgb(117, 42, 6)";

				//HOME PAGE CHANGES PROF 1
				if (currentObj.getStatus() == "Home") {
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
				else if (currentObj.getStatus() == "Resume") {
					resumeIframe.style.boxShadow = "0 0 10px rgb(0, 16, 57)";
				}
				//EDUCATION PAGE CHANGES PROF 1
				else if (currentObj.getStatus() == "Education") {
					document.documentElement.style.setProperty("--menuBackground", "rgb(0, 0, 0, 0.5)");
					document.documentElement.style.setProperty("--highlightTextColor", colorText);
					document.documentElement.style.setProperty("--skillsBackground", "rgb(0, 0, 0, 0.1)");

					currentObj.AboutMeEduChartChanges();

					//ARROWS CHANGES
					var changeArrowImg = "url('../Assets/arrow5.png')";
					document.documentElement.style.setProperty("--upArrowUrl", changeArrowImg);
					document.documentElement.style.setProperty("--downArrowHoverUrl", changeArrowImg);
				}
				//SKILLS PAGE CHANGES PROF 1
				else if (currentObj.getStatus() == "Skills") {
					document.documentElement.style.setProperty("--menuBackground", "rgb(0, 0, 0, 0.5)");
					document.documentElement.style.setProperty("--highlightTextColor", colorText);
					document.documentElement.style.setProperty("--skillsBackground", "rgb(0, 0, 0, 0.1)");

					for (var i = 0; i < currentObj.getSkillsChartsCounter(); i++) {
						currentObj.AboutMeSkillChartChanges(i);
					}
				}
				//CONTACT PAGE CHANGES PROF 1
				else if (currentObj.getStatus() == "Contact") {
				}

			}
			//DARK
			else if (btn.name == "prof3" && prof3) {
				rightMainScreenC.style.borderBottomColor = "rgb(56, 62, 87, 0.7)";
				contentToChange.style.background = "rgb(56, 62, 87, 1)";
				if (!firstTime) {
					if (prof1) {
						btn.name = "prof1";
					}
					else if (prof2) {
						btn.name = "prof2";
					}
				}

				var colorText = "rgb(87, 126, 161)";

				//HOME PAGE CHANGES PROF 2
				if (currentObj.getStatus() == "Home") {
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
				//RESUME PAGE CHANGES PROF 2
				else if (currentObj.getStatus() == "Resume") {
					resumeIframe.style.boxShadow = "0 0 3px grey";
				}
				//EDUCATION PAGE CHANGES PROF 2
				else if (currentObj.getStatus() == "Education") {
					document.documentElement.style.setProperty("--menuBackground", "rgb(255, 255, 255, 0.6)");
					document.documentElement.style.setProperty("--highlightTextColor", colorText);
					document.documentElement.style.setProperty("--skillsBackground", "rgb(255, 255, 255, 0.1)");

					currentObj.AboutMeEduChartChanges();

					//ARROWS CHANGES
					var changeArrowImg = "url('../Assets/arrow6.png')";
					document.documentElement.style.setProperty("--upArrowUrl", changeArrowImg);
					document.documentElement.style.setProperty("--downArrowHoverUrl", changeArrowImg);
				}
				//SKILLS PAGE CHANGES PROF 2
				else if (currentObj.getStatus() == "Skills") {
					document.documentElement.style.setProperty("--menuBackground", "rgb(255, 255, 255, 0.6)");
					document.documentElement.style.setProperty("--highlightTextColor", colorText);
					document.documentElement.style.setProperty("--skillsBackground", "rgb(255, 255, 255, 0.1)");

					for (var i = 0; i < currentObj.getSkillsChartsCounter(); i++) {
						currentObj.AboutMeSkillChartChanges(i);
					}
				}
				//CONTACT PAGE CHANGES PROF 2
				else if (currentObj.getStatus() == "Contact") {
				}
			}

			return btn.name;
		}
	}

	AboutMeEduChartChanges() {
		if (this.getEduChartValue()) {
			if (changeBackgroundBtn.name == "prof1") {
				//1ST BARS AND LINE
				var color0 = "rgb(255, 255, 255)";
				var dataOpacity0 = "0.8";

				var color2 = "white";

				//2ND BARS AND LINE
				var color1 = "rgb(87, 126, 161)";
				var dataOpacity1 = "0.8";

				var color3 = "rgb(87, 126, 161)";
			}
			else if (changeBackgroundBtn.name == "prof3") {
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
			if (globalVars.getEduGoogleChart() != null) {
				globalVars.getEduGoogleChart().RecolorSeries(0, color0, dataOpacity0);
				globalVars.getEduGoogleChart().RecolorSeries(1, color1, dataOpacity1);
				globalVars.getEduGoogleChart().RecolorSeries(2, color2, 0);
				globalVars.getEduGoogleChart().RecolorSeries(3, color3, 0);
			}
		}
		else {
			if (this.console) {
				console.log(`--WAITING TO RUN MAIN CORE--
AboutMeEduChartChanges(): in waiting line`);
			}
		}
	}

	AboutMeSkillChartChanges(c) {
		if (this.getSkillsChartValue()[c]) {
			//FULL PIE
			var color0 = "white";
			var fontColor0 = color0;

			//PIE THAT WILL FILL 
			var color1 = null;
			var fontColor1 = null;

			var fontOnChangingColor = null;

			if (changeBackgroundBtn.name == "prof1") {
				var darkerFontColor = "rgb(87, 126, 161)";
				var lighterFontColor = "white";

				var colors = ["rgb(87, 126, 161)", "black"];
				var allColors = ChromaColor("hcl", colors, this.getSkillsChartValue().length);

				color1 = allColors[c];
				fontColor1 = lighterFontColor;
				fontOnChangingColor = allColors[allColors.length - 2];
			}
			else if (changeBackgroundBtn.name == "prof3") {
				var darkerFontColor = "rgb(143, 56, 14)";
				var lighterFontColor = "white";

				var colors = ["rgb(117, 42, 6)", "black"];
				var allColors = ChromaColor("hcl", colors, this.getSkillsChartValue().length);

				color1 = allColors[c];
				fontColor1 = lighterFontColor;
				fontOnChangingColor = allColors[allColors.length - 2];
			}

			//CHECK IF GLOBAL GOOGLE CHART EXISTS
			if (globalVars.getSkill(c) != null) {
				globalVars.getSkill(c).getGoogleChart().RecolorPies(color0, color1, fontColor0, fontColor1);
				globalVars.getSkill(c).RecolorAttrtsOfSkill(color1, fontOnChangingColor);
			}
		}
		else {
			if (this.console) {
				console.log(`--WAITING TO RUN MAIN CORE--
AboutMeSkillChartChanges(` + c + `): in waiting line`);
			}
		}
	}
}