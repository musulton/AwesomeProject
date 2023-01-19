import React from "react";
import {View, Text, ActivityIndicator} from "react-native";

import styles from "./styles";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import DismissKeyboard from "../../components/DismissKeyboardView/DismissKeyboard";

import {validateEmail} from "../../utils/validate";
import useFetchMutation from "../../hooks/useFetchMutation";
import {login} from "../../services/authApi";
import {saveToken} from "../../utils/token";

const Login = (props) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState({
        email: false
    });

    const onSuccess = (value) => {
        if (value) {
            saveToken(value);
            props.navigation.navigate("Main")
        } else {
            alert("Login failed, please try again!")
        }
    }

    const {fetchMutation: onLogin, loading} = useFetchMutation(
        login,
        onSuccess
    )

    const emailHandler = (value) => {
        const isValid = validateEmail(value);
        setEmail(value);

        setError((prevState) => ({
            ...prevState, email: !isValid
        }));
    }

    const onSubmit = () => {
        onLogin({email, password});
    }

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="green" />
            </View>
        )
    }

    return (
        <DismissKeyboard>
            <View style={styles.container}>
                <Text style={styles.text}>Login</Text>
                <FormInput
                    label="Email"
                    placeholder="Enter your email"
                    type="email-address"
                    value={email}
                    onChange={emailHandler}
                />

                {error?.email && <Text>Email is not valid</Text>}

                <FormInput
                    label="Password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={setPassword}
                    isPassword
                />

                <Button
                    text="Submit"
                    disabled={!password || error?.email}
                    onPress={onSubmit}
                />
            </View>
        </DismissKeyboard>
    )
}

export default Login;
