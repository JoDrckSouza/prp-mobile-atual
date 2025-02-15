import { Text, SafeAreaView, StyleSheet, Image, FlatList, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {
    AppBar,
    Stack,
    ActivityIndicator,
    Button,
    FAB,
    Avatar,
    IconButton,

} from "@react-native-material/core";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import CardListPet from './CardListPet';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


export default function ListagemPet() {
    const navigation = useNavigation()

    let notifications = ["vascina atrazada", "teste"]
    const listapet = [
        {
            "id": "1",
            "nome": "kdid",
            "dataNasc": "10/10/2024",
            "cor": "preto",
            "especie": "pincher",
            "sexo": "masculino",
            "peso": "10kg",
            "secretaria": "maria das dores",
            "uf": "PB",
            "cidade": "Esperança",
            "obs": "yagsuab",
            "dataObs": "10/10/2024",
            "foto": "https://thumbs.dreamstime.com/b/o-c%C3%A3o-de-cachorrinho-havanese-avermelhado-feliz-bonito-est%C3%A1-sentando-o-frontal-46868560.jpg",

            "agendamentos": [
                { "color": "purple", "date": "2025-02-11", "description": "Usjsjiw", "type": "vascina" },
                { "color": "green", "date": "2025-02-13", "description": "Ueywuwuw", "type": "Vermifungação" },
                { "color": "blue", "date": "2025-02-19", "description": "Eetty6", "type": "visita" }
            ], 
            "enderecoSecretaria": "rua solon de lucena 110",
            "numeroSecretaria": "+55 (99) 99999-9999",
            "proprietario": {
                "nome": "Joao",
                "email": "joao@gmail.com",
                "telefone": "+55 (99) 99999-9999",
                "endereco": "rua do joao,",
                "cpf": "000-000-000-00",
                "password": "55555555"
            }
        },
        { "id": "2", "nome": "Bilu", "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV1RlrbxJfEqwRJACDSVzfUmCqSdrP8QUkYA&s", "agendamentos": [{ "color": "purple", "date": "2025-02-11", "description": "Usjsjiw", "type": "vascina" }, { "color": "green", "date": "2025-02-13", "description": "Ueywuwuw", "type": "Vermifungação" }, { "color": "blue", "date": "2025-02-19", "description": "Eetty6", "type": "visita" }] },
        { "id": "3", "nome": "Rex", "foto": "https://media.istockphoto.com/id/1041987488/pt/foto/cute-dog-put-his-face-on-his-knees-to-the-man-and-smiling-from-the-hands-scratching-her-ear.jpg?s=612x612&w=0&k=20&c=wukm2w7ns6lPJpX-DW3jIeWzuFNO7ZfDVrhyXCBNJIw=", "agendamentos": [{ "color": "purple", "date": "2025-02-11", "description": "Usjsjiw", "type": "vascina" }, { "color": "green", "date": "2025-02-13", "description": "Ueywuwuw", "type": "Vermifungação" }, { "color": "blue", "date": "2025-02-19", "description": "Eetty6", "type": "visita" }] },
        { "id": "4", "nome": "Luna", "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRonXcOEj2uGGwnfxJ0RfO_LtebKlzFe7HPIw&s", "agendamentos": [{ "color": "purple", "date": "2025-02-11", "description": "Usjsjiw", "type": "vascina" }, { "color": "green", "date": "2025-02-13", "description": "Ueywuwuw", "type": "Vermifungação" }, { "color": "blue", "date": "2025-02-19", "description": "Eetty6", "type": "visita" }] },
        { "id": "5", "nome": "kdid", "foto": "https://img.freepik.com/fotos-gratis/imagem-vertical-de-foco-raso-de-um-filhote-de-cachorro-golden-retriever-fofo-sentado-em-um-gramado_181624-27259.jpg?w=360", "agendamentos": [{ "color": "purple", "date": "2025-02-11", "description": "Usjsjiw", "type": "vascina" }, { "color": "green", "date": "2025-02-13", "description": "Ueywuwuw", "type": "Vermifungação" }, { "color": "blue", "date": "2025-02-19", "description": "Eetty6", "type": "visita" }] },
        { "id": "6", "nome": "Bilu", "foto": "https://i.pinimg.com/474x/58/29/47/5829475fa11d8d875e81b9fff1fe0fb4.jpg", "agendamentos": [{ "color": "purple", "date": "2025-02-11", "description": "Usjsjiw", "type": "vascina" }, { "color": "green", "date": "2025-02-13", "description": "Ueywuwuw", "type": "Vermifungação" }, { "color": "blue", "date": "2025-02-19", "description": "Eetty6", "type": "visita" }] },
        { "id": "7", "nome": "Rex", "foto": "https://cdn.pixabay.com/photo/2019/12/12/16/27/dog-4691166_640.jpg", "agendamentos": [{ "color": "purple", "date": "2025-02-11", "description": "Usjsjiw", "type": "vascina" }, { "color": "green", "date": "2025-02-13", "description": "Ueywuwuw", "type": "Vermifungação" }, { "color": "blue", "date": "2025-02-19", "description": "Eetty6", "type": "visita" }] },
        { "id": "8", "nome": "Luna", "foto": "https://purina.com.br/sites/default/files/2022-12/purina-dog-chow-brincadeiras-com-cachorro.jpg", "agendamentos": [{ "color": "purple", "date": "2025-02-11", "description": "Usjsjiw", "type": "vascina" }, { "color": "green", "date": "2025-02-13", "description": "Ueywuwuw", "type": "Vermifungação" }, { "color": "blue", "date": "2025-02-19", "description": "Eetty6", "type": "visita" }] },
    ];

    function numColumns() {
        const { width } = Dimensions.get("window");

        if (width < 383) {
            console.log("menor")
            return 1;
        }
        else {
            return (Math.ceil(width / 383));
        }
    }
    function navegar() {
        navigation.navigate("CadDono")
    }

    return (
        <>
            <AppBar
                title={
                    <Stack style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: "center" }} >
                        <TouchableOpacity onPress={() => navigation.navigate("User")}>
                            <Avatar color='#C8C4C4' icon={props => <Icon name="account" {...props} />} />
                        </TouchableOpacity>
                        <Icon name="paw" color="#3A85CA" size={50} />
                        <Text style={{ fontSize: 30, fontWeight: "bold", alignSelf: "center" }}>PRP</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Notificacao",{ data: notifications })}>
                            <MaterialIcons name="notifications-active" size={40} color="blac#" />
                        </TouchableOpacity>
                        <FAB onPress={() => navegar()} color="blue" icon={props => <Icon name="plus" {...props} />} />
                    </Stack>
                }
                style={{
                    backgroundColor: "#DADADA", height: 80, marginTop: 26, justifyContent: "center", paddingLeft: 10, paddingRight: 10
                }}
            />
            <Stack style={{ flexDirection: "row", alignItems: "center", height: 40, width: "90%", marginTop: 20, marginBottom: 20, alignSelf: "center", borderRadius: 90, borderWidth: 2 }}>
                <TextInput
                    style={{ width: "85%", marginLeft: 15 }}
                    placeholder="Pesquisa"
                />
                <Entypo style={{ marginLeft: 5 }} name="magnifying-glass" size={30} color="black" />
            </Stack>

            <FlatList
                data={listapet}
                keyExtractor={(item, index) => index.toString()}
                style={{ alignSelf: "center", marginBottom: 5 }}
                renderItem={({ item }) => <CardListPet data={item} />}
                numColumns={numColumns()}
                showsVerticalScrollIndicator={false}
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#1D0D55',
        padding: 8,
    },
});