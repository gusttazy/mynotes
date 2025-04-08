import React, { useEffect, useState, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { View, ActivityIndicator } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import theme from "../styles/theme";

// Lazy loading das telas
const Home = React.lazy(() => import("../screens/Home"));
const Login = React.lazy(() => import("../screens/Login"));
const Register = React.lazy(() => import("../screens/Register"));
const AppScreen = React.lazy(() => import("../screens/AppScreen"));
const ActivityDetails = React.lazy(() => import("../screens/ActivityDetails"));

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

  const loadResourcesAsync = useCallback(async () => {
    try {
      setIsReady(true);
      await SplashScreen.hideAsync();
    } catch (error) {
      console.warn(error);
    }
  }, []);

  useEffect(() => {
    loadResourcesAsync();
  }, [loadResourcesAsync]);

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
            open: { animation: "timing", config: { duration: 300 } },
            close: { animation: "timing", config: { duration: 300 } },
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