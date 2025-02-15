import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from "../pages/Splash/splash.js"
import ListagemPet from "../pages/CadastroPet/ListagemPet.js"
import CardListPet from "../pages/CadastroPet/CardListPet.js"
import CadDono from "../pages/CadastroPet/CadDono.js"
import CadastroProntuario from "../pages/CadastroPet/CadastroProntuario.js"
import Agendamento from "../pages/CadastroPet/Agendamento.js"
import Login from "../pages/LogIn/Login.js"
import RecuperarSenha from "../pages/LogIn/RecuperarSenha/RecuperarSenha.js"
import RecSenhaCod from "../pages/LogIn/RecuperarSenha/RecSenhaCod.js"
import RecSenhaNovaSenha from "../pages/LogIn/RecuperarSenha/RecSenhaNovaSenha.js"
import SingUp from "../pages/SingUp/SingUp.js"
import ShareInfos from "../pages/ShareInfos/ShareInfos.js"
import User from "../pages/User/User.js"
import Notificacao from "../pages/Notificacao/Notificacao.js"

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash"
                component={Splash}
                options={{ headerShown: false }}
            />
             <Stack.Screen name="LogIn"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="RecuperarSenha"
                component={RecuperarSenha}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="RecSenhaCod"
                component={RecSenhaCod}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="RecSenhaNovaSenha"
                component={RecSenhaNovaSenha}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="SingUp"
                component={SingUp}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="ListagemPet"
                component={ListagemPet}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="CardListPet"
                component={CardListPet}
                options={{ headerShown: false }}
            />
                <Stack.Screen name="CadDono"
                    component={CadDono}
                    options={{ headerShown: false }}
                />
            <Stack.Screen name="CadastroProntuario"
                component={CadastroProntuario}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Agendamento"
                component={Agendamento}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="ShareInfos"
                component={ShareInfos}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="User"
                component={User}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Notificacao"
                component={Notificacao}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
}