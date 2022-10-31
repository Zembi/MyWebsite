	
	//ABOUT ME SITE CLASS FOR THE STARTING ACTIONS OF ABOUT ME SCREEN WHEN IT IS LOADED
	class AboutMeScreen {
		constructor() {

			//FUNCTIONS AT THE START OF THE OBJECT
			this.Main();
		}

		//EVENT FUNCTIONS FROM HERE
		Main() {
			this.InitializeMainPageCore();
			this.MainContentButton();
			this.InitializeAboutMeMenuItems();
		}

		InitializeMainPageCore() {
			var mainPageCore = new MainPageCore("About me");
		}

		MainContentButton() {
			var c = false;
			var changeContentAboutMeBtn = document.getElementById("changeContentAboutMeBtn");
			var aboutMeEducationC = document.getElementById("aboutMeEducationC");
			var aboutMeSkillsAndExperienceC = document.getElementById("aboutMeSkillsAndExperienceC");

			OpenedAboutMeContent(aboutMeEducationC, aboutMeSkillsAndExperienceC, true);

			changeContentAboutMeBtn.addEventListener("click", function() {
				if(!c) {
					OpenedAboutMeContent(aboutMeSkillsAndExperienceC, aboutMeEducationC, false);
					c = true;
				}
				else {
					OpenedAboutMeContent(aboutMeEducationC, aboutMeSkillsAndExperienceC, false);
					c = false;
				}
			});

			function OpenedAboutMeContent(elementToShow, elementToHide, firstTimeCall) {
				elementToHide.style.display = "none";
				elementToHide.style.opacity = "0";
				elementToHide.style.transform = "translateX(-100%) skew(-90deg)";

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
				}
				else {
					document.documentElement.style.setProperty("--animationEnter", "0.3s");
					document.documentElement.style.setProperty("--animationWaitToEnter", "0.1s");
					document.documentElement.style.setProperty("--step2", "0.1s");

					document.documentElement.style.setProperty("--animationShow", "0.8s");
					document.documentElement.style.setProperty("--animationWaitToShow", "0s");
					document.documentElement.style.setProperty("--step3", "0s");
				}
			}
		}

		InitializeAboutMeMenuItems() {
			this.LoadGoogleCharts();
			this.InitializeTranscriptOfUniCourses();
		}

		LoadGoogleCharts() {
			//LOAD LIBRARY
			google.charts.load("current", {packages:['corechart']});
			//TIME TO DRAW
			google.charts.setOnLoadCallback(function() {
				DrawChart(true, 4500);
			});

			var aboutMeBodyC = document.getElementById("aboutMeBodyC");
			aboutMeBodyC.name = GetPageWidth();

			function DrawChart(firstT, animationTime) {
				var chartC = document.getElementById("chartC");
			
				var winterStyling = "color: rgb(0, 43, 98); opacity: 0.4; border: 4px solid rgb(0, 43, 98)";
				var springStyling = "color: rgb(117, 42, 6); opacity: 0.4; border: 4px solid rgb(117, 42, 8)";

				var data = google.visualization.arrayToDataTable([
					["Element", "Winter", "Spring", "WinterLine", "SpringLine"],
					["1", 7.143, 7, 7.143, 7],
					["2", 7.167, 6.5, 7.167, 6.5],
					["3", 7.667, 7.167, 7.667, 7.167],
					["4", 9, 8.6, 9, 8.6],
				]);

				//LOOK HTML FILE, element with id: #chartTitleH
				var chartTitle = "";

				var options = {
					title: chartTitle,
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
						startup: firstT,
						duration: animationTime,
						easing: "out"
					}
				};

				firstT = false;

				var chartColumn = new google.visualization.ComboChart(chartC);
				chartColumn.draw(data, options);
			}

			//RESIZING TRIGGERS RELOAD OF CHART AND IF IT IS LOADING AND IT IS CHANGING, IT KEEPS ON LOADING
			window.addEventListener("resize", function() {
				var pageCurWidth = GetPageWidth();

				if(pageCurWidth != aboutMeBodyC.name) {
					if(document.getElementById("eduChartCenterLoadingImg").style.animationPlayState != "running") {
						var chartCC = document.getElementById("chartCC");
						chartCC.innerHTML = "";
						
						var newChartC = document.createElement("div");
						newChartC.id = "chartC";
						chartCC.appendChild(newChartC);

						document.getElementById("eduChartLoadingFullC").style.display = "block";
						document.getElementById("eduChartLoadingFullC").style.zIndex = "0";
						document.getElementById("eduChartCenterLoadingImg").style.animationPlayState = "running";
						
						setTimeout(function() {
							document.getElementById("eduChartLoadingFullC").style.display = "none";
							document.getElementById("eduChartLoadingFullC").style.zIndex = "-1";
							document.getElementById("eduChartCenterLoadingImg").style.animationPlayState = "paused";
							DrawChart(true, 500);
						}, 500);
					}
				}
				aboutMeBodyC.name = GetPageWidth();
			});

			//LOAD CHART WHEN MENU OPENS AND CLOSES, WHEN WINDOW WIDTH IS MORE THAN 850, CAUSE THERE WAS RESPONSIVENESS ERRORS
			document.getElementById("openMenuBtn").addEventListener("click", function() {
				if(GetPageWidth() > 850) {
					var chartCC = document.getElementById("chartCC");
					chartCC.innerHTML = ""
					
					var newChartC = document.createElement("div");
					newChartC.id = "chartC";
					chartCC.appendChild(newChartC);

					document.getElementById("eduChartLoadingFullC").style.display = "block";
					document.getElementById("eduChartLoadingFullC").style.zIndex = "0";
					document.getElementById("eduChartCenterLoadingImg").style.animationPlayState = "running";
					
					setTimeout(function() {
						document.getElementById("eduChartLoadingFullC").style.display = "none";
						document.getElementById("eduChartLoadingFullC").style.zIndex = "-1";
						document.getElementById("eduChartCenterLoadingImg").style.animationPlayState = "paused";
						DrawChart(true, 500);
					}, 500);
				}
			});
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

			CreateVerticalOrHorizontalMenu(items, semestersTitleC, 0, semestersUpBtn, semestersDownBtn);

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
						var currSemesterCourseC = document.createElement("div");
						currSemesterCourseC.className = "currSemesterCourseC";
						var currSemesterCourseP = document.createElement("p");
						currSemesterCourseP.className = "currSemesterCourseP small_Text";
						currSemesterCourseP.innerHTML = course[0];

						currSemesterCourseC.appendChild(currSemesterCourseP);
						currSemesterCourseWrapC.appendChild(currSemesterCourseC);

						var currSemesterCourseGradeC = document.createElement("div");
						currSemesterCourseGradeC.className = "currSemesterCourseGradeC";
						var currSemesterCourseGradeP = document.createElement("p");
						currSemesterCourseGradeP.className = "currSemesterCourseGradeP simple_Text";
						currSemesterCourseGradeP.innerHTML = course[1];

						currSemesterCourseGradeC.appendChild(currSemesterCourseGradeP);
						currSemesterCourseWrapC.appendChild(currSemesterCourseGradeC);
						semesterMainContentC.appendChild(currSemesterCourseWrapC);

						if((courseCount % 2) == 0) {
							currSemesterCourseWrapC.style.borderLeftWidth = "0";
							currSemesterCourseWrapC.style.borderRightWidth = "4px";
						}
						else {
							currSemesterCourseWrapC.style.borderLeftWidth = "4px";
							currSemesterCourseWrapC.style.borderRightWidth = "0";
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



		AboutMeMainContent() {
			$(window).scroll(function() {
			    if ($('#chartCC').is(':in-viewport')) {
			        alert(1);
			    } else {
			    	alert(0);
			    }
			});
		}
	}

	var startAboutMeWeb = new AboutMeScreen();