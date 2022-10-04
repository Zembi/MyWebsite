
	//HOME SITE CLASS FOR THE STARTING ACTIONS OF HOME SCREEN WHEN IT IS LOADED
	class HomeScreen {
		constructor() {

			//FUNCTIONS AT THE START OF THE OBJECT
			this.Main();
		}

		//EVENT FUNCTIONS FROM HERE
		Main() {
			this.InitializeLeftMenu();
			this.InitializeRightTopScreen()
			this.HomeUpTitleTypeWriter();
		}

		InitializeLeftMenu() {
			//LEFT MENU CLASS OBJECT
			this.leftMenu = new LeftMenu("leftBodyTCC", "Home");
		}

		InitializeRightTopScreen() {
			//TOP BAR CLASS OBJECT
			this.topBar = new TopBar("topBarC", "Home");
		}

		HomeUpTitleTypeWriter() {
			//GENERAL TITLE VARIABLES
			var timeToType = 50;
			var timeToWait = 800;
			var timeToDelete = 20;
			var mainTable = new Array();
			var status1 = "be aware";

			//FIRST LINE IN TITLE HOME MENU VARIABLES
			var c1 = 0;
			var textToType1 = "Vasileios-Filippos Zembilas";
			var myProfileFirstLineInfoC = document.getElementById("myProfileFirstLineInfoC");
			var typeReturn1 = "stay";
			var replaceTexts1 = null;
			var table1 = new Array(timeToType, c1, textToType1, myProfileFirstLineInfoC, typeReturn1, replaceTexts1);
			mainTable.push(table1);

			//FIRST LINE IN TITLE HOME MENU VARIABLES
			var c2 = 0;
			var textToType2 = "Hello human..";
			var myProfileSecondLineInfoC = document.getElementById("myProfileSecondLineInfoC");
			var typeReturn2 = "delete";
			var replaceTexts2 = new Array("..my guy is probably coding right now..", "..so make sure, that you feel like home..", "..and be free to explore.", "Welcome to the world of a..", "Full Stack Web Developer", "\\stop");
			var table2 = new Array(timeToType, c2, textToType2, myProfileSecondLineInfoC, typeReturn2, replaceTexts2);
			mainTable.push(table2);

			TypeWriter(mainTable, 0, status1, timeToWait, timeToDelete);

			//DISABLE BUTTON WHEN TYPING ANIMATION IS IN PROGRESS
			var myProfileImgBtn = document.getElementById("myProfileImgBtn");
			myProfileImgBtn.disabled = true;

			//ADD EVENTS TO HOME TITLE PAGE
			myProfileImgBtn.addEventListener("click", function() {
				myProfileImgBtn.disabled = true;
				document.getElementById("robotCommentC").style.opacity = "0";

				//WHEN USER CLICKS IT SHOWS AN EXTRA MESSAGE
				var renewTableText = "I knew that I would be useful here! So..";
				
				if(!mainTable[1][5].includes(renewTableText)) {
					mainTable[1][5].splice(1, 0, renewTableText);
					console.log(mainTable);
				}
				BackSpaceWriter(mainTable, 1, status1, timeToWait, timeToDelete);
			});
		}
	}

	var startHomeWeb = new HomeScreen();