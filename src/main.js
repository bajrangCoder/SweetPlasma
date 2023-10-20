import plugin from "../plugin.json";
import style from "./style.scss";
import icons from "./icon.css";
import customStyle from "./customStyles.scss";
const themes = acode.require("themes");
const ThemeBuilder = acode.require("themeBuilder");
const settings = acode.require("settings");
const sidebarApps = acode.require("sidebarApps");
const fileBrowser = acode.require("fileBrowser");
const toInternalUrl = acode.require("toInternalUrl");
const fs = acode.require("fsOperation");
const { editor } = editorManager;
const editorThemeName = "sweet-plasma";
const baseBgImgName = "sweetplasma_bg_img.png";

ace.define(
    `ace/theme/${editorThemeName}.css`,
    ["require", "exports", "module"],
    function (require, exports, module) {
        module.exports = style;
    }
),
    ace.define(
        `ace/theme/${editorThemeName}`,
        [
            "require",
            "exports",
            "module",
            `ace/theme/${editorThemeName}.css`,
            "ace/lib/dom"
        ],
        function (require, exports, module) {
            (exports.isDark = !0),
                (exports.cssClass = `ace-${editorThemeName}`),
                (exports.cssText = require(`./${editorThemeName}.css`));
            const dom = require("../lib/dom");
            dom.importCssString(exports.cssText, exports.cssClass, !1);
        }
    );
(function () {
    window.require(["ace/theme/" + editorThemeName], function (m) {
        if (typeof module == "object" && typeof exports == "object" && module) {
            module.exports = m;
        }
    });
})();

class AcodePlugin {
    constructor() {
        if (!settings.value[plugin.id]) {
            settings.value[plugin.id] = {
                themeIcon: true,
                fileTabAnimation: true,
                floatingBtnAnimation: true,
                imageUrl: "",
                blurValue: "4px",
                transparency: "0.4",
                fancyAcode: true,
                fancyUniversalBlurValue: "5px",
                promptBlurValue: "",
                contextMenuBlurValue: "",
                paletteBlurValue: "",
                cursorMenuBlurValue: "",
                aceCompletionBlurValue: ""
            };
            settings.update(false);
        }
    }

