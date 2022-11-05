/*	REQUIREMENTS(FOR CURRENT VERSION)
	
	|chartType: "GeoChart", "Scatter", "Column", "Histogram", "Bar", "Combo", "Area",
	"SteppedArea", "Line", "Pie", "BubbleChart", "OrgChart", "TreeMap", "Table"
	
	|chartData: data of chart.
	
	|chartOptions: options of chart for customize it.
	
	|elmntOverall: main div, where inside, has all the divs
	that are needed to create chart and loading screen(**divs prototype before class)
	OR set value to null but make sure to change it after so you create and display chart.
	
	|firstTime: first of chart animation's duration.
	
	|afterTime: rest of chart animation's duration.
	
	|elmntTrigR: element(div probbably) that triggers reload of chart (cause there is a bug for repsonsiveness).
	
	|buttonResize: if you want a button to trigger reload of chart (usually when a button is triggering a change in size of container)
	turningScreenPoint: (in px) where changing UI to mobile view.


	RULE OF DIVS' STRUCTURE WHEN YOU WANT TO USE THIS CLASS
	--------------------------------------------------------
	<div id="...">
		<div id="..."></div>
	</div>
	<div id="...">
		<div id="...">
			<img id="...">
		</div>
	</div>
	--------------------------------------------------------


	USE CONSOLE FOR DEBUG OF THIS CLASS.
	ALL MESSAGES WILL BE SHOWN THERE.
	YOU CAN DELETE CONSOLE MESSAGES WITH SETTING this.console TO FALSE
*/
	//GOOGLE CHART CORE CLASS
	class GoogleChart {
		constructor(chartType, chartData, chartOptions, elmntOverall, firstTime, afterTime, elmntTrigR, buttonResize, turningScreenPoint) {
			this.console = false;

			//MONITOR PROCCESS AND IF SOMETHING GOES WRONG GIVE FALSE VALUE, OTHERWISE TRUE AND RETURN IT
			this.status = false;
			
			//TYPE OF CHART
			this.chartType = chartType;

			//DATA OF CHART
			this.chartData = chartData;
			this.googleVisualizedChartData = null;

			//OPTIONS OF CHART
			this.chartOptions = chartOptions;
			
			//ELEMENT THAT CONTAINS ALL CHART ELEMENTS AND LOADER
			this.elmntOverall = elmntOverall;
			//CHART'S STRUCTURE
			this.elmntChartOverall = null;
			this.elmntChartMain = null;

			this.elmntChartLoadingOverall = null;
			this.elmntChartCenterLoading = null;
			this.elmntChartCenterLoadingImg = null;

			//IF WE WANT IMEDIATE DISPLAY OF CHART
			if(elmntOverall != null) {
				//SPLIT IT TO ALL ELEMENTS
				this.SplitElementOverallToDisplayChart();
			}
			//ELSE WHEN SETTING elmntOverall VAR

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

			if(this.getElmntOverall() != null) {
				//FUNCTIONS AT THE START OF THE OBJECT
				this.Main();
			}
			else {
				if(this.console) {
					console.log(`--SERIOUS PROBLEM/ Main()--
You need to add an element, where chart will be displayed, following the rules of divs structure.
current value of elmntOverall: ` + this.getElmntOverall());
				}
			}

			//PIE ANIMATION WHERE TO REACH IN %
			this.pieAnimLvl = 70;
			this.currPieAnimLvl = 0;
			this.firstTimeLoading = true;

			this.chartObjectToDraw = null;
		}

		//GETTERS 
		getStatus() {
			return this.status;
		}
		setStatus(status) {
			this.status = status;
		}

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
		setElmntOverall(elmntOverall) {
			this.elmntOverall = elmntOverall;

			this.SplitElementOverallToDisplayChart();
		}
		getElmntChartOverall() {
			return this.elmntChartOverall;
		}
		setElmntChartOverall(elmntChartOverall) {
			this.elmntChartOverall;
		}
		getElmntChartMain() {
			return this.elmntChartMain;
		}
		setElmntChartMain(elmntChartMain) {
			this.elmntChartMain = elmntChartMain;
		}
		
		getElmntChartLoadingOverall() {
			return this.elmntChartLoadingOverall;
		}
		setElmntChartLoadingOverall(elmntChartLoadingOverall) {
			this.elmntChartLoadingOverall = elmntChartLoadingOverall;
		}
		getElmntChartCenterLoading() {
			return this.elmntChartCenterLoading;
		}
		setElmntChartCenterLoading(elmntChartCenterLoading) {
			this.elmntChartCenterLoading = elmntChartCenterLoading;
		}
		getElmntChartCenterLoadingImg() {
			return this.elmntChartCenterLoadingImg;
		}
		setElmntChartCenterLoadingImg(elmntChartCenterLoadingImg) {
			this.elmntChartCenterLoadingImg = elmntChartCenterLoadingImg;
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

		getPieAnimLvl() {
			return this.pieAnimLvl;
		}
		setPieAnimLvl(pieAnimLvl) {
			this.pieAnimLvl = pieAnimLvl;
		}
		getCurrPieAnimLvl() {
			return this.currPieAnimLvl;
		}
		setCurrPieAnimLvl(currPieAnimLvl) {
			this.currPieAnimLvl = currPieAnimLvl;
		}

		getFirstTimeLoading() {
			return this.firstTimeLoading;
		}
		setFirstTimeLoading(firstTimeLoading) {
			this.firstTimeLoading = firstTimeLoading;
		}

		//DIFFERENT FUNCTIONS FROM NOW ON
		Main() {
			//LOAD LIBRARY
			google.charts.load("current", {packages:['corechart']});
			
			//DRAW NOW FUNCTION
			this.DrawNow(true);

			this.getElmntTrigR().name = GetPageWidth();

			this.ResizeTriggersReload();

			if(this.getButtonResize() != null) {
				this.ButtonTriggerReload();
			}
		}

		SplitElementOverallToDisplayChart() {
			//SPLIT IT TO ALL ELEMENTS
			this.elmntChartOverall = this.getElmntOverall().children[0];
			this.elmntChartMain = this.getElmntChartOverall().children[0];
				
			this.elmntChartLoadingOverall = this.getElmntOverall().children[1];
			this.elmntChartCenterLoading = this.getElmntChartLoadingOverall().children[0];
			this.elmntChartCenterLoadingImg = this.getElmntChartCenterLoading().children[0];

			this.setStatus(true);
		}

		DrawNow(firstTime) {
			if(this.getElmntOverall() != null) {
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
			else {
				if(this.console) {
					console.log(`--SERIOUS PROBLEM/ DrawNow()--
You need to add an element, where chart will be displayed, following the rules of divs structure.
current value of elmntOverall: ` + this.getElmntOverall());
				}
			}
		}

		DrawChart(firstT, animationTime) {
			//DATA VISUALIZATION AS GOOGLE WANTS
			var helper = google.visualization.arrayToDataTable(this.getChartData());
			this.setChartDataToGoogleDataForm(helper);

			var chartObj = null;
			var thisObj = this;

			if(this.getChartType() == "GeoChart")  {
				chartObj = new google.visualization.GeoChart(this.getElmntChartMain());
				chartObj.draw(this.getChartDataAsGoogleDataForm(), this.getChartOptions());
				this.chartObjectToDraw = chartObj;
			}
			else if(this.getChartType() == "Scatter")  {
				chartObj = new google.visualization.ScatterChart(this.getElmntChartMain());
				chartObj.draw(this.getChartDataAsGoogleDataForm(), this.getChartOptions());
				this.chartObjectToDraw = chartObj;
			}
			else if(this.getChartType() == "Column")  {
				chartObj = new google.visualization.ColumnChart(this.getElmntChartMain());
				chartObj.draw(this.getChartDataAsGoogleDataForm(), this.getChartOptions());
				this.chartObjectToDraw = chartObj;
			}
			else if(this.getChartType() == "Histogram")  {
				chartObj = new google.visualization.Histogram(this.getElmntChartMain());
				chartObj.draw(this.getChartDataAsGoogleDataForm(), this.getChartOptions());
				this.chartObjectToDraw = chartObj;
			}
			else if(this.getChartType() == "Bar")  {
				chartObj = new google.visualization.BarChart(this.getElmntChartMain());
				chartObj.draw(this.getChartDataAsGoogleDataForm(), this.getChartOptions());
				this.chartObjectToDraw = chartObj;
			}
			else if(this.getChartType() == "Combo")  {
				//OPTIONS LAST FIXES BEFORE FUNCTION RUNS
				this.getChartOptions().animation.startup = firstT;
				this.getChartOptions().animation.duration = animationTime;

				chartObj = new google.visualization.ComboChart(this.getElmntChartMain());
				chartObj.draw(this.getChartDataAsGoogleDataForm(), this.getChartOptions());
				this.chartObjectToDraw = chartObj;
			}
			else if(this.getChartType() == "Area")  {
				chartObj = new google.visualization.AreaChart(this.getElmntChartMain());
				chartObj.draw(this.getChartDataAsGoogleDataForm(), this.getChartOptions());
				this.chartObjectToDraw = chartObj;
			}
			else if(this.getChartType() == "SteppedArea")  {
				chartObj = new google.visualization.SteppedAreaChart(this.getElmntChartMain());
				chartObj.draw(this.getChartDataAsGoogleDataForm(), this.getChartOptions());
				this.chartObjectToDraw = chartObj;
			}
			else if(this.getChartType() == "Line")  {
				chartObj = new google.visualization.LineChart(this.getElmntChartMain());
				chartObj.draw(this.getChartDataAsGoogleDataForm(), this.getChartOptions());
			}
			else if(this.getChartType() == "Pie")  {
				chartObj = new google.visualization.PieChart(this.getElmntChartMain());
				chartObj.draw(this.getChartDataAsGoogleDataForm(), this.getChartOptions());
				this.chartObjectToDraw = chartObj;
				
					thisObj.PieAnimation();
			}
			else if(this.getChartType() == "BubbleChart")  {
				chartObj = new google.visualization.BubbleChart(this.getElmntChartMain());
				chartObj.draw(this.getChartDataAsGoogleDataForm(), this.getChartOptions());
				this.chartObjectToDraw = chartObj;
			}
			else if(this.getChartType() == "OrgChart")  {
				chartObj = new google.visualization.OrgChart(this.getElmntChartMain());
				chartObj.draw(this.getChartDataAsGoogleDataForm(), this.getChartOptions());
				this.chartObjectToDraw = chartObj;
			}
			else if(this.getChartType() == "TreeMap")  {
				chartObj = new google.visualization.TreeMap(this.getElmntChartMain());
				chartObj.draw(this.getChartDataAsGoogleDataForm(), this.getChartOptions());
				this.chartObjectToDraw = chartObj;
			}
			else if(this.getChartType() == "Table")  {
				chartObj = new google.visualization.Table(this.getElmntChartMain());
				chartObj.draw(this.getChartDataAsGoogleDataForm(), this.getChartOptions());
				this.chartObjectToDraw = chartObj;
			}
			else if(this.getChartType() == "Gauge")  {
				chartObj = new google.visualization.Gauge(this.getElmntChartMain());
				chartObj.draw(this.getChartDataAsGoogleDataForm(), this.getChartOptions());
				this.chartObjectToDraw = chartObj;
			}
			else if(this.getChartType() == "Candlestick")  {
				chartObj = new google.visualization.CandlestickChart(this.getElmntChartMain());
				chartObj.draw(this.getChartDataAsGoogleDataForm(), this.getChartOptions());
				this.chartObjectToDraw = chartObj;
			}
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
			var chartMain = this.getElmntChartMain();

			var chartLoadingOverall = this.getElmntChartLoadingOverall();
			var chartCenterLoading = this.getElmntChartCenterLoading();
			var chartCenterLoadingImg = this.getElmntChartCenterLoadingImg();

			this.getElmntChartOverall().innerHTML = "";
						
			var newChartMain = document.createElement("div");
			newChartMain.id = this.getElmntChartMain().id;
			this.getElmntChartOverall().appendChild(newChartMain);
			this.setElmntChartMain(newChartMain);

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

		//MAKE ABLE TO ANIMATE A PIE CHART
		PieAnimation() {
			var thisObj = this;

			if(this.getFirstTimeLoading()) {
				setTimeout(function() {
					var handler = setInterval(function() {
						var currPrecent = thisObj.getCurrPieAnimLvl()
						//CHECK IF REACHED THE VALUE WE WANT
						if(currPrecent >= thisObj.getPieAnimLvl()) {
							//STOP THE LOOP
							clearInterval(handler);
							thisObj.setFirstTimeLoading(false);
						}
						else {
							currPrecent += 1;
							thisObj.setCurrPieAnimLvl(currPrecent);

							//APPLY NEW VALUES
							thisObj.getChartDataAsGoogleDataForm().setValue(1, 1, 100 - currPrecent);
							thisObj.getChartDataAsGoogleDataForm().setValue(0, 1, currPrecent);

							//UPDATE THE PIE
							thisObj.chartObjectToDraw.draw(thisObj.getChartDataAsGoogleDataForm(), thisObj.getChartOptions());
						}
					}, 50);
				}, 800);
			}
			else {
				this.PieUnableAnimation();
			}
		}

		//UNABLE ANIMATION OF PIE CHART
		PieUnableAnimation() {
			console.log(100 - this.getPieAnimLvl());
			//APPLY CURRENT VALUES
			this.getChartDataAsGoogleDataForm().setValue(1, 1, 100 - this.getPieAnimLvl());
			this.getChartDataAsGoogleDataForm().setValue(0, 1, this.getPieAnimLvl());

			//UPDATE THE PIE
			this.chartObjectToDraw.draw(this.getChartDataAsGoogleDataForm(), this.getChartOptions());
		}

		//EDIT COLOR OF PIE CHART
		RecolorPies(color0, color1) {
			//MAKE THE CHANGE
			this.getChartOptions().colors = [color1, color0];

			//TIME TO DRAW
			var thisObj = this;
			google.charts.setOnLoadCallback(function() {
				thisObj.DrawNow(false);
			});
		}
	}