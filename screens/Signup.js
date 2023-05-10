import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import * as yup from "yup";
import { signup } from "../utils/auth";
// Components
import AppInput from "../components/AppInput";
import CustomFormik from "../components/CustomFormik";
import SubmitButton from "../components/SubmitButton";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import AppNotification from "../components/AppNotification";
import { updateNotification } from "../utils/helper";
const initialValues = {
  name: "",
  email: "",
  password: "",
};
const validationSchema = yup.object({
  name: yup.string().trim().required("Name is Missing"),
  email: yup.string().email("Invalid Email").required("Email is Missing"),
  password: yup
    .string()
    .trim()
    .min(8, "Password is too short")
    .required("Password is Missing"),
});
const image = {
  uri: "https://i0.wp.com/academiamag.com/wp-content/uploads/2021/10/SMIU.jpeg?fit=1280%2C849&ssl=1",
};
const Signup = () => {
  const navigation = useNavigation();
  const [message, setMessage] = useState({
    text: "",
    type: "",
  });

  const handleSignup = async (values, formikActions) => {
    const res = await signup(values);
    formikActions.setSubmitting(false);
    if (!res.success) return updateNotification(setMessage, res.error);
    formikActions.resetForm();
    console.log(res);
  };

  return (
    <>
      {message.text ? (
        <AppNotification type={message.type} text={message.text} />
      ) : null}
      <View style={styles.mainContainer}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.lowerContainer}>
            <CustomFormik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSignup}
            >
              <Text style={styles.mainHeader}>New Account</Text>
              <AppInput
                label="Enter your name"
                name="name"
                placeholder="Enter Name"
                placeholderTextColor={"#ffff"}
              />
              <AppInput
                label="Enter your email"
                name="email"
                placeholder="Enter email"
                placeholderTextColor={"#ffff"}
              />
              <AppInput
                label="Enter your password"
                name="password"
                secureTextEntry
                placeholder="Enter password"
                placeholderTextColor={"#ffff"}
              />
              <SubmitButton title="Sign up" />
              <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
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
                  Already have an account sign in
                </Text>
              </TouchableOpacity>
            </CustomFormik>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
  },
  image: {
    height: "100%",
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
    color: "#fff",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: "capitalize",
  },
});

export default Signup;
