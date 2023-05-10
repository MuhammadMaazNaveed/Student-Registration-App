import { StyleSheet, Text, Pressable, Dimensions } from "react-native";
import React from "react";
import { useFormikContext } from "formik";

const SubmitButton = ({ title }) => {
  const { handleSubmit, isSubmitting } = useFormikContext();
  return (
    <Pressable
      onPress={isSubmitting ? null : handleSubmit}
      style={[
        styles.submit,
        { backgroundColor: isSubmitting ? "gray" : "#8469cf" },
      ]}
    >
      <Text style={styles.btnText}>{title}</Text>
    </Pressable>
  );
};

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  submit: {
    height: 50,
    width: width - 50,
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
export default SubmitButton;
