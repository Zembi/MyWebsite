	//CLASS THAT CARRIES ALL GLOBAL VARIABLES ABOUT ME PAGE
	class GlobalVariables {
		constructor() {
			//OVERALL PAGES

			//CONSOLE SHOW MESSAGES OR NOT
			this.console = false;

			//LOAD MORE FUNCTIONS, FOR EVENT SCROLL
			this.loadingMoreItems = false;

			//OBJECT OF CLASS RightMainScreen
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

		getLoadingMoreItems() {
			return this.loadingMoreItems;
		}
		setLoadingMoreItems(loadingMoreItems) {
			this.loadingMoreItems = loadingMoreItems;
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