    async init() {
        try {
            this.$iconsStyle = <style textContent={icons}></style>;
            this.$customStyle = <style textContent={customStyle}></style>;
            document.head.append(this.$iconsStyle, this.$customStyle);
            const sweetPlasma = new ThemeBuilder(
                "Sweet Plasma",
                "dark",
                "free"
            );
            sweetPlasma.primaryColor = "#1e1e2e";
            sweetPlasma.darkenedPrimaryColor = "#1A161F";
            sweetPlasma.primaryTextColor = "#FFFFFF";
            sweetPlasma.secondaryColor = "#222235";
            sweetPlasma.secondaryTextColor = "#D3D3D3";
            sweetPlasma.activeColor = "#BE93D4";
            sweetPlasma.activeIconColor = "#BE93D4";
            sweetPlasma.linkTextColor = "#7E57C2";
            sweetPlasma.errorTextColor = "#f60055";
            sweetPlasma.borderColor = "#3F3F54";
            sweetPlasma.borderRadius = "8px";
            sweetPlasma.popupBorderRadius = "6px";
            sweetPlasma.popupIconColor = "#FFFFFF";
            sweetPlasma.popupBackgroundColor = "#1e1e2e";
            sweetPlasma.popupTextColor = "#D3D3D3";
            sweetPlasma.popupActiveColor = "#7E57C2";
            sweetPlasma.popupBorderColor = "#9700be27";
            sweetPlasma.boxShadowColor = "rgba(0, 0, 0, 0.3)";
            sweetPlasma.scrollbarColor = "#ffffff12";
            sweetPlasma.buttonActiveColor = "#a160ed";
            sweetPlasma.buttonBackgroundColor = "#9700be";
            sweetPlasma.buttonTextColor = "#FFFFFF";
            themes.add(sweetPlasma);

            /***********************
             * Sidebar
             ***********************/
            acode.addIcon("sweet-plasma", this.baseUrl + "icon.png");
            sidebarApps.add(
                "sweet-plasma",
                "sweet-plasma-sidebar",
                "SweetPlasma",
                app => {
                    const plasmaContainer = tag("div", {
                        className: "plasma-container"
                    });
                    const heading = tag("h1", {
                        textContent: "Add Image"
                    });
                    const inputBox = tag("div", {
                        className: "input-box"
                    });
                    const inputField = tag("input", {
                        type: "url",
                        id: "image-url",
                        placeholder: "Image url",
                        value: this.plugSettings.imageUrl
                            ? this.plugSettings.imageUrl
                            : ""
                    });
                    inputField.addEventListener(
                        "keypress",
                        this.triggerEnterEvent.bind(this)
                    );
                    const folderBtn = tag("button", {
                        id: "open-image-btn"
                    });
                    folderBtn.innerHTML = `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" height="1.5em" width="1.5em"><path fill="currentColor" d="M7 40q-1.15 0-2.075-.925Q4 38.15 4 37V11q0-1.15.925-2.075Q5.85 8 7 8h12.8q.6 0 1.175.25.575.25.975.65l2.1 2.1H41q1.15 0 2.075.925Q44 12.85 44 14H10q-1.25 0-2.125.875T7 17v20l4.5-17.75q.25-1 1.1-1.625.85-.625 1.85-.625H43.1q1.45 0 2.4 1.15t.55 2.6l-4.4 16.95q-.3 1.2-1.1 1.75T38.5 40Z"/></svg>`;
                    folderBtn.addEventListener(
                        "click",
                        this.triggerFolderBtnEvent.bind(this)
                    );
                    inputBox.append(inputField, folderBtn);
                    const blurBox = tag("div", {
                        className: "blur-box"
                    });
                    const blurLabel = tag("label", {
                        textContent: "Blur",
                        className: "blur-input-lbl"
                    });
                    const blurInputField = tag("input", {
                        type: "text",
                        id: "blur-value",
                        value: this.plugSettings.blurValue
                            ? this.plugSettings.blurValue
                            : "4px",
                        placeholder: "Blur value"
                    });
                    blurInputField.addEventListener(
                        "keypress",
                        this.changeBlurValue.bind(this)
                    );
                    blurBox.append(blurLabel, blurInputField);
                    const transparencyBox = tag("div", {
                        className: "transparency-box"
                    });
                    const transprancyLabel = tag("label", {
                        textContent: "Transparency",
                        className: "transparency-input-lbl"
                    });
                    const transparencyInputField = tag("input", {
                        type: "range",
                        id: "transparency-value",
                        min: "0",
                        max: "1",
                        step: "0.1",
                        value: this.plugSettings.transparency
                            ? this.plugSettings.transparency
                            : "0.4"
                    });
                    transparencyInputField.addEventListener(
                        "input",
                        this.changeTransparencyValue.bind(this)
                    );
                    const transparencyValueLbl = tag("span", {
                        className: "transparency-value-lbl",
                        textContent: this.plugSettings.transparency
                            ? this.plugSettings.transparency
                            : "0.4"
                    });
                    transparencyBox.append(
                        transprancyLabel,
                        transparencyInputField,
                        transparencyValueLbl
                    );
                    const removeImgBtn = tag("button", {
                        textContent: "Remove",
                        id: "remove-image-btn"
                    });
                    removeImgBtn.addEventListener(
                        "click",
                        this.removeImg.bind(this)
                    );
                    plasmaContainer.append(
                        heading,
                        inputBox,
                        blurBox,
                        transparencyBox,
                        removeImgBtn
                    );
                    app.append(plasmaContainer);
                }
            );

            ace.require("ace/ext/themelist").themes.push({
                caption: editorThemeName
                    .split("-")
                    .map(name => name[0].toUpperCase() + name.slice(1))
                    .join(" "),
                theme: "ace/theme/" + editorThemeName,
                isDark: true
            });

            const acodeXController = acode.require("acodex");
            if (acodeXController) {
                const acodeXThemeNme = "SweetPlasma";
                const colorSchema = {
                    background: "#222235",
                    foreground: "#ffffff",
                    cursor: "#ffffff",
                    cursorAccent: "#00000000",
                    selectionBackground: "#ffffff26",
                    black: "#222235",
                    blue: "#f69154",
                    brightBlack: "#3F3F54",
                    brightBlue: "#f69154",
                    brightCyan: "#00dded",
                    brightGreen: "#06c993",
                    brightMagenta: "#ec89cb",
                    brightRed: "#f60055",
                    brightWhite: "#ffffff",
                    brightYellow: "#9700be",
                    cyan: "#00dded",
                    green: "#06c993",
                    magenta: "#ec89cb",
                    red: "#f60055",
                    white: "#ffffff",
                    yellow: "#9700be"
                };
                // Add theme
                acodeXController.addTheme(acodeXThemeNme, colorSchema);
                // Apply theme
                //acodeXController.applyTheme(acodeXThemeNme);
            }

            const currentTheme = settings.get("editorTheme");
            if (currentTheme === editorThemeName)
                editor.setTheme("ace/theme/" + editorThemeName);
            settings.on("update", this.onThemeChange);
            if (!this.plugSettings.themeIcon) {
                this.$iconsStyle.remove();
            }
            if (this.plugSettings.imageUrl) {
                this.updateUiWithSettings();
            }
            
            if(this.plugSettings.fancyAcode){
                this.createFancyAcode();
            }

            this.onAnimationChange();
        } catch (error) {
            acode.alert("Warning", "Please restart acode");
        }
    }

