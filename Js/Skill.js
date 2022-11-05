	
	//GOOGLE CHART CORE CLASS
	class Skill {
		constructor(googleChart, placeToBe, text, counter) {
			//MY OBJECT FOR GOOGLE CHARTS
			this.googleChart = googleChart;

			//ELEMENT WHERE CHART AND INFO ABOUT MY SKILLS WILL BE CREATED AND DISPLAYED
			this.placeToBe = placeToBe;

			this.text = text;

			this.counter = counter;

			this.Main();
		}

		getGoogleChart() {
			return this.googleChart;
		}

		getPlaceToBe() {
			return this.placeToBe;
		}

		getText() {
			return this.text;
		}

		getCounter() {
			return this.counter;
		}

		Main() {

		}

		PrototypePieOfHorizontalView(percentToReach) {
			this.getPlaceToBe().innerHTML = `
				<div class="skillOverallWrapC">
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
					
					<div class="skillOverallRightC">
						
					</div>
				</div>
			`;

			var unqiueId = "chartWrap" + this.getCounter() + "C";
			var getChartPlaceId = document.getElementById(unqiueId);

			this.getGoogleChart().setElmntOverall(getChartPlaceId);
			this.getGoogleChart().setPieAnimLvl(percentToReach);
			this.getGoogleChart().Main();

			//console.log(this.getGoogleChart());
		}
	}