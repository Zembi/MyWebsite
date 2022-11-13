	
	//CONTACT SITE CLASS FOR THE STARTING ACTIONS OF CONTACT SCREEN WHEN IT IS LOADED
	class ContactScreen {
		constructor() {

			//FUNCTIONS AT THE START OF THE OBJECT
			this.Main();
		}

		//EVENT FUNCTIONS FROM HERE
		Main() {
			this.InitializeMainPageCore();
			this.MainMenuOfContactPage();
		}

		InitializeMainPageCore() {
			var mainPageCore = new MainPageCore("Contact");
		}

		MainMenuOfContactPage() {
			let contactUnderConstrC = document.getElementById("contactUnderConstrC");
			let msgObj = { 
				text: "CONTACT/INFO PAGE IS UNDER CONSTRUCTION!",
				fontClass: "big_Title"
			};
			let imgObj = {
				url: "../Assets/loading2.png",
				width: 50,
				height: 50
			};
			let multOfConstrImg = 3;

			UnderConstructionPage(contactUnderConstrC, msgObj, imgObj, multOfConstrImg);
		}
	}

	var startContactWeb = new ContactScreen();