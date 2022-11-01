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
			this.elmntChartOverall = this.GetElmntOverall().children[0];
			this.elmntChartMain = this.GetElmntChartOverall().children[0];
			
			this.elmntChartLoadingOverall = this.GetElmntOverall().children[1];
			this.elmntChartCenterLoading = this.GetElmntChartLoadingOverall().children[0];
			this.elmntChartCenterLoadingImg = this.GetElmntChartCenterLoading().children[0];

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
		GetChartType() {
			return this.chartType;
		}

		GetChartData() {
			return this.chartData;
		}

		GetChartDataAsGoogleDataForm() {
			return this.googleVisualizedChartData;
		}
		SetChartDataToGoogleDataForm(newChartData) {
			this.googleVisualizedChartData = newChartData;
		}

		GetChartOptions() {
			return this.chartOptions;
		}

		GetElmntOverall() {
			return this.elmntOverall;
		}
		GetElmntChartOverall() {
			return this.elmntChartOverall;
		}
		GetElmntChartMain() {
			return this.elmntChartMain;
		}
		SetElmntChartMain(elmntChartMain) {
			this.elmntChartMain = elmntChartMain;
		}
		
		GetElmntChartLoadingOverall() {
			return this.elmntChartLoadingOverall;
		}
		GetElmntChartCenterLoading() {
			return this.elmntChartCenterLoading;
		}
		GetElmntChartCenterLoadingImg() {
			return this.elmntChartCenterLoadingImg;
		}

		GetFirstTime() {
			return this.firstTime;
		}

		GetAfterTime() {
			return this.afterTime;
		}

		GetElmntTrigR() {
			return this.elmntTrigR;
		}

		GetButtonResize() {
			return this.buttonResize;
		}

		GetTurningScreenPoint() {
			return this.turningScreenPoint;
		}

		//DIFFERENT FUNCTIONS FROM NOW ON
		Main() {
			//LOAD LIBRARY
			google.charts.load("current", {packages:['corechart']});;
			
			//DRAW NOW FUNCTION
			this.DrawNow(true);

			this.GetElmntTrigR().name = GetPageWidth();

			this.ResizeTriggersReload();
			this.ButtonTriggerReload();
		}

		DrawNow(firstTime) {
			var thisObj = this;

			//TIME TO DRAW
			if(firstTime) {
				google.charts.setOnLoadCallback(function() {
					thisObj.DrawChart(true, thisObj.GetFirstTime());
				});
			}
			else {
				google.charts.setOnLoadCallback(function() {
					thisObj.DrawChart(true, thisObj.GetAfterTime());
				});
			}
		}

		DrawChart(firstT, animationTime) {
			//DATA VISUALIZATION AS GOOGLE WANTS
			var helper = google.visualization.arrayToDataTable(this.GetChartData());
			this.SetChartDataToGoogleDataForm(helper);

			//OPTIONS LAST FIXES BEFORE FUNCTION RUNS
			this.GetChartOptions().animation.startup = firstT;
			this.GetChartOptions().animation.duration = animationTime;

			var chartColumn = new google.visualization.ComboChart(this.GetElmntChartMain());
			chartColumn.draw(this.GetChartDataAsGoogleDataForm(), this.GetChartOptions());
			console.log(chartColumn);
		}

		ResizeTriggersReload() {
			var thisObj = this;
			//RESIZING TRIGGERS RELOAD OF CHART AND IF IT IS LOADING AND IT IS CHANGING, IT KEEPS ON LOADING
			window.addEventListener("resize", function() {
				var pageCurWidth = GetPageWidth();

				if(pageCurWidth != thisObj.GetElmntTrigR().name) {
					if(thisObj.GetElmntChartCenterLoadingImg().style.animationPlayState != "running") {
						thisObj.ReloadLoadingAnimation();
					}
				}
				thisObj.GetElmntTrigR().name = GetPageWidth();
			});
		}

		ButtonTriggerReload() {
			var thisObj = this;
			//LOAD CHART WHEN MENU OPENS AND CLOSES, WHEN WINDOW WIDTH IS MORE THAN 850, CAUSE THERE WAS RESPONSIVENESS ERRORS
			this.GetButtonResize().addEventListener("click", function() {
				if(GetPageWidth() > thisObj.GetTurningScreenPoint()) {
					thisObj.ReloadLoadingAnimation();
				}
			});
		}

		ReloadLoadingAnimation() {
			//SPLIT MAIN CONTAINER TO ITS ELEMENTS
			var chartOverall = this.GetElmntChartOverall();
			var chartMain = this.GetElmntChartMain();

			var chartLoadingOverall = this.GetElmntChartLoadingOverall();
			var chartCenterLoading = this.GetElmntChartCenterLoading();
			var chartCenterLoadingImg = this.GetElmntChartCenterLoadingImg();

			this.GetElmntChartOverall().innerHTML = "";
						
			var newChartMain = document.createElement("div");
			newChartMain.id = this.GetElmntChartMain().id;
			this.GetElmntChartOverall().appendChild(newChartMain);
			this.SetElmntChartMain(newChartMain);

			this.GetElmntChartLoadingOverall().style.display = "block";
			this.GetElmntChartLoadingOverall().style.zIndex = "0";
			this.GetElmntChartCenterLoadingImg().style.animationPlayState = "running";
			
			var thisObj = this;
			setTimeout(function() {
				thisObj.GetElmntChartLoadingOverall().style.display = "none";
				thisObj.GetElmntChartLoadingOverall().style.zIndex = "-1";
				thisObj.GetElmntChartCenterLoadingImg().style.animationPlayState = "paused";
				google.charts.setOnLoadCallback(function() {
					thisObj.DrawNow(false);
				});
			}, 500);
		}

		//EDIT COLOR OF CHART
		RecolorSeries(number, color, dataOpacity) {
			//MAKE THE CHANGE
			this.GetChartOptions().series[number].color = color;
			this.GetChartOptions().series[number].dataOpacity = dataOpacity;
			
			//TIME TO DRAW
			var thisObj = this;
			google.charts.setOnLoadCallback(function() {
				thisObj.DrawNow(false);
			});
		}
	}