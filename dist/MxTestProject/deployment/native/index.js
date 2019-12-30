import { NativeUI, startApp, t } from "mendix/native";
import { navigationStyle } from "C:/Users/skbaz9/Desktop/mendixWidget/digitalClock/dist/MxTestProject/theme/styles.js";

startApp({
    "cacheBust": "637133128542895248",
    "languages": [
        "en_US"
    ],
    "navigationStyle": navigationStyle,
    "getTabs": () => ( [
        {
            "pageName": "MyFirstModule.Home_Native",
            "caption": t( [
                "Home"
            ] ),
            "icon": "glyphicon-home"
        }
    ] ),
    "onStartupNativeClient": () => {
        NativeUI.registerPage("MyFirstModule.Home_Native", require("C:/Users/skbaz9/Desktop/mendixWidget/digitalClock/dist/MxTestProject/deployment/native/pages/MyFirstModule.Home_Native"), {"headerRegionName":"header","showBottomBar":true});
    }
});