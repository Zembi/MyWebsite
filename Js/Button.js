	//BUTTON CLASS
	class Button {
		constructor(id, status) {
			this.id = id;
			this.status = status;
		}

		getButtonElmnt() {
			var id = this.id;
			return document.getElementById(id);
		}

		getStatus() {
			return this.status;
		}

		setStatus(newStatus) {
			this.status = newStatus;
		}
	}

