import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
} from "react-native-reanimated";

const index = () => {
  const SIZE = 100.0;

  const progress = useSharedValue(1);
  const scale = useSharedValue(2);

  const reanimatedStyles = useAnimatedStyle(
    () => ({
      opacity: progress.value,

      transform: [{ scale: scale.value }],
    }),
    []
  );

  useEffect(() => {
    progress.value = withTiming(0.5);
    scale.value = withRepeat(withSpring(1), -1, true);
  }, []);

  return (
    <View className=" flex-1 items-center bg-zinc-800 justify-center ">
      <Animated.View
        className="h-[70px] w-[70px] bg-orange-200 "
        style={[reanimatedStyles]}
      ></Animated.View>

      <Pressable className=" mt-12 bg-pink-500  p-5 border border-white">
        <Text>Press me</Text>
      </Pressable>
    </View>
  );
};

export default index;
