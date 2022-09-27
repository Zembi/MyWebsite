
	//HOME SITE CLASS FOR THE STARTING ACTIONS OF HOME SCREEN WHEN IT IS LOADED
	class HomeScreen {
		constructor() {

			//FUNCTIONS AT THE START OF THE OBJECT
			this.Main();
		}

		//EVENT FUNCTIONS FROM HERE
		Main() {
			this.InitializeLeftMenu();
			this.InitializeRightScreen();
		}

		InitializeLeftMenu() {
			//LEFTMENU CLASS OBJECT
			this.leftMenu = new LeftMenu("leftBodyTCC", "Home");
		}

		InitializeRightScreen() {
			var topRightC = document.getElementById("topRightC");
			var downRightC = document.getElementById("downRightC");

			//topRightC.innerHTML = "<div>";
		}
	}

	var startHomeWeb = new HomeScreen();
