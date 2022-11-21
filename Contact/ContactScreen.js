	
	//CONTACT SITE CLASS FOR THE STARTING ACTIONS OF CONTACT SCREEN WHEN IT IS LOADED
	class ContactScreen {
		constructor() {
			//UNDER CONSTRUCTION
			this.uC = 1;

			//FUNCTIONS AT THE START OF THE OBJECT
			this.Main();
		}

		getUC() {
			return this.uC;
		}
		setUC(uC) {
			this.uC = uC;
		}

		//EVENT FUNCTIONS FROM HERE
		Main() {
			this.InitializeMainPageCore();
			this.MainMenuOfContactPage();

		}

		InitializeMainPageCore() {
			var mainPageCore = new MainPageCore("Contact");
		}

		MainMenuOfContactPage() {
			let contactUnderConstrC = document.getElementById("contactUnderConstrC");
			let msgObj = { 
				text: "CONTACT PAGE IS UNDER CONSTRUCTION!",
				fontClass: "big_Title"
			};
			let imgObj = {
				url: "../Assets/loading2.png",
				width: 50,
				height: 50
			};
			let multOfConstrImg = 3;

			if(this.getUC()) {
				UnderConstructionPage(contactUnderConstrC, msgObj, imgObj, multOfConstrImg);
			}
			else {
				google.load("visualization", "1", {packages: ["geochart"]});
				google.setOnLoadCallback(drawVisualization);

				function drawVisualization() {
					var data = google.visualization.arrayToDataTable([
						["City", "rub/kg", "$/тн"],
						["Moscow", 35.60, 576.08],
						["Arkhangelsk", 38.00, 614.92]
					]);

				    var geochart = new google.visualization.GeoChart(document.getElementById("contactChartC"));

				    var options = {
						region: "RU",
						displayMode: "markers",
						resolution: "provinces",
						colorAxis: { colors: ["red", "green"] }
					};
					geochart.draw(data, options);
				}
			}
		}
	}

	var startContactWeb = new ContactScreen();