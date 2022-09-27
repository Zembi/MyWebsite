	
	//CONTACT SITE CLASS FOR THE STARTING ACTIONS OF CONTACT SCREEN WHEN IT IS LOADED
	class ContactScreen {
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
			this.leftMenu = new LeftMenu("leftBodyTCC", "Contact");
		}

		InitializeRightScreen() {
			var topRightC = document.getElementById("topRightC");
			var downRightC = document.getElementById("downRightC");

			//topRightC.innerHTML = "<div>";
		}
	}

	var startContactWeb = new ContactScreen();