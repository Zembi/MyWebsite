	
	//CONTACT SITE CLASS FOR THE STARTING ACTIONS OF CONTACT SCREEN WHEN IT IS LOADED
	class ContactScreen {
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
			this.leftMenu = new LeftMenu("leftBodyTCC", "Contact");
		}

		InitializeRightTopScreen() {
			//TOP BAR CLASS OBJECT
			this.topBar = new TopBar("topBarC", "Contact");
		}
	}

	var startContactWeb = new ContactScreen();