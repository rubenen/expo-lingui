import { Text, TouchableOpacity } from "react-native";

// to see how we need to use the useLingui hook try the following:
// import { i18n } from "@lingui/core"; // 1. uncomment this to import from core
import { useLingui } from "@lingui/react"; // 2. remove this import

export const Screen = () => {
    const { i18n } = useLingui(); // 3. and remove this line
    // and now the "Hello, World!" does not react to the language change
    return (
        <>
            <Text>{i18n.t("Hello, World!")}</Text>
            <TouchableOpacity onPress={() => i18n.activate("da")}>
                <Text>Switch to Danish</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => i18n.activate("en")}>
                <Text>Switch to English</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => i18n.activate("de")}>
                <Text>Switch to German</Text>
            </TouchableOpacity>
        </>
    );
};
