import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import {Provider} from 'react-redux';

import RootTab from './src/Screen/RootTab';

export default function App() {
  const queryClient = new QueryClient();

  if (__DEV__) {
    import('react-query-native-devtools').then(({addPlugin}) => {
      addPlugin({queryClient});
    });
  }
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <RootTab />
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
