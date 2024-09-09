import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  BackHandler,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {WebView} from 'react-native-webview';
import {useNavigation} from '@react-navigation/native';

export default function MyWebView() {
  const [canGoBack, setCanGoBack] = useState(false);
  const navigation = useNavigation();
  const WebViewRef = useRef<WebView>(null);

  const handleBackButtonPress = () => {
    navigation.goBack();
  };

  const goBack = () => {
    if (canGoBack) {
      WebViewRef.current?.goBack();
      return true;
    } else {
      navigation.goBack();
      return true;
    }
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', goBack);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', goBack);
      };
    }
  }, [goBack]);

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <WebView
          source={{uri: 'https://reactnative.dev/docs/environment-setup'}}
          ref={WebViewRef}
          onNavigationStateChange={navState => {
            setCanGoBack(navState.canGoBack);
            console.log('can go back after: ', canGoBack);
          }}
        />
        <TouchableOpacity
          style={{
            width: 90,
            height: 36,
            backgroundColor: '#000000',
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            left: 5,
            bottom: 35,
            borderTopEndRadius: 17,
            borderBottomStartRadius: 17,
            borderBottomEndRadius: 17,
          }}
          onPress={() => handleBackButtonPress()}>
          <Text style={{color: '#ffffff', fontWeight: 'bold'}}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
