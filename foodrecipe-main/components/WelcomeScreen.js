// components/WelcomeScreen.js
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const ring1padding = useSharedValue(0);
  const ring2padding = useSharedValue(0);

  useEffect(() => {
    setTimeout(() => {
      ring1padding.value = withSpring(100);
    }, 100);
    setTimeout(() => {
      ring2padding.value = withSpring(100);
    }, 300);
    setTimeout(() => {
      navigation.navigate("Home");
    }, 2500);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* Animated Rings */}
      <Animated.View
        style={[
          styles.ring,
          {
            padding: ring1padding.value,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: wp('50%'),
          },
        ]}
      >
        <Animated.View
          style={[
            styles.ring,
            {
              padding: ring2padding.value,
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: wp('50%'),
            },
          ]}
        >
          {/* Logo Image */}
          <Image source={require('../assets/logo.png')} style={styles.logo} />
        </Animated.View>
      </Animated.View>
      {/* Text Section */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Foodie!</Text>
        <Text style={styles.subtitle}>your food recipe app</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBBF24',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ring: {
    position: 'absolute',
    width: wp('80%'),
    height: wp('80%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: wp('30%'),
    height: wp('30%'),
    resizeMode: 'contain',
  },
  textContainer: {
    position: 'absolute',
    bottom: hp('10%'),
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    marginTop: 10,
    letterSpacing: 1,
  },
});

export default WelcomeScreen;
