	//MAIN PAGE CORE CLASS
	class MainPageCore {
		constructor(status) {
			this.status = status;

			//FUNCTIONS AT THE START OF THE OBJECT
			this.Main();
		}

		getStatus() {
			return this.status;
		}

		//EVENT FUNCTIONS FROM HERE
		Main() {
			this.InitializeLeftMenu();
			this.InitializeRightTopScreen();
			this.InitializeFooter();
			this.InitializeRightMainScreen()
		}

		InitializeLeftMenu() {
			//LEFT MENU CLASS OBJECT
			this.leftMenuObj = new LeftMenu(this.getStatus());
		}

		InitializeRightTopScreen() {
			//TOP BAR CLASS OBJECT
			this.topBarObj = new TopBar(this.getStatus());
		}

		InitializeRightMainScreen() {
			//RIGHT MAIN CLASS OBJECT
			this.topBarObj = new RightMain(this.getStatus());
		}

		InitializeFooter() {
			//FOOTER CLASS OBJECT
			this.footerObj = new Footer(this.getStatus());
		}
	}