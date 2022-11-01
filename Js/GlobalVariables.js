	//CLASS THAT CARRIES ALL GLOBAL VARIABLES ABOUT ME PAGE
	class GlobalVariables {
		constructor() {
			//OVERALL PAGES
			this.rightMainScreen;

			//ABOUT ME PAGE
			this.googleChart;

			//FUNCTIONS AT THE START OF THE OBJECT
			this.Main();
		}

		//OVERALL PAGES
		getRightMainScreen() {
			return this.rightMainScreen;
		}
		setRightMainScreen(rightMainScreen) {
			this.rightMainScreen = rightMainScreen;
		}
		////

		//ABOUT ME PAGE
		getEduGoogleChart() {
			return this.googleChart;
		}
		setEduGoogleChart(googleChart) {
			this.googleChart = googleChart;
		}
		////

		Main() {

		}
	}