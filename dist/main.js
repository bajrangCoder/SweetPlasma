/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/html-tag-js@1.1.22/node_modules/html-tag-js/dist/tag.js":
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/html-tag-js@1.1.22/node_modules/html-tag-js/dist/tag.js ***!
  \************************************************************************************/
/***/ (function(module) {

eval("!function (e, t) {\n   true ? module.exports = t() : 0;\n}(this, function () {\n  return function () {\n    \"use strict\";\n\n    var e = {\n        d: function (t, n) {\n          for (var r in n) e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, {\n            enumerable: !0,\n            get: n[r]\n          });\n        },\n        o: function (e, t) {\n          return Object.prototype.hasOwnProperty.call(e, t);\n        }\n      },\n      t = {};\n    function n(e, t) {\n      t instanceof Node || (t = r.text(\"\".concat(t))), t instanceof Text && \"clone\" in t && (t = t.clone()), e.append(t);\n    }\n    function r(e) {\n      let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      return \"string\" == typeof t && (t = {\n        innerHTML: t\n      }), function (e) {\n        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n        let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n        let o;\n        if (\"function\" == typeof e) return e(t, r);\n        if (e instanceof Node) o = e;else {\n          if (\"string\" != typeof e) throw new Error(\"Invalid tag, \", typeof e);\n          o = document.createElement(e);\n        }\n        return Object.keys(t).forEach(e => {\n          const r = t[e];\n          if (void 0 !== r) switch (e) {\n            case \"child\":\n              n(o, r);\n              break;\n            case \"children\":\n              if (!Array.isArray(r)) throw new Error(\"children must be an array of Nodes\");\n              r.flat().forEach(e => {\n                n(o, e);\n              });\n              break;\n            case \"attr\":\n              Object.keys(r).forEach(e => {\n                o.setAttribute(e, r[e]);\n              });\n              break;\n            case \"style\":\n            case \"dataset\":\n              Object.keys(r).forEach(t => {\n                o[e][t] = r[t];\n              });\n              break;\n            default:\n              o[e] = r;\n          }\n        }), o;\n      }(e, t);\n    }\n    return e.d(t, {\n      default: function () {\n        return r;\n      }\n    }), Object.defineProperties(r, {\n      get: {\n        value: e => document.querySelector(e)\n      },\n      getAll: {\n        value: e => [...document.querySelectorAll(e)]\n      },\n      parse: {\n        value(e) {\n          const t = document.createElement(\"div\");\n          return t.innerHTML = e, 1 === t.childElementCount ? t.firstElementChild : [...t.children];\n        }\n      },\n      text: {\n        value: e => document.createTextNode(e)\n      },\n      use: {\n        value(e) {\n          let t = e,\n            n = !1;\n          const r = document.createTextNode(e),\n            o = [r];\n          return Object.defineProperty(r, \"value\", {\n            set(e) {\n              t = e, o.forEach(t => {\n                t.textContent = e;\n              });\n            },\n            get: () => t\n          }), Object.defineProperty(r, \"clone\", {\n            value() {\n              if (!n) return n = !0, r;\n              const e = r.cloneNode();\n              return o.push(e), e;\n            }\n          }), r;\n        }\n      }\n    }), t.default;\n  }();\n});\n\n//# sourceURL=webpack://acode-plugin/./node_modules/.pnpm/html-tag-js@1.1.22/node_modules/html-tag-js/dist/tag.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var html_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! html-tag-js */ \"./node_modules/.pnpm/html-tag-js@1.1.22/node_modules/html-tag-js/dist/tag.js\");\n/* harmony import */ var html_tag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(html_tag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _plugin_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plugin.json */ \"./plugin.json\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _icon_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon.css */ \"./src/icon.css\");\n/* harmony import */ var _customStyles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customStyles.scss */ \"./src/customStyles.scss\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nconst themes=acode.require(\"themes\");const ThemeBuilder=acode.require(\"themeBuilder\");const settings=acode.require(\"settings\");const{editor}=editorManager;const editorThemeName=\"sweet-plasma\";ace.define(\"ace/theme/\".concat(editorThemeName,\".css\"),[\"require\",\"exports\",\"module\"],function(require,exports,module){module.exports=_style_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"];}),ace.define(\"ace/theme/\".concat(editorThemeName),[\"require\",\"exports\",\"module\",\"ace/theme/\".concat(editorThemeName,\".css\"),\"ace/lib/dom\"],function(require,exports,module){exports.isDark=!0,exports.cssClass=\"ace-\".concat(editorThemeName),exports.cssText=require(\"./\".concat(editorThemeName,\".css\"));const dom=require(\"../lib/dom\");dom.importCssString(exports.cssText,exports.cssClass,!1);});(function(){window.require([\"ace/theme/\"+editorThemeName],function(m){if( true&&typeof exports==\"object\"&&module){module.exports=m;}});})();class AcodePlugin{constructor(){if(!settings.value[_plugin_json__WEBPACK_IMPORTED_MODULE_1__.id]){settings.value[_plugin_json__WEBPACK_IMPORTED_MODULE_1__.id]={themeIcon:true,fileTabAnimation:true,floatingBtnAnimation:true};settings.update(false);}}async init(){try{this.$iconsStyle=html_tag_js__WEBPACK_IMPORTED_MODULE_0___default()(\"style\",{textContent:_icon_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"],children:[],attr:{}});this.$customStyle=html_tag_js__WEBPACK_IMPORTED_MODULE_0___default()(\"style\",{textContent:_customStyles_scss__WEBPACK_IMPORTED_MODULE_4__[\"default\"],children:[],attr:{}});document.head.append(this.$iconsStyle,this.$customStyle);const sweetPlasma=new ThemeBuilder(\"Sweet Plasma\",\"dark\",\"free\");sweetPlasma.primaryColor=\"#1e1e2e\";sweetPlasma.darkenedPrimaryColor=\"#1A161F\";sweetPlasma.primaryTextColor=\"#FFFFFF\";sweetPlasma.secondaryColor=\"#222235\";sweetPlasma.secondaryTextColor=\"#D3D3D3\";sweetPlasma.activeColor=\"#BE93D4\";sweetPlasma.activeIconColor=\"#BE93D4\";sweetPlasma.linkTextColor=\"#7E57C2\";sweetPlasma.errorTextColor=\"#f60055\";sweetPlasma.borderColor=\"#3F3F54\";sweetPlasma.borderRadius=\"8px\";sweetPlasma.popupBorderRadius=\"6px\";sweetPlasma.popupIconColor=\"#FFFFFF\";sweetPlasma.popupBackgroundColor=\"#1e1e2e\";sweetPlasma.popupTextColor=\"#D3D3D3\";sweetPlasma.popupActiveColor=\"#7E57C2\";sweetPlasma.popupBorderColor=\"#9700be27\";sweetPlasma.boxShadowColor=\"rgba(0, 0, 0, 0.3)\";sweetPlasma.scrollbarColor=\"#ffffff12\";sweetPlasma.buttonActiveColor=\"#a160ed\";sweetPlasma.buttonBackgroundColor=\"#9700be\";sweetPlasma.buttonTextColor=\"#FFFFFF\";themes.add(sweetPlasma);ace.require(\"ace/ext/themelist\").themes.push({caption:editorThemeName.split(\"-\").map(name=>name[0].toUpperCase()+name.slice(1)).join(\" \"),theme:\"ace/theme/\"+editorThemeName,isDark:true});const currentTheme=settings.get(\"editorTheme\");if(currentTheme===editorThemeName)editor.setTheme(\"ace/theme/\"+editorThemeName);settings.on(\"update\",this.onThemeChange);if(!this.plugSettings.themeIcon){this.$iconsStyle.remove();}this.onAnimationChange();}catch(error){acode.alert(\"Warning\",\"Please restart acode\");}}onAnimationChange(){const fileList=document.querySelector(\".open-file-list\");const activeTile=fileList.querySelector(\".tile.active\");if(this.plugSettings.fileTabAnimation){activeTile.style.animation=\"changeColor 5s infinite alternate,glowingEffect 2s infinite alternate\";}else{activeTile.style.animation=\"\";}const floatingIcon=document.getElementById('quicktools-toggler');if(this.plugSettings.floatingBtnAnimation){floatingIcon.classList.remove(\"no_animation\");floatingIcon.style.setProperty(\"--floating-btn-animation\",\"steam 20s linear infinite\");}else{floatingIcon.style.setProperty(\"--floating-btn-animation\",\"\");floatingIcon.classList.add(\"no_animation\");}}onThemeChange(value){if(value===\"ace/theme/\"+editorThemeName){editor.setTheme(\"ace/theme/\"+editorThemeName);settings.update({editorTheme:editorThemeName});}}get settingsObj(){return{list:[{key:\"themeIcon\",text:\"Enable Theme Icon\",checkbox:this.plugSettings.themeIcon,info:\"If set to \\\"true\\\" means checked, then it will add a some icon to acode and that will match Sweet Plasma schema. If set to \\\"false\\\" means unchecked then theme icon will not be applied\"},{key:\"fileTabAnimation\",text:\"Enable File Tab animation\",checkbox:this.plugSettings.fileTabAnimation,info:\"If set to \\\"true\\\" means checked, then it will add a beautiful glowing effect to it. If set to \\\"false\\\" means unchecked then animation will not be applied\"},{key:\"floatingBtnAnimation\",text:\"Enable Quicktools toggler anination\",checkbox:this.plugSettings.floatingBtnAnimation,info:\"If set to \\\"true\\\" means checked, then it will add a beautiful glowing effect to it. If set to \\\"false\\\" means unchecked then animation will not be applied\"}],cb:(key,value)=>{this.plugSettings[key]=value;settings.update();if(this.plugSettings.themeIcon){document.head.append(this.$iconsStyle);}else{this.$iconsStyle.remove();}acode.alert(\"Warning\",\"Please restart acode\");}};}get plugSettings(){return settings.value[_plugin_json__WEBPACK_IMPORTED_MODULE_1__.id];}async destroy(){settings.off(\"update\",this.onThemeChange);this.$iconsStyle.remove();this.$customStyle.remove();delete settings.value[_plugin_json__WEBPACK_IMPORTED_MODULE_1__.id];settings.update(false);}}if(window.acode){const acodePlugin=new AcodePlugin();acode.setPluginInit(_plugin_json__WEBPACK_IMPORTED_MODULE_1__.id,async(baseUrl,$page,_ref)=>{let{cacheFileUrl,cacheFile}=_ref;if(!baseUrl.endsWith(\"/\")){baseUrl+=\"/\";}acodePlugin.baseUrl=baseUrl;await acodePlugin.init($page,cacheFile,cacheFileUrl);},acodePlugin.settingsObj);acode.setPluginUnmount(_plugin_json__WEBPACK_IMPORTED_MODULE_1__.id,()=>{acodePlugin.destroy();});}\n\n//# sourceURL=webpack://acode-plugin/./src/main.js?");

