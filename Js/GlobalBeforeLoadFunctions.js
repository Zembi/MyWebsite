

	//MATHEMATICS FUNCTION
	function sumFactorial(n) {
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

						if(type == "repeat") {
							lineItemsArray.forEach(lineItem => {
								var elemnt = lineItem[3];
								elemnt.children[0].innerHTML = "";
								elemnt.children[1].style.display = "none";
							})

							TypeWriter(lineItemsArray, 0, type, timingToWait, timeToDelete);
						}
						else if(type == "be aware") {
							if(typeOfActionForLine == "delete") {
								BackSpaceWriter(lineItemsArray, counter, type, timingToWait, timeToDelete);
							}
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

		var timeout1 = setTimeout(function() {
			if(lineItemsArray[counter][1] <= 0) {
				clearTimeout(timeout1);

				if(allTextsAr != null) {
					lineItemsArray[counter][5].push(textToDelete);
					lineItemsArray[counter][2] = allTextsAr[0];
					lineItemsArray[counter][5] = lineItemsArray[counter][5].slice(1);

					TypeWriter(lineItemsArray, counter, type, timingToWait, timeToDelete);
				}
			}
			else {
				placeElmnt.children[0].innerHTML = placeElmnt.children[0].innerHTML.slice(0, -1);
				lineItemsArray[counter][1]--;
				c--;
				BackSpaceWriter(lineItemsArray, counter, type, timingToWait, timeToDelete);
			}
		}, timeToDelete);
	}
	////