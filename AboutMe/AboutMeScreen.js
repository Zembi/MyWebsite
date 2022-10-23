	
	//ABOUT ME SITE CLASS FOR THE STARTING ACTIONS OF ABOUT ME SCREEN WHEN IT IS LOADED
	class AboutMeScreen {
		constructor() {

			//FUNCTIONS AT THE START OF THE OBJECT
			this.Main();
		}

		//EVENT FUNCTIONS FROM HERE
		Main() {
			this.InitializeMainPageCore();
			this.LoadGoogleCharts();
			//this.AboutMeMainContent();
		}

		InitializeMainPageCore() {
			var mainPageCore = new MainPageCore("About me");
		}

		LoadGoogleCharts() {
			//LOAD LIBRARY
			google.charts.load("current", {packages:['corechart']});
			//TIME TO DRAW
			google.charts.setOnLoadCallback(function() {
				DrawChart(true, 4500);
			});

			function DrawChart(firstT, animationTime) {
				var chartC = document.getElementById("chartC");
			
				var winterStyling = "color: rgb(0, 43, 98); opacity: 0.4; border: 4px solid rgb(0, 43, 98)";
				var springStyling = "color: rgb(117, 42, 6); opacity: 0.4; border: 4px solid rgb(117, 42, 8)";

				var data = google.visualization.arrayToDataTable([
					["Element", "Winter", "Spring", "WinterLine", "SpringLine"],
					["1", 7.142, 7, 7.142, 7],
					["2", 7.167, 6.5, 7.167, 6.5],
					["3", 7.667, 7.167, 7.667, 7.167],
					["4", 9, 8.6, 9, 8.6],
				]);

				var options = {
					title: "Overall University Performance (average/semester)",
					titleTextStyle: {
						color: "white"
					},
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
							color: "rgb(0, 43, 98)",
							dataOpacity: "0.6"
						},
						1: {
							color: "rgb(117, 42, 6)",
							dataOpacity: "0.6"
						},
						2: {
							type: "line",
							color: "rgb(0, 43, 98)"
						},
						3: {
							type: "line",
							color: "rgb(117, 42, 6)"
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
				if(document.getElementById("eduChartCenterLoadingImg").style.animationPlayState != "running") {
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