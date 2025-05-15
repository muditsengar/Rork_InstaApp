import React, { useState, useRef } from "react";
import { View, StyleSheet, Dimensions, FlatList, TouchableWithoutFeedback } from "react-native";
import { Image } from "expo-image";
import colors from "@/constants/colors";
import LikeAnimation from "./LikeAnimation";

interface PostCarouselProps {
  images: string[];
  onDoubleTap: () => void;
}

const { width } = Dimensions.get("window");

export default function PostCarousel({ images, onDoubleTap }: PostCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showLikeAnimation, setShowLikeAnimation] = useState(false);
  const lastTapTimeRef = useRef<number>(0);

  const handleDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_TAP_DELAY = 300;
    
    if (now - lastTapTimeRef.current < DOUBLE_TAP_DELAY) {
      setShowLikeAnimation(true);
      onDoubleTap();
      lastTapTimeRef.current = 0;
    } else {
      lastTapTimeRef.current = now;
    }
  };

  const handleAnimationComplete = () => {
    setShowLikeAnimation(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback onPress={handleDoubleTap}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: item }}
                style={styles.image}
                contentFit="cover"
              />
              {showLikeAnimation && (
                <LikeAnimation 
                  visible={showLikeAnimation} 
                  onAnimationComplete={handleAnimationComplete} 
                />
              )}
            </View>
          </TouchableWithoutFeedback>
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.round(
            event.nativeEvent.contentOffset.x / width
          );
          setActiveIndex(newIndex);
        }}
        keyExtractor={(_, index) => index.toString()}
      />
      
      {images.length > 1 && (
        <View style={styles.pagination}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                index === activeIndex && styles.paginationDotActive,
              ]}
            />
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height: width,
    backgroundColor: colors.border,
  },
  imageContainer: {
    width,
    height: width,
    position: "relative",
  },
  image: {
    width,
    height: width,
  },
  pagination: {
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  paginationDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginHorizontal: 3,
  },
  paginationDotActive: {
    backgroundColor: colors.primary,
  },
});