			var start;

			randomizeAndReappear();

			document.getElementById("randomShape").onclick = function() {
				document.getElementById("randomShape").style.display = "none";
				var end = getCurrentTime();
				document.getElementById("yourTimeDisplay").innerHTML = (end - start) / 1000 + "s";
				appearAfterDelay();

			}

			// Time functions
			function getCurrentTime() {
				return new Date().getTime();
			}

			function appearAfterDelay() {
				setTimeout(randomizeAndReappear(), Math.random() * 2000);
			}


			// Shape style functions

			function randomizeAndReappear() {
				var randomShape = document.getElementById("randomShape")
				setRandomColor(randomShape);
				setRandomSize(randomShape, setRandomShape(randomShape));
				setRandomMargins(randomShape);
				randomShape.style.display = "block";
				start = getCurrentTime();
			}

			function getRandomColor() {
				var letters = "0123456789ABCDEF";
				var color = "#";
				for (var i = 0; i < 6; i++) {
					color += letters[Math.floor(Math.random() * 16)];
				}
				return color;
			}

			function setRandomColor(element) {
				element.style.backgroundColor = getRandomColor();
			}

			// returns true if height and width should be same
			function setRandomShape(element) {
				// 1 => square
				// 2 => rectangle
				// 3 => circle
				switch(Math.floor((Math.random()*3) + 1)) {
					case 1:
						element.style.borderRadius = 0;
						return true;
					case 2:
						element.style.borderRadius = 0;
						return false;
					case 3:
						element.style.borderRadius = "50%";
						return true;
					default:
						console.log("Random number exceeded bounds");
				}
			}

			function setRandomSize(element, heightAndWidthAreSame) {
				console.log(heightAndWidthAreSame);
				randomShape.style.width = Math.floor((Math.random()*150) + 20);;
				if (heightAndWidthAreSame) {
					randomShape.style.height = randomShape.style.width;
				} else {
					randomShape.style.height = Math.floor((Math.random()*150) + 20);;
				}
			}

			function setRandomMargins(element) {
				element.style.marginTop = Math.floor((Math.random()*200) + 50);
				element.style.marginLeft = Math.floor((Math.random()*200) + 50);
			}