import { i18n } from "@lingui/core";
import { Alert } from "react-native";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchData() {
    // Simulate a network request
    await delay(200);
    Alert.alert(i18n.t("Data fetched successfully!"));
    return {
        login: "Login",
        password: "Password",
    };
}
