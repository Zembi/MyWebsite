
	//SESSION STORAGE WORKSPACE
	function SessionStorageEvents() {
		//GET SESSION STORAGE
		var leftMenuStatus = sessionStorage.getItem("leftMenuStatus");

		if(leftMenuStatus == 1) {
			document.getElementById("openMenuBtn").click();
		}
	}

	SessionStorageEvents();