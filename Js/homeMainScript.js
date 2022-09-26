

	//HOME SITE CLASS FOR THE STARTING ACTIONS OF HOME SCREEN WHEN IT IS LOADED
	class Main_HomeSite_Events {
		constructor() {

			//LEFTMENU CLASS OBJECT
			this.leftMenu = new LeftMenu("leftBodyTCC", "Home");
			this.leftMenu.Main();
		}

		Main() {

		}
	}


	var startWeb = new Main_HomeSite_Events();
	startWeb.Main();
