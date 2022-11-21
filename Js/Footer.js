	//FOOTER CONTAINER  CLASS
	class Footer {
		constructor(status) {
			this.status = status;

			//FUNCTIONS AT THE START OF THE OBJECT
			this.Main();
		}

		getStatus() {
			return this.status;
		}

		//EVENT FUNCTIONS FROM HERE
		Main() {
			this.CreatePatronOfFooter();
		}

		CreatePatronOfFooter() {
			document.getElementById("footerFullC").innerHTML = `
				<div id="footerC">
					<div id="footerLeftCopywrightC">
						<div id="footerLeftCopywrightTextC">
							<p id="footerLeftCopywrightTextP">&#169; 2022 All Rights Reserved.</p>
						</div>
					</div>
					<div id="footerRightEmailC">
						<div id="footerRightEmailTextC">
							<p id="footerRightEmailTextP">Email: <span><a href="mailto:vasilisfzembilas@gmail.com" style="text-decoration: none;">vasilisfzembilas@gmail.com</a></span></p>
						</div>
					</div>
				</div>
			`;
		}
	}