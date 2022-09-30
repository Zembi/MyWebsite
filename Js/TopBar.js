	//TOP BAR  CLASS
	class TopBar {
		constructor(id, status) {
			this.id = id;
			this.status = status;

			//FUNCTIONS AT THE START OF THE OBJECT
			this.Main();
		}

		getId() {
			return this.id;
		}

		getStatus() {
			return this.status;
		}

		//EVENT FUNCTIONS FROM HERE
		Main() {
			this.CreatePatronOfTopBar();
			this.TitlePartBarInfo();
		}

		CreatePatronOfTopBar() {
			document.getElementById("topBarC").innerHTML = '<div id="topTaskBarHalfC"></div><div id="midTaskBarHalfC"><div id="bottomTaskBarMidC"><div id="bottomTaskBarPageTitleC"><div id="bottomTaskBarPageTitleTextH"></div></div></div></div><div id="bottomTaskBarHalfC"><div id="lineTaskBarC"></div></div>';
		}

		TitlePartBarInfo() {
			var bottomTaskBarPageTitleTextH = document.getElementById("bottomTaskBarPageTitleTextH");
			
			bottomTaskBarPageTitleTextH.innerHTML = this.getStatus();
		}
	}