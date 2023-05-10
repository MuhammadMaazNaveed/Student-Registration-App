import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {useFormikContext} from 'formik';

const AppInput = ({label, name, placeholder, ...rest}) => {
  const {errors, values, touched, handleBlur, handleChange} =
    useFormikContext();
  const value = values[name];
  const error = errors[name];
  const isInputToched = touched[name];
  return (
    <>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          value={value}
          placeholder={placeholder}
          onChangeText={handleChange(name)}
          onBlur={handleBlur(name)}
          style={styles.input}
          {...rest}
        />
        {error && isInputToched ? (
          <Text style={{color: 'red', paddingVertical: 3}}>{error}</Text>
        ) : null}
      </View>
    </>
  );
};
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: width - 50,
    borderWidth: 1,
    borderColor: '#fff',
    paddingHorizontal: 6,
    paddingVertical: 2,
    backgroundColor: 'transparent',
  },
  inputContainer: {
    marginTop: 20,
  },
  label: {
    fontWeight: 'bold',
    color: '#ffff',
    paddingBottom: 5,
    lineHeight: 25,
  },
});
export default AppInput;
