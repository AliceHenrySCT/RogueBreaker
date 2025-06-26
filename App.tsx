import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Canvas, Circle, useClock } from "@shopify/react-native-skia";
import React from 'react';
import { CircleInterface } from './types';
import { useFrameCallback, useSharedValue } from 'react-native-reanimated';
import { BALL_COLOR, RADIUS } from "./constants";
import { animate, createBouncingExample } from './logis';

export default function App() {
  const circleObject: CircleInterface = {
    type: "Circle",
    id: 0,
    x: useSharedValue(0),
    y: useSharedValue(0),
    r: RADIUS,
    ax: 0,
    ay: 0,
    vx: 0,
    vy: 0,
  };
  
  createBouncingExample(circleObject);

  useFrameCallback((frameInfo) => {
    if(!frameInfo.timeSincePreviousFrame) {
      return;
    }

    animate([circleObject], frameInfo.timeSincePreviousFrame, 0);
  })

  return (
    <View style={styles.container}>
      <Canvas style={{flex: 1}}>
        <Circle
        cx={circleObject.x}
        cy={circleObject.y}
        r={RADIUS}
        color={BALL_COLOR}
        />

      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
