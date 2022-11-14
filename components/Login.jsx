import {
    Alert,
    Button,
    Image,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
} from "react-native";
import favicon from "../assets/favicon.png";
import {StatusBar} from "expo-status-bar";

const Login = () => {

    const handlePress = () => {
        Alert.alert("Sign Up", "do u want to sign up?", [{text: "yes"}, {text: "no"}]);
    }

    const handleSecondPress = () => {
        Alert.prompt("Test Button", "enter some text",  text => {alert(`your text: ${text}`)});
    }

    const handleImgPress = () => {
        alert("u pressed the button");
    }


    return(
        <SafeAreaView style={styles.container}>
            <View style={[styles.box, styles.title]}>
                <TouchableWithoutFeedback onPress={handleImgPress}>
                    <Image source={favicon}/>
                </TouchableWithoutFeedback>
                <Text>Find a good roommate :)</Text>
            </View>
            <View style={[styles.box]}>
                <Button title={"Sign Up"} onPress={handlePress}/>
                <Button title={"Second Button"} onPress={handleSecondPress}/>
            </View>
            <View style={[styles.loginForm, styles.box]}>
                <TextInput placeholder={"enter your name"}/>
                <TextInput placeholder={"enter your email"} />
                <Button title={"submit"}/>
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}

export default Login;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#db83db',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    loginForm: {
        fontSize: 50,
        color: "red",
        backgroundColor: Platform.OS === "ios" ? '#d88897': '#bde9e9',            // depending on OS it would be different color.
        borderWidth: "4",
        height: 100,                     // does not work
    },
    box: {

    },
    title: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center",
    }
});