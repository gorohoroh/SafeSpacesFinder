import {StyleSheet, Text, View} from "react-native";

export const SafetyLocationMarker = (props) => {
    const styles = StyleSheet.create({
        marker: {
            paddingVertical: 10,
            paddingHorizontal: 10,
            backgroundColor: props.colorCode.background,
            borderColor: "white",
            borderRadius: 30,
            borderWidth: 1,
            borderStyle: "solid"
        },
        text: {
            color: props.colorCode.text,
            fontSize: 10
        },
    });

    return (
        <View style={styles.marker}>
            <Text style={styles.text}>{props.name}</Text>
        </View>
    );
};
