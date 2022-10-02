
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
			var timeToType = 80;
			var table = new Array();
			var status = "be aware";

			//FIRST LINE IN TITLE HOME MENU VARIABLES
			var c1 = 0;
			var textToType1 = "Vasileios-Filippos Zembilas";
			var myProfileFirstLineInfoC = document.getElementById("myProfileFirstLineInfoC");
			var typeReturn1 = "stay";
			var replaceTexts1 = null;
			var table1 = new Array(timeToType, c1, textToType1, myProfileFirstLineInfoC, typeReturn1, replaceTexts1);
			table.push(table1);

			//FIRST LINE IN TITLE HOME MENU VARIABLES
			var c2 = 0;
			var textToType2 = "Hello human..";
			var myProfileSecondLineInfoC = document.getElementById("myProfileSecondLineInfoC");
			var typeReturn2 = "delete";
			var replaceTexts2 = new Array("..my guy is probably coding right now..", "..so he can't welcome you..", "..but I am here for that.", "So make sure that you feel like home..", "..and be free to explore.", "I forgot to say that he is..", "Full Stack Web Developer! ;)");
			var table2 = new Array(timeToType, c2, textToType2, myProfileSecondLineInfoC, typeReturn2, replaceTexts2);
			table.push(table2);

			TypeWriter(table, 0, status, 1000, 60);
		}
	}

	var startHomeWeb = new HomeScreen();