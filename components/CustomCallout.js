import {Callout} from "react-native-maps";
import {StyleSheet, Text, View} from "react-native";

export const CustomCallout = props => {
    const styles = StyleSheet.create({
        calloutContainer: {
            flex: 1,
            backgroundColor: "white",
            opacity: 0.9,
            padding: 10,
            width: 250,
            height: "auto",
            borderStyle: "solid",
            borderRadius: 10,
            marginBottom: 5
        },
        header: {
            fontSize: 20,
            fontWeight: "700",
        },
        summary: {
            flexDirection: "row",
        },
        score: {
            padding: 5,
            paddingLeft: 0
        },
        resolution: {
            padding: 5,
            borderRadius: 10,
            backgroundColor: props.colorCode.background,
            color: "white",
            fontWeight: "500"
        },
        subscoreContainer: {
            marginTop: 10,
        }
    });

    return <Callout tooltip>
        <View style={styles.calloutContainer}>
            <Text style={styles.header}>{props.name}</Text>
            <View style={styles.summary}>
                <Text style={styles.score}>Safety score: {props.score}</Text>
                <Text style={styles.resolution}>{props.resolution}</Text>
            </View>
            <View style={styles.subscoreContainer}>
                {props.summary.map((entry, index) => <Text key={index}>{entry}</Text>)}
            </View>
        </View>
    </Callout>;
};