/***/ }),

/***/ "./src/customStyles.scss":
/*!*******************************!*\
  !*** ./src/customStyles.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"root {\\n  --floating-btn-animation: \\\"steam 20s linear infinite\\\";\\n}\\n\\n.open-file-list {\\n  box-shadow: 0 3px 5px #1e1e2e;\\n}\\n\\n.open-file-list li.tile.active {\\n  border-top: 2px solid #9700be;\\n  -o-border-image: linear-gradient(45deg, #ec89cb, #9700be, #ec89cb, #9700be) 1;\\n     border-image: linear-gradient(45deg, #ec89cb, #9700be, #ec89cb, #9700be) 1;\\n  border-image-slice: 1;\\n  animation: changeColor 5s infinite alternate, glowingEffect 2s infinite alternate;\\n}\\n\\n@keyframes changeColor {\\n  0% {\\n    -o-border-image: linear-gradient(to right, #f60055, #9f6) 1;\\n       border-image: linear-gradient(to right, #f60055, #9f6) 1;\\n  }\\n  50% {\\n    -o-border-image: linear-gradient(to right, #9700be, #ec89cb) 1;\\n       border-image: linear-gradient(to right, #9700be, #ec89cb) 1;\\n  }\\n  100% {\\n    -o-border-image: linear-gradient(to right, #f60, #f96) 1;\\n       border-image: linear-gradient(to right, #f60, #f96) 1;\\n  }\\n}\\n@keyframes glowingEffect {\\n  0%, 100% {\\n    box-shadow: 0 0 10px #9700be;\\n  }\\n  50% {\\n    box-shadow: 0 0 20px #9700be;\\n  }\\n}\\n/*****\\nFloating icon\\n*****/\\nspan#quicktools-toggler .no_animation {\\n  -o-border-image: linear-gradient(45deg, #ec89cb, #9700be, #ec89cb, #9700be) 1;\\n     border-image: linear-gradient(45deg, #ec89cb, #9700be, #ec89cb, #9700be) 1;\\n  border-image-slice: 1;\\n  border-radius: 50%;\\n}\\nspan#quicktools-toggler:before {\\n  background-color: var(--primary-color);\\n  height: 100%;\\n  width: 100%;\\n  display: grid;\\n  place-items: center;\\n  border-radius: inherit;\\n}\\nspan#quicktools-toggler:after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  inset: -4px !important;\\n  background: linear-gradient(45deg, #ec89cb, blue, #9700be, #f60055, #ec89cb, blue, #9700be, #f60055);\\n  z-index: -1;\\n  border-radius: inherit;\\n  background-size: 400%;\\n  filter: blur(10px);\\n  animation: var(--floating-btn-animation);\\n}\\n\\n@keyframes steam {\\n  0% {\\n    background-position: 0 0;\\n  }\\n  50% {\\n    background-position: 400% 0;\\n  }\\n  100% {\\n    background-position: 0 0;\\n  }\\n}\");\n\n//# sourceURL=webpack://acode-plugin/./src/customStyles.scss?");

