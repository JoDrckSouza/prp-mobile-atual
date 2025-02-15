import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import catDog from "../../../img/dog-cat.png";
import logo from "../../../img/logo.png";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';


const NewPasswordScreen = () => {
    const navigation = useNavigation();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handlePasswordChange = (text) => {
        setPassword(text);
        if (confirmPassword && text !== confirmPassword) {
            setErrorMessage("As Senhas são Diferentes, Verifique!");
        } else {
            setErrorMessage("");
        }
    };

    const handleConfirmPasswordChange = (text) => {
        setConfirmPassword(text);
        if (password && text !== password) {
            setErrorMessage("As Senhas são Diferentes, Verifique!");
        } else {
            setErrorMessage("");
        }
    };

    return (
        <View style={styles.container}>
            <View style={{ alignSelf: "center", alignItems: "center" }}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.title}>Crie uma Nova Senha</Text>
            </View>
            
            <View style={{ width: "100%", alignSelf: "center", alignItems: "center", marginBottom: "10%" }}>
                <Text style={styles.label}>Nova Senha</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="digite a nova senha"
                        placeholderTextColor="#ffffff"
                        secureTextEntry={!showPassword}
                        onChangeText={handlePasswordChange}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Ionicons name={showPassword ? "eye" : "eye-off"} size={20} color="#fff" />
                    </TouchableOpacity>
                </View>
                
                <Text style={styles.label}>Confirme a Senha</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="digite a nova senha"
                        placeholderTextColor="#ffffff"
                        secureTextEntry={!showConfirmPassword}
                        onChangeText={handleConfirmPasswordChange}
                    />
                    <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                        <Ionicons name={showConfirmPassword ? "eye" : "eye-off"} size={20} color="#fff" />
                    </TouchableOpacity>
                </View>
                {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
            </View>

            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("LogIn")}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>

            <Image source={catDog} style={styles.dogIcon} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D9D9D9",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
    },
    logo: {
        width: 80,
        height: 80,
        marginTop: "50%",
        resizeMode: "contain",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
        textAlign: "center",
    },
    label: {
        alignSelf: "flex-start",
        fontWeight: "bold",
        marginBottom: 5,
        color: "#000",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#2B7CD9",
        paddingHorizontal: 10,
        borderRadius: 20,
        marginBottom: 10,
    },
    input: {
        flex: 1,
        padding: 10,
        color: "#fff",
    },
    errorText: {
        color: "red",
        fontSize: 12,
        marginTop: 5,
    },
    button: {
        backgroundColor: "#2B7CD9",
        padding: 10,
        borderRadius: 20,
        width: "50%",
        alignItems: "center",
        marginBottom: "50%",
    },
    buttonText: {
        color: "#000",
        fontWeight: "bold",
    },
    dogIcon: {
        width: 80,
        height: 80,
        position: "absolute",
        bottom: 20,
        left: 20,
    },
});

export default NewPasswordScreen;
