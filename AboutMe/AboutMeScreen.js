	
	//ABOUT ME SITE CLASS FOR THE STARTING ACTIONS OF ABOUT ME SCREEN WHEN IT IS LOADED
	class AboutMeScreen {
		constructor() {

			//FUNCTIONS AT THE START OF THE OBJECT
			this.Main();
		}

		//EVENT FUNCTIONS FROM HERE
		Main() {
			this.InitializeMainPageCore();
			//this.InitializeAboutMeCharts();
			this.LoadGoogleCharts();
		}

		InitializeMainPageCore() {
			var mainPageCore = new MainPageCore("About me");
		}

		/*InitializeAboutMeCharts() {
			const labels = ['Winter 1', 'Spring 1', 'Winter 2', 'Spring 2', 'Winter 3', 'Spring 3', 'Winter 4', 'Spring 4'];

			const data = {
				labels: labels,
				datasets: [{
					label: "Overall University Performance (average/semester)",
					data: [7.142, 7, 7.167, 6.5, 7.667, 7.167, 9, 8.6],
					backgroundColor: [
						'rgb(0, 43, 98, 0.2)',
						'rgb(117, 42, 6, 0.2)'
					],
					borderColor: [
						'rgb(0, 43, 98)',
						'rgb(117, 42, 6)'
					],
					borderWidth: 1
				}]
			};

			const config = {
				type: 'bar',
				data: data,
				options: {
					parsing: {
						xAxisKey: 'id',
						yAxisKey: 'nested.value'
					},
					scales: {
						x: {
							ticks: {
								color: ['orange', 'brownS']
							}
						},
						y: {
							min: 5,
							max: 10,
							ticks: {
								color: 'white'
							}
						}
					}
				}
			};

			const myChart = new Chart(document.getElementById('myChart'), config);
			
		}*/

		LoadGoogleCharts() {
			//LOAD LIBRARIES
			google.charts.load("current", {packages:['corechart']});
			//TIME TO DRAW
			google.charts.setOnLoadCallback(DrawChart);

			//START CODING
			var firstTime = true;

			function DrawChart() {
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
					groupwidth: 10,
					width: "100%",
					height: "100%",
					backgroundColor: "transparent",
					pointSize: 4,
					vAxis: {
						minValue: 5,
						maxValue: 10,
						
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
							dataOpacity: "0.5"
						},
						1: {
							color: "rgb(117, 42, 6)",
							dataOpacity: "0.5"
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
						startup: firstTime,
						duration: 4000,
						easing: "out"
					}
				};

				firstTime = false;

				var chartColumn = new google.visualization.ComboChart(document.getElementById("canvasC"));
				chartColumn.draw(data, options);
			}

			$(window).resize(function(){
				DrawChart();
			});
		}
	}

	var startAboutMeWeb = new AboutMeScreen();