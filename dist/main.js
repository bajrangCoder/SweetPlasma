!function(){var e={22:function(e){e.exports=function(){"use strict";var e={d:function(a,t){for(var o in t)e.o(t,o)&&!e.o(a,o)&&Object.defineProperty(a,o,{enumerable:!0,get:t[o]})},o:function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}},a={};function t(e,a){a instanceof Node||(a=o.text("".concat(a))),a instanceof Text&&"clone"in a&&(a=a.clone()),e.append(a)}function o(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof a&&(a={innerHTML:a}),function(e){let a,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("function"==typeof e)return e(o,arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]);if(e instanceof Node)a=e;else{if("string"!=typeof e)throw new Error("Invalid tag, ",typeof e);a=document.createElement(e)}return Object.keys(o).forEach((e=>{const n=o[e];if(void 0!==n)switch(e){case"child":t(a,n);break;case"children":if(!Array.isArray(n))throw new Error("children must be an array of Nodes");n.flat().forEach((e=>{t(a,e)}));break;case"attr":Object.keys(n).forEach((e=>{a.setAttribute(e,n[e])}));break;case"style":case"dataset":Object.keys(n).forEach((t=>{a[e][t]=n[t]}));break;default:a[e]=n}})),a}(e,a)}return e.d(a,{default:function(){return o}}),Object.defineProperties(o,{get:{value:e=>document.querySelector(e)},getAll:{value:e=>[...document.querySelectorAll(e)]},parse:{value(e){const a=document.createElement("div");return a.innerHTML=e,1===a.childElementCount?a.firstElementChild:[...a.children]}},text:{value:e=>document.createTextNode(e)},use:{value(e){let a=e,t=!1;const o=document.createTextNode(e),n=[o];return Object.defineProperty(o,"value",{set(e){a=e,n.forEach((a=>{a.textContent=e}))},get:()=>a}),Object.defineProperty(o,"clone",{value(){if(!t)return t=!0,o;const e=o.cloneNode();return n.push(e),e}}),o}}}),a.default}()},190:function(e,a,t){"use strict";var o=t(22),n=t.n(o),c=JSON.parse('{"id":"bajrangcoder.sweet"}');e=t.hmd(e);const r=acode.require("themes"),i=acode.require("themeBuilder"),l=acode.require("settings"),{editor:s}=editorManager,d="sweet-plasma";ace.define("ace/theme/".concat(d,".css"),["require","exports","module"],(function(e,a,t){t.exports='.ace-sweet-plasma{color:#fff;background-color:#1e1e2e}.ace-sweet-plasma .ace_gutter{color:gray;background-color:#1e1e2e}.ace-sweet-plasma .ace_gutter-active-line{font-weight:700;color:#efdc35}.ace-sweet-plasma .ace_print-margin{width:1px;background:#2d363f}.ace-sweet-plasma .ace_cursor{background:rgba(0,0,0,0);color:#fff}.ace-sweet-plasma .ace_marker-layer .ace_selection{background:#87879f;border-radius:4px;font-style:italic}.ace-sweet-plasma .ace_multiselect .ace_selection.ace_start{box-shadow:0 0 3px #000}.ace-sweet-plasma .ace_marker-layer .ace_step{background:#c6dbae}.ace-sweet-plasma .ace_marker-layer .ace_bracket{margin:-1px 0 0 -1px;border:1px solid #3f3f54}.ace-sweet-plasma .ace_marker-layer .ace_active-line{border:1px solid rgba(0,0,0,0);box-sizing:border-box;background:rgba(255,255,255,.0470588235)}.ace-sweet-plasma .ace_marker-layer .ace_selected-word{background-color:#3f3f54;border:1px solid #9700be}.ace-sweet-plasma .ace_invisible{color:#52524d}.ace-sweet-plasma .hljs-keyword,.ace-sweet-plasma .ace_keyword{color:#f60055}.ace-sweet-plasma .ace_keyword.ace_operator{color:#f69154}.ace-sweet-plasma .ace_constant.ace_language{color:#ec89cb}.ace-sweet-plasma .ace_constant.ace_numeric{color:#ec89cb}.ace-sweet-plasma .ace_constant.ace_character{color:#bd93f9}.ace-sweet-plasma .ace_constant.ace_character.ace_escape{color:#ec89cb}.ace-sweet-plasma .ace_constant.ace_other{color:#fff}.ace-sweet-plasma .hljs-title,.ace-sweet-plasma .ace_identifier{color:#fff}.ace-sweet-plasma .ace_support.ace_function{color:#06c993}.ace-sweet-plasma .ace_support.ace_function.ace_dom{color:#00dded}.ace-sweet-plasma .ace_support.ace_constant{color:#bd93f9}.ace-sweet-plasma .ace_class{color:#00dded}.ace-sweet-plasma .ace_variable.ace_language{color:#efdc35}.ace-sweet-plasma .ace_support.ace_type{color:#00dded}.ace-sweet-plasma .ace_meta.ace_tag{color:#f60055}.ace-sweet-plasma .ace_storage{font-style:"italic";color:#f60055}.ace-sweet-plasma .ace_storage.ace_type{color:#00dded}.ace-sweet-plasma .ace_invalid{color:#f8f8f0;background-color:#ff79c6}.ace-sweet-plasma .ace_invalid.ace_deprecated{color:#f8f8f0;background-color:#bd93f9}.ace-sweet-plasma .ace_string{color:#c95ae5}.ace-sweet-plasma .ace_comment{color:#5f5f7f}.ace-sweet-plasma .ace_variable{color:#efdc35}.ace-sweet-plasma .ace_constant{color:#ec89cb}.ace-sweet-plasma .hljs-params,.ace-sweet-plasma .ace_variable.ace_parameter{color:#f69154}.ace-sweet-plasma .ace_entity.ace_other.ace_attribute-name{color:#00dded}.ace-sweet-plasma .ace_xml-pe.ace_xml,.ace-sweet-plasma .ace_punctuation.ace_tag{color:#f69154}.ace-sweet-plasma .ace_tag-name.ace_tag,.ace-sweet-plasma .ace_entity.ace_name.ace_tag{color:#f60055}.ace-sweet-plasma .ace_paren{color:#ec89cb}.ace-sweet-plasma .ace_indent-guide{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ09NrYAgMjP4PAAtGAwchHMyAAAAAAElFTkSuQmCC) right repeat-y}.ace-sweet-plasma .ace_indent-guide-active{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y}.ace-sweet-plasma .ace_support.ace_constant.ace_js{color:#f69154}.ace-sweet-plasma .ace_entity.ace_name.ace_function{color:#ec89cb}.ace-sweet-plasma .ace_support.ace_constant.ace_css-in-js{color:#9700be}'})),ace.define("ace/theme/".concat(d),["require","exports","module","ace/theme/".concat(d,".css"),"ace/lib/dom"],(function(e,a,t){a.isDark=!0,a.cssClass="ace-".concat(d),a.cssText=e("./".concat(d,".css")),e("../lib/dom").importCssString(a.cssText,a.cssClass,!1)})),window.require(["ace/theme/"+d],(function(a){"object"==typeof exports&&e&&(e.exports=a)}));class p{constructor(){l.value[c.id]||(l.value[c.id]={themeIcon:!0,fileTabAnimation:!0,floatingBtnAnimation:!0},l.update(!1))}async init(){try{this.$iconsStyle=n()("style",{textContent:'.icon.folder:before{display:inline-block;content:"";background-image:url("https://localhost/__cdvfile_files-external__/plugins/bajrangcoder.sweet/folder_dark.svg");background-size:contain;background-repeat:no-repeat;height:1em;width:1em}.list.collapsible.hidden .tile .icon.folder:before{display:inline-block;content:"";color:rgba(0,0,0,0);background-image:url("https://localhost/__cdvfile_files-external__/plugins/bajrangcoder.sweet/folder_dark.svg");background-size:contain;background-repeat:no-repeat;height:1em;width:1em}.list.collapsible .tile .icon.folder:before{display:inline-block;content:"";background-image:url("https://localhost/__cdvfile_files-external__/plugins/bajrangcoder.sweet/folder-open_dark.svg");background-size:contain;background-repeat:no-repeat;height:1em;width:1em}.context-menu .folder:before{content:"";background:rgba(0,0,0,0)}.file_type_image:before{display:inline-block;content:"";background-image:url("https://localhost/__cdvfile_files-external__/plugins/bajrangcoder.sweet/image_light.svg");background-size:contain;background-repeat:no-repeat;height:1em;width:1em}',children:[],attr:{}}),this.$customStyle=n()("style",{textContent:'root{--floating-btn-animation: "steam 20s linear infinite";--open-filelist-animation: "changeColor 5s infinite alternate,glowingEffect 2s infinite alternate" }.open-file-list{box-shadow:0 3px 5px #1e1e2e}.open-file-list li.tile.active{border-top:2px solid #9700be;-o-border-image:linear-gradient(45deg, #ec89cb, #9700be, #ec89cb, #9700be) 1;border-image:linear-gradient(45deg, #ec89cb, #9700be, #ec89cb, #9700be) 1;border-image-slice:1;animation:var(--open-filelist-animation)}@keyframes changeColor{0%{-o-border-image:linear-gradient(to right, #f60055, #9f6) 1;border-image:linear-gradient(to right, #f60055, #9f6) 1}50%{-o-border-image:linear-gradient(to right, #9700be, #ec89cb) 1;border-image:linear-gradient(to right, #9700be, #ec89cb) 1}100%{-o-border-image:linear-gradient(to right, #f60, #f96) 1;border-image:linear-gradient(to right, #f60, #f96) 1}}@keyframes glowingEffect{0%,100%{box-shadow:0 0 10px #9700be}50%{box-shadow:0 0 20px #9700be}}span#quicktools-toggler .no_animation{-o-border-image:linear-gradient(45deg, #ec89cb, #9700be, #ec89cb, #9700be) 1;border-image:linear-gradient(45deg, #ec89cb, #9700be, #ec89cb, #9700be) 1;border-image-slice:1;border-radius:50%}span#quicktools-toggler:before{background-color:var(--primary-color);height:100%;width:100%;display:grid;place-items:center;border-radius:inherit}span#quicktools-toggler:after{content:"";position:absolute;inset:-4px !important;background:linear-gradient(45deg, #ec89cb, blue, #9700be, #f60055, #ec89cb, blue, #9700be, #f60055);z-index:-1;border-radius:inherit;background-size:400%;filter:blur(10px);animation:var(--floating-btn-animation)}@keyframes steam{0%{background-position:0 0}50%{background-position:400% 0}100%{background-position:0 0}}',children:[],attr:{}}),document.head.append(this.$iconsStyle,this.$customStyle);const e=new i("Sweet Plasma","dark","free");e.primaryColor="#1e1e2e",e.darkenedPrimaryColor="#1A161F",e.primaryTextColor="#FFFFFF",e.secondaryColor="#222235",e.secondaryTextColor="#D3D3D3",e.activeColor="#BE93D4",e.activeIconColor="#BE93D4",e.linkTextColor="#7E57C2",e.errorTextColor="#f60055",e.borderColor="#3F3F54",e.borderRadius="8px",e.popupBorderRadius="6px",e.popupIconColor="#FFFFFF",e.popupBackgroundColor="#1e1e2e",e.popupTextColor="#D3D3D3",e.popupActiveColor="#7E57C2",e.popupBorderColor="#9700be27",e.boxShadowColor="rgba(0, 0, 0, 0.3)",e.scrollbarColor="#ffffff12",e.buttonActiveColor="#a160ed",e.buttonBackgroundColor="#9700be",e.buttonTextColor="#FFFFFF",r.add(e),ace.require("ace/ext/themelist").themes.push({caption:d.split("-").map((e=>e[0].toUpperCase()+e.slice(1))).join(" "),theme:"ace/theme/"+d,isDark:!0}),l.get("editorTheme")===d&&s.setTheme("ace/theme/"+d),l.on("update",this.onThemeChange),this.plugSettings.themeIcon||this.$iconsStyle.remove(),this.onAnimationChange()}catch(e){acode.alert("Warning","Please restart acode")}}onAnimationChange(){const e=document.querySelector(".open-file-list");this.plugSettings.fileTabAnimation?e.style.setProperty("--open-filelist-animation","changeColor 5s infinite alternate,glowingEffect 2s infinite alternate"):e.style.setProperty("--open-filelist-animation","");const a=document.getElementById("quicktools-toggler");this.plugSettings.floatingBtnAnimation?(a.classList.remove("no_animation"),a.style.setProperty("--floating-btn-animation","steam 20s linear infinite")):(a.style.setProperty("--floating-btn-animation",""),a.classList.add("no_animation"))}onThemeChange(e){e==="ace/theme/"+d&&(s.setTheme("ace/theme/"+d),l.update({editorTheme:d}))}get settingsObj(){return{list:[{key:"themeIcon",text:"Enable Theme Icon",checkbox:this.plugSettings.themeIcon,info:'If set to "true" means checked, then it will add a some icon to acode and that will match Sweet Plasma schema. If set to "false" means unchecked then theme icon will not be applied'},{key:"fileTabAnimation",text:"Enable File Tab animation",checkbox:this.plugSettings.fileTabAnimation,info:'If set to "true" means checked, then it will add a beautiful glowing effect to it. If set to "false" means unchecked then animation will not be applied'},{key:"floatingBtnAnimation",text:"Enable Quicktools toggler anination",checkbox:this.plugSettings.floatingBtnAnimation,info:'If set to "true" means checked, then it will add a beautiful glowing effect to it. If set to "false" means unchecked then animation will not be applied'}],cb:(e,a)=>{this.plugSettings[e]=a,l.update(),this.plugSettings.themeIcon?document.head.append(this.$iconsStyle):this.$iconsStyle.remove(),acode.alert("Warning","Please restart acode")}}}get plugSettings(){return l.value[c.id]}async destroy(){l.off("update",this.onThemeChange),this.$iconsStyle.remove(),this.$customStyle.remove(),delete l.value[c.id],l.update(!1)}}if(window.acode){const e=new p;acode.setPluginInit(c.id,(async(a,t,o)=>{let{cacheFileUrl:n,cacheFile:c}=o;a.endsWith("/")||(a+="/"),e.baseUrl=a,await e.init(t,c,n)}),e.settingsObj),acode.setPluginUnmount(c.id,(()=>{e.destroy()}))}}},a={};function t(o){var n=a[o];if(void 0!==n)return n.exports;var c=a[o]={id:o,loaded:!1,exports:{}};return e[o].call(c.exports,c,c.exports,t),c.loaded=!0,c.exports}t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,{a:a}),a},t.d=function(e,a){for(var o in a)t.o(a,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:a[o]})},t.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t(190)}();