	
	//ABOUT ME SITE CLASS FOR THE STARTING ACTIONS OF ABOUT ME SCREEN WHEN IT IS LOADED
	class AboutMeScreen {
		constructor() {
			this.mainPageCore;

			this.pageToBe = null;

			this.countEduCharts = 0;

			this.countSkillsCharts = 0;
			this.skillsChartsAr = [];

			//FUNCTIONS AT THE START OF THE OBJECT
			this.Main();
		}

		getPageToBe() {
			return this.pageToBe;
		}
		setPageToBe(pageToBe) {
			this.pageToBe = pageToBe;
		}

		getCountEduCharts() {
			return this.countEduCharts;
		}
		setCountEduCharts(countEduCharts) {
			this.countEduCharts = countEduCharts;
		}

		getSkillsChartsAr() {
			return this.skillsChartsAr;
		}
		setSkillsChartsAr(skillsChartsAr) {
			this.skillsChartsAr.push(skillsChartsAr);
		}

		getCountSkillsCharts() {
			this.countSkillsCharts = this.getSkillsChartsAr().length;
			return this.countSkillsCharts;
		}

		getMainPageCore() {
			return this.mainPageCore;
		}
		setMainPageCore(mainPageCore) {
			this.mainPageCore = mainPageCore;
		}

		//EVENT FUNCTIONS FROM HERE
		Main() {
			this.InitializeMainPageCore();
			this.MainMenuOfAboutMePage();
		}

		InitializeMainPageCore() {
			var mainPageCore = new MainPageCore("About me");
			this.setMainPageCore(mainPageCore);
		}

		MainMenuOfAboutMePage() {
			var thisObj = this;
			//CHECK IF 
			var firstTimeOpenContent = [true, true, true, true];
			//MAIN CONTAINERS OF CONTENT
			var aboutMeContainers = [];
			var aboutMeEducationC = document.getElementById("aboutMeEducationC");
			var aboutMeSkillsC = document.getElementById("aboutMeSkillsC");
			var aboutMeExperienceC = document.getElementById("aboutMeExperienceC");
			var aboutMeToolsC = document.getElementById("aboutMeToolsC");
			aboutMeContainers = [aboutMeEducationC, aboutMeSkillsC, aboutMeExperienceC, aboutMeToolsC];

			//BUTTONS OF TOP MENU
			var aboutMeBtns = [];
			var changeEduAboutMeBtn = document.getElementById("changeEduAboutMeBtn");
			var changeSkillsAboutMeBtn = document.getElementById("changeSkillsAboutMeBtn");
			var changeExpAboutMeBtn = document.getElementById("changeExpAboutMeBtn");
			var changeToolsAboutMeBtn = document.getElementById("changeToolsAboutMeBtn");
			aboutMeBtns = [changeEduAboutMeBtn, changeSkillsAboutMeBtn, changeExpAboutMeBtn, changeToolsAboutMeBtn];

			//SET STARTING PAGE EDUCATION
			this.MainContentChangeButton(aboutMeEducationC, changeEduAboutMeBtn, aboutMeContainers, aboutMeBtns, "EDUCATION", true);	
			//window.location.hash = "#education";
			this.InitializeAboutMeMenuEducationItems();
			firstTimeOpenContent[0] = false;

			//EDUCATION
			changeEduAboutMeBtn.addEventListener("click", function() {
				var status = thisObj.MainContentChangeButton(aboutMeEducationC, this, aboutMeContainers, aboutMeBtns, "EDUCATION", false);

				//window.location.hash = "#education";

				//IF THERE IS ACTUALLLY A LOAD OF ANOTHER SUB-PAGE ONCLICK
				if(status && firstTimeOpenContent[0]) {
					thisObj.InitializeAboutMeMenuEducationItems();
					//WHEN EDUCATION PAGE IS OPENING AGAIN RELOAD, SO IT CAN FIX THE SIZE
					globalVars.getEduGoogleChart().DrawNow(false);
	
					firstTimeOpenContent[0] = false;
				}


			});

			//SKILLS
			changeSkillsAboutMeBtn.addEventListener("click", function() {
				var status = thisObj.MainContentChangeButton(aboutMeSkillsC, this, aboutMeContainers, aboutMeBtns, "SKILLS", false);	

				//window.location.hash = "#skills";

				//IF THERE IS ACTUALLLY A LOAD OF ANOTHER SUB-PAGE ONCLICK
				if(status && firstTimeOpenContent[1]) {
					thisObj.InitializeAboutMeMenuSkillsItems();

					firstTimeOpenContent[1] = false;
				}
			});

			//EXPERIENCE
			changeExpAboutMeBtn.addEventListener("click", function() {
				var status = thisObj.MainContentChangeButton(aboutMeExperienceC, this, aboutMeContainers, aboutMeBtns, "EXPERIENCE", false);

				//window.location.hash = "#experience";

				//IF THERE IS ACTUALLLY A LOAD OF ANOTHER SUB-PAGE ONCLICK
				if(status && firstTimeOpenContent[2]) {
					thisObj.InitializeAboutMeMenuExperienceItems();

					firstTimeOpenContent[2] = false;
				}
			});

			//TOOLS
			changeToolsAboutMeBtn.addEventListener("click", function() {
				var status = thisObj.MainContentChangeButton(aboutMeToolsC, this, aboutMeContainers, aboutMeBtns, "TOOLS", false);

				//window.location.hash = "#tools";

				//IF THERE IS ACTUALLLY A LOAD OF ANOTHER SUB-PAGE ONCLICK
				if(status && firstTimeOpenContent[3]) {
					thisObj.InitializeAboutMeMenuToolsItems();

					firstTimeOpenContent[3] = false;
				}
			});
		}

		MainContentChangeButton(elmntToShow, btnActive, allElmnts, allBtns, title, firstCall) {
			if(this.getPageToBe() != title) {
				//MAKE SURE ALL INTERVALS ARE CLOSED
				ClearAllIntervals();
				//REFRESH THE STYLING OF MENU BUTTONS
				this.ClearMenuBttonsStatusStyling(allBtns);
				
				btnActive.children[1].style.opacity = "1";
				this.OpenedAboutMeContent(elmntToShow, allElmnts, firstCall, title);
				this.setPageToBe(title);


				return true;
			}
			else {
				return false;
			}
		}

		ClearMenuBttonsStatusStyling(allBtns) {
			allBtns.forEach(btn => {
				btn.children[1].style.opacity = "0";
			});
		}

		OpenedAboutMeContent(elementToShow, elementsToHide, firstTimeCall, subPageTitleName) {
			var titleEducationH = document.getElementById("titleEducationH");
			titleEducationH.innerHTML = subPageTitleName;

			elementsToHide.forEach(elmnt => {
				elmnt.style.display = "none";
				elmnt.style.opacity = "0";
				elmnt.style.transform = "translateX(-100%) skew(-90deg)";
			});

			elementToShow.style.display = "block";
			elementToShow.style.opacity = "1";
			elementToShow.style.transform = "translateX(0) skew(0)";

			if(firstTimeCall) {
				document.documentElement.style.setProperty("--animationEnter", "1.5s");
				document.documentElement.style.setProperty("--animationWaitToEnter", "0.6s");
				document.documentElement.style.setProperty("--step2", "0.2s");


				document.documentElement.style.setProperty("--animationShow", "2s");
				document.documentElement.style.setProperty("--animationWaitToShow", "1.2s");
				document.documentElement.style.setProperty("--step3", "1s");

				document.documentElement.style.setProperty("--animationShowLine", "1s");
				document.documentElement.style.setProperty("--animationDelayShowLine", "2s");
			}
			else {
				document.documentElement.style.setProperty("--animationEnter", "0.3s");
				document.documentElement.style.setProperty("--animationWaitToEnter", "0.1s");
				document.documentElement.style.setProperty("--step2", "0.1s");

				document.documentElement.style.setProperty("--animationShow", "1s");
				document.documentElement.style.setProperty("--animationWaitToShow", "0s");
				document.documentElement.style.setProperty("--step3", "0s");

				document.documentElement.style.setProperty("--animationShowLine", "1s");
				document.documentElement.style.setProperty("--animationDelayShowLine", "0.4s");
				
				if(elementToShow.id == "aboutMeEducationC") {

				}
				else if(elementToShow.id == "aboutMeSkillsC") {
					//INSTEAD OF SETTING EACH ONE ThE ELEMENTS TO ANIMATE, WE LET ONLY ON SCROLL FUNCTION
					//DO THE ANIMATION AND WE JUST UPDATE A MAIN VALUE OF SKILL CLASS, THAT IS BEING CHECKED
					//EVERY TIME USER SCROLLS, TO SEE IF AN ELEMENT IS ENTIRE IN A VIEWPORT
					this.getSkillsChartsAr().forEach(skill => {
						if(skill.getSkillActiveStatus()) {
							skill.DisablePieAnimation();
						}
					});
				}
			}
		}

		/*EDUCATION PART*/
		InitializeAboutMeMenuEducationItems() {
			this.LoadGoogleCharts();
			this.InitializeTranscriptOfUniCourses();
		}

		LoadGoogleCharts() {
			var data = [
				["Element", "Winter", "Spring", "WinterLine", "SpringLine"],
				["1", 7.143, 7, 7.143, 7],
				["2", 7.167, 6.5, 7.167, 6.5],
				["3", 7.667, 7.167, 7.667, 7.167],
				["4", 9, 8.6, 9, 8.6],
			];

			//LOOK HTML FILE, ELEMENT WITH ID: #chartTitleH FOR CHART TITLE
			var options = {
				title: "",
				titleTextStyle: {
					color: "white",
					textAlign: "center"
				},
				titlePosition: "none",
				axisTitlesPosition: "out",
				width: "100%",
				height: "100%",
				backgroundColor: "transparent",
				pointSize: 4,
				legend: {
					position: "bottom",
					textStyle: {
						color: "white",
					}
				},
				vAxis: {
					minValue: 5,
					maxValue: 10,
					title: "GPA",
					titleTextStyle: {
						color: "white"
					},
					textStyle: {
						color: "white"
					},
					gridlines: {
						color: "white"
					},
					minorGridlines: {
						color: "darkgrey"
					}
				},
				hAxis: {
					title: "Year",
					titleTextStyle: {
						color: "white"
					},
					textStyle: {
						color: "white"
					},
					gridlines: {
						color: "white"
					}
				},
				seriesType: "bars",
				series: {
					0: {
						color: "rgb(0, 4, 40)",
						dataOpacity: "0.6"
					},
					1: {
						color: "rgb(143, 56, 14)",
						dataOpacity: "0.6"
					},
					2: {
						type: "line",
						color: "rgb(0, 4, 40)"
					},
					3: {
						type: "line",
						color: "rgb(143, 56, 14)"
					}
				},
				animation: {
					startup: null,
					duration: null,
					easing: "out"
				}
			};

			var chartWrapC = document.getElementById("chartWrapC");
			var triggerElemnt = document.getElementById("aboutMeEducationC");
			var buttonMenu = document.getElementById("openMenuBtn");
			var eduGC = new GoogleChart(
				"Combo", data, options, chartWrapC,
				4500, 500, triggerElemnt, buttonMenu, 850
			);
			globalVars.setEduGoogleChart(eduGC);
			//RIGHT MAIN AboutMeEduChartChanges FUNCTION
			this.getMainPageCore().getRightMainObj().setEduChartValue(eduGC.getStatus());
			this.getMainPageCore().getRightMainObj().AboutMeEduChartChanges();
		}

		InitializeTranscriptOfUniCourses() {
			var semestersUpBtn = document.getElementById("semestersUpBtn");
			var semestersTitleC = document.getElementById("semestersTitleC");
			var semestersDownBtn = document.getElementById("semestersDownBtn");
			var semestersContentC = document.getElementById("semestersContentC");
			var no1 = ["A' Semester", Sem1];
			var no2 = ["B' Semester", Sem2];
			var no3 = ["C' Semester", Sem3];
			var no4 = ["D' Semester", Sem4];
			var no5 = ["E' Semester", Sem5];
			var no6 = ["F' Semester", Sem6];
			var no7 = ["G' Semester", Sem7];
			var no8 = ["H' Semester", Sem8];
			var items = [no1, no2, no3, no4, no5, no6, no7, no8];
			
			function Sem1() {
				var course1 = ["ACADEMIC SKILLS IN ENGLISH", 5];
				var course2 = ["ALGORITHMS WITH C", 7];
				var course3 = ["PROCEDURAL PROGRAMMING", 10];
				var course4 = ["INTRODUCTION TO ECONOMIC SCIENCE", 9];
				var course5 = ["INTRODUCTION TO INFORMATION TECHNOLOGY", 6];
				var course6 = ["APPLIED MATHEMATICS I", 8];
				var course7 = ["INFORMATION SYSTEMS FOR ADMINISTRATION", 5];
				var courses = [course1, course2, course3, course4, course5, course6, course7];

				CreateContentOfSemester(courses, 0);
			}

			function Sem2() {
				var course1 = ["DISCRETE MATHEMATICS", 6];
				var course2 = ["DATA STRUCTURES", 6];
				var course3 = ["INTRODUCTION TO ALGORITHM ANALYSIS", 8];
				var course4 = ["APPLIED MATHEMATICS ", 7];
				var course5 = ["STATISTICS I", 6];
				var course6 = ["FINANCIAL ACCOUNTING", 9];
				var course7 = ["NONE", null];
				var courses = [course1, course2, course3, course4, course5, course6, course7];

				CreateContentOfSemester(courses, 1);
			}

			function Sem3() {
				var course1 = ["OBJECT-ORIENTED PROGRAMMING", 10];
				var course2 = ["COMPUTER ARCHITECTURE", 5];
				var course3 = ["DATABASES I", 7];
				var course4 = ["STATISTICS II ", 8];
				var course5 = ["FINANCIAL", 7];
				var course6 = ["DIGITAL ECONOMICS", 6];
				var course7 = ["NONE", null];
				var courses = [course1, course2, course3, course4, course5, course6, course7];
				CreateContentOfSemester(courses, 0);

				CreateContentOfSemester(courses, 2);
			}

			function Sem4() {
				var course1 = ["DATABASES II", 8];
				var course2 = ["LINEAR AND NETWORK PROGRAMMING", 7];
				var course3 = ["HUMAN-COMPUTER INTERACTION AND GRAPHICS", 8];
				var course4 = ["COMPUTER NETWORKS", 5];
				var course5 = ["OPERATING SYSTEMS", 6];
				var course6 = ["SOFTWARE TECHNOLOGY", 5];
				var course7 = ["NONE", null];
				var courses = [course1, course2, course3, course4, course5, course6, course7];

				CreateContentOfSemester(courses, 3);
			}

			function Sem5() {
				var course1 = ["COMPUTERIZATION OF THE ACCOUNTING DEPARTMENT", 10];
				var course2 = ["ECONOMETRICS I", 7];
				var course3 = ["COMMUNICATION SYSTEMS", 6];
				var course4 = ["E-COMMERCE TECHNOLOGY", 8];
				var course5 = ["MULTIMEDIA TECHNOLOGIES AND COMMUNICATIONS", 8];
				var course6 = ["DIGITAL MARKETING", 7];
				var course7 = ["NONE", null];
				var courses = [course1, course2, course3, course4, course5, course6, course7];

				CreateContentOfSemester(courses, 4);
			}

			function Sem6() {
				var course1 = ["SECURITY OF INFORMATION AND SYSTEMS", 8];
				var course2 = ["INFORMATION TECHNOLOGY LAW", 9];
				var course3 = ["OPERATIONAL RESEARCH", 8];
				var course4 = ["ECONOMETRICS II", 5];
				var course5 = ["PARALLEL AND DISTRIBUTED PROGRAMMING", 5];
				var course6 = ["ARTIFICIAL INTELLIGENCE", 8];
				var course7 = ["NONE", null];
				var courses = [course1, course2, course3, course4, course5, course6, course7];

				CreateContentOfSemester(courses, 5);
			}

			function Sem7() {
				var course1 = ["EDUCATIONAL PSYCHOLOGY", 10];
				var course2 = ["MONEY MARKET - CAPITAL MARKETS", 10];
				var course3 = ["INTERNET LAW", 8];
				var course4 = ["SPECIAL ACCOUNTING ISSUES", 9];
				var course5 = ["BUSINESS INNOVATION AND PRODUCTIVITY", 9];
				var course6 = ["ETHICS AND GOVERNANCE OF ARTIFICIAL INTELLIGENCE", 8];
				var course7 = ["TECHNICAL ANALYSIS SYSTEMS", 9];
				var courses = [course1, course2, course3, course4, course5, course6, course7];

				CreateContentOfSemester(courses, 6);
			}

			function Sem8() {
				var course1 = ["INTRODUCTION TO PEDAGOGY", 7];
				var course2 = ["ANALYTICAL ACCOUNTING (COSTING)", 10];
				var course3 = ["DIDACTICS OF INFORMATICS", 6];
				var course4 = ["PRODUCTION AND OPERATIONS MANAGEMENT", 10];
				var course5 = ["TAXATION OF NATURAL AND LEGAL PERSONS", 10];
				var course6 = ["NONE", null];
				var course7 = ["NONE", null];
				var courses = [course1, course2, course3, course4, course5, course6, course7];

				CreateContentOfSemester(courses, 7);
			}

			CreateMenuForSemesters();

			function CreateMenuForSemesters() {
				var semestersTitleC = document.getElementById("semestersTitleC");
				var currheighOfElmnt = semestersTitleC.offsetHeight - 4;

				CreateVerticalOrHorizontalMenu(items, semestersTitleC, 0, semestersUpBtn, semestersDownBtn);
			}

			function CreateContentOfSemester(courses, counter) {
				var average = 0;
				var courseCount = 0;
				var c = 0;
				//CLEAR MAIN CONTAINER semestersContentC
				semestersContentC.innerHTML = "";

				//SEMESTER'S TITLE AND COURSES CONTAINER
				var titleFirstPart = items[counter][0].substring(0, items[counter][0].indexOf("'") + 1);
				var titleSecondPart = "Semester";
				titleSecondPart = titleSecondPart.toUpperCase();

				semestersContentC.innerHTML = '<div class="semesterTitleC"><h2 class="semesterTitleH small_Title"><span class="highlight_Title">' + titleFirstPart + ' </span>' + titleSecondPart + '</h2><div class="semesterTitleAverageC"><p class="semesterTitleAverageP small_Text"><span class="semesterTitleAverageTextSp"></span><span class="semesterTitleAverageSp medium_Highlight_Text"></span></p></div></div><div class="semesterMainContentC"></div>';
				var semesterMainContentC = document.getElementsByClassName("semesterMainContentC")[0];
				
				courses.forEach(course => {
					var currSemesterCourseWrapC = document.createElement("div");
					currSemesterCourseWrapC.className = "currSemesterCourseWrapC";
					
					if(course[1] != null) {
						var currSemesterCourseGradeC = document.createElement("div");
						currSemesterCourseGradeC.className = "currSemesterCourseGradeC";
						var currSemesterCourseGradeP = document.createElement("p");
						currSemesterCourseGradeP.className = "currSemesterCourseGradeP simple_Text";
						currSemesterCourseGradeP.innerHTML = course[1];

						currSemesterCourseGradeC.appendChild(currSemesterCourseGradeP);
						currSemesterCourseWrapC.appendChild(currSemesterCourseGradeC);

						var currSemesterCourseC = document.createElement("div");
						currSemesterCourseC.className = "currSemesterCourseC";
						var currSemesterCourseP = document.createElement("p");
						currSemesterCourseP.className = "currSemesterCourseP small_Text";
						currSemesterCourseP.innerHTML = course[0];

						currSemesterCourseC.appendChild(currSemesterCourseP);
						currSemesterCourseWrapC.appendChild(currSemesterCourseC);
						semesterMainContentC.appendChild(currSemesterCourseWrapC);

						if((courseCount % 2) == 0) {
							currSemesterCourseWrapC.style.borderLeftColor = "transparent";
							currSemesterCourseWrapC.style.borderRightWidth = "4px";
						}
						else {
							currSemesterCourseWrapC.style.borderLeftWidth = "4px";
							currSemesterCourseWrapC.style.borderRightColor = "transparent";
						}

						average += course[1];
						courseCount++;
					}
					else {
						//IT CAN NOT BE THE FIRST ELEMENT THOUGH
						//HOW IT WORKS: GET PREVIOUS ELEMENTS HEIGHT AND SET IT TO CURRENT ELEMENT
						var previousSemesterCourseWrapC = document.getElementsByClassName("currSemesterCourseWrapC")[c - 1];

						semesterMainContentC.appendChild(currSemesterCourseWrapC);

						//DELETE ALL STYLES FROM THIS ELEMENT
						currSemesterCourseWrapC.style.border = "none";
						currSemesterCourseWrapC.style.padding = "0";

						//GIVE JUST HEIGHT OF PREVIOUS ELEMENT
						currSemesterCourseWrapC.style.height = previousSemesterCourseWrapC.getBoundingClientRect().height + "px";
					}

					c++;
				});

				var semesterTitleAverageTextSp = document.getElementsByClassName("semesterTitleAverageTextSp")[0];
				semesterTitleAverageTextSp.innerHTML = "Average Grade: ";

				var semesterTitleAverageSp = document.getElementsByClassName("semesterTitleAverageSp")[0];
				average = average / courseCount;
				//ROUND TO 3 DECIMALS
				average = average.toFixed(2);
				semesterTitleAverageSp.innerHTML = average;
			}
		}
		////

		/*SKILLS PART*/
		InitializeAboutMeMenuSkillsItems() {
			this.LoadSkills();
		}
		
		LoadSkills() {
			var firstTime = getComputedStyle(document.documentElement).getPropertyValue("--skillsChartSendInView");
			//IF IN CSS, --skillsChartSendInView VAR IS WITH MS
			firstTime = firstTime.substring(0, firstTime.length - 2);
			firstTime = parseInt(firstTime);

			//OR CUSTOM FIRST TIME
			firstTime = 560;

			var afterFirstTIme = 500;
			var turningScreenPoint = 850;

			this.HtmlPrepareSkillView(90, "Html", "Pie", firstTime, afterFirstTIme, turningScreenPoint);
			this.CssPrepareSkillView(80, "Css", "Pie", firstTime, afterFirstTIme, turningScreenPoint);
			this.JsPrepareSkillView(50, "Js", "Pie", firstTime, afterFirstTIme, turningScreenPoint);
			this.SqlPrepareSkillView(70, "Sql", "Pie", firstTime, afterFirstTIme, turningScreenPoint);
			this.PhpPrepareSkillView(15, "Php", "Pie", firstTime, afterFirstTIme, turningScreenPoint);
			this.JavaPrepareSkillView(50, "Java", "Pie", firstTime, afterFirstTIme, turningScreenPoint);
			this.CPrepareSkillView(35, "C", "Pie", firstTime, afterFirstTIme, turningScreenPoint);
			
			this.StyleSkillCharts();
		}

		HtmlPrepareSkillView(animationPercent, skillsTitle, chartType, firstTime, afterFirstTIme, turningScreenPoint) {
			var dtH = "Knoweledge of " + skillsTitle;
			var data = [
				["Task", "Percent"],
				[dtH, 0],
				["Still to learn", 1]
			];

			var options = {
				title: "",
				is3D: "true",
				width: "100%",
				height: "100%",
				legend: {
					alignment: "start",
					position: "none"
				},
				pieStartAngle: 0,
				backgroundColor: "transparent",
				colors: ["", ""],
				slices: {
					0: {
						textStyle: {
							color: ""
						}
					},
					1: {
						textStyle: {
							color: ""
						}
					}
				}
			};

			var skillsPlaceToBe = document.getElementById("htmlWrapC");
			var skillsText = [
				"Html",
				"The beginning is half of everything",
				"first introduction through W3shcools",
				"simple and easy to learn",
				"main core of any website"
			];

			this.SkillViewPrototype(chartType, data, options, firstTime, afterFirstTIme, turningScreenPoint, skillsPlaceToBe, skillsTitle, skillsText, animationPercent);
		}

		CssPrepareSkillView(animationPercent, skillsTitle, chartType, firstTime, afterFirstTIme, turningScreenPoint) {
			var dtH = "Knoweledge of " + skillsTitle;
			var data = [
				["Task", "Percent"],
				[dtH, 0],
				["Still to learn", 1]
			];

			var options = {
				title: "",
				is3D: "true",
				width: "100%",
				height: "100%",
				legend: {
					alignment: "start",
					position: "none"
				},
				pieStartAngle: 0,
				backgroundColor: "transparent",
				colors: ["", ""],
				slices: {
					0: {
						textStyle: {
							color: ""
						}
					},
					1: {
						textStyle: {
							color: ""
						}
					}
				}
			};

			var skillsPlaceToBe = document.getElementById("cssWrapC");
			var skillsText = [
				"Css",
				"An aesthetic side",
				"first introduction through W3shcools",
				"at first couldn't recognize the potentials",
				"the artistic touch, on the canvas of web"
			];

			this.SkillViewPrototype(chartType, data, options, firstTime, afterFirstTIme, turningScreenPoint, skillsPlaceToBe, skillsTitle, skillsText, animationPercent);
		}

		JsPrepareSkillView(animationPercent, skillsTitle, chartType, firstTime, afterFirstTIme, turningScreenPoint) {
			var dtH = "Knoweledge of " + skillsTitle;
			var data = [
				["Task", "Percent"],
				[dtH, 0],
				["Still to learn", 1]
			];

			var options = {
				title: "",
				is3D: "true",
				width: "100%",
				height: "100%",
				legend: {
					alignment: "start",
					position: "none"
				},
				pieStartAngle: 0,
				backgroundColor: "transparent",
				colors: ["", ""],
				slices: {
					0: {
						textStyle: {
							color: ""
						}
					},
					1: {
						textStyle: {
							color: ""
						}
					}
				}
			};

			var skillsPlaceToBe = document.getElementById("jsWrapC");
			var skillsText = [
				"Js",
				"The Frog Prince",
				"first introduction through W3shcools",
				"after java in university, it was easier than expected",
				"master client-side, then server-side",
				"an unsung hero in web"
			];

			this.SkillViewPrototype(chartType, data, options, firstTime, afterFirstTIme, turningScreenPoint, skillsPlaceToBe, skillsTitle, skillsText, animationPercent);
		}

		SqlPrepareSkillView(animationPercent, skillsTitle, chartType, firstTime, afterFirstTIme, turningScreenPoint) {
			var dtH = "Knoweledge of " + skillsTitle;
			var data = [
				["Task", "Percent"],
				[dtH, 0],
				["Still to learn", 1]
			];

			var options = {
				title: "",
				is3D: "true",
				width: "100%",
				height: "100%",
				legend: {
					alignment: "start",
					position: "none"
				},
				pieStartAngle: 0,
				backgroundColor: "transparent",
				colors: ["", ""],
				slices: {
					0: {
						textStyle: {
							color: ""
						}
					},
					1: {
						textStyle: {
							color: ""
						}
					}
				}
			};

			var skillsPlaceToBe = document.getElementById("sqlWrapC");
			var skillsText = [
				"Sql",
				"Banks of data",
				"first introduction through university",
				"easy to use",
				"studied database structure, as well",
			];

			this.SkillViewPrototype(chartType, data, options, firstTime, afterFirstTIme, turningScreenPoint, skillsPlaceToBe, skillsTitle, skillsText, animationPercent);
		}

		PhpPrepareSkillView(animationPercent, skillsTitle, chartType, firstTime, afterFirstTIme, turningScreenPoint) {
			var dtH = "Knoweledge of " + skillsTitle;
			var data = [
				["Task", "Percent"],
				[dtH, 0],
				["Still to learn", 1]
			];

			var options = {
				title: "",
				is3D: "true",
				width: "100%",
				height: "100%",
				legend: {
					alignment: "start",
					position: "none"
				},
				pieStartAngle: 0,
				backgroundColor: "transparent",
				colors: ["", ""],
				slices: {
					0: {
						textStyle: {
							color: ""
						}
					},
					1: {
						textStyle: {
							color: ""
						}
					}
				}
			};

			var skillsPlaceToBe = document.getElementById("phpWrapC");
			var skillsText = [
				"Php",
				"Timeless worker",
				"first introduction through W3shcools",
				"unique and complicated, especially for a self-taught",
				"only use for database connections, till now",
				"back-end seems like a dark place"
			];

			this.SkillViewPrototype(chartType, data, options, firstTime, afterFirstTIme, turningScreenPoint, skillsPlaceToBe, skillsTitle, skillsText, animationPercent);
		}

		JavaPrepareSkillView(animationPercent, skillsTitle, chartType, firstTime, afterFirstTIme, turningScreenPoint) {
			var dtH = "Knoweledge of " + skillsTitle;
			var data = [
				["Task", "Percent"],
				[dtH, 0],
				["Still to learn", 1]
			];

			var options = {
				title: "",
				is3D: "true",
				width: "100%",
				height: "100%",
				legend: {
					alignment: "start",
					position: "none"
				},
				pieStartAngle: 0,
				backgroundColor: "transparent",
				colors: ["", ""],
				slices: {
					0: {
						textStyle: {
							color: ""
						}
					},
					1: {
						textStyle: {
							color: ""
						}
					}
				}
			};

			var skillsPlaceToBe = document.getElementById("javaWrapC");
			var skillsText = [
				"Java",
				"Things are serious",
				"first introduction through university",
				"object-oriention is a god-given tool",
				"implement object-oriention wherever its possible",
				"knowledge is never enough"
			];

			this.SkillViewPrototype(chartType, data, options, firstTime, afterFirstTIme, turningScreenPoint, skillsPlaceToBe, skillsTitle, skillsText, animationPercent);
		}

		CPrepareSkillView(animationPercent, skillsTitle, chartType, firstTime, afterFirstTIme, turningScreenPoint) {
			var dtH = "Knoweledge of " + skillsTitle;
			var data = [
				["Task", "Percent"],
				[dtH, 0],
				["Still to learn", 1]
			];

			var options = {
				title: "",
				is3D: "true",
				width: "100%",
				height: "100%",
				legend: {
					alignment: "start",
					position: "none"
				},
				pieStartAngle: 0,
				backgroundColor: "transparent",
				colors: ["", ""],
				slices: {
					0: {
						textStyle: {
							color: ""
						}
					},
					1: {
						textStyle: {
							color: ""
						}
					}
				}
			};

			var skillsPlaceToBe = document.getElementById("cWrapC");
			var skillsText = [
				"C",
				"Great introductory language",
				"first introduction through university",
				"first interaction to a real programming language",
				"really complicated, cause of indexes(unlike Java)"
			];

			this.SkillViewPrototype(chartType, data, options, firstTime, afterFirstTIme, turningScreenPoint, skillsPlaceToBe, skillsTitle, skillsText, animationPercent);
		}

		//PROTOTYPE OF CREATING NEW SKILL
		SkillViewPrototype(chartType, data, options, firstTime, afterFirstTIme, turningScreenPoint, skillsPlaceToBe, skillsTitle, skillsText, animationPercent) {
			var c = this.getCountSkillsCharts();

			var buttonMenu = document.getElementById("openMenuBtn");

			var skillGCItems = [
				chartType, data, options, null, firstTime, afterFirstTIme,
				skillsPlaceToBe, buttonMenu, turningScreenPoint
			];

			var skill = new Skill(skillGCItems, skillsPlaceToBe, skillsTitle, skillsText, c);
			skill.PrototypePieOfHorizontalView(animationPercent);

			globalVars.setSkill(skill, c);
			//RIGHT MAIN AboutMeSkillChartChanges FUNCTION
			this.getMainPageCore().getRightMainObj().setSkillsChartValue(skill.getGoogleChart().getStatus(), c);

			this.setSkillsChartsAr(skill);
		}

		StyleSkillCharts() {
			for(var i = 0; i < this.getCountSkillsCharts(); i++) {
				this.getMainPageCore().getRightMainObj().AboutMeSkillChartChanges(i);
			}
		}
		////

		/*EXPERIENCE PART*/
		InitializeAboutMeMenuExperienceItems() {
			let aboutMeExpUnderConstrC = document.getElementById("aboutMeExpUnderConstrC");
			let msgObj = { 
				text: "EXPERIENCE PAGE IS UNDER CONSTRUCTION!",
				fontClass: "big_Title"
			};
			let imgObj = {
				url: "../Assets/loading2.png",
				width: 50,
				height: 50
			};
			let multOfConstrImg = 3;

			UnderConstructionPage(aboutMeExpUnderConstrC, msgObj, imgObj, multOfConstrImg);
		}
		////

		/*TOOLS PART*/
		InitializeAboutMeMenuToolsItems() {
			let aboutMeToolsUnderConstrC = document.getElementById("aboutMeToolsUnderConstrC");
			let msgObj = { 
				text: "TOOLS PAGE IS UNDER CONSTRUCTION!",
				fontClass: "big_Title"
			};
			let imgObj = {
				url: "../Assets/loading2.png",
				width: 50,
				height: 50
			};
			let multOfConstrImg = 3;

			UnderConstructionPage(aboutMeToolsUnderConstrC, msgObj, imgObj, multOfConstrImg);
		}
		////
	}

	var startAboutMeWeb = new AboutMeScreen();