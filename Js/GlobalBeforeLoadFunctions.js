	//CREATE THE GlobalVariables OBJECT THAT STORES ALL GLOBAL VARIABLES
	var globalVars = new GlobalVariables();
	////

	//MATHEMATICS FUNCTION
	function SumFactorial(n) {
		var sum = 0;

		for(var i = 1; i <= n; i++) {
			sum += i;
		}

		return sum;
	}
	////
	
	//TYPE WRITER FUNCTION, SO CAN ANIMATE TEXT WRITING//
	function TypeWriter(lineItemsArray, counter, type, timingToWait, timeToDelete) {
		var speedOfType = lineItemsArray[counter][0];
		var c = lineItemsArray[counter][1];
		var textToType = lineItemsArray[counter][2];
		var placeElmnt = lineItemsArray[counter][3];
		var typeOfActionForLine = lineItemsArray[counter][4];
		var endedActions = 0;
		placeElmnt.children[1].style.display = "inline";

		var interval1 = setInterval(function() {
			placeElmnt.children[0].innerHTML += textToType.charAt(c);
			lineItemsArray[counter][1]++;
			c++;
			if(c >= textToType.length) {
				clearInterval(interval1);
				if(counter < (lineItemsArray.length - 1)) {
					counter++;
					placeElmnt.children[1].style.display = "none";
					TypeWriter(lineItemsArray, counter, type, timingToWait, timeToDelete);
				}
				else {
					var interval2 = setInterval(function() {
						clearInterval(interval2);

						if(type == "be aware") {
							if(typeOfActionForLine == "delete") {
								if(lineItemsArray[counter][5][0] != "\\stop") {
									BackSpaceWriter(lineItemsArray, counter, type, timingToWait, timeToDelete);
								}
								else {
									clearInterval(interval2);
									placeElmnt.children[1].style.display = "none";
									if(document.getElementById("robotCommentP").childNodes.length == 0) {
										CommentTyping(0, "//Missed something? Please, click on my figure", document.getElementById("robotCommentC"), null, speedOfType, timeToDelete);
									}
									else {
										document.getElementById("myProfileImgBtn").disabled = false;
										document.getElementById("robotCommentC").style.opacity = "1";
										endedActions = 1;
									}
								}
							}
						}
						else if(type == "comment") {		
							placeElmnt.children[1].style.display = "none";
							document.getElementById("myProfileImgBtn").disabled = false;
							document.getElementById("robotCommentC").style.opacity = "1";
							endedActions = 1;
						}

						if(endedActions) {
							document.getElementById("homeIntroKeywordsSymbolC").style.animation = "MovingKeywordsHomeLines 30s linear 1s infinite, TransformKeywordsHomeLines 30s linear 1s infinite";
							document.getElementById("homeMotionLeftContentTitleSp").style.animation = "ShiningTitle1 10s ease-in-out infinite";
							document.getElementById("homeLeftCoverIntroSymbolsC").style.animation = "CloseLeftElement 1s linear 1";
							document.getElementById("homeLeftCoverIntroSymbolsC").style.animationFillMode = "forwards";
							document.getElementById("homeMotionRightContentTitleSp").style.animation = "ShiningTitle2 10s ease-in-out infinite";
							document.getElementById("homeRightCoverIntroSymbolsC").style.animation = "CloseRightElement 1s linear 1";
							document.getElementById("homeRightCoverIntroSymbolsC").style.animationFillMode = "forwards";
							document.getElementById("homeIntroImgAndSymbolsC").style.animation = "AfterCloseElement 1.5s linear 1s 1";
							document.getElementById("homeIntroImgAndSymbolsC").style.animationFillMode = "forwards";
						}
					}, timingToWait);
				}
			}
		},speedOfType);
	}

	//BACKSPACE WRITER FUNCTION, SO CAN ANIMATE BACKSPACE
	function BackSpaceWriter(lineItemsArray, counter, type, timingToWait, timeToDelete) {
		var c = lineItemsArray[counter][1];
		var textToDelete = lineItemsArray[counter][2];
		var placeElmnt = lineItemsArray[counter][3];
		var allTextsAr = lineItemsArray[counter][5];
		var stoppingPoint = "\\stop";

		var timeout1 = setTimeout(function() {
			if(lineItemsArray[counter][1] <= 0) {
				clearTimeout(timeout1);

				if(allTextsAr != null) {
					lineItemsArray[counter][5].push(textToDelete);
					if(allTextsAr[0]  == stoppingPoint) {
						lineItemsArray[counter][5].push(stoppingPoint);
						lineItemsArray[counter][2] = allTextsAr[1];
						lineItemsArray[counter][5] = lineItemsArray[counter][5].slice(2);
					}
					else {
						lineItemsArray[counter][2] = allTextsAr[0];
						lineItemsArray[counter][5] = lineItemsArray[counter][5].slice(1);
					}

					TypeWriter(lineItemsArray, counter, type, timingToWait, timeToDelete);
				}
			}
			else {
				//IF THERE IS MORE TEXT TO DELETE
				if(allTextsAr[0] == stoppingPoint) {
					placeElmnt.children[1].style.display = "inline";
				}
				
				placeElmnt.children[0].innerHTML = placeElmnt.children[0].innerHTML.slice(0, -1);
				lineItemsArray[counter][1]--;
				c--;
				BackSpaceWriter(lineItemsArray, counter, type, timingToWait, timeToDelete);
			}
		}, timeToDelete);
	}

	//COMMENT WRITER
	function CommentTyping(c, textToType, lineInfoC, typeReturn, replaceTexts, timeToType, timeToDelete) {	
		//GENERAL COMMENT VARIABLES
		var timeToWait = 100;
		var secondaryTable = new Array();
		var status = "comment";

		var table3 = new Array(timeToType, c, textToType, lineInfoC, typeReturn, replaceTexts);
		secondaryTable.push(table3);

		//COMMENT TYPE WRITER
		TypeWriter(secondaryTable, 0, status, timeToWait, timeToDelete);
	}
	////