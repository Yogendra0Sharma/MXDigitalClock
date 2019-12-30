import { createElement } from "react";
const React = { createElement };

import { DynamicTextProperty } from "mendix/DynamicTextProperty";

import { Container } from "mendix/Container";
import { Text } from "mendix/Text";
import { asPluginWidgets, t } from "mendix/native";

import { mainContent } from "C:/Users/skbaz9/Desktop/mendixWidget/digitalClock/dist/MxTestProject/deployment/native/layouts/Atlas_UI_Resources.NativePhone_Default.js";

import * as styles from "C:/Users/skbaz9/Desktop/mendixWidget/digitalClock/dist/MxTestProject/theme/styles.js";

const { $Container, $Text } = asPluginWidgets({ Container, Text });

const main = () => [
    <$Container key="0_2"
        $widgetId="0_2"
        name="container1"
        style={[ styles.Container, styles.spacingInnerTopLarge, styles.spacingInnerBottomLarge, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium ]}
        onClick={undefined}
        content={[
            <$Text key="0_3"
                $widgetId="0_3"
                name="text1"
                style={[ styles.Text, styles.TextHeading3, styles.spacingOuterBottom ]}
                text={DynamicTextProperty({
                    template: { "elements": t( [ [ "Home" ] ] ), "friendlyId": "MyFirstModule.Home_Native.text1" }
                })} />,
            <$Text key="0_4"
                $widgetId="0_4"
                name="text3"
                style={[ styles.Text ]}
                text={DynamicTextProperty({
                    template: { "elements": t( [ [ "Welcome to your new app" ] ] ), "friendlyId": "MyFirstModule.Home_Native.text3" }
                })} />
        ]} />
];

export const header = () => null;

export const $$title = t([
    "Home"
] );

export const $$style = [];

export const $$page = () => mainContent(main);
