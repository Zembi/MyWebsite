	//MAIN PAGE CORE CLASS
	class MainPageCore {
		constructor(status) {
			this.status = status;

			this.leftMenuObj;
			this.topBarObj;
			this.rightMainObj;
			this.footerObj;

			//FUNCTIONS AT THE START OF THE OBJECT
			this.Main();
		}

		getStatus() {
			return this.status;
		}

		getLeftMenuObj() {
			return this.leftMenuObj;
		}
		setLeftMenuObj(leftMenuObj) {
			this.leftMenuObj = leftMenuObj;
		}

		getTopBarObj() {
			return this.topBarObj;
		}
		setTopBarObj(topBarObj) {
			this.topBarObj = topBarObj;
		}

		getRightMainObj() {
			return this.rightMainObj;
		}
		setRightMainObj(rightMainObj) {
			this.rightMainObj = rightMainObj;
		}

		getFooterObj() {
			return this.footerObj;
		}
		setFooterObj(footerObj) {
			this.footerObj = footerObj;
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
			this.setLeftMenuObj(new LeftMenu(this.getStatus()));
		}

		InitializeRightTopScreen() {
			//TOP BAR CLASS OBJECT
			this.setTopBarObj(new TopBar(this.getStatus()));
		}

		InitializeRightMainScreen() {
			//RIGHT MAIN CLASS OBJECT
			this.setRightMainObj(new RightMain(this.getStatus()));
		}

		InitializeFooter() {
			//FOOTER CLASS OBJECT
			this.setFooterObj(new Footer(this.getStatus()));
		}
	}