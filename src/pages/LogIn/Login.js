import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  StyleSheet 
} from "react-native";
import catDog from "../../img/dog-cat.png"
import Entypo from '@expo/vector-icons/Entypo';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation()
  const [secureText, setSecureText] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.card}>

          <View style={styles.pawContainer}>
            <Icon name="paw" color="#3A85CA" size={50} />
          </View>
          
          <Text style={styles.label}>Usuário</Text>
          <TextInput placeholder="digite seu email" style={styles.input} />

          <Text style={styles.label}>Senha</Text>

          <View style={styles.passwordContainer}>
            <TextInput 
              placeholder="digite sua senha" 
              style={styles.input} 
              secureTextEntry={secureText}
            />
            <TouchableOpacity onPress={() => setSecureText(!secureText)} style={{marginLeft:-20}}>
                {
                    secureText?(<Entypo name="eye-with-line" size={24} color="black" />):<Entypo name="eye" size={24} color="black" />
                }
                
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={()=> navigation.navigate("RecuperarSenha")}>
            <Text style={styles.forgotPassword}>Esqueceu sua Senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}onPress={()=> navigation.navigate("ListagemPet")} >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.footer} onPress={()=> navigation.navigate("SingUp")} >
            <Text style={styles.registerText}>Não possui conta? Cadastre-se!</Text>
          </TouchableOpacity>
          <Image source={catDog} style={styles.dogIcon} />

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3D82C4", // Azul de fundo
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    width: "90%",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#D3D3D3", // Cinza claro
    width: "100%",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  pawContainer: {
    position: "absolute",
    top: -40,
    backgroundColor: "#D3D3D3",
    borderRadius: 50,
    padding: 15,
  },
  pawIcon: {
    width: 50,
    height: 50,
    tintColor: "#3A85CA", // Azul da pata
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 16,
    marginTop: 15,
  },
  input: {
    width: "100%",
    borderBottomWidth: 1,
    paddingVertical: 5,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  eyeIcon: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginTop: 5,
    fontSize: 14,
  },
  button: {
    backgroundColor: "#3D82C4",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  dogIcon: {
    width: 40,
    height: 40,
    marginLeft: 5,
    alignSelf:"flex-start"
  },
  registerText: {
    fontSize: 14,
  },
});
