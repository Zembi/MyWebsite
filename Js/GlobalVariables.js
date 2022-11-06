	//CLASS THAT CARRIES ALL GLOBAL VARIABLES ABOUT ME PAGE
	class GlobalVariables {
		constructor() {
			//CONSOLE SHOW MESSAGES OR NOT
			this.console = false;

			//OVERALL PAGES
			this.rightMainScreen;

			//ABOUT ME PAGE
			this.eduGoogleChart;
			this.skillsGoogleChart = [];

			//FUNCTIONS AT THE START OF THE OBJECT
			this.Main();
		}

		//OVERALL PAGES
		getConsole() {
			return this.console;
		}
		setConsole(console) {
			this.console = console;
		}

		getRightMainScreen() {
			return this.rightMainScreen;
		}
		setRightMainScreen(rightMainScreen) {
			this.rightMainScreen = rightMainScreen;
		}
		////

		//ABOUT ME/EDUCATION PAGE SEMESTERS CHART 
		getEduGoogleChart() {
			return this.eduGoogleChart;
		}
		setEduGoogleChart(eduGoogleChart) {
			this.eduGoogleChart = eduGoogleChart;
		}
		////

		//ABOUT ME/SKILLS PAGE SEMESTERS CHART 
		getSkillsGoogleChart(counter) {
			return this.skillsGoogleChart[counter];
		}
		setSkillsGoogleChart(skillsGoogleChart, counter) {
			this.skillsGoogleChart[counter] = skillsGoogleChart;
		}
		////

		Main() {

		}
	}