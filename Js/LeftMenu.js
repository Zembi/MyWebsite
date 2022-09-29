	//LEFT MENU CLASS
	class LeftMenu {
		constructor(id, status) {
			this.id = id;
			this.status = status;

			//BUTTON CLASS OBJECT
			this.menuBtn = new Button("openMenuBtn", 0);

			//FUNCTIONS AT THE START OF THE OBJECT
			this.Main();
		}

		getId() {
			return this.id;
		}

		getStatus() {
			return this.status;
		}

		setStatus(newStatus) {
			this.status = newStatus;
		}

		//EVENT FUNCTIONS FROM HERE
		Main() {
			this.CreatePatronOfTheLeftMenu();
			this.LeftScreenEventsHome();
		}

		CreatePatronOfTheLeftMenu() {
			document.getElementById(this.getId()).innerHTML = '<div id="leftBodyC"><div id="leftBackgroundC"><div class="backgroundMovingC"><ul class="squaresUL"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul></div></div><div id="upLeftC"><div id="openMenuBtnC"><button id="openMenuBtn"><img id="menuImg"></button></div></div><div id="downLeftC"><div id="downMenuBtnLineC"><div id="downMenuBtnMovingInLineC"></div></div><div id="downMenuC"><div id="menuHideC"></div><div id="menuShowC"><div id="menuCenterShowC"><div id="homeLeftMenuC" class="leftMenuBtnC"><a id="homeLeftMenuL" class="leftMenuBtn" href="../Home/home.html"><div class="leftMenuTextC">Home</div><img class="leftMenuImg"></a></div><div id="resumeLeftMenuC" class="leftMenuBtnC"><a id="resumeLeftMenuL" class="leftMenuBtn"  href="../Resume/resume.html"><div class="leftMenuTextC">Resume</div><img class="leftMenuImg"></a></div><div id="aboutMeLeftMenuC" class="leftMenuBtnC"><a id="aboutMeLeftMenuL" class="leftMenuBtn" href="../AboutMe/aboutMe.html"><div class="leftMenuTextC">About me</div><img class="leftMenuImg"></a></div><div id="contactLeftMenuC" class="leftMenuBtnC"><a id="contactLeftMenuL" class="leftMenuBtn" href="../Contact/contact.html"><div class="leftMenuTextC">Contact</div><img class="leftMenuImg"></a></div></div><div id="rightLineLeftMenuC"></div></div></div><div id="menuProfileInfoC"><div id="menuProfileInfoCC"><div id="facebookProfC" class="menuProfC"><a id="facebookProfL" class="menuProfL" title="Facebook" href="https://ms-my.facebook.com/bvb.4ever1908/" target="_blank" rel="noreferrer noopener"><img id="facebookProfImg" class="menuProfImg"></a></div><div id="instagramProfC" class="menuProfC"><a id="instagramProfL" class="menuProfL" title="Instagram" href="https://www.instagram.com/zembi_b/" target="_blank" rel="noreferrer noopener"><img id="instagramProfImg" class="menuProfImg"></a></div><div id="linkedInProfC" class="menuProfC"><a id="linkedInProfL" class="menuProfL" title="LinkedIn" href="https://www.linkedin.com/in/vasileios-filippos-zembilas-a08908189" target="_blank" rel="noreferrer noopener"><img id="linkedInProfImg" class="menuProfImg"></a></div><div id="githubProfC" class="menuProfC"><a id="githubProfL" class="menuProfL" title="GitHub" href="https://github.com/Zembi" target="_blank" rel="noreferrer noopener"><img id="githubProfImg" class="menuProfImg"></a></div></div></div></div>';
		}

		LeftScreenEventsHome() {
			//TRIGGERED CONTAINERS
			var leftBodyTCC = document.getElementById(this.getId());
			var leftBodyC = document.getElementById("leftBodyC");
			var downMenuBtnLineC = document.getElementById("downMenuBtnLineC");
			var menuHideC = document.getElementById("menuHideC");
			var menuShowC = document.getElementById("menuShowC");
			var rightLineLeftMenuC = document.getElementById("rightLineLeftMenuC");
			var menuProfileInfoCC = document.getElementById("menuProfileInfoCC");

			//ACTION BUTTONS
			let menu = this.menuBtn;
			menu.getButtonElmnt().addEventListener("click", function() {
				if(menu.getStatus() == 0) {
					menu.setStatus(1);
					leftBodyTCC.style.width = "240px";
					downMenuBtnLineC.style.opacity = "1";
					downMenuBtnMovingInLineC.style.animationPlayState = "running";
					this.children[0].style.content = "url(../Assets/menu8.png)";

					menuHideC.style.transform = "translate(100%, 0)";
					menuShowC.style.transform = "translate(0, 0)";
					rightLineLeftMenuC.style.opacity = "1";

					menuProfileInfoCC.style.left = "-50%";
					menuProfileInfoCC.style.transform = "translate(50%, 0)";

					//SESSION STORAGE MENU STATUS
					sessionStorage.setItem("leftMenuStatus", 1);
				}
				else {
					menu.setStatus(0);
					leftBodyTCC.style.width = "140px";
					downMenuBtnLineC.style.opacity = "0";
					downMenuBtnMovingInLineC.style.animationPlayState = "paused";
					this.children[0].style.content = "url(../Assets/menu7.png)";
				
					menuHideC.style.transform = "translate(0, 0)";
					menuShowC.style.transform = "translate(-100%, 0)";
					rightLineLeftMenuC.style.opacity = "0";

					menuProfileInfoCC.style.left = "0";
					menuProfileInfoCC.style.transform = "translate(0, 0)";

					//SESSION STORAGE MENU STATUS
					sessionStorage.setItem("leftMenuStatus", 0);
				}
			});

			//MENU BUTTON HOVER ACTIONS
			menu.getButtonElmnt().addEventListener("mouseover", function() {
				if(menu.getStatus() == 0) {
					this.style.border = "2px solid rgb(0, 35, 84)";
					this.children[0].style.content = "url(../Assets/menu9.png)";
				}
				else {
					this.style.border = "2px solid rgb(0, 35, 84)";
					this.children[0].style.content = "url(../Assets/menu10.png)";
				}
			});
			menu.getButtonElmnt().addEventListener("mouseout", function() {
				if(menu.getStatus() == 0) {
					this.style.border = "2px solid rgb(117, 42, 6)";
					this.children[0].style.content = "url(../Assets/menu7.png)";
				}
				else {
					this.style.border = "2px solid rgb(117, 42, 6)";
					this.children[0].style.content = "url(../Assets/menu8.png)";
				}
			});
		}
	}