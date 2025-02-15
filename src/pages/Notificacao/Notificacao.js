import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Modal, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { FontAwesome5 } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';


export default function Notificacao({ route }) {
  const data = route?.params?.data || [];
  const navigation = useNavigation();
  const [listaNotificação, setListaNotificação] = useState(data);

  return (
    <View style={styles.container}>
   
    <Text style={styles.header}>Notificações</Text>
      <ScrollView style={styles.eventList}>
        {listaNotificação != null && listaNotificação != "" ? listaNotificação.map((event, index) => (
          <View key={`${event.date}-${index}`} style={styles.eventItem}>
            <FontAwesome5 name="paw" size={20} color="black" style={styles.icon} />
            <Text style={styles.eventText}>{event}</Text>
          </View>
        )):null}
      </ScrollView>

      <TouchableOpacity style={styles.saveButton} onPress={() => navigation.navigate("ListagemPet")}>
        <Text style={styles.saveButtonText}>Voltar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
    marginTop: 20
  },
  header:{
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10
  },
  calendarContainer: {
    backgroundColor: "#e0f7fa",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20
  },
  eventList: {
    flex: 1
  },
  eventItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  icon: {
    marginRight: 10
  },
  eventText: {
    fontSize: 14,
    flexShrink: 1
  },
  saveButton: {
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%"
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginTop: 10,
    borderRadius: 5
  },
  cancelButton: {
    marginTop: 10,
    backgroundColor: "#d32f2f",
    padding: 10,
    borderRadius: 5,
    alignItems: "center"
  },
  cancelButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold" 
  },
});