/***/ }),

/***/ "./src/icon.css":
/*!**********************!*\
  !*** ./src/icon.css ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"/****\\nFolder icons\\n****/\\n.icon.folder:before {\\n  display: inline-block;\\n  content: \\\"\\\";\\n  background-image: url(\\\"https://localhost/__cdvfile_files-external__/plugins/bajrangcoder.sweet/folder_dark.svg\\\");\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n  height: 1em;\\n  width: 1em;\\n}\\n\\n.list.collapsible.hidden .tile .icon.folder:before {\\n  display: inline-block;\\n  content: \\\"\\\";\\n  color: transparent;\\n  background-image: url(\\\"https://localhost/__cdvfile_files-external__/plugins/bajrangcoder.sweet/folder_dark.svg\\\");\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n  height: 1em;\\n  width: 1em;\\n}\\n\\n.list.collapsible .tile .icon.folder:before {\\n  display: inline-block;\\n  content: \\\"\\\";\\n  background-image: url(\\\"https://localhost/__cdvfile_files-external__/plugins/bajrangcoder.sweet/folder-open_dark.svg\\\");\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n  height: 1em;\\n  width: 1em;\\n}\\n\\n.context-menu .folder:before {\\n  content: \\\"\\\\e92a\\\";\\n  background: transparent;\\n}\\n\\n.file_type_image:before {\\n  display: inline-block;\\n  content: \\\"\\\";\\n  background-image: url(\\\"https://localhost/__cdvfile_files-external__/plugins/bajrangcoder.sweet/image_light.svg\\\");\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n  height: 1em;\\n  width: 1em;\\n}\");\n\n//# sourceURL=webpack://acode-plugin/./src/icon.css?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"/***\\n  .ace-sweet-plasma\\n ***/\\n.ace-sweet-plasma {\\n  color: #ffffff;\\n  background-color: #1e1e2e;\\n  /**\\n  * keywords\\n  * for example if else \\n  * ID in css\\n  */\\n  /**\\n  * Don't change indent guide \\n  */\\n  /**\\n   * All the highlight rules bellow require extra syntax highlight plugin\\n  **/\\n}\\n.ace-sweet-plasma .ace_gutter {\\n  color: #3a3a4c;\\n  background-color: #1e1e2e;\\n}\\n.ace-sweet-plasma .ace_gutter-active-line {\\n  font-weight: 700;\\n  color: #efdc35;\\n}\\n.ace-sweet-plasma .ace_print-margin {\\n  width: 1px;\\n  background: #2d363f;\\n}\\n.ace-sweet-plasma .ace_cursor {\\n  background: rgba(0, 0, 0, 0);\\n  color: #ffffff;\\n}\\n.ace-sweet-plasma .ace_marker-layer .ace_selection {\\n  background: #66667A;\\n  border-radius: 4px;\\n  font-style: italic;\\n}\\n.ace-sweet-plasma .ace_multiselect .ace_selection.ace_start {\\n  box-shadow: 0 0 3px black;\\n}\\n.ace-sweet-plasma .ace_marker-layer .ace_step {\\n  background: rgb(198, 219, 174);\\n}\\n.ace-sweet-plasma .ace_marker-layer .ace_bracket {\\n  margin: -1px 0 0 -1px;\\n  border: 1px solid #3f3f54;\\n}\\n.ace-sweet-plasma .ace_marker-layer .ace_active-line {\\n  border: 1px solid rgba(0, 0, 0, 0);\\n  box-sizing: border-box;\\n  background: rgba(255, 255, 255, 0.0470588235);\\n}\\n.ace-sweet-plasma .ace_marker-layer .ace_selected-word {\\n  background-color: #3f3f54;\\n  border: 1px solid #9700be;\\n}\\n.ace-sweet-plasma .ace_invisible {\\n  color: #52524d;\\n}\\n.ace-sweet-plasma .hljs-keyword,\\n.ace-sweet-plasma .ace_keyword {\\n  color: #f60055;\\n}\\n.ace-sweet-plasma .ace_keyword.ace_operator {\\n  color: #f69154;\\n}\\n.ace-sweet-plasma .ace_constant.ace_language {\\n  color: #ec89cb;\\n}\\n.ace-sweet-plasma .ace_constant.ace_numeric {\\n  color: #ec89cb;\\n}\\n.ace-sweet-plasma .ace_constant.ace_character {\\n  color: #bd93f9;\\n}\\n.ace-sweet-plasma .ace_constant.ace_character.ace_escape {\\n  color: #ec89cb;\\n}\\n.ace-sweet-plasma .ace_constant.ace_other {\\n  color: #ffffff;\\n}\\n.ace-sweet-plasma .hljs-title,\\n.ace-sweet-plasma .ace_identifier {\\n  color: #ffffff;\\n}\\n.ace-sweet-plasma .ace_support.ace_function {\\n  color: #06c993;\\n}\\n.ace-sweet-plasma .ace_support.ace_function.ace_dom {\\n  color: #00dded;\\n}\\n.ace-sweet-plasma .ace_support.ace_constant {\\n  color: #bd93f9;\\n}\\n.ace-sweet-plasma .ace_class {\\n  color: #00dded;\\n}\\n.ace-sweet-plasma .ace_variable.ace_language {\\n  color: #efdc35;\\n}\\n.ace-sweet-plasma .ace_support.ace_type {\\n  color: #00dded;\\n}\\n.ace-sweet-plasma .ace_meta.ace_tag {\\n  color: #f60055;\\n}\\n.ace-sweet-plasma .ace_storage {\\n  font-style: \\\"italic\\\";\\n  color: #f60055;\\n}\\n.ace-sweet-plasma .ace_storage.ace_type {\\n  color: #00dded;\\n}\\n.ace-sweet-plasma .ace_invalid {\\n  color: #f8f8f0;\\n  background-color: #ff79c6;\\n}\\n.ace-sweet-plasma .ace_invalid.ace_deprecated {\\n  color: #f8f8f0;\\n  background-color: #bd93f9;\\n}\\n.ace-sweet-plasma .ace_string {\\n  color: #c95ae5;\\n}\\n.ace-sweet-plasma .ace_comment {\\n  color: #3F3F54;\\n}\\n.ace-sweet-plasma .ace_variable {\\n  color: #efdc35;\\n}\\n.ace-sweet-plasma .ace_constant {\\n  color: #ec89cb;\\n}\\n.ace-sweet-plasma .hljs-params,\\n.ace-sweet-plasma .ace_variable.ace_parameter {\\n  color: #f69154;\\n}\\n.ace-sweet-plasma .ace_entity.ace_other.ace_attribute-name {\\n  color: #00dded;\\n}\\n.ace-sweet-plasma .ace_xml-pe.ace_xml,\\n.ace-sweet-plasma .ace_punctuation.ace_tag {\\n  color: #f69154;\\n}\\n.ace-sweet-plasma .ace_tag-name.ace_tag,\\n.ace-sweet-plasma .ace_entity.ace_name.ace_tag {\\n  color: #f60055;\\n}\\n.ace-sweet-plasma .ace_paren {\\n  color: #ec89cb;\\n}\\n.ace-sweet-plasma .ace_indent-guide {\\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ09NrYAgMjP4PAAtGAwchHMyAAAAAAElFTkSuQmCC) right repeat-y;\\n}\\n.ace-sweet-plasma .ace_indent-guide-active {\\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;\\n}\\n.ace-sweet-plasma .ace_support.ace_constant.ace_js {\\n  color: #f69154;\\n}\\n.ace-sweet-plasma .ace_entity.ace_name.ace_function {\\n  color: #ec89cb;\\n}\\n.ace-sweet-plasma .ace_support.ace_constant.ace_css-in-js {\\n  color: #9700be;\\n}\");\n\n//# sourceURL=webpack://acode-plugin/./src/style.scss?");

/***/ }),

/***/ "./plugin.json":
/*!*********************!*\
  !*** ./plugin.json ***!
  \*********************/
/***/ (function(module) {

"use strict";
eval("module.exports = JSON.parse('{\"id\":\"bajrangcoder.sweet\",\"name\":\"SweetPlasma\",\"main\":\"dist/main.js\",\"version\":\"1.0.0\",\"readme\":\"readme.md\",\"icon\":\"icon.png\",\"files\":[],\"minVersionCode\":290,\"price\":0,\"author\":{\"name\":\"Raunak Raj\",\"email\":\"bajrangcoders@gmail.com\",\"github\":\"bajrangCoder\"}}');\n\n//# sourceURL=webpack://acode-plugin/./plugin.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.hmd = function(module) {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: function() {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;