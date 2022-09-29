
	//LOCAL SESSION WORKSPACE
	function LocalStorageEvents() {
		//GET LOCAL STORAGE
		var leftMenuStatus = localStorage.getItem("leftMenuStatus");

		if(leftMenuStatus == 1) {
			document.getElementById("openMenuBtn").click();
		}
	}

	LocalStorageEvents();