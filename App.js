import React, {useEffect} from 'react';
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import Main from './src/Main';
import {PreferencesContext} from './src/PreferencesContext';
//import ReactNativeBiometrics from 'react-native-biometrics';

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
};
const CombinedDarkTheme = {...PaperDarkTheme, ...NavigationDarkTheme};

const App = () => {
  // useEffect(() => {
  //   async function biometrics() {
  //     const {
  //       available,
  //       biometryType,
  //     } = await ReactNativeBiometrics.isSensorAvailable();
  //     if (available && biometryType === ReactNativeBiometrics.TouchID) {
  //       alert('TouchID is supported');
  //       ReactNativeBiometrics.simplePrompt({
  //         promptMessage: 'Confirm fingerprint',
  //       })
  //         .then(resultObject => {
  //           const {success} = resultObject;

  //           if (success) {
  //             alert('successful biometrics provided');
  //           } else {
  //             alert('user cancelled biometric prompt');
  //           }
  //         })
  //         .catch(() => {
  //           console.log('biometrics failed');
  //         });
  //     } else if (available && biometryType === ReactNativeBiometrics.FaceID) {
  //       alert('FaceID is supported');
  //     } else if (
  //       available &&
  //       biometryType === ReactNativeBiometrics.Biometrics
  //     ) {
  //       alert('Biometrics is supported');
  //     } else {
  //       alert('Biometrics not supported');
  //     }
  //   }
  //   biometrics();
  // }, []);
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme; // Use Light/Dark theme based on a state
  function toggleTheme() {
    // We will pass this function to Drawer and invoke it on theme switch press
    setIsDarkTheme(isDark => !isDark);
  }
  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      theme,
    }),
    [theme],
  );
  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <Main />
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
};

export default App;
