	//CLASS THAT CARRIES ALL GLOBAL VARIABLES ABOUT ME PAGE
	class GlobalsAboutMe {
		constructor() {
			this.googleChart;

			//FUNCTIONS AT THE START OF THE OBJECT
			this.Main();
		}

		GetEduGoogleChart() {
			return this.googleChart;
		}

		SetEduGoogleChart(googleChart) {
			this.googleChart = googleChart;
		}

		Main() {

		}
	}