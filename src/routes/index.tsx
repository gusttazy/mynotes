import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { View, ActivityIndicator } from "react-native";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_600SemiBold,
  Raleway_700Bold,
  Raleway_800ExtraBold,
} from "@expo-google-fonts/raleway";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";
import AppScreen from "../screens/AppScreen";
import ActivityDetails from "../screens/ActivityDetails";
import theme from "../styles/theme";

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  AppScreen: undefined;
  ActivityDetails: { activityId?: string; title?: string; content?: string };
};

const Stack = createStackNavigator<RootStackParamList>();

SplashScreen.preventAutoHideAsync();

const Routes = () => {
  const [isReady, setIsReady] = useState(false);

  const loadResourcesAsync = async () => {
    try {
      await Font.loadAsync({
        Raleway_400Regular,
        Raleway_500Medium,
        Raleway_600SemiBold,
        Raleway_700Bold,
        Raleway_800ExtraBold,
      });

      await Asset.loadAsync([require("../assets/images/login.png")]);
    } catch (error) {
      console.warn(error);
    } finally {
      setIsReady(true);
      await SplashScreen.hideAsync();
    }
  };

  useEffect(() => {
    loadResourcesAsync();
  }, []);

  if (!isReady) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.colors.background,
        }}
      >
        <ActivityIndicator size="large" color={theme.colors.roxoPrincipal} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: { animation: "timing", config: { duration: 400 } },
            close: { animation: "timing", config: { duration: 400 } },
          },
          cardStyle: {
            backgroundColor: theme.colors.background,
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="AppScreen" component={AppScreen} />
        <Stack.Screen name="ActivityDetails" component={ActivityDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;