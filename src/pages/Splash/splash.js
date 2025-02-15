import { Text, SafeAreaView, StyleSheet, Image, View } from 'react-native';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import logo from "../../img/logo.png"
import catDog from "../../img/dog-cat.png"


export default function Splash() {
  const navigation = useNavigation()
  useEffect(() => {
    setTimeout(()=>{
      navigation.navigate("LogIn")
    },3000)
   
  })
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={{ fontSize: 30, fontWeight: "bold", alignSelf: "center", marginBottom: 50,}}>PRP</Text>
      <Image source={catDog} style={styles.illustration} />
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
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  illustration: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
});