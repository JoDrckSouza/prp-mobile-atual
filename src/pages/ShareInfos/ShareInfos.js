import { Text, SafeAreaView, StyleSheet, Image, View, TextInput, Touchable, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import qrcode from "../../img/qrcode.png"
import catDog from "../../img/dog-cat.png"
import { useRoute } from '@react-navigation/native';



export default function ShareInfos({ route }) {
  const data = route?.params?.data || [];
  const [numeroSecretaria, setNumeroSecretaria] = useState(data.numeroSecretaria!=null && data.numeroSecretaria !=""?data.numeroSecretaria:"")
  const [numeroPropietario, setNumeroPropietario] = useState(data.proprietario !=null && data.proprietario !=""? data.proprietario.telefone:"")
  const [enderecoSecretaria, setEnderecoSecretaria] = useState(data.enderecoSecretaria!=null && data.enderecoSecretaria !=""?data.enderecoSecretaria:"")
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ position: "absolute", right: 20, top: 100, height: 30, width: 30, }} onPress={() => navigation.navigate("ListagemPet")}>
        <Text style={{ fontSize: 20, fontWeight: "bold", alignSelf: "center", }}>X</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 30, fontWeight: "bold", color: "#3A85CA", alignSelf: "center", }}>NFC</Text>
      <Text style={{ fontSize: 30, fontWeight: "bold", alignSelf: "center", }}>{data?.nome || "Nome Não definido"}</Text>
      <Image source={qrcode} style={styles.logo} />
      <Text style={{alignSelf:"flex-start", marginLeft:20, marginBottom:-10, marginTop:10}} >Telefone Secretaria:</Text>
      <TextInput style={styles.input} value={numeroSecretaria} placeholder='* Numero da secretaria de saude' />
      <Text style={{alignSelf:"flex-start", marginLeft:20, marginBottom:-10, marginTop:10}} >Telefone Proprietario:</Text>
      <TextInput style={styles.input} value={numeroPropietario} placeholder='* Numero do proprietario do pet' />
      <Text style={{alignSelf:"flex-start", marginLeft:20, marginBottom:-10, marginTop:10}} >Endereço Secretaria:</Text>
      <TextInput style={styles.input} value={enderecoSecretaria} placeholder='*Endereço da secretaria de saude' />

      <TouchableOpacity style={styles.saveButton} onPress={() => navigation.navigate("ListagemPet")}>
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    resizeMode: "contain",
  },
  illustration: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  input: {
    width: "90%",
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginTop: 10
  },
  saveButton: {
    width:"90%",
    backgroundColor:"#4caf50",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },
});