    changeTransparencyValue() {
        const transparencyValue = document.querySelector(
            "#transparency-value"
        ).value;
        document.querySelector(".transparency-value-lbl").textContent =
            transparencyValue;
        this.plugSettings.transparency = transparencyValue;
        settings.update();
        this.updateUiWithSettings();
    }

    changeBlurValue(event) {
        if (event.keyCode === 13) {
            const blurValue = document.querySelector("#blur-value").value;
            if (!blurValue) return;
            this.plugSettings.blurValue = blurValue;
            settings.update();
            this.updateUiWithSettings();
        }
    }

    triggerEnterEvent(event) {
        if (event.keyCode === 13) {
            const urlValue = document.querySelector("#image-url").value;
            if (!urlValue) return;
            this.plugSettings.imageUrl = urlValue;
            settings.update();
            this.updateUiWithSettings();
        }
    }

    async triggerFolderBtnEvent() {
        // Create a hidden input element of type 'file'
        const imageInput = document.createElement("input");
        imageInput.type = "file";
        imageInput.accept = "image/*";
        imageInput.style.display = "none";
        const self = this;
        // Add an event listener for when a file is selected
        imageInput.addEventListener("change", async function () {
            const selectedFile = imageInput.files[0];
            // Check if a file is selected
            if (selectedFile) {
                // Read the selected file as a Data URI
                const reader = new FileReader();

                reader.onload = async function (event) {
                    const imageDataURI = event.target.result;
                    const blob = self.dataURItoBlob(imageDataURI);
                    const bgImg = fs(window.DATA_STORAGE + baseBgImgName);
                    if (await bgImg.exists()) {
                        await bgImg.delete();
                        await fs(window.DATA_STORAGE).createFile(
                            baseBgImgName,
                            blob
                        );
                    } else {
                        await fs(window.DATA_STORAGE).createFile(
                            baseBgImgName,
                            blob
                        );
                    }
                    const urlOfImage = await toInternalUrl(
                        window.DATA_STORAGE + baseBgImgName
                    );
                    document.querySelector("#image-url").value = urlOfImage
                        ? urlOfImage
                        : imageDataURI;
                    self.plugSettings.imageUrl = urlOfImage
                        ? urlOfImage
                        : imageDataURI;
                    settings.update();
                    self.updateUiWithSettings();
                };
                reader.readAsDataURL(selectedFile);
            }
            // Remove the input element from the DOM
            document.body.removeChild(imageInput);
        });
        // Append the input element to the document body
        document.body.appendChild(imageInput);
        // Trigger a click event on the hidden file input to open the file selection dialog
        imageInput.click();
    }

