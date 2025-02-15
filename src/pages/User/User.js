import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar } from "@react-native-material/core";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';

export default function User() {
    const navigation = useNavigation()
    function navegar() {
        navigation.navigate("ListagemPet")
    }
    return (
        <View style={styles.container}>

            <Avatar color='#BCB7B7' size={100} icon={props => <Icon name="account" {...props} />} />
            <Text style={styles.title}>Joana Barbosa</Text>

            <Text style={{ alignSelf: "flex-start", marginLeft: 20, marginBottom: 2 }}>Nome completo: </Text>
            <View style={styles.inputContainer}>
                <Icon name="account-outline" size={20} style={styles.icon} />
                <TextInput style={styles.input} placeholder="Digite o nome completo" />
            </View>

            <Text style={{ alignSelf: "flex-start", marginLeft: 20, marginBottom: 2 }}>Email: </Text>
            <View style={styles.inputContainer}>
                <Icon name="email-outline" size={20} style={styles.icon} />
                <TextInput style={styles.input} placeholder="Digite o e-mail" />
            </View>

            <Text style={{ alignSelf: "flex-start", marginLeft: 20, marginBottom: 2 }}>Telefone: </Text>
            <View style={styles.inputContainer}>
                <Icon name="phone-outline" size={20} style={styles.icon} />
                <TextInput style={styles.input} placeholder="Digite o telefone" keyboardType="phone-pad" />
            </View>

            <Text style={{ alignSelf: "flex-start", marginLeft: 20, marginBottom: 2 }}>Endereço: </Text>
            <View style={styles.inputContainer}>
                <Icon name="home-outline" size={20} style={styles.icon} />
                <TextInput style={styles.input} placeholder="Digite o endereço" />
            </View>

            <Text style={{ alignSelf: "flex-start", marginLeft: 20, marginBottom: 2 }}>CPF: </Text>
            <View style={styles.inputContainer}>
                <Icon name="card-account-details-outline" size={20} style={styles.icon} />
                <TextInput style={styles.input} placeholder="Digite o CPF" keyboardType="numeric" />
            </View>

            <Text style={{ alignSelf: "flex-start", marginLeft: 20, marginBottom: 2 }}>Senha: </Text>
            <View style={styles.inputContainer}>
                <Icon name="lock-outline" size={20} style={styles.icon} />
                <TextInput style={styles.input} placeholder="Crie uma senha" secureTextEntry />
            </View>

            <TouchableOpacity onPress={() => navegar()} style={styles.button}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        padding: 16,
    },
    avatar: {
        marginBottom: 16,
    },
    title: {
        marginBottom: 50,
        fontSize: 18,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 18,
        textAlign: "center",
        marginBottom: 24,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 25,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 16,
        width: "100%",
        elevation: 3,
    },
    icon: {
        marginRight: 10,
        color: "#888",
    },
    input: {
        flex: 1,
        height: 40,
    },
    button: {
        backgroundColor: "green",
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 40,
        alignItems: "center",
        marginTop: 16,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
});
