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
			if (this.$URL != ''){
				fetch(this.$URL)
				.then( function(response) {
					console.log(response.status); // Will show you the status
					changedProperties["response_code"] = response.status;
				if (!response.ok) {
					throw new Error("HTTP status " + response.status);
				}
				console.log(response.json());
				changedProperties["response_body"] = response.json();
				return response.json();
			});
			}else{
				console.log('NO WS');
			}
			this._props = { ...this._props, ...changedProperties };
        }
    })
}();