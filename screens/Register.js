import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";
import { register } from "../utils/auth";
// Components
import AppInput from "../components/AppInput";
import CustomFormik from "../components/CustomFormik";
import SubmitButton from "../components/SubmitButton";
import { updateNotification } from "../utils/helper";
import AppNotification from "../components/AppNotification";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
// import CheckBox from "@react-native-community/checkbox";
// Formik Components
const initialValues = {
  sMobileNo: "",
  fName: "",
  fAccuptation: "",
  mName: "",
  mAccuptation: "",
  inComeOfParents: "",
  gender: "",
  religion: "",
  Exam: "",
  rollNumber: "",
  collageName: "",
  centerOfExam: "",
  examPassed: "",
  nameofBoard: "",
  yearOfPassing: "",
  address: "",
  nationality: "",
};
const validationSchema = yup.object({
  sMobileNo: yup.number().required("Parents Income is Missing"),
  fName: yup.string().trim().required("Father Name is Missing"),
  fAccuptation: yup.string().trim().required("Father Accuptation is Missing"),
  mName: yup.string().trim().required("Mother Name is Missing"),
  mAccuptation: yup.string().trim().required("Mother Accuptation is Missing"),
  inComeOfParents: yup.number().required("Parents Income is Missing"),
  gender: yup.string().trim().required("Gender is Missing"),
  address: yup.string().trim().required("Address is Missing"),
  nationality: yup.string().trim().required("Nationality is Missing"),
  religion: yup.string().trim().required("Religion is Missing"),
  Exam: yup.number().required("Total number of Exam Passed is Missing"),
  rollNumber: yup.string().trim().required("Roll Number is Missing"),
  centerOfExam: yup.string().trim().required("Center Of Exam is Missing"),
  examPassed: yup.number().required("Number of Exam Passed is Missing"),
  collageName: yup.string().trim().required("Collage Name is Missing"),
  nameofBoard: yup.string().trim().required("Name Of Board is Missing"),
  yearOfPassing: yup.number().required("Year Of Passing is Missing"),
});
const image = {
  uri: "https://i0.wp.com/academiamag.com/wp-content/uploads/2021/10/SMIU.jpeg?fit=1280%2C849&ssl=1",
};
const Register = () => {
  const [message, setMessage] = useState({
    text: "",
    type: "",
  });
  const navigation = useNavigation();
  const handleRegister = async (values, formikActions) => {
    const res = await register(values);
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
      <ScrollView>
        <View style={styles.mainContainer}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}
          >
            <View style={styles.lowerContainer}>
              <Text style={styles.mainHeader}>Adminstration Form</Text>
              <CustomFormik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleRegister}
              >
                <AppInput
                  label="Student mobile no"
                  name="sMobileNo"
                  placeholder="Enter mobile no"
                />
                <AppInput
                  label="Father Name"
                  name="fName"
                  placeholder="Enter Father Name"
                />
                <AppInput
                  label="Father Accupation"
                  name="fAccuptation"
                  placeholder="Enter Father Accupation"
                />
                <AppInput
                  label="Mother Name"
                  name="mName"
                  placeholder="Enter Mother Name"
                />
                <AppInput
                  label="Mother Accupation"
                  name="mAccuptation"
                  placeholder="Enter Mother Accupation"
                />
                <AppInput
                  label="Income Of Parents"
                  name="inComeOfParents"
                  placeholder="Enter Income Of Parents"
                />
                <AppInput label="Gender" name="gender" placeholder="Gender" />
                <AppInput
                  label="Permanent Address"
                  name="address"
                  placeholder="Enter your Permanent Address"
                />
                <AppInput
                  label="Nationality"
                  name="nationality"
                  placeholder="Enter Nationality"
                />
                <AppInput
                  label="Religion"
                  name="religion"
                  placeholder="Enter Religion"
                />
                <AppInput
                  label="Total Number of Exam"
                  name="Exam"
                  placeholder="Enter total Exam"
                />
                <AppInput
                  label="Roll No"
                  name="rollNumber"
                  placeholder="Enter Roll No"
                />
                <Text style={styles.label}>Academic Qualification</Text>
                <AppInput
                  label="Center Of Exam"
                  name="centerOfExam"
                  placeholder="Center Of Exam"
                />
                <AppInput
                  label="Number of Exam Passed"
                  name="examPassed"
                  placeholder="Exam Passed"
                />
                <AppInput
                  label="Enter collage name"
                  name="collageName"
                  placeholder="Enter collage name"
                />
                <AppInput
                  label="Name Of board"
                  name="nameofBoard"
                  placeholder="Name Of board"
                />
                <AppInput
                  label="Year of Passing"
                  name="yearOfPassing"
                  placeholder="Year of Passing"
                />
                <SubmitButton title="Save" />
                <TouchableOpacity
                  onPress={() => navigation.navigate("StudentForm")}
                  style={styles.submit}
                >
                  <Text style={styles.btnText}>Next</Text>
                </TouchableOpacity>
              </CustomFormik>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    //  justifyContent:"flex-end",
    //  backgroundColor:"#0b1724"
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
  inputContainer: {
    marginTop: 20,
  },
  label: {
    fontWeight: "bold",
    color: "#ffff",
    paddingBottom: 5,
    lineHeight: 25,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "#fff",
    paddingHorizontal: 6,
    paddingVertical: 2,
  },

  buttonStyle: {
    width: 170,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    marginVertical: 30,
  },
  tochableparagraph: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  submit: {
    height: 50,
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    marginVertical: 5,
  },
  btnText: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
});

export default Register;
