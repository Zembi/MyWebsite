	
	//GOOGLE CHART CORE CLASS
	class Skill {
		constructor(googleChart, placeToBe, title, textAr, counter) {
			//MY OBJECT FOR GOOGLE CHARTS
			this.googleChart = googleChart;

			//ELEMENT WHERE CHART AND INFO ABOUT MY SKILLS WILL BE CREATED AND DISPLAYED
			this.placeToBe = placeToBe;

			this.title = title;

			//ARRAY THAT FIRST ELEMENT IS SEMI-TITLE AND THE OTHERS ARE LIST-ELEMENTS
			this.textAr = textAr;

			this.counter = counter;

			this.skillActiveStatus = false;

			this.Main();
		}

		getGoogleChart() {
			return this.googleChart;
		}

		getPlaceToBe() {
			return this.placeToBe;
		}

		getTitle() {
			return this.title;
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
			this.getGoogleChart().setElmntOverall(getChartPlaceId);

			this.getGoogleChart().setPieAnimLvl(percentToReach);
			this.getGoogleChart().Main();

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

			document.addEventListener("scroll", function() {
				if(CheckPartOfElementInViewport(skillOverallTextWrapP) && check && thisObj.getSkillActiveStatus()) {
					skillOverallTitleC.style.transform = "translate(-50%, 0)";

					skillOverallChartC.style.animationPlayState = "running";

					skillOverallWrapC.style.opacity = "1";

					skillOverallTextWrapP.style.opacity = "1";
					
					googlCh.PieAnimation();

					check = false;
				}
			});
		}

		DisablePieAnimation() {
			this.getGoogleChart().PieUnableAnimation();
		}

		TransformTextArrayToShowView() {
			var getTextAr = this.getTextAr();

			var skillOverallTextWrapP = "skillOverallTextWrap" + this.getCounter() + "P";
			skillOverallTextWrapP = document.getElementById(skillOverallTextWrapP);

			skillOverallTextWrapP.innerHTML = `
				<p id="skillTextAr` + this.getCounter() + `P" class="skillTextArP small_Title"></p>
				<ul id="skillTextAr` + this.getCounter() + `Ul" class="skillTextArUl"></ul>
			`;

			//GET ELEMENTS THAT JUST CREATED UP
			var skillTextArP = "skillTextAr" + this.getCounter() + "P";
			skillTextArP = document.getElementById(skillTextArP);

			var skillTextArUl = "skillTextAr" + this.getCounter() + "Ul";
			skillTextArUl = document.getElementById(skillTextArUl);

			for(var i = 0; i < getTextAr.length;i++) {
				if(i == 0) {
					skillTextArP.innerHTML = getTextAr[i];
				}
				else {
					var newItemInUl = this.getCounter() + `` + i; 
					newItemInUl = `<li id="textUl` + newItemInUl + `Li" class="textUlLi simple_Text">` + getTextAr[i] + `</li>`;

					skillTextArUl.innerHTML += newItemInUl;
				}
			};
		}
	}