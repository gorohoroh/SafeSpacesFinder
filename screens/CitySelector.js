import {Button, FlatList, StyleSheet, View} from "react-native";
import Header from "../components/Header";
import regions from "../logic/regions";
import {globalStyles} from "../styles/globalStyles";

export const CitySelector = ({navigation}) => {
    const styles = StyleSheet.create({
        buttonWrapper: {
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginVertical: 5,
        },
    });

    return (
        <View style={globalStyles.container}>
            <Header>Where do you want to go?</Header>
            <FlatList
                data={regions}
                renderItem={({item}) =>
                    <View style={styles.buttonWrapper}>
                        <Button
                            title={item.name}
                            onPress={() => navigation.navigate("Identity", {city: item})}
                        />
                    </View>
                }
            />
        </View>
    );
};