    dataURItoBlob(dataURI) {
        var byteString = atob(dataURI.split(",")[1]);
        var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: mimeString });
    }

    removeImg() {
        this.plugSettings.imageUrl = "";
        this.plugSettings.blurValue = "";
        this.plugSettings.transparency = "";
        settings.update();
        acode.alert("Warning", "Restart App to see changes");
    }

    updateUiWithSettings() {
        try {
            document.querySelector(
                ".ace_editor"
            ).style.background = `url("${this.plugSettings.imageUrl}")`;
            document.querySelector(".ace_editor").style.backgroundSize =
                "cover";
            document.querySelector(
                ".ace_editor .ace_scroller"
            ).style.background = this.transparentColor(
                document.querySelector(".ace_editor .ace_content")
            );
            document.querySelector(
                ".ace_editor .ace_scroller"
            ).style.backdropFilter = `blur(${this.plugSettings.blurValue})`;
            document.querySelector(".ace_editor .ace_gutter").style.background =
                this.transparentColor(
                    document.querySelector(".ace_editor .ace_gutter")
                );
            document.querySelector(
                ".ace_editor .ace_gutter"
            ).style.backdropFilter = `blur(${this.plugSettings.blurValue})`;
        } catch (error) {
            console.log(error);
        }
    }

    transparentColor(element) {
        let currentBackgroundColor =
            window.getComputedStyle(element).backgroundColor;

        // Extract the RGB values
        var rgbValues = currentBackgroundColor.match(/\d+/g);

        // Convert the RGB values to RGBA by adding 1 for the alpha (transparency) value
        var currentAlpha = parseFloat(rgbValues[3]) || 1.0;
        currentAlpha = this.plugSettings.transparency;
        return `rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, ${currentAlpha})`;
    }

    onAnimationChange() {
        const fileList = document.querySelector(".open-file-list");
        //const activeTile = fileList.querySelector(".tile.active");
        if (this.plugSettings.fileTabAnimation) {
            fileList.style.setProperty(
                "--open-filelist-animation",
                "changeColor 5s infinite alternate,glowingEffect 2s infinite alternate"
            );
        } else {
            fileList.style.setProperty("--open-filelist-animation", "");
        }

        const floatingIcon = document.getElementById("quicktools-toggler");
        if (this.plugSettings.floatingBtnAnimation) {
            floatingIcon.classList.remove("no_animation");
            floatingIcon.style.setProperty(
                "--floating-btn-animation",
                "steam 20s linear infinite"
            );
        } else {
            floatingIcon.style.setProperty("--floating-btn-animation", "");
            floatingIcon.classList.add("no_animation");
        }
    }

    onThemeChange(value) {
        if (value === "ace/theme/" + editorThemeName) {
            editor.setTheme("ace/theme/" + editorThemeName);
            settings.update({ editorTheme: editorThemeName });
        }
    }

    createFancyAcode() {
        if (document.querySelector(".fancyAcodeStyles")) {
            document.querySelector(".fancyAcodeStyles").remove();
        }
        const fancyStyling = document.createElement("style");
        fancyStyling.id = "fancyAcodeStyles";
        fancyStyling.textContent = `
            .prompt{
                background-color: transparent;
                backdrop-filter: blur(${this.plugSettings.promptBlurValue ? this.plugSettings.promptBlurValue : this.plugSettings.fancyUniversalBlurValue});
                border-color: var(--border-color);
            }
            .context-menu{
                background-color: transparent;
                backdrop-filter: blur(${this.plugSettings.contextMenuBlurValue ? this.plugSettings.contextMenuBlurValue : this.plugSettings.fancyUniversalBlurValue});
                border-color: var(--border-color);
            }
            #palette{
                background-color: transparent;
                backdrop-filter: blur(${this.plugSettings.paletteBlurValue ? this.plugSettings.paletteBlurValue : this.plugSettings.fancyUniversalBlurValue});
                border-color: var(--border-color);
            }
            #hints{
                background-color: transparent;
                backdrop-filter: blur(${this.plugSettings.paletteBlurValue ? this.plugSettings.paletteBlurValue : this.plugSettings.fancyUniversalBlurValue});
                border-color: var(--border-color);
            }
            .cursor-menu{
                background-color: transparent;
                backdrop-filter: blur(${this.plugSettings.cursorMenuBlurValue ? this.plugSettings.cursorMenuBlurValue : this.plugSettings.fancyUniversalBlurValue});
                border-color: var(--border-color);
            }
            .ace_dark.ace_editor.ace_autocomplete{
                background-color: transparent;
                backdrop-filter: blur(${this.plugSettings.aceCompletionBlurValue ? this.plugSettings.aceCompletionBlurValue : this.plugSettings.fancyUniversalBlurValue});
                border-color: var(--border-color);
            }
            `;
        document.head.append(fancyStyling);
    }

    get settingsObj() {
        return {
            list: [
                {
                    key: "themeIcon",
                    text: "Enable Theme Icon",
                    checkbox: this.plugSettings.themeIcon,
                    info: `If set to "true" means checked, then it will add a some icon to acode and that will match Sweet Plasma schema. If set to "false" means unchecked then theme icon will not be applied`
                },
                {
                    key: "fileTabAnimation",
                    text: "Enable File Tab animation",
                    checkbox: this.plugSettings.fileTabAnimation,
                    info: `If set to "true" means checked, then it will add a beautiful glowing effect to it. If set to "false" means unchecked then animation will not be applied`
                },
                {
                    key: "floatingBtnAnimation",
                    text: "Enable Quicktools toggler anination",
                    checkbox: this.plugSettings.floatingBtnAnimation,
                    info: `If set to "true" means checked, then it will add a beautiful glowing effect to it. If set to "false" means unchecked then animation will not be applied`
                },
                {
                    key: "fancyAcode",
                    text: "Enable Fancy Acode",
                    checkbox: this.plugSettings.fancyAcode,
                    info: `If set to "true" means checked, then acode components will be transparent and with gauzy blurry effect. If set to "false" means unchecked then it will be normal default design`
                },
                {
                    key: "fancyUniversalBlurValue",
                    text: "Blur Value for fancy design",
                    value: this.plugSettings.fancyUniversalBlurValue,
                    prompt: "Blur Value for fancy design",
                    promptType: "text"
                }
            ],
            cb: (key, value) => {
                this.plugSettings[key] = value;
                settings.update();
                if (this.plugSettings.themeIcon) {
                    document.head.append(this.$iconsStyle);
                } else {
                    this.$iconsStyle.remove();
                }
                if (this.plugSettings.fancyAcode) {
                    this.createFancyAcode();
                }else{
                    document.querySelector(".fancyAcodeStyles").remove();
                }
                acode.alert("Warning", "Please restart acode");
            }
        };
    }

    get plugSettings() {
        return settings.value[plugin.id];
    }

    async destroy() {
        sidebarApps.remove("sweet-plasma-sidebar");
        settings.off("update", this.onThemeChange);
        this.$iconsStyle.remove();
        this.$customStyle.remove();
        document.querySelector(".fancyAcodeStyles").remove();
        delete settings.value[plugin.id];
        settings.update(true);
    }
}

if (window.acode) {
    const acodePlugin = new AcodePlugin();
    acode.setPluginInit(
        plugin.id,
        async (baseUrl, $page, { cacheFileUrl, cacheFile }) => {
            if (!baseUrl.endsWith("/")) {
                baseUrl += "/";
            }
            acodePlugin.baseUrl = baseUrl;
            await acodePlugin.init($page, cacheFile, cacheFileUrl);
        },
        acodePlugin.settingsObj
    );
    acode.setPluginUnmount(plugin.id, () => {
        acodePlugin.destroy();
    });
}
