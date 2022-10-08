
	//RESUME SITE CLASS FOR THE STARTING ACTIONS OF RESUME SCREEN WHEN IT IS LOADED
	class ResumeScreen {
		constructor() {

			//FUNCTIONS AT THE START OF THE OBJECT
			this.Main();
		}

		//EVENT FUNCTIONS FROM HERE
		Main() {
			this.InitializeMainPageCore();
		}

		InitializeMainPageCore() {
			var mainPageCore = new MainPageCore("Resume");
		}
	}

	var startHomeWeb = new ResumeScreen();