import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("rgb(25, 12, 118)");
  

  const onPressButton = () => {
    const randomRenk = `rgb(${randomSayi()}, ${randomSayi()}, ${randomSayi()})`;
    setBackgroundColor(randomRenk);
  };

  const randomSayi = () => {
    return Math.floor(Math.random() * 256);
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
 <TouchableOpacity style={styles.button} onPress={onPressButton}>
  <Text style={styles.buttonText}>Tıkla :D</Text>
 </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderWidth: 1,
    borderColor: "yellow",
    borderRadius: 7,
    padding: 10,
    backgroundColor: "white",
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default App;
