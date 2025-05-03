import React, { ReactNode, useEffect, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import {
  useFonts,
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_600SemiBold,
  Raleway_700Bold,
  Raleway_800ExtraBold,
} from "@expo-google-fonts/raleway";
import * as SplashScreen from "expo-splash-screen";

import theme from "../constants/theme";

interface AppProviderProps {
  children: ReactNode;
}

SplashScreen.preventAutoHideAsync();

export function AppProvider({ children }: AppProviderProps) {
  const [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_500Medium,
    Raleway_600SemiBold,
    Raleway_700Bold,
    Raleway_800ExtraBold,
  });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      if (fontsLoaded) {
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, [fontsLoaded]);

  if (!isReady) {
    return null;
  }

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
