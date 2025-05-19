import { useLingui } from "@lingui/react";
import { Text, TouchableOpacity, View } from "react-native";
import { fetchData } from "./fetchData";
import { useState } from "react";

export const Login = () => {
    const { i18n } = useLingui();
    return (
        <View>
            <Text>{i18n.t("Login")}</Text>
            <Text>{i18n.t("Password")}</Text>
            <TouchableOpacity onPress={() => fetchData()}>
                <Text>{i18n.t("Fetch Data")}</Text>
            </TouchableOpacity>
            <Text>{i18n.number(1234.56)}</Text>
            <PluralExample />
        </View>
    );
};

const PluralExample = () => {
    const { i18n } = useLingui();
    const [count, setCount] = useState(0);
    return (
        <View>
            <Text>
                {i18n.t(
                    "{count, plural, =0 {You have no messages} one {You have one new message} other {You have # new messages}}",
                    {
                        count,
                    }
                )}
            </Text>
            <TouchableOpacity onPress={() => setCount(count + 1)} style={styles.button}>
                <Text style={styles.buttonText}>Increment</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCount(count - 1)} style={styles.button}>
                <Text style={styles.buttonText}>Decrement</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    button: {
        backgroundColor: "#007AFF",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
    },
};
