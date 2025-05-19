import { useLingui } from "@lingui/react";
import { Text, TouchableOpacity, View } from "react-native";
import { fetchData } from "./fetchData";

export const Login = () => {
    const { i18n } = useLingui();
    return (
        <View>
            <Text>{i18n.t("Login")}</Text>
            <Text>{i18n.t("Password")}</Text>
            <TouchableOpacity onPress={() => fetchData()}>
                <Text>{i18n.t("Fetch Data")}</Text>
            </TouchableOpacity>
        </View>
    );
};
