import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-web";

export default function App() {
  return (
    <View style={[styles.container, { backgroundColor: "#000" }]}>
      <TextInput style={styles.input} />
      <TextInput style={styles.input2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  input: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: "#FFF",
    padding: 10,
    width: 250,
  },
  input2: {
    borderWidth: 0,
    textAlign: "center",
    marginTop: 50,
    width: 250,
    padding: 10,
    borderRadius: 15,
    shadowColor: "#FFF",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});
