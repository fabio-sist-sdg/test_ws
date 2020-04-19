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
		}
        onCustomWidgetAfterUpdate(changedProperties) {
			if ("URL" in changedProperties) {
				this.$URL = changedProperties["URL"];
			}
			this.callWS(this.$URL);
			this.$response_body = 'Pippo';
			//this.$response_body = this.callWS(this.$URL);
        }
        callWS(t) {
			if (t!= ''){
				fetch(t)
				.then( function(response) {
					console.log(response.status); // Will show you the status
				if (!response.ok) {
					throw new Error("HTTP status " + response.status);
				}
				return response.json();
			});
			}else{
				console.log('NO WS');
			}
			
        }
    })
}();