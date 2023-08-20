import plugin from "../plugin.json";
import style from "./style.scss";
import icons from "./icon.css";
import customStyle from "./customStyles.scss";
const themes = acode.require("themes");
const ThemeBuilder = acode.require("themeBuilder");
const settings = acode.require("settings");
const { editor } = editorManager;
const editorThemeName = "sweet-plasma";

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
            "ace/lib/dom",
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

            ace.require("ace/ext/themelist").themes.push({
                caption: editorThemeName
                    .split("-")
                    .map((name) => name[0].toUpperCase() + name.slice(1))
                    .join(" "),
                theme: "ace/theme/" + editorThemeName,
                isDark: true,
            });

            const currentTheme = settings.get("editorTheme");
            if (currentTheme === editorThemeName)
                editor.setTheme("ace/theme/" + editorThemeName);
            settings.on("update", this.onThemeChange);
            if (!this.plugSettings.themeIcon) {
                this.$iconsStyle.remove();
            }
            this.onAnimationChange()
        } catch (error) {
            acode.alert("Warning", "Please restart acode");
        }
    }

    onAnimationChange() {
        const fileList = document.querySelector(".open-file-list");
        //const activeTile = fileList.querySelector(".tile.active");
        if (this.plugSettings.fileTabAnimation) {
            fileList.style.setProperty("--open-filelist-animation", "changeColor 5s infinite alternate,glowingEffect 2s infinite alternate");
        } else {
            fileList.style.setProperty("--open-filelist-animation", "")
        }
        
        const floatingIcon = document.getElementById('quicktools-toggler');
        if (this.plugSettings.floatingBtnAnimation) {
            floatingIcon.classList.remove("no_animation");
            floatingIcon.style.setProperty("--floating-btn-animation", "steam 20s linear infinite")
        } else {
            floatingIcon.style.setProperty("--floating-btn-animation", "")
            floatingIcon.classList.add("no_animation");
        }
    }

    onThemeChange(value) {
        if (value === "ace/theme/" + editorThemeName) {
            editor.setTheme("ace/theme/" + editorThemeName);
            settings.update({ editorTheme: editorThemeName });
        }
    }

    get settingsObj() {
        return {
            list: [
                {
                    key: "themeIcon",
                    text: "Enable Theme Icon",
                    checkbox: this.plugSettings.themeIcon,
                    info: `If set to "true" means checked, then it will add a some icon to acode and that will match Sweet Plasma schema. If set to "false" means unchecked then theme icon will not be applied`,
                },
                {
                    key: "fileTabAnimation",
                    text: "Enable File Tab animation",
                    checkbox: this.plugSettings.fileTabAnimation,
                    info: `If set to "true" means checked, then it will add a beautiful glowing effect to it. If set to "false" means unchecked then animation will not be applied`,
                },
                {
                    key: "floatingBtnAnimation",
                    text: "Enable Quicktools toggler anination",
                    checkbox: this.plugSettings.floatingBtnAnimation,
                    info: `If set to "true" means checked, then it will add a beautiful glowing effect to it. If set to "false" means unchecked then animation will not be applied`,
                },
            ],
            cb: (key, value) => {
                this.plugSettings[key] = value;
                settings.update();
                if (this.plugSettings.themeIcon) {
                    document.head.append(this.$iconsStyle);
                } else {
                    this.$iconsStyle.remove();
                }
                acode.alert("Warning", "Please restart acode");
            },
        };
    }

    get plugSettings() {
        return settings.value[plugin.id];
    }

    async destroy() {
        settings.off("update", this.onThemeChange);
        this.$iconsStyle.remove();
        this.$customStyle.remove();
        delete settings.value[plugin.id];
        settings.update(false);
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
