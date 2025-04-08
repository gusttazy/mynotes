import React, { useEffect, useState, useCallback, Suspense } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { View, ActivityIndicator } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import theme from "../styles/theme";
import { supabase } from "../config/supabase";
import { Session } from "@supabase/supabase-js";

// Importações diretas das telas
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";
import AppScreen from "../screens/AppScreen";
import ActivityDetails from "../screens/ActivityDetails";

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  AppScreen: undefined;
  ActivityDetails: { activityId?: string; title?: string; content?: string };
};

const Stack = createStackNavigator<RootStackParamList>();

SplashScreen.preventAutoHideAsync();

const LoadingScreen = () => (
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

const Routes = () => {
  const [isReady, setIsReady] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!isReady || loading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Suspense fallback={<LoadingScreen />}>
        <Stack.Navigator
          initialRouteName={session ? "AppScreen" : "Home"}
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
          {!session ? (
            // Rotas para usuários não autenticados
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
            </>
          ) : (
            // Rotas para usuários autenticados
            <>
              <Stack.Screen name="AppScreen" component={AppScreen} />
              <Stack.Screen name="ActivityDetails" component={ActivityDetails} />
            </>
          )}
        </Stack.Navigator>
      </Suspense>
    </NavigationContainer>
  );
};

export default Routes;