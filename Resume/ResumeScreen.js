
	//RESUME SITE CLASS FOR THE STARTING ACTIONS OF RESUME SCREEN WHEN IT IS LOADED
	class ResumeScreen {
		constructor() {

			//FUNCTIONS AT THE START OF THE OBJECT
			this.Main();
		}

		//EVENT FUNCTIONS FROM HERE
		Main() {
			this.InitializeLeftMenu();
			this.InitializeRightTopScreen();
		}

		InitializeLeftMenu() {
			//LEFT MENU CLASS OBJECT
			this.leftMenu = new LeftMenu("leftBodyTCC", "Resume");
		}

		InitializeRightTopScreen() {
			//TOP BAR CLASS OBJECT
			this.topBar = new TopBar("topBarC", "Resume");
		}
	}

	var startHomeWeb = new ResumeScreen();