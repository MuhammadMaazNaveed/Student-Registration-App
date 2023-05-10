import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import About1 from "../assests/about1.jpg";
import About2 from "../assests/about2.jpg";

const About = () => {
    return (
        <ScrollView>
            <View style={styles.mainContainer}>
                <View style={styles.Item}>
                    <Image source={About1} style={styles.AboutImage} />
                    <Text style={styles.heading}>
                        Bahauddin Zakariya University
                    </Text>
                    <Text style={styles.para}>
                        Multan has always remained a centre of excellence in education. Hazrat Bahauddin Zakariya (1172 - 1262 A.D.), a Muslim religious scholar and saint, established a school of higher learning in theology in Multan; where scholars from all over the world came for studies and research. Multan has maintained its central position and centuries old cultural heritage and therefore suited ideally to become a center of learning. Thus the University of Multan was established in 1975 by an Act of the Punjab Legislative Assembly. To pay homage to the Great Saint, the name was changed from University of Multan to Bahauddin Zakariya University in 1979.
                    </Text>
                </View>
                <View style={styles.Item}>
                    <Image source={About2} style={styles.AboutImage} />
                    <Text style={styles.heading}>
                        Jurisdiction
                    </Text>
                    <Text style={styles.para}>
                        The main objective of the University is to provide facilities of higher education and research to the population of the Southern region of the Punjab. The University fulfils three functions: teaching, affiliation and examination. The University has 290 affiliated colleges, which include old and prestigious institutions such as the Government Emerson College Multan, the Government College, Sahiwal and the NFC Institute of Engineering & Technology, Multan.
                    </Text>
                </View>
                <View style={styles.Item}>
                    <Image source={About2} style={styles.AboutImage} />
                    <Text style={styles.heading}>
                        Jurisdiction
                    </Text>
                    <Text style={styles.para}>
                        The main objective of the University is to provide facilities of higher education and research to the population of the Southern region of the Punjab. The University fulfils three functions: teaching, affiliation and examination. The University has 290 affiliated colleges, which include old and prestigious institutions such as the Government Emerson College Multan, the Government College, Sahiwal and the NFC Institute of Engineering & Technology, Multan.
                    </Text>
                </View>

            </View >
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        height: "100%",
        paddingLeft: 20,
        paddingRight: 20,
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    Item: {
        width: 300,
        height: 400,
        overflow: "hidden"
    },
    AboutImage: {
        width: "100%",
        resizeMode: "cover",
        flex: 1
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold"
    },
    para: {
        fontSize: 15,
        fontWeight: "300"
    }

});
export default About;
