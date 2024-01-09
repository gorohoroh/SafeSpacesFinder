import {useEffect, useState} from "react";
import {getSafetyForSquare} from "../logic/amadeus";
import {StyleSheet, View} from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
import {SafetyLocationMarker} from "../components/SafetyLocationMarker";
import {CustomCallout} from "../components/CustomCallout";
import {colorEncodeSafetyScore, getSubscoreSummary, getApplicableScores, getPersonalAverageSafetyScore, getSafetyResolution} from "../logic/safetyScores";

export const SafePlaceMap = ({route}) => {
    const city = route.params.city;
    const female = route.params.female;
    const lgbt = route.params.lgbt;

    const [safetyLocations, setSafetyLocations] = useState([]);

    const loadLocations = async () => {
        const safetyRatedLocations = await getSafetyForSquare(city.location.square)
        setSafetyLocations(safetyRatedLocations.filter(x => x.subType !== "CITY"))
    };

    useEffect(() => {
        loadLocations()
    }, [])

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
            {safetyLocations.length > 0 && safetyLocations.map(location => {
                const applicableScores = getApplicableScores(location.safetyScores, female, lgbt);
                const averageSafetyScore = getPersonalAverageSafetyScore(applicableScores);
                const colorCode = colorEncodeSafetyScore(averageSafetyScore);
                const resolution = getSafetyResolution(averageSafetyScore);
                const subscoreSummary = getSubscoreSummary(applicableScores);
                return (
                    <Marker
                        coordinate={location.geoCode}
                        key={location.id}>
                        <SafetyLocationMarker
                            name={location.name}
                            colorCode={colorCode}
                        />
                        <CustomCallout
                            name={location.name}
                            score={averageSafetyScore}
                            colorCode={colorCode}
                            resolution={resolution}
                            summary={subscoreSummary}
                        />
                    </Marker>
                );
            })}
        </MapView>
    </View>;
};
