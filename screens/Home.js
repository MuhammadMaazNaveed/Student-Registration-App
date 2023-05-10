import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ProfileIcon from "../assests/profile.png"
import book from "../assests/book.png"
import Logout from "../assests/logout.png"
const image1 = {
    uri: "https://i.pinimg.com/474x/94/03/cb/9403cba8aa7eb269a88f047aa7258a1a.jpg",
};
const image = {
    uri: "https://i0.wp.com/academiamag.com/wp-content/uploads/2021/10/SMIU.jpeg?fit=1280%2C849&ssl=1",
};
const Home = () => {
    const navigation = useNavigation();
    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.image} blurRadius={4}>
            <View style={styles.HomeContainer}>
                <View style={styles.Logo}>
                    <Image style={styles.LogoImage} source={image1} />
                    <Text style={styles.LogoText}>
                        Welcome to the Admission System
                    </Text>
                </View>
                <View style={styles.IconContainer}>
                    <TouchableOpacity style={styles.IconItem} onPress={() => navigation.navigate("About")}>
                        <Image source={ProfileIcon} style={styles.Iconimage} />
                        <Text style={styles.IconText}>
                            Profile
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.IconItem} onPress={() => navigation.navigate("Register")}>
                        <Image source={ProfileIcon} style={styles.Iconimage} />
                        <Text style={styles.IconText}>
                            Registration
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.IconItem}>
                        <Image source={book} style={styles.Iconimage} />
                        <Text style={styles.IconText}>
                            Book Status
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.IconItem} >
                        <Image source={Logout} style={styles.Iconimage} />
                        <Text style={styles.IconText}>
                            Logout
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Home

const styles = StyleSheet.create({
    HomeContainer: {
        width: "100%",
        height: "100%",
        marginTop: 50,
        display: "flex",
        alignItems: "center",
    },
    Logo: {
        width: 300,
        height: 300,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#ffff",
        shadowColor: '#0000',
        shadowOffset: { width: 20, height: 40 },
        shadowOpacity: 1,
        shadowRadius: 6,
        borderColor: "blue",
        borderRadius: 20,
        borderWidth: 5
    }
    ,
    LogoImage: {
        flex: 1,
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    LogoText: {
        marginBottom: 10,
        marginTop: 0,
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        color: "#000",
    },
    IconContainer: {
        width: 300,
        height: 300,
        paddingTop: 20,
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 50,
        overflow: "hidden",
        marginTop: 30,
    },
    IconItem: {
        width: 80,
        height: 100,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 10
    },
    Iconimage: {
        width: 50,
        resizeMode: "contain",
        overflow: "hidden",
        position: "relative",
        zIndex: -20
    },
    IconText: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        color: "#000",
        position: "relative",
        zIndex: 20
    }
})