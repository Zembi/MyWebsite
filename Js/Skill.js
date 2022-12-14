
//GOOGLE CHART CORE CLASS
class Skill {
	constructor(gCItems, placeToBe, title, textAr, counter) {
		//CREATE MY OBJECT FOR GOOGLE CHARTS
		this.gCItems = gCItems;

		this.googleChart = null;

		//ELEMENT WHERE CHART AND INFO ABOUT MY SKILLS WILL BE CREATED AND DISPLAYED
		this.placeToBe = placeToBe;

		//TITLE INNER HTML
		this.title = title;
		//GET TITLE CONTAINER SO WE CAN STYLE IT
		this.elemntsThatChangeBackground = [];
		this.elemntsThatChangeFont = [];

		//ARRAY THAT FIRST ELEMENT IS SEMI-TITLE AND THE OTHERS ARE LIST-ELEMENTS
		this.textAr = textAr;

		this.counter = counter;

		this.skillActiveStatus = false;

		this.Main();
	}

	getGCItems() {
		return this.gCItems;
	}

	getGoogleChart() {
		return this.googleChart;
	}
	setGoogleChart(googleChart) {
		this.googleChart = googleChart;
	}

	getPlaceToBe() {
		return this.placeToBe;
	}

	getTitle() {
		return this.title;
	}

	getElemntsThatChangeBackground() {
		return this.elemntsThatChangeBackground;
	}
	setElemntsThatChangeBackground(elemntsThatChangeBackground) {
		this.elemntsThatChangeBackground.push(elemntsThatChangeBackground);
	}

	getElemntsThatChangeFont() {
		return this.elemntsThatChangeFont;
	}
	setElemntsThatChangeFont(elemntsThatChangeFont) {
		this.elemntsThatChangeFont.push(elemntsThatChangeFont);
	}

	getTextAr() {
		return this.textAr;
	}

	getCounter() {
		return this.counter;
	}

	getSkillActiveStatus() {
		return this.skillActiveStatus;
	}
	setSkillActiveStatus(skillActiveStatus) {
		this.skillActiveStatus = skillActiveStatus;
	}

	Main() {

	}

	PrototypePieOfHorizontalView(percentToReach) {
		this.getPlaceToBe().innerHTML = `
				<div class="skillOverallWrapTitleC">
					<div id="skillOverallTitle` + this.getCounter() + `C" class="skillOverallTitleC">
						<h2 class="skillOverallTitleH small_Title">` + this.getTitle() + `</h2>
					</div>
				</div>

				<div id="skillOverallWrap` + this.getCounter() + `C" class="skillOverallWrapC">
					<div class="skillOverallLeftC">
						<div id="chartWrap` + this.getCounter() + `C" class="skillOverallChartC">
							<div id="chartSkills` + this.getCounter() + `CC" class="chartSkillsCC">
								<div id="chartSkills` + this.getCounter() + `C" class="chartSkillsC"></div>
							</div>
							<div id="skillsChartLoadingFull` + this.getCounter() + `C" class="skillsChartLoadingFullC">
								<div id="skillsChartCenterLoader` + this.getCounter() + `C" class="skillsChartCenterLoaderC">
									<img id="skillsChartCenterLoader` + this.getCounter() + `Img" class="skillsChartCenterLoaderImg">
								</div>
							</div>
						</div>
					</div>
					
					<div id="skillOverallRight` + this.getCounter() + `C" class="skillOverallRightC">
						<div id="skillOverallTextWrap` + this.getCounter() + `C" class="skillOverallTextWrapC animShow">
							<p id="skillOverallTextWrap` + this.getCounter() + `P"  class="skillOverallTextWrapP"></p>
						</div>
					</div>
				</div>
			`;

		var unqiueId = "chartWrap" + this.getCounter() + "C";
		var getChartPlaceId = document.getElementById(unqiueId);
		//this.getGoogleChart().setElmntOverall(getChartPlaceId);
		this.setGoogleChart(new GoogleChart(
			this.getGCItems()[0], this.getGCItems()[1], this.getGCItems()[2],
			getChartPlaceId, this.getGCItems()[4], this.getGCItems()[5],
			this.getGCItems()[6], this.getGCItems()[7], this.getGCItems()[8]
		));

		this.getGoogleChart().setPieAnimLvl(percentToReach);
		this.getGoogleChart().Main();

		//GET TITLE CONTAINER OF SKILL
		let thisTitleC = "skillOverallTitle" + this.getCounter() + "C";
		thisTitleC = document.getElementById(thisTitleC);
		this.setElemntsThatChangeBackground(thisTitleC);

		//WHEN USER IS SCROLLING ON TOP OF AN ELEMENT, REVEAL IT
		this.ShowWhenInViewElements();

		//CREATE THE SHOW VIEW OF TEXT ARRAY OF THIS ELEMENT
		this.TransformTextArrayToShowView();
	}

