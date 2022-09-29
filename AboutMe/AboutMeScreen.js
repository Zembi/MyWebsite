	
	//ABOUT ME SITE CLASS FOR THE STARTING ACTIONS OF ABOUT ME SCREEN WHEN IT IS LOADED
	class AboutMeScreen {
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
			this.leftMenu = new LeftMenu("leftBodyTCC", "AboutMe");
		}

		InitializeRightTopScreen() {
			//TOP BAR CLASS OBJECT
			this.topBar = new TopBar("topBarC", "About me");
		}
	}

	var startAboutMeWeb = new AboutMeScreen();