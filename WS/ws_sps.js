(function() {
	let template = document.createElement("template");
	template.innerHTML = `
		<form id="form"></form>
	`;
	class SDG_WS_SPS extends HTMLElement {
		constructor() {
			super();

		}
		
		_submit(e) {

		}
	}
	
	customElements.define("com-sdg-ws-sps", SDG_WS_SPS);
})();