import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {CitySelector} from "./screens/CitySelector";
import {IdentitySelector} from "./screens/IdentitySelector";
import {SafePlaceMap} from "./screens/SafePlaceMap";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={CitySelector}
                    options={{title: "Find a safe place to go"}}
                />
                <Stack.Screen
                    name="Identity"
                    component={IdentitySelector}
                    options={{title: "Additional safety considerations"}}
                />
                <Stack.Screen
                    name="SafePlaces"
                    component={SafePlaceMap}
                    options={{title: "Safe places"}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;


