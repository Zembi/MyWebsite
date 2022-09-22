
	//HOME SITE CLASS FOR THE STARTING ACTIONS OF HOME SCREEN WHEN IT IS LOADED
	class Main_HomeSite_Events {

		Main() {
			//this.HeightOfPage();
		}

		HeightOfPage() {
			function AutoResizeHeightOfPage() {
				//var mainBodyC = document.getElementById('mainBodyC');
				var mainScreenC = document.getElementById('mainScreenC');
				var taskbarC = document.getElementById('taskbarC');
				var heightOfTaskBar = 50;

				//mainBodyC.style.height = window.innerHeight +'px';
				mainScreenC.style.height = window.innerHeight - heightOfTaskBar +'px';
				taskbarC.style.height = heightOfTaskBar + "px";
			}
			window.onresize = AutoResizeHeightOfPage;
			AutoResizeHeightOfPage();
		}
	}

	var startWeb = new Main_HomeSite_Events();
	startWeb.Main();
