	
	//ABOUT ME SITE CLASS FOR THE STARTING ACTIONS OF ABOUT ME SCREEN WHEN IT IS LOADED
	class AboutMeScreen {
		constructor() {

			//FUNCTIONS AT THE START OF THE OBJECT
			this.Main();
		}

		//EVENT FUNCTIONS FROM HERE
		Main() {
			this.InitializeMainPageCore();
			this.InitializeAboutMeCharts();
		}

		InitializeMainPageCore() {
			var mainPageCore = new MainPageCore("About me");
		}

		InitializeAboutMeCharts() {
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
								color: ['orange', 'brown']
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
			//myChart.
		}
	}

	var startAboutMeWeb = new AboutMeScreen();