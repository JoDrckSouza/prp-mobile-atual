import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar } from "@react-native-material/core";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';

export default function CadastroProntuario() {
const navigation = useNavigation()
function navegar(){
  navigation.navigate("CadastroProntuario")
}
  return (
    <View style={styles.container}>
      <Icon name="paw" color="#3A85CA" size={80} 
        style={styles.avatar}
      />
      <Text style={styles.title}>Informe os dados do</Text>
      <Text style={styles.subtitle}>proprietário</Text>

      <View style={styles.inputContainer}>
        <Icon name="account-outline" size={20} style={styles.icon} />
        <TextInput style={styles.input} placeholder="Digite o nome completo" />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="email-outline" size={20} style={styles.icon} />
        <TextInput style={styles.input} placeholder="Digite o e-mail" />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="phone-outline" size={20} style={styles.icon} />
        <TextInput style={styles.input} placeholder="Digite o telefone" keyboardType="phone-pad" />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="home-outline" size={20} style={styles.icon} />
        <TextInput style={styles.input} placeholder="Digite o endereço" />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="card-account-details-outline" size={20} style={styles.icon} />
        <TextInput style={styles.input} placeholder="Digite o CPF" keyboardType="numeric" />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock-outline" size={20} style={styles.icon} />
        <TextInput style={styles.input} placeholder="Crie uma senha" secureTextEntry />
      </View>

      <TouchableOpacity onPress={()=> navegar()} style={styles.button}>
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
