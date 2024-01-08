import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {CitySelector} from "./screens/CitySelector";
import {IdentitySelector} from "./screens/IdentitySelector";

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
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;


