import {useState} from "react";
import {Button, StyleSheet, Switch, Text, View} from "react-native";
import {globalStyles} from "../styles/globalStyles";
import Header from "../components/Header";

export const IdentitySelector = ({navigation, route}) => {
    const [isFemale, setIsFemale] = useState(false);
    const [isLgbt, setIsLgbt] = useState(false);
    const toggleFemaleSwitch = () => setIsFemale(female => !female);
    const toggleLgbtSwitch = () => setIsLgbt(lgbt => !lgbt);

    const city = route.params.city;

    const styles = StyleSheet.create({
        switches: {
            paddingTop: 20,
            paddingBottom: 60,
            paddingLeft: 40,
        },
        switchContainer: {
            height: "100px",
            padding: 20,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
        },
        switch: {
            transform: [{scaleX: 2}, {scaleY: 2}],
        },
        switchLabel: {
            flex: 1,
            marginLeft: 20,
            fontSize: 20,
        },
        buttonContainer: {
            padding: 20
        }
    });

    return (
        <View style={globalStyles.container}>
            <Header>Let us know more about you to find the safest places in {city.name}</Header>
            <View style={styles.switches}>
                <View style={styles.switchContainer}>
                    <Switch style={styles.switch} value={isFemale} onValueChange={toggleFemaleSwitch}/>
                    <Text style={styles.switchLabel}>I'm female</Text>
                </View>
                <View style={styles.switchContainer}>
                    <Switch style={styles.switch} value={isLgbt} onValueChange={toggleLgbtSwitch}/>
                    <Text style={styles.switchLabel}>I identify as LGBTQ</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Show map"
                    onPress={() => navigation.navigate("SafePlaces", {city: city, female: isFemale, lgbt: isLgbt})}
                /></View>
        </View>
    );
};
