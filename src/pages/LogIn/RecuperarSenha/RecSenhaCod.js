import React, { useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import catDog from "../../../img/dog-cat.png";
import logo from "../../../img/logo.png";
import { useNavigation } from '@react-navigation/native';


const VerificationCodeScreen = () => {

    const navigation = useNavigation();
    const inputRefs = Array(5).fill(null).map(() => useRef(null));
    const handleInputChange = (text, index) => {
        if (text.length === 1 && index < inputRefs.length - 1) {
            inputRefs[index + 1].current.focus();
        }
    };

    return (
        <View style={styles.container}>
            <View style={{ alignSelf: "center", alignItems: "center" }}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.title}>Acabamos de enviar um código para seu E-mail</Text>
                <Text style={styles.subtitle}>Insira no campo abaixo o código de verificação de 5 dígitos enviado no seu E-mail</Text>
            </View>
            <View>
                <View style={styles.codeContainer}>
                    {inputRefs.map((ref, index) => (
                        <TextInput
                            key={index}
                            ref={ref}
                            style={styles.codeInput}
                            maxLength={1}
                            keyboardType="numeric"
                            onChangeText={(text) => handleInputChange(text, index)}
                        />
                    ))}
                </View>
                <TouchableOpacity>
                    <Text style={styles.resendText}>Reenviar código</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("RecSenhaNovaSenha")}>
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
    subtitle: {
        fontSize: 14,
        color: "#000",
        marginBottom: 20,
        textAlign: "center",
    },
    codeContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20,
    },
    codeInput: {
        width: 40,
        height: 40,
        backgroundColor: "#2B7CD9",
        marginHorizontal: 5,
        borderRadius: 5,
        textAlign: "center",
        fontSize: 18,
        color: "#fff",
    },
    resendText: {
        color: "#2B7CD9",
        marginBottom: 20,
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

export default VerificationCodeScreen;
