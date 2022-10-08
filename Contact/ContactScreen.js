	
	//CONTACT SITE CLASS FOR THE STARTING ACTIONS OF CONTACT SCREEN WHEN IT IS LOADED
	class ContactScreen {
		constructor() {

			//FUNCTIONS AT THE START OF THE OBJECT
			this.Main();
		}

		//EVENT FUNCTIONS FROM HERE
		Main() {
			this.InitializeMainPageCore();
		}

		InitializeMainPageCore() {
			var mainPageCore = new MainPageCore("Contact");
		}
	}

	var startContactWeb = new ContactScreen();