	ShowWhenInViewElements() {
		var skillOverallTitleC = "skillOverallTitle" + this.getCounter() + "C";
		skillOverallTitleC = document.getElementById(skillOverallTitleC);

		var skillOverallWrapC = "skillOverallWrap" + this.getCounter() + "C";
		skillOverallWrapC = document.getElementById(skillOverallWrapC);

		var skillOverallTextWrapP = "skillOverallTextWrap" + this.getCounter() + "P";
		skillOverallTextWrapP = document.getElementById(skillOverallTextWrapP);

		var skillOverallChartC = "chartWrap" + this.getCounter() + "C";
		skillOverallChartC = document.getElementById(skillOverallChartC);

		var googlCh = this.getGoogleChart();

		var thisObj = this;
		var check = true;

		var rightBodyTCC = document.getElementById("rightBodyTCC");

		CheckCurrentViewPort();
		document.addEventListener("scroll", function () {
			CheckCurrentViewPort();
		});

		function CheckCurrentViewPort() {
			if (CheckPartOfElementInViewport(skillOverallWrapC) && check && !thisObj.getSkillActiveStatus()) {
				thisObj.setSkillActiveStatus(true);

				googlCh.PieAnimation();

				skillOverallTitleC.style.transform = "translate(-50%, 0)";

				skillOverallChartC.style.animationPlayState = "running";

				skillOverallWrapC.style.opacity = "1";

				skillOverallTextWrapP.style.opacity = "1";

				check = false;
			}
		}
	}

	DisablePieAnimation() {
		this.getGoogleChart().PieUnableAnimation();
	}

	TransformTextArrayToShowView() {
		var getTextAr = this.getTextAr();

		var skillOverallTextWrapP = "skillOverallTextWrap" + this.getCounter() + "P";
		skillOverallTextWrapP = document.getElementById(skillOverallTextWrapP);

		skillOverallTextWrapP.innerHTML = `
				<p class="skillTextArP small_Title">
					<span id="skillTextArMain` + this.getCounter() + `Sp"></span>
					<span id="skillTextArSecondary` + this.getCounter() + `Sp"></span>
				</p>
				<ul id="skillTextAr` + this.getCounter() + `Ul" class="skillTextArUl"></ul>
			`;

		//GET ELEMENTS THAT JUST CREATED UP
		var skillTextArMainSp = "skillTextArMain" + this.getCounter() + "Sp";
		skillTextArMainSp = document.getElementById(skillTextArMainSp);
		this.setElemntsThatChangeFont(skillTextArMainSp);

		var skillTextArSecondarySp = "skillTextArSecondary" + this.getCounter() + "Sp";
		skillTextArSecondarySp = document.getElementById(skillTextArSecondarySp);

		var skillTextArUl = "skillTextAr" + this.getCounter() + "Ul";
		skillTextArUl = document.getElementById(skillTextArUl);

		for (var i = 0; i < getTextAr.length; i++) {
			if (i == 0) {
				skillTextArMainSp.innerHTML = getTextAr[i];
			}
			else if (i == 1) {
				skillTextArSecondarySp.innerHTML = " - " + getTextAr[i];
			}
			else {
				var newItemInUl = this.getCounter() + `` + i;
				newItemInUl = `<li id="textUl` + newItemInUl + `Li" class="textUlLi simple_Text">` + getTextAr[i] + `</li>`;

				skillTextArUl.innerHTML += newItemInUl;
			}
		};
	}

	RecolorAttrtsOfSkill(backgroundColor, fontColor) {
		//BACKGROUND CHANGES
		this.getElemntsThatChangeBackground().forEach(elmntBackgr => {
			elmntBackgr.style.background = backgroundColor;
		});

		//FONT CHANGES
		this.getElemntsThatChangeFont().forEach(elemntFont => {
			elemntFont.style.color = fontColor;
		});
	}
}