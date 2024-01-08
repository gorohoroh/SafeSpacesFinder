import {StyleSheet, View} from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";

export const SafePlaceMap = ({route}) => {
    const city = route.params.city;
    const female = route.params.female;
    const lgbt = route.params.lgbt;

    const styles = StyleSheet.create({
        mapContainer: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            position: "relative"
        }
    });

    return <View style={styles.mapContainer}>
        <MapView
            style={StyleSheet.absoluteFillObject}
            provider={PROVIDER_GOOGLE}
            mapType="hybrid"
            showsTraffic={true}
            region={city.location}
        >
        </MapView>
    </View>;
};
