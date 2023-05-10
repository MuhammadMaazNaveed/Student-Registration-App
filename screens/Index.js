import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
const image = {
  uri: "https://i0.wp.com/academiamag.com/wp-content/uploads/2021/10/SMIU.jpeg?fit=1280%2C849&ssl=1",
};
const image1 = {
  uri: "https://media.teckiz.com/resources/header/fastbzu/BZU_W.png",
};
export default function Index(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Image style={styles.tinyLogo} source={image1} />
        <View>
        <Text style={styles.heading}> Online Admission System </Text>
          <Text style={styles.heading}> {props.pageName} Screen</Text>
          <Text style={styles.paragraph}>
            
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Signup")}
            >
              <Text style={styles.tochableparagraph}>Get Started</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Signin")}
              style={[styles.button, { backgroundColor: "#ffff" }]}
            >
              <Text style={[styles.tochableparagraph, { color: "#000" }]}>
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
  image: {
    height: 800,
    padding: 60,
    alignItems: "center",
    justifyContent: "space-between",
  },

  buttonContainer: {
    width: 300,
    height: 130,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  button: {
    width: 300,
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#605dee",
    padding: 10,
  },
  tochableparagraph: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  heading: {
    margin: 30,
    marginTop: 0,
    fontSize: 30,   
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
});
