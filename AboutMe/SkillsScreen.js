
//ABOUT ME/SKILLS SITE CLASS FOR THE STARTING ACTIONS OF SKILLS SCREEN WHEN IT IS LOADED
class SkillsScreen {
	constructor() {
		this.mainPageCore;

		this.countSkillsCharts = 0;
		this.skillsChartsAr = [];

		//FUNCTIONS AT THE START OF THE OBJECT
		this.Main();
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
		this.OpenedAboutMeContent(true, null);
		this.LoadSkills();
	}

	InitializeMainPageCore() {
		var mainPageCore = new MainPageCore("Skills");
		this.setMainPageCore(mainPageCore);
	}

	OpenedAboutMeContent(firstTimeCall, subPageTitleName) {
		if (subPageTitleName != null) {
			var titleH = document.getElementById("titleH");
			titleH.innerHTML = subPageTitleName;
		}

		if (firstTimeCall) {
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
		}
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

		let options = {
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

		let optionsHTML = structuredClone(options);
		let skillsTextHTML = [
			"Html",
			"The beginning is half of everything",
			"first introduction through W3shcools",
			"simple and easy to learn",
			"main core of any website"
		];
		this.PrepareSkillView(95, "Html", "Pie", firstTime, afterFirstTIme, turningScreenPoint, optionsHTML, null, "htmlWrapC", skillsTextHTML);

		let optionsCss = structuredClone(options);
		let skillsTextCss = [
			"Css",
			"An aesthetic side",
			"first introduction through W3shcools",
			"at first couldn't recognize the potentials",
			"the artistic touch, on the canvas of web"
		];
		this.PrepareSkillView(95, "Css", "Pie", firstTime, afterFirstTIme, turningScreenPoint, optionsCss, null, "cssWrapC", skillsTextCss);

		let optionsJs = structuredClone(options);
		let skillsTextJs = [
			"Js",
			"The Frog Prince",
			"first introduction through W3shcools",
			"after java in university, it was easier than expected",
			"master client-side, then server-side",
			"an unsung hero in web"
		];
		this.PrepareSkillView(75, "Js", "Pie", firstTime, afterFirstTIme, turningScreenPoint, optionsJs, null, "jsWrapC", skillsTextJs);

		let optionsSql = structuredClone(options);
		let skillsTextSql = [
			"Sql",
			"Banks of data",
			"first introduction through university",
			"easy to use",
			"studied database structure, as well",
		];
		this.PrepareSkillView(65, "Sql", "Pie", firstTime, afterFirstTIme, turningScreenPoint, optionsSql, null, "sqlWrapC", skillsTextSql);

		let optionsPhp = structuredClone(options);
		let skillsTextPhp = [
			"Php",
			"Timeless worker",
			"first introduction through W3shcools",
			"unique and complicated, especially for a self-taught",
			"only use for database connections, till now",
			"back-end seems like a dark place"
		];
		this.PrepareSkillView(25, "Php", "Pie", firstTime, afterFirstTIme, turningScreenPoint, optionsPhp, null, "phpWrapC", skillsTextPhp);

		let optionsJava = structuredClone(options);
		let skillsTextJava = [
			"Java",
			"Things are serious",
			"first introduction through university",
			"object-oriention is a god-given tool",
			"implement object-oriention wherever its possible",
			"knowledge is never enough"
		];
		this.PrepareSkillView(60, "Java", "Pie", firstTime, afterFirstTIme, turningScreenPoint, optionsJava, null, "javaWrapC", skillsTextJava);

		let optionsC = structuredClone(options);
		let skillsTextC = [
			"C",
			"Great introductory language",
			"first introduction through university",
			"first interaction to a real programming language",
			"really complicated, cause of indexes(unlike Java)"
		];
		this.PrepareSkillView(40, "C", "Pie", firstTime, afterFirstTIme, turningScreenPoint, optionsC, null, "cWrapC", skillsTextC);

		this.StyleSkillCharts();
	}

	PrepareSkillView(animationPercent, skillsTitle, chartType, firstTime, afterFirstTIme, turningScreenPoint, options, data, elmntId, skillsText) {
		if (data == null) {
			var dtH = "Knoweledge of " + skillsTitle;
			data = [
				["Task", "Percent"],
				[dtH, 0],
				["Still to learn", 1]
			];
		}

		var skillsPlaceToBe = document.getElementById(elmntId);

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
		for (var i = 0; i < this.getCountSkillsCharts(); i++) {
			this.getMainPageCore().getRightMainObj().AboutMeSkillChartChanges(i);
		}
	}
	////
}

var startAboutMeWeb = new SkillsScreen();