/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	

	var baseUrl = '///xhcksbey3k.execute-api.us-east-1.amazonaws.com/prod/notebook-resource/';

	var CodeSnippet = React.createClass({
				displayName: "CodeSnippet",


				getDefaultProps: function () {
							code: null;
				},
				getInitialState: function () {
							return {
										state: this.props.code
							};
				},

				updateCode: function (event) {
							this.setState({
										code: event.target.value
							});
				},
				render: function () {
							return React.createElement(
										"p",
										null,
										React.createElement("textarea", { rows: "5", cols: "100", defaultValue: this.props.code, onChange: this.updateCode })
							);
				}
	});

	var CodeResult = React.createClass({
				displayName: "CodeResult",


				getDefaultProps: function () {
							result: null;
				},
				render: function () {
							return React.createElement(
										"div",
										null,
										React.createElement(
													"h2",
													null,
													"Output"
										),
										React.createElement(
													"pre",
													{ className: "code-result" },
													this.props.result
										)
							);
				}
	});

	var LiveCode = React.createClass({
				displayName: "LiveCode",


				getDefaultProps: function () {
							code: null;
				},

				getInitialState: function () {
							return {
										result: null
							};
				},
				loadFromCode: function () {
							this.loadData(this.refs.codesnippet.state.code);
				},

				loadData: function (code) {
							var data = JSON.stringify({ code: code });
							jQuery.support.cors = true;
							$.ajax({ url: baseUrl,
										type: 'post',
										beforeSend: function (request) {
													request.setRequestHeader('Access-Control-Allow-Headers', 'x-requested-with');
										},
										data: data,
										crossDomain: true,
										success: function (result) {
													console.log(result);
													this.setState({
																result: result
													});
										}.bind(this),
										error: function (xhr, status, err) {
													console.error(this.props.url, status, err.toString());
										}.bind(this)
							});
				},

				componentDidMount: function () {
							this.loadData(this.props.code);
				},

				componentWillUnmount: function () {
							this.r.abort();
				},

				render: function () {
							var sample1 = "for i in range(0, 5):\n\tprint('Something')";
							var sample2 = "print(list(reversed(range(1, 10))))";

							return React.createElement(
										"div",
										null,
										React.createElement("br", null),
										React.createElement(
													"h1",
													null,
													"Interactive coding sample"
										),
										React.createElement(
													"p",
													null,
													"Python is totally amazing. You can try all kinds of interesting live-code things in it."
										),
										React.createElement(
													"p",
													null,
													"Some sample Python to try:"
										),
										React.createElement(
													"h4",
													null,
													"Print something 5 times"
										),
										React.createElement(
													"pre",
													null,
													sample1
										),
										React.createElement(
													"h4",
													null,
													"Count from 10 backwards"
										),
										React.createElement(
													"pre",
													null,
													sample2
										),
										React.createElement("br", null),
										React.createElement(CodeSnippet, { ref: "codesnippet", code: this.props.code }),
										React.createElement(
													"p",
													null,
													React.createElement(
																"button",
																{ type: "button", className: "info button", onClick: this.loadFromCode },
																"Run code"
													)
										),
										React.createElement(CodeResult, { result: this.state.result })
							);
				}
	});

	ReactDOM.render(React.createElement(LiveCode, { code: "" }), document.getElementById('codetest'));

/***/ }
/******/ ]);