/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AppMain from './src/AppMain';
import { TodoProvider } from './src/Context/TodoContext';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <TodoProvider>
      <SafeAreaProvider style={{
        flex: 1, backgroundColor: "black"
      }}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppMain />
      </SafeAreaProvider>
    </TodoProvider>
  );
}

export default App;
