import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "@/constants/colors";

interface PostCaptionProps {
  username: string;
  caption: string;
}

export default function PostCaption({ username, caption }: PostCaptionProps) {
  // Function to render caption with hashtags highlighted
  const renderCaption = () => {
    const words = caption.split(" ");
    
    return words.map((word, index) => {
      if (word.startsWith("#")) {
        return (
          <Text key={index} style={styles.hashtag}>
            {word}{" "}
          </Text>
        );
      }
      return <Text key={index}>{word} </Text>;
    });
  };

  return (
    <View style={styles.container}>
      <Text>
        <Text style={styles.username}>{username}</Text>{" "}
        {renderCaption()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  username: {
    fontWeight: "600",
    color: colors.text,
  },
  hashtag: {
    color: colors.hashtag,
  },
});