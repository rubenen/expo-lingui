import { useLingui } from "@lingui/react";
import { Text, View } from "react-native";

export const Login = () => {
    const { i18n } = useLingui();
    return (
        <View>
            <Text>{i18n.t("Login")}</Text>
            <Text>{i18n.t("Password")}</Text>
        </View>
    );
};
