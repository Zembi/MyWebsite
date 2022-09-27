	
	//ABOUT ME SITE CLASS FOR THE STARTING ACTIONS OF ABOUT ME SCREEN WHEN IT IS LOADED
	class AboutMeScreen {
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
			this.leftMenu = new LeftMenu("leftBodyTCC", "AboutMe");
		}

		InitializeRightScreen() {
			var topRightC = document.getElementById("topRightC");
			var downRightC = document.getElementById("downRightC");

			//topRightC.innerHTML = "<div>";
		}
	}

	var startAboutMeWeb = new AboutMeScreen();