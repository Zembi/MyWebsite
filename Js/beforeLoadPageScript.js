
//CHECK USER PAGE STATUS BEFORE LOAD
function CheckIfPageThatIsAboutToLoadIsInCurrentStatus() {
	var check = sessionStorage.getItem("siteIsLoaded");
	
	//CHECK IF SITE IS ALREADY LOADED IN THE CURRENT SESSION
	if(check == null) {
		window.location.href = "../index.html";
	}
}

CheckIfPageThatIsAboutToLoadIsInCurrentStatus();
////

//PAGE BACKGROUND BUTTON STATUS LOAD
function InitializePageBackgroundStatus() {
	if(sessionStorage.getItem("pageBackgroundProfile") == null) {
		sessionStorage.setItem("pageBackgroundProfile", "prof1");
	}
}
	
InitializePageBackgroundStatus();
////

//GET PAGE WIDTH
function GetPageWidth() {
	var width =  Math.max(document.body.scrollWidth,
		document.documentElement.scrollWidth,
		document.body.offsetWidth,
		document.documentElement.offsetWidth,
		document.documentElement.clientWidth);

	return width;
}
////