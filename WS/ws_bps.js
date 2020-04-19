(function() {
	let template = document.createElement("template");
	template.innerHTML = `
		<form id="form"></form>
	`;
	class SDG_WS_BPS extends HTMLElement {
		constructor() {
			super();
		}
		_submit(e) {
		}
	}
	
	customElements.define("com-sdg-ws-bps", SDG_WS_BPS);
})();