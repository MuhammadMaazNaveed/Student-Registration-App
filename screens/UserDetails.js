// Dependenies
import React, { useEffect, useState } from "react";
import { getUsers } from "../utils/auth";
// import from React Native
import { Text, View, StyleSheet, ScrollView } from "react-native";

const image = { uri: "https://www.smiu.edu.pk/themes/smiu/images/1-1.jpg" };
const UserDetails = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    const response = await getUsers();
    setUsers(response.data);
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        {users.map((curEle) => {
          return (
            <View style={[styles.card, styles.shadowProp]} key={curEle._id}>
              <View>
                <Text style={styles.heading}>User name:{curEle.name} </Text>
                <Text style={styles.heading}>User Email:{curEle.email} </Text>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#000",
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 13,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: "80%",
    marginVertical: 10,
    gap: 20,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default UserDetails;
