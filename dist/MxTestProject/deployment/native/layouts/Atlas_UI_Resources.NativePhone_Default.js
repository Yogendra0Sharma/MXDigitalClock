import { createElement } from "react";
const React = { createElement };


import { com_mendix_widget_native_feedback_Feedback } from "externalWidgets";
import { Placeholder } from "mendix/Placeholder";
import { asPluginWidgets, t } from "mendix/native";

import * as styles from "C:/Users/skbaz9/Desktop/mendixWidget/digitalClock/dist/MxTestProject/theme/styles.js";

const { $com_mendix_widget_native_feedback_Feedback, $Placeholder } = asPluginWidgets({ com_mendix_widget_native_feedback_Feedback, Placeholder });

export const mainContent = (main) => [
    <$com_mendix_widget_native_feedback_Feedback key="0_0"
        $widgetId="0_0"
        name="feedback1"
        allowScreenshot={true}
        sprintrapp={"a0a24ef0-1cf2-458c-870c-e8bbf719ddfb"}
        logo={undefined}
        style={[ styles.com_mendix_widget_native_feedback_Feedback ]} />,
    <$Placeholder key="0_1"
        $widgetId="0_1"
        name="Main"
        content={main()} />
];

