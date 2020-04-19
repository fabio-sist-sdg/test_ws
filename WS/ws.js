! function() {
    let t = document.createElement("template");
    t.innerHTML = "<button type=button id = mybutton>Click Me!</button>";
    customElements.define("com-sdg-ws", class extends HTMLElement {
        constructor() {
            super(), this.attachShadow({
                mode: "open"
            }).appendChild(t.content.cloneNode(!0)), this.addEventListener("click", t => {
                t = new Event("onClick"), this.dispatchEvent(t)
            }), this._props = {}
        }
        onCustomWidgetBeforeUpdate(changedProperties) {
			this._props = { ...this._props, ...changedProperties };
			console.log(this._props);
		}
        onCustomWidgetAfterUpdate(changedProperties) {
			if ("URL" in changedProperties) {
				this.$URL = changedProperties["URL"];
			}
			if (this.$URL!= ''){
				let response = fetch(this.$URL);
				if (response.ok) { // if HTTP-status is 200-299
					// get the response body (the method explained below)
					let json = response.json();
				} else {
					alert("HTTP-Error: " + response.status);
				}
			}else{
				console.log('NO WS');
			}
			changedProperties["response_body"] = json;
			changedProperties["response_code"] = response.status;
			this._props = { ...this._props, ...changedProperties };
        }
    })
}();