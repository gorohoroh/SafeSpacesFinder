import {StyleSheet, Text} from "react-native";
import React from "react";

const Header = (props) => {
    const styles = StyleSheet.create({
        text: {
            fontSize: 40,
            fontWeight: "700",
            textAlign: "center",
            paddingBottom: 40,
            paddingTop: 40,
            paddingHorizontal: 32,
        },
    });

    return <Text style={styles.text}>{props.children}</Text>;
};

export default Header;
