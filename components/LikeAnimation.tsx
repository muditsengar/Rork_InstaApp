import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withTiming,
  withDelay,
  runOnJS,
} from "react-native-reanimated";
import { Heart } from "lucide-react-native";
import { Platform } from "react-native";
import colors from "@/constants/colors";

interface LikeAnimationProps {
  visible: boolean;
  onAnimationComplete: () => void;
}

export default function LikeAnimation({ visible, onAnimationComplete }: LikeAnimationProps) {
  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      // Start animation
      scale.value = 0;
      opacity.value = 0;
      
      // Animate scale and opacity
      scale.value = withSequence(
        withTiming(1.2, { duration: 200 }),
        withTiming(1, { duration: 100 }),
        withDelay(500, withTiming(0, { duration: 200 }, () => {
          runOnJS(onAnimationComplete)();
        }))
      );
      
      opacity.value = withSequence(
        withTiming(1, { duration: 200 }),
        withDelay(500, withTiming(0, { duration: 200 }))
      );
    }
  }, [visible]);

  // Use conditional rendering for web compatibility
  if (Platform.OS === "web") {
    return visible ? (
      <View style={styles.container}>
        <Heart size={80} fill={colors.like} color={colors.like} />
      </View>
    ) : null;
  }

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Heart size={80} fill={colors.like} color={colors.like} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
});