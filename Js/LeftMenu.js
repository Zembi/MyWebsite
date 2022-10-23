	//LEFT MENU CLASS
	class LeftMenu {
		constructor(status) {
			this.status = status;

			//BUTTON CLASS OBJECT
			this.menuBtn = new Button("openMenuBtn", 0);

			//FUNCTIONS AT THE START OF THE OBJECT
			this.Main();
		}

		getStatus() {
			return this.status;
		}

		//EVENT FUNCTIONS FROM HERE
		Main() {
			this.CreatePatronOfTheLeftMenu();
			this.LeftScreenEventsHome();
		}

		CreatePatronOfTheLeftMenu() {
			document.getElementById("leftBodyTCC").innerHTML = '<div id="leftBodyWrapC"><div id="leftBackgroundC"><div class="backgroundMovingC"><ul class="squaresUL"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul></div></div><div id="upLeftC"><div id="openMenuBtnC"><button id="openMenuBtn"><img id="menuImg"></button></div></div><div id="downLeftC"><div id="downLeftWrapC"><div id="downMenuBtnLineC"><div id="downMenuBtnMovingInLineC"></div></div><div id="downMainMenuC"><div id="downMenuC"><div id="menuHideC"></div><div id="menuShowC"><div id="menuWrapShowC"><div id="menuCenterShowC"><div id="homeLeftMenuC" class="leftMenuBtnC"><a id="homeLeftMenuL" class="leftMenuBtn" href="../Home/home.html"><div class="leftMenuTextC">Home</div><img class="leftMenuImg"></a></div><div id="resumeLeftMenuC" class="leftMenuBtnC"><a id="resumeLeftMenuL" class="leftMenuBtn"  href="../Resume/resume.html"><div class="leftMenuTextC">Resume</div><img class="leftMenuImg"></a></div><div id="aboutMeLeftMenuC" class="leftMenuBtnC"><a id="aboutMeLeftMenuL" class="leftMenuBtn" href="../AboutMe/aboutMe.html"><div class="leftMenuTextC">About me</div><img class="leftMenuImg"></a></div><div id="contactLeftMenuC" class="leftMenuBtnC"><a id="contactLeftMenuL" class="leftMenuBtn" href="../Contact/contact.html"><div class="leftMenuTextC">Contact</div><img class="leftMenuImg"></a></div></div><div id="rightLineLeftMenuC"></div></div></div></div><div id="menuSplitHeightC"></div><div id="menuProfileInfoC"><div id="menuProfileInfoCC"><div id="facebookProfC" class="menuProfC"><a id="facebookProfL" class="menuProfL" title="Facebook" href="https://www.facebook.com/bvb.4ever1908/" target="_blank" rel="noreferrer noopener"><img id="facebookProfImg" class="menuProfImg"></a></div><div id="instagramProfC" class="menuProfC"><a id="instagramProfL" class="menuProfL" title="Instagram" href="https://www.instagram.com/zembi_b/" target="_blank" rel="noreferrer noopener"><img id="instagramProfImg" class="menuProfImg"></a></div><div id="twitterProfC" class="menuProfC"><a id="twitterProfL" class="menuProfL" title="Twitter" href="https://twitter.com/VFZembilas" target="_blank" rel="noreferrer noopener"><img id="twitterProfImg" class="menuProfImg"></a></div><div id="linkedInProfC" class="menuProfC"><a id="linkedInProfL" class="menuProfL" title="LinkedIn" href="https://www.linkedin.com/in/vasileios-filippos-zembilas-a08908189" target="_blank" rel="noreferrer noopener"><img id="linkedInProfImg" class="menuProfImg"></a></div><div id="githubProfC" class="menuProfC"><a id="githubProfL" class="menuProfL" title="GitHub" href="https://github.com/Zembi" target="_blank" rel="noreferrer noopener"><img id="githubProfImg" class="menuProfImg"></a></div></div></div></div></div></div>';
		}

		LeftScreenEventsHome() {
			//TRIGGERED CONTAINERS
			let menu = this.menuBtn;

			//MENU BUTTON HOVER ACTIONS
			menu.getButtonElmnt().addEventListener("mouseover", function() {
				if(menu.getStatus() == 0) {
					this.children[0].style.content = "url(../Assets/menu9.png)";
				}
				else {
					this.children[0].style.content = "url(../Assets/menu10.png)";
				}
			});
			menu.getButtonElmnt().addEventListener("mouseout", function() {
				if(menu.getStatus() == 0) {
					this.children[0].style.content = "url(../Assets/menu7.png)";
				}
				else {
					this.children[0].style.content = "url(../Assets/menu8.png)";
				}
			});

			//ACTION BUTTONS
			menu.getButtonElmnt().addEventListener("click", function() {
				if(menu.getStatus() == 0) {
					menu.setStatus(1);
					ChangeOpenCloseMenuWhenResize(menu.getStatus());

					this.children[0].style.content = "url(../Assets/menu8.png)";

					//SESSION STORAGE MENU STATUS
					sessionStorage.setItem("leftMenuStatus", 1);
				}
				else {
					menu.setStatus(0);
					ChangeOpenCloseMenuWhenResize(menu.getStatus());

					this.children[0].style.content = "url(../Assets/menu7.png)";

					//SESSION STORAGE MENU STATUS
					sessionStorage.setItem("leftMenuStatus", 0);
				}
			});

			//ON CLICK TO OPEN/CLOSE LEFT MENU CHECK CHANGES DEPENDS ON PAGE SIZE AND TAKE CARE OF RESIZE
			function ChangeOpenCloseMenuWhenResize(menuStatus) {
				var pointOfChange = 850;

				if(menuStatus) {
					OpenMenu(pointOfChange);
				}
				else {
					CloseMenu(pointOfChange);
				}
			}

			function OpenMenu(pointOfChange) {
				//INITIALIZE VARIABLES
				var leftBodyTCC = document.getElementById("leftBodyTCC");
				var openMenuBtnC = document.getElementById("openMenuBtnC");
				var downMenuBtnLineC = document.getElementById("downMenuBtnLineC");
				var downMenuBtnMovingInLineC = document.getElementById("downMenuBtnMovingInLineC");
				var menuHideC = document.getElementById("menuHideC");
				var menuShowC = document.getElementById("menuShowC");
				var rightLineLeftMenuC = document.getElementById("rightLineLeftMenuC");
				var menuProfileInfoCC = document.getElementById("menuProfileInfoCC");
				var movingElementsBackgroundMenu  = document.querySelector(".squaresUL").childNodes;
			
				//OPEN MENU GENERAL
				openMenuBtnC.style.background = "transparent";
				openMenuBtnC.style.transform = "translate(-50%, -50%)";

				downMenuBtnLineC.style.opacity = "1";
				downMenuBtnMovingInLineC.style.animationPlayState = "running";

				menuHideC.style.transform = "translate(100%, 0)";
				menuShowC.style.transform = "translate(0, 0)";
				rightLineLeftMenuC.style.opacity = "1";

				var allMenuItems = document.getElementsByClassName("leftMenuBtnC");
				allMenuItems = Array.from(allMenuItems);
				allMenuItems.forEach(menuItem => {
					menuItem.children[0].tabIndex = "0";

					if(GetPageWidth() > pointOfChange) {
						menuItem.children[0].children[0].style.fontSize = "18px";
						//IMG OF MENU BUTTON
						menuItem.children[0].children[1].style.width = "12px";
						menuItem.children[0].children[1].style.height = "12px";
						menuItem.children[0].children[1].style.right = "-12px";
					}
					else {
						if(GetPageWidth() > 400) {
							menuItem.children[0].children[0].style.fontSize = "26px";
						}
						else if(GetPageWidth() > 300) {
							menuItem.children[0].children[0].style.fontSize = "20px";
						}
						else if(GetPageWidth() > 200) {
							menuItem.children[0].children[0].style.fontSize = "18px";
						}
						else {
							menuItem.children[0].children[0].style.fontSize = "16px";
						}
						//IMG OF MENU BUTTON
						menuItem.children[0].children[1].style.width = "19px";
						menuItem.children[0].children[1].style.height = "19px";
						menuItem.children[0].children[1].style.right = "-24px";
					}
				});

				//SOCIAL INFO
				var allSocialItems = document.getElementsByClassName("menuProfC");
				allSocialItems = Array.from(allSocialItems);
				allSocialItems.forEach(socialItem => {
					socialItem.children[0].tabIndex = "0";
					socialItem.style.transform = "rotate(90deg)";
				});

				if(GetPageWidth() > pointOfChange) {
					//BIG OPEN MENU
					if(GetPageWidth() < 1200) {
						leftBodyTCC.style.width = "200px";
					}
					else {
						leftBodyTCC.style.width = "240px";
					}
					openMenuBtnC.style.top = "60%";

					//MOVING BACKGROUND LEFT MENU
					movingElementsBackgroundMenu.forEach(movingMenuItem => {
						movingMenuItem.style.animationPlayState = "running";
					});
				}
				else {
					//SMALL OPEN MENU
					leftBodyTCC.style.width = "100%";

					openMenuBtnC.style.top = "50%";

					//MOVING BACKGROUND LEFT MENU
					movingElementsBackgroundMenu.forEach(movingMenuItem => {
						movingMenuItem.style.animationPlayState = "running";
					});
				}
			
				//SOCIAL INFO
				menuProfileInfoCC.style.right = "50%";
				menuProfileInfoCC.style.bottom = "50%";
				menuProfileInfoCC.style.transform = "translate(50%, 50%) rotate(-90deg)";
			}

			function CloseMenu(pointOfChange) {
				//INITIALIZE VARIABLES
				var leftBodyTCC = document.getElementById("leftBodyTCC");
				var openMenuBtnC = document.getElementById("openMenuBtnC");
				var downMenuBtnLineC = document.getElementById("downMenuBtnLineC");
				var downMenuBtnMovingInLineC = document.getElementById("downMenuBtnMovingInLineC");
				var menuHideC = document.getElementById("menuHideC");
				var menuShowC = document.getElementById("menuShowC");
				var rightLineLeftMenuC = document.getElementById("rightLineLeftMenuC");
				var menuProfileInfoCC = document.getElementById("menuProfileInfoCC");
				var movingElementsBackgroundMenu  = document.querySelector(".squaresUL").childNodes;
				
				//CLOSE MENU GENERAL
				openMenuBtnC.style.background = "transparent";
				openMenuBtnC.style.top = "50%";

				downMenuBtnLineC.style.opacity = "0";
				downMenuBtnMovingInLineC.style.animationPlayState = "paused";

				menuHideC.style.transform = "translate(0, 0)";
				menuShowC.style.transform = "translate(-100%, 0)";
				rightLineLeftMenuC.style.opacity = "0";

				var allMenuItems = document.getElementsByClassName("leftMenuBtnC");
				allMenuItems = Array.from(allMenuItems);
				allMenuItems.forEach(menuItem => {
					menuItem.children[0].tabIndex = "-1";

					menuItem.children[0].children[0].style.fontSize = "18px";

					menuItem.children[0].children[1].style.width = "12px";
					menuItem.children[0].children[1].style.height = "12px";
					menuItem.children[0].children[1].style.right = "-12px";
				});

				//SOCIAL INFO
				var allSocialItems = document.getElementsByClassName("menuProfC");
				allSocialItems = Array.from(allSocialItems);
				allSocialItems.forEach(socialItem => {
					socialItem.children[0].tabIndex = "0";
					socialItem.style.transform = "rotate(0deg)";
				});

				if(GetPageWidth() > pointOfChange) {
					//BIG CLOSE MENU
					if(GetPageWidth() < 1200) {
						leftBodyTCC.style.width = "110px";
					}
					else {
						leftBodyTCC.style.width = "140px";
					}
					openMenuBtnC.style.transform = "translate(-50%, -50%)";

					//MOVING BACKGROUND LEFT MENU
					movingElementsBackgroundMenu.forEach(movingMenuItem => {
						movingMenuItem.style.animationPlayState = "running";
					});
				}
				else {
					//SMALL CLOSE MENU
					leftBodyTCC.style.width = "0";
					
					openMenuBtnC.style.background = "transparent";
					openMenuBtnC.style.transform = "translate(0, -50%)";

					//SOCIAL INFO
					allSocialItems.forEach(socialItem => {
						socialItem.children[0].tabIndex = "-1";
					});

					//MOVING BACKGROUND LEFT MENU
					movingElementsBackgroundMenu.forEach(movingMenuItem => {
						movingMenuItem.style.animationPlayState = "paused";
					});
				}

				//SOCIAL INFO
				menuProfileInfoCC.style.right = "0";
				menuProfileInfoCC.style.bottom = "50%";
				menuProfileInfoCC.style.transform = "translate(0, 50%) rotate(0deg)";
			}

			//ON RESIZE CHANGES
			function OnResizePageLeftMenuTriggers(menuStatus) {
				ChangeOpenCloseMenuWhenResize(menuStatus);
			}

			window.addEventListener("resize", function() {
				OnResizePageLeftMenuTriggers(menu.getStatus());
			});
			ChangeOpenCloseMenuWhenResize(menu.getStatus());
		}
	}