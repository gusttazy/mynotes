/**
 * Arquivo de Rotas
 * 
 * Este arquivo define a navegação do aplicativo, incluindo:
 * - Definição das rotas disponíveis
 * - Configuração do navegador
 * - Gerenciamento de autenticação
 * - Transições entre telas
 */
import React, { useEffect, useState, useCallback, Suspense } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { View, ActivityIndicator } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import theme from "../styles/theme";
import { supabase } from "../config/supabase";
import { Session } from "@supabase/supabase-js";

// Importações diretas das telas
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";
import NoteDetails from "../screens/NoteDetails";

// Define os tipos de parâmetros que cada rota pode receber
export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined;
  NoteDetails: { activityId?: string; title?: string; content?: string };
};

// Cria o navegador de pilha
const Stack = createStackNavigator<RootStackParamList>();

// Componente de tela de carregamento
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
  // Estado para controlar a sessão do usuário
  const [session, setSession] = useState<Session | null>(null);
  const [appIsReady, setAppIsReady] = useState(false);

  // Carrega a sessão do usuário ao iniciar o app
  useEffect(() => {
    async function prepare() {
      try {
        // Mantém a tela de splash visível enquanto carrega
        await SplashScreen.preventAutoHideAsync();
        
        // Carrega a sessão do Supabase
        const { data: { session } } = await supabase.auth.getSession();
        setSession(session);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  // Esconde a tela de splash quando o app estiver pronto
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  // Configura o listener de mudança de sessão
  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <Suspense fallback={<LoadingScreen />}>
        <Stack.Navigator
          initialRouteName={session ? "Home" : "Welcome"}
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
              <Stack.Screen name="Welcome" component={Welcome} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
            </>
          ) : (
            // Rotas para usuários autenticados
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="NoteDetails" component={NoteDetails} />
            </>
          )}
        </Stack.Navigator>
      </Suspense>
    </NavigationContainer>
  );
};

export default Routes;
