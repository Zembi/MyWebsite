	//GOOGLE CHART CORE CLASS
	class GoogleChart {
		constructor(chartType, chartData, chartOptions, elmntOverall, firstTime, afterTime, elmntTrigR, buttonResize, turningScreenPoint) {
			//TYPE OF CHART
			this.chartType = chartType;

			//DATA OF CHART
			this.chartData = chartData;
			this.googleVisualizedChartData = null;

			//OPTIONS OF CHART
			this.chartOptions = chartOptions;
			
			//ELEMENT THAT CONTAINS ALL CHART ELEMENTS AND LOADER
			this.elmntOverall = elmntOverall;
			//SPLIT IT TO ALL ELEMENTS
			this.elmntChartOverall = this.getElmntOverall().children[0];
			this.elmntChartMain = this.getElmntChartOverall().children[0];
			
			this.elmntChartLoadingOverall = this.getElmntOverall().children[1];
			this.elmntChartCenterLoading = this.getElmntChartLoadingOverall().children[0];
			this.elmntChartCenterLoadingImg = this.getElmntChartCenterLoading().children[0];

			//FIRST EVER LOADING CHART ANIMATION 
			this.firstTime = firstTime;

			//FIRST EVER LOADING CHART ANIMATION 
			this.afterTime = afterTime;

			//ELEMENT THAT WHEN RESIZING TRIGGERS RESPONSIVENESS
			this.elmntTrigR = elmntTrigR;

			//BUTTON THAT CHANGES SIZES OF CHART WITH ITS ACTION, 
			//SO CHART CAN RELOAD. USE OF THAT IS THAT RESIZING OVERALL
			//ELEMENT DOESN'T TRIGGER RESIZE OF CHART
			this.buttonResize = buttonResize;

			//TURNING POINT ON WHERE SCREEN MENU DISAPPEARS OR APPEARS
			this.turningScreenPoint = turningScreenPoint;

			//FUNCTIONS AT THE START OF THE OBJECT
			this.Main();
		}

		//GETTERS 
		getChartType() {
			return this.chartType;
		}

		getChartData() {
			return this.chartData;
		}

		getChartDataAsGoogleDataForm() {
			return this.googleVisualizedChartData;
		}
		setChartDataToGoogleDataForm(newChartData) {
			this.googleVisualizedChartData = newChartData;
		}

		getChartOptions() {
			return this.chartOptions;
		}

		getElmntOverall() {
			return this.elmntOverall;
		}
		getElmntChartOverall() {
			return this.elmntChartOverall;
		}
		GetElmntChartMain() {
			return this.elmntChartMain;
		}
		SetElmntChartMain(elmntChartMain) {
			this.elmntChartMain = elmntChartMain;
		}
		
		getElmntChartLoadingOverall() {
			return this.elmntChartLoadingOverall;
		}
		getElmntChartCenterLoading() {
			return this.elmntChartCenterLoading;
		}
		getElmntChartCenterLoadingImg() {
			return this.elmntChartCenterLoadingImg;
		}

		getFirstTime() {
			return this.firstTime;
		}

		getAfterTime() {
			return this.afterTime;
		}

		getElmntTrigR() {
			return this.elmntTrigR;
		}

		getButtonResize() {
			return this.buttonResize;
		}

		getTurningScreenPoint() {
			return this.turningScreenPoint;
		}

		//DIFFERENT FUNCTIONS FROM NOW ON
		Main() {
			//LOAD LIBRARY
			google.charts.load("current", {packages:['corechart']});;
			
			//DRAW NOW FUNCTION
			this.DrawNow(true);

			this.getElmntTrigR().name = GetPageWidth();

			this.ResizeTriggersReload();
			this.ButtonTriggerReload();
		}

		DrawNow(firstTime) {
			var thisObj = this;

			//TIME TO DRAW
			if(firstTime) {
				google.charts.setOnLoadCallback(function() {
					thisObj.DrawChart(true, thisObj.getFirstTime());
				});
			}
			else {
				google.charts.setOnLoadCallback(function() {
					thisObj.DrawChart(true, thisObj.getAfterTime());
				});
			}
		}

		DrawChart(firstT, animationTime) {
			//DATA VISUALIZATION AS GOOGLE WANTS
			var helper = google.visualization.arrayToDataTable(this.getChartData());
			this.setChartDataToGoogleDataForm(helper);

			//OPTIONS LAST FIXES BEFORE FUNCTION RUNS
			this.getChartOptions().animation.startup = firstT;
			this.getChartOptions().animation.duration = animationTime;

			var chartColumn = new google.visualization.ComboChart(this.GetElmntChartMain());
			chartColumn.draw(this.getChartDataAsGoogleDataForm(), this.getChartOptions());
		}

		ResizeTriggersReload() {
			var thisObj = this;
			//RESIZING TRIGGERS RELOAD OF CHART AND IF IT IS LOADING AND IT IS CHANGING, IT KEEPS ON LOADING
			window.addEventListener("resize", function() {
				var pageCurWidth = GetPageWidth();

				if(pageCurWidth != thisObj.getElmntTrigR().name) {
					if(thisObj.getElmntChartCenterLoadingImg().style.animationPlayState != "running") {
						thisObj.ReloadLoadingAnimation();
					}
				}
				thisObj.getElmntTrigR().name = GetPageWidth();
			});
		}

		ButtonTriggerReload() {
			var thisObj = this;
			//LOAD CHART WHEN MENU OPENS AND CLOSES, WHEN WINDOW WIDTH IS MORE THAN 850, CAUSE THERE WAS RESPONSIVENESS ERRORS
			this.getButtonResize().addEventListener("click", function() {
				if(GetPageWidth() > thisObj.getTurningScreenPoint()) {
					thisObj.ReloadLoadingAnimation();
				}
			});
		}

		ReloadLoadingAnimation() {
			//SPLIT MAIN CONTAINER TO ITS ELEMENTS
			var chartOverall = this.getElmntChartOverall();
			var chartMain = this.GetElmntChartMain();

			var chartLoadingOverall = this.getElmntChartLoadingOverall();
			var chartCenterLoading = this.getElmntChartCenterLoading();
			var chartCenterLoadingImg = this.getElmntChartCenterLoadingImg();

			this.getElmntChartOverall().innerHTML = "";
						
			var newChartMain = document.createElement("div");
			newChartMain.id = this.GetElmntChartMain().id;
			this.getElmntChartOverall().appendChild(newChartMain);
			this.SetElmntChartMain(newChartMain);

			this.getElmntChartLoadingOverall().style.display = "block";
			this.getElmntChartLoadingOverall().style.zIndex = "0";
			this.getElmntChartCenterLoadingImg().style.animationPlayState = "running";
			
			var thisObj = this;
			setTimeout(function() {
				thisObj.getElmntChartLoadingOverall().style.display = "none";
				thisObj.getElmntChartLoadingOverall().style.zIndex = "-1";
				thisObj.getElmntChartCenterLoadingImg().style.animationPlayState = "paused";
				google.charts.setOnLoadCallback(function() {
					thisObj.DrawNow(false);
				});
			}, 500);
		}

		//EDIT COLOR OF CHART
		RecolorSeries(number, color, dataOpacity) {
			//MAKE THE CHANGE
			this.getChartOptions().series[number].color = color;
			if(dataOpacity != 0) {
				this.getChartOptions().series[number].dataOpacity = dataOpacity;
			}

			//TIME TO DRAW
			var thisObj = this;
			google.charts.setOnLoadCallback(function() {
				thisObj.DrawNow(false);
			});
		}
	}