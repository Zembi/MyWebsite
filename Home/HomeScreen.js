
	//HOME SITE CLASS FOR THE STARTING ACTIONS OF HOME SCREEN WHEN IT IS LOADED
	class HomeScreen {
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
			this.leftMenu = new LeftMenu("leftBodyTCC", "Home");
		}

		InitializeRightTopScreen() {
			//TOP BAR CLASS OBJECT
			this.topBar = new TopBar("topBarC", "Home");
		}
	}

	var startHomeWeb = new HomeScreen();