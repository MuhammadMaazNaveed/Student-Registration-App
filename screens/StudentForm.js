import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { DataTable } from "react-native-paper";
import { getStudents } from "../utils/auth";
const image = { uri: "https://www.smiu.edu.pk/themes/smiu/images/1-1.jpg" };

const StudentForm = () => {
  const [students, setStudents] = useState([]);

  const getAllStudents = async () => {
    const response = await getStudents();
    setStudents(response.data);
  };
  useEffect(() => {
    getAllStudents();
  }, []);
  const [agree, setAgree] = useState(false);
  return (
    <ScrollView>
      {students.map((curElem, i) => {
        return (
          <View style={styles.mainContainer} key={curElem._id}>
            <ImageBackground
              source={image}
              resizeMode="cover"
              style={styles.image}
            >
              <DataTable style={styles.container}>
                <DataTable.Header style={styles.tableHeader}>
                  <DataTable.Title>
                    <Text style={styles.title}>Student Mobile No</Text>
                  </DataTable.Title>
                  <DataTable.Title>
                    <Text style={styles.title}>Father Name</Text>
                  </DataTable.Title>
                  <DataTable.Title>
                    <Text style={styles.title}>Father Accupation</Text>
                  </DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                  <DataTable.Cell>
                    <Text key={i} style={styles.label}>
                      {curElem.sMobileNo}
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text key={i} style={styles.label}>
                      {curElem.fName}
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text key={i} style={styles.label}>
                      {curElem.fAccuptation}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable>
              <DataTable style={styles.container}>
                <DataTable.Header style={styles.tableHeader}>
                  <DataTable.Title>
                    <Text style={styles.title}>Mother Name</Text>
                  </DataTable.Title>
                  <DataTable.Title>
                    <Text style={styles.title}>Mother Occupation</Text>
                  </DataTable.Title>
                  <DataTable.Title>
                    <Text style={styles.title}>Income Of Parents</Text>
                  </DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                  <DataTable.Cell>
                    <Text key={i} style={styles.label}>
                      {curElem.mName}
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text key={i} style={styles.label}>
                      {curElem.mAccuptation}
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text key={i} style={styles.label}>
                      {curElem.inComeOfParents}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable>
              <DataTable style={styles.container}>
                <DataTable.Header style={styles.tableHeader}>
                  <DataTable.Title>
                    <Text style={styles.title}>Gender</Text>
                  </DataTable.Title>
                  <DataTable.Title>
                    <Text style={styles.title}>Permanent Address</Text>
                  </DataTable.Title>
                  <DataTable.Title>
                    <Text style={styles.title}>Nationality</Text>
                  </DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                  <DataTable.Cell>
                    <Text key={i} style={styles.label}>
                      {curElem.gender}
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text key={i} style={styles.label}>
                      {curElem.address}
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text key={i} style={styles.label}>
                      {curElem.nationality}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable>
              <DataTable style={styles.container}>
                <DataTable.Header style={styles.tableHeader}>
                  <DataTable.Title>
                    <Text style={styles.title}>Religion</Text>
                  </DataTable.Title>
                  <DataTable.Title>
                    <Text style={styles.title}>Exam</Text>
                  </DataTable.Title>
                  <DataTable.Title>
                    <Text style={styles.title}>Roll No</Text>
                  </DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                  <DataTable.Cell>
                    <Text key={i} style={styles.label}>
                      {curElem.religion}
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text key={i} style={styles.label}>
                      {curElem.Exam}
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text key={i} style={styles.label}>
                      {curElem.rollNumber}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable>
              <DataTable style={styles.container}>
                <DataTable.Header style={styles.tableHeader}>
                  <DataTable.Title>
                    <Text style={styles.title}>Collage Name</Text>
                  </DataTable.Title>
                  <DataTable.Title>
                    <Text style={styles.title}>Center Of Exam</Text>
                  </DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                  <DataTable.Cell>
                    <Text key={i} style={styles.label}>
                      {curElem.collageName}
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text key={i} style={styles.label}>
                      {curElem.centerOfExam}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable>
              <DataTable style={styles.container}>
                <DataTable.Header style={styles.tableHeader}>
                  <DataTable.Title>
                    <Text style={styles.title}>Exam Passed</Text>
                  </DataTable.Title>
                  <DataTable.Title>
                    <Text style={styles.title}>Name Of board</Text>
                  </DataTable.Title>
                  <DataTable.Title>
                    <Text style={styles.title}>Year of Passing</Text>
                  </DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                  <DataTable.Cell>
                    <Text key={i} style={styles.label}>
                      {curElem.examPassed}
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text key={i} style={styles.label}>
                      {curElem.nameofBoard}
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text key={i} style={styles.label}>
                      {curElem.yearOfPassing}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable>
              <TouchableOpacity
                style={[
                  styles.buttonStyle,
                  {
                    backgroundColor: agree ? "#ffff" : "#515f68",
                  },
                ]}
              >
                <Text
                  style={[
                    styles.tochableparagraph,
                    {
                      // color:'#000'
                    },
                  ]}
                >
                  Print
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default StudentForm;

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
  },
  container: {
    padding: 20,
  },
  image: {
    width: "100%",
    resizeMode: "stretch",
    flex: 1,
    // justifyContent: 'flex-end',
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
  label: {
    fontWeight: "bold",
    color: "#fff",
    paddingBottom: 5,
    lineHeight: 25,
  },
  title: {
    fontWeight: "bold",
    color: "#fff",
    paddingBottom: 5,
    lineHeight: 25,
  },
  buttonStyle: {
    borderRadius: 10,
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
});
