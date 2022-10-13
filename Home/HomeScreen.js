
	//HOME SITE CLASS FOR THE STARTING ACTIONS OF HOME SCREEN WHEN IT IS LOADED
	class HomeScreen {
		constructor() {

			//FUNCTIONS AT THE START OF THE OBJECT
			this.Main();
		}

		//EVENT FUNCTIONS FROM HERE
		Main() {
			this.InitializeMainPageCore();
			this.HomeUpTitleTypeWriter();
			this.HomeMainContentActions();
			//this.HomeMainContent();
		}

		//LOAD MAIN CORE THAT ALL PAGES HAVE
		InitializeMainPageCore() {
			var mainPageCore = new MainPageCore("Home");
		}

		//BOT TYPING ASYNC WELCOME TEXT AFTER HOME LOADS
		HomeUpTitleTypeWriter() {
			//GENERAL TITLE VARIABLES
			var timeToType = 0;
			var timeToWait = 0;
			var timeToDelete = 0;
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

		//ALL EVENTS AND FUNCTIONS AT HOME PAGE MAIN CONTENT CONTAINER
		HomeMainContentActions() {
			//INITIALIZE VARIABLES
			var homeChangeBackgroundBtn = document.getElementById("homeChangeBackgroundBtn");
			var mainHomeBackgroundC = document.getElementById("mainHomeBackgroundC");

			//CHANGE BACKGROUND OF HOME SCREEN FUNCTION
			homeChangeBackgroundBtn.name = "opened";

			homeChangeBackgroundBtn.addEventListener("click", function() {
				if(this.name == "opened") {
					mainHomeBackgroundC.style.background = "transparent";
					this.name = "closed";
				}
				else {
					mainHomeBackgroundC.style.background = "rgb(117, 42, 6, 0.7)";
					this.name = "opened";
				}
			});
		}

		HomeMainContent() {
			$(window).scroll(function() {
			    if ($('#homeDescriptionContentC').is(':in-viewport')) {
			        $('.sticky-info').hide();
			    } else {
			        $('.sticky-info').show();
			    }
			});
		}
	}

	var startHomeWeb = new HomeScreen();