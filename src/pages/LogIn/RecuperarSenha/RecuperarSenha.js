import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import catDog from "../../../img/dog-cat.png"
import logo from "../../../img/logo.png"
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{ alignSelf: "center", alignItems: "center" }}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.title}>Esqueceu a senha?</Text>
                <Text style={styles.subtitle}>Redefina a sua senha em duas etapas</Text>
            </View>
            <View style={{width:"100%",alignSelf: "center", alignItems: "center", marginBottom:"10%"}}>
                <Text style={styles.label}>Qual seu E-mail de Cadastro?</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu e-mail"
                    placeholderTextColor="#ffffff"
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("RecSenhaCod")}>
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
    },
    subtitle: {
        fontSize: 14,
        color: "#000",
        marginBottom: 20,
    },
    label: {
        alignSelf: "flex-start",
        fontWeight: "bold",
        marginBottom: 5,
        color: "#000",
    },
    input: {
        width: "100%",
        backgroundColor: "#2B7CD9",
        padding: 10,
        borderRadius: 20,
        color: "#fff",
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#2B7CD9",
        padding: 10,
        borderRadius: 20,
        width: "50%",
        alignItems: "center",
        marginBottom:"50%"
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

export default ForgotPasswordScreen;