
function CheckIfPageThatIsAboutToLoadIsInCurrentStatus() {
	var check = sessionStorage.getItem("siteIsLoaded");
	
	//CHECK IF SITE IS ALREADY LOADED IN THE CURRENT SESSION
	if(check == null) {
		window.location.href = "../index.html";
	}
}

CheckIfPageThatIsAboutToLoadIsInCurrentStatus();