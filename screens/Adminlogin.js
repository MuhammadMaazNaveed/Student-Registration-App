// Dependenies
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import * as yup from "yup";
import { login, signin } from "../utils/auth";
// import from React Native
import { Text, View, StyleSheet, ImageBackground, Image } from "react-native";
// Components
import AppInput from "../components/AppInput";
import CustomFormik from "../components/CustomFormik";
import SubmitButton from "../components/SubmitButton";
import { updateNotification } from "../utils/helper";
import AppNotification from "../components/AppNotification";
// Formik Components
const initialValues = {
  email: "",
  password: "",
};
const validationSchema = yup.object({
  email: yup.string().email("Invalid Email").required("Email is Missing"),
  password: yup
    .string()
    .trim()
    .min(8, "Password is too short")
    .required("Password is Missing"),
});
const image1 = {
  uri: "https://media.teckiz.com/resources/header/fastbzu/BZU_W.png",
};

const image = { uri: "https://www.smiu.edu.pk/themes/smiu/images/1-1.jpg" };
const Adminlogin = () => {
  const navigation = useNavigation();
  const [message, setMessage] = useState({
    text: "",
    type: "",
  });

  const handleLogin = async (values, formikActions) => {
    const res = await login(values);
    formikActions.setSubmitting(false);
    if (!res.success) return updateNotification(setMessage, res.error);
    formikActions.resetForm();
    console.log(res);
    navigation.navigate("UserDetails");
  };
  return (
    <>
      {message.text ? (
        <AppNotification type={message.type} text={message.text} />
      ) : null}
      <View style={styles.mainContainer}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Image style={styles.tinyLogo} source={image1} />
          <Text
            style={[
              styles.mainHeader,
              {
                fontSize: 30,
              },
            ]}
          >
            Admin
          </Text>
          <View style={styles.lowerContainer}>
            <Text style={styles.mainHeader}>Login in</Text>
            <CustomFormik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              <AppInput
                label="Enter your email"
                name="email"
                placeholder="Enter email"
                placeholderTextColor={"#ffff"}
              />
              <AppInput
                label="Enter your password"
                name="password"
                placeholder="Enter password"
                secureTextEntry
                placeholderTextColor={"#ffff"}
              />
              <SubmitButton title="Sign in" />
            </CustomFormik>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
  image: {
    width: 500,
    height: 800,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 60,
  },
  lowerContainer: {
    paddingHorizontal: 30,
  },
  mainHeader: {
    marginTop: 50,
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: "capitalize",
  },
});

export default Adminlogin;
