import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import { Avatar } from "@react-native-material/core";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';
import pets from "../../img/Pets.png"

export default function App({ data }) {
    const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      {/* Título */}
      <View style={styles.header}>
        <Text style={styles.title}>{data.nome}</Text>
      </View>

      {/* Avatar */}
      <View style={styles.avatarContainer}>
      <Avatar size={130} image={{ uri: data.foto }} />
      </View>
      {/* Ícones */}
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="dog" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={()=> navigation.navigate("Agendamento",{ data: data })}>
          <Icon name="calendar-check" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={()=>navigation.navigate("ShareInfos",{ data: data })}>
          <Icon name="qrcode" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="account-details" size={30} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin:8,
    height:240,
    width:170,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    alignSelf:"center"
  },
  header: {
    backgroundColor: "#0006C2",
    width: "100%",
    height:40,
    justifyContent:"center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    alignSelf:"center",
    fontWeight: "bold",
  },
  avatarContainer: {
    alignSelf:"center",
    marginVertical:15,
    alignItems: "center",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    borderTopWidth: 2,
    borderColor: "#0000FF",
    paddingTop: 5,
  },
  iconButton: {
    alignItems: "center",
    justifyContent: "center",
  },
});
