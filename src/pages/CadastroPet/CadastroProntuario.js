import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';
import { Avatar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';


export default function PetCadastro() {
  const navigation = useNavigation()

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro Pet</Text>
      <Avatar
        color="#BCB7B7"
        icon={(props) => <Icon name="account" {...props} />}
        style={styles.avatar}
      />
      <Text style={styles.optionalText}>(Opcional)</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Nome do Pet :</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Proprietário do Pet :</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Data de nascimento :</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Cor :</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Espécie :</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Sexo :</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Peso :</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Secretaria de Saúde :</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.row}>
        <View style={[styles.formGroup, { flex: 1 }]}>
          <Text style={styles.label}>UF :</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={[styles.formGroup, { flex: 2, marginLeft: 5 }]}>
          <Text style={styles.label}>Cidade :</Text>
          <TextInput style={styles.input} />
        </View>
      </View>

      <View style={styles.row}>
        <View style={[styles.formGroup, { flex: 2 }]}>
          <Text style={styles.label}>Observações :</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={[styles.formGroup, { flex: 2, marginLeft: 5 }]}>
          <Text style={styles.label}>Data :</Text>
          <TextInput style={styles.input} />
        </View>
        <TouchableOpacity style={[styles.iconButton, { height: 40, marginTop: 10, justifyContent: "center", alignItems: "center" }]}>
          <Icon name=" " style={{ alignSelf: "center", marginTop: -2 }} size={24} color="black" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Agendamento")} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 90,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'blue',
  },
  avatar: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  optionalText: {
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: 'green',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
