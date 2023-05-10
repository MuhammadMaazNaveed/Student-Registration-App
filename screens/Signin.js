// Dependenies
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import * as yup from "yup";
import { signin } from "../utils/auth";
// import from React Native
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
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

const image = { uri: "https://www.smiu.edu.pk/themes/smiu/images/1-1.jpg" };
const Signin = () => {
  const navigation = useNavigation();
  const [message, setMessage] = useState({
    text: "",
    type: "",
  });

  const handleSignin = async (values, formikActions) => {
    const res = await signin(values);
    formikActions.setSubmitting(false);
    if (!res.success) return updateNotification(setMessage, res.error);
    formikActions.resetForm();
    console.log(res);
    navigation.navigate("Register");
  };
  return (
    <>
      {message.text ? (
        <AppNotification type={message.type} text={message.text} />
      ) : null}
      <View style={styles.mainContainer}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.lowerContainer}>
            <Text style={styles.mainHeader}>Sign in</Text>
            <CustomFormik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSignin}
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
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text
                style={[
                  styles.label,
                  {
                    textAlign: "center",
                    marginTop: 10,
                    color: "#fff",
                  },
                ]}
              >
                Already have an account sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    justifyContent: "flex-end",
  },
  image: {
    width: "100%",
    resizeMode: "stretch",
    flex: 1,
    justifyContent: "flex-end",
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

export default Signin;
