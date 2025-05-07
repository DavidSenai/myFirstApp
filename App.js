import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const changeText = () => {
    console.log("Foi digitado algo no TEXT INPUT");
  };
  return (
    <ImageBackground
      style={styles.container}
      source={require("./src/assets/images/fundo.jpg")}
      resizeMode="cover"
    >
      <TextInput />
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        secureTextEntry={true}
        placeholderTextColor="red"
        inputMode={"numeric"}
        autoCapitalize="characters"
        multiline={true}
        onChangeText={changeText}
      />

      {/* <Button
        title="Click me!"
        color="#ff0000"
        onPress={() => alert("Você apertou no botão")}
      /> */}

      <TouchableOpacity
        style={styles.btn}
        onPress={() => console.log("YOU CLICK ME!")}
      >
        <Text style={styles.Text}>CLICK ME!</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "cover",
  },
  Text: {
    color: "#fff",
  },
  input: {
    color: "#ff0000",
    width: 300,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ff0000",
  },
  btn: {
    width: 100,
    padding: 10,
    backgroundColor: "#ff0000",
    color: "#000",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ff0000",
  },
  // texto: {
  //   color: "#fff",
  // },
});

// <View style={[styles.container, { backgroundColor: "#fff" }]}>
// <Text style={styles.Text}>ALO MUNDO! :D</Text>

// <TextInput
//   style={styles.input}
//   placeholder="Digite seu nome"
//   secureTextEntry={true}
//   placeholderTextColor="red"
//   inputMode={"numeric"}
//   autoCapitalize="characters"
//   multiline={true}
//   onChangeText={changeText}
// />

// <Image
//   source={require("./src/assets/images/qualquer.jpg")}
//   style={styles.image}
// />
// </View>
