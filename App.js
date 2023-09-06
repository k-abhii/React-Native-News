import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import CustomSlider from "./Components/CustomSlider";
import News from "./Components/News";
const image = require("./assets/adaptive-icon.png");

export default function App() {
  const [name, setName] = useState("");

  const handlePress = () => {
    Alert.alert("User name details", name);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <News />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: { width: 300, height: 300 },
});

// <SafeAreaView  style={styles.container}>
// <ScrollView  contentContainerStyle={styles.innerContainer}>
//   <Text>Hello from react native Training 05/09/2023</Text>
{
  /* <Image source={image}   style={styles.img}></Image>
      <Image source={image}   style={styles.img}></Image>
      <Image source={image}   style={styles.img}></Image>
      <Image source={image}   style={styles.img}></Image>
      <Image source={image}   style={styles.img}></Image>
      <Image source={image}   style={styles.img}></Image>
      <Image source={image}   style={styles.img}></Image> */
}
// {/* <Image source={{uri:'https://picsum.photos/seed/picsum/200/300'}}   style={styles.img}></Image> */}
// <TextInput placeholder='Enter your name here' onChangeText={(text)=>setName(text)}
// value={name}/>
//   <Button title="Show name" onPress={handlePress}/>
//  <Text>Name of the user:{name}</Text> */}
{
  /* <CustomSlider/> */
}
