import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Modal, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { FontAwesome5 } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';

export default function Agendamento({ route }) {
  const data = route?.params?.data || {};
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventType, setEventType] = useState("Vermifugação");
  const [eventDescription, setEventDescription] = useState("");
  const [eventList, setEventList] = useState(data.agendamentos || []);

  const today = new Date().toISOString().split("T")[0];

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
    setModalVisible(true);
  };

  const addEvent = () => {
    if (selectedDate && eventType) {
      const eventColor =
        eventType === "Vermifugação" ? "green" :
        eventType === "Vacina" ? "purple" :
        "blue";
      const pastDateColor = selectedDate < today ? "red" : eventColor;

      const newEvent = { date: selectedDate, type: eventType, description: eventDescription, color: pastDateColor };
      setEventList((prevEvents) => [...prevEvents, newEvent]);
      setModalVisible(false);
      setEventDescription("");
    }
  };

  const markedDates = eventList.reduce((acc, event) => {
    acc[event.date] = { selected: true, marked: true, selectedColor: event.color };
    return acc;
  }, {});

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Agendamento</Text>

      <View style={styles.calendarContainer}>
        <Calendar
          onDayPress={onDayPress}
          markedDates={markedDates}
          theme={{
            calendarBackground: "#B3D7F9",
            todayTextColor: "#00adf5",
            dayTextColor: "#2d4150",
            arrowColor: "#4caf50",
            monthTextColor: "#000",
          }}
        />
      </View>

      <ScrollView style={styles.eventList}>
        {eventList.length > 0 ? (
          eventList.map((event, index) => (
            <View key={`${event.date}-${index}`} style={styles.eventItem}>
              <FontAwesome5 name="paw" size={20} color={event.color} style={styles.icon} />
              <Text style={styles.eventText}>{event.date}: {event.type} - {event.description}</Text>
            </View>
          ))
        ) : (
          <Text style={{ textAlign: "center", color: "#777" }}>Nenhum evento cadastrado.</Text>
        )}
      </ScrollView>

      <TouchableOpacity style={styles.saveButton} onPress={() => navigation.navigate("ListagemPet")}>
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Selecione o Tipo de Evento:</Text>
            <Picker selectedValue={eventType} onValueChange={(itemValue) => setEventType(itemValue)}>
              <Picker.Item label="Vermifugação" value="Vermifugação" />
              <Picker.Item label="Vacina" value="Vacina" />
              <Picker.Item label="Visita" value="Visita" />
            </Picker>
            <Text>Descrição:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite a descrição"
              value={eventDescription}
              onChangeText={setEventDescription}
            />
            <TouchableOpacity style={styles.saveButton} onPress={addEvent}>
              <Text style={styles.saveButtonText}>Adicionar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
    marginTop: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  calendarContainer: {
    backgroundColor: "#e0f7fa",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  eventList: {
    flex: 1,
  },
  eventItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  eventText: {
    fontSize: 14,
    flexShrink: 1,
  },
  saveButton: {
    backgroundColor: "#4caf50",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginTop: 10,
    borderRadius: 5,
  },
  cancelButton: {
    marginTop: 10,
    backgroundColor: "#d32f2f",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

