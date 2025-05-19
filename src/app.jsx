import { StyleSheet, View } from "react-native";
import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import { loadAllLocales } from "./i18nSetup";

import { Login } from "./login";
import { Screen } from "./screen";

loadAllLocales();

export function App() {
    return (
        <I18nProvider i18n={i18n}>
            <View style={styles.container}>
                <Screen />
                <Login />
            </View>
        </I18nProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
