import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react-native";
import colors from "@/constants/colors";

interface PostFooterProps {
  likes: number;
  commentCount: number;
  timestamp: string;
  liked: boolean;
  saved: boolean;
  onLikePress: () => void;
  onCommentPress: () => void;
  onSharePress: () => void;
  onSavePress: () => void;
}

export default function PostFooter({
  likes,
  commentCount,
  timestamp,
  liked,
  saved,
  onLikePress,
  onCommentPress,
  onSharePress,
  onSavePress,
}: PostFooterProps) {
  // Format large numbers (e.g., 1.2k instead of 1200)
  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  return (
    <View style={styles.container}>
      <View style={styles.actions}>
        <View style={styles.leftActions}>
          <TouchableOpacity onPress={onLikePress} style={styles.actionButton}>
            <Heart
              size={24}
              color={liked ? colors.like : colors.text}
              fill={liked ? colors.like : "transparent"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onCommentPress} style={styles.actionButton}>
            <MessageCircle size={24} color={colors.text} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onSharePress} style={styles.actionButton}>
            <Send size={24} color={colors.text} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={onSavePress}>
          <Bookmark
            size={24}
            color={colors.text}
            fill={saved ? colors.text : "transparent"}
          />
        </TouchableOpacity>
      </View>
      
      <View style={styles.stats}>
        <Text style={styles.likesText}>
          {formatNumber(likes)} {likes === 1 ? "like" : "likes"}
        </Text>
        <TouchableOpacity onPress={onCommentPress}>
          <Text style={styles.commentsText}>
            View all {formatNumber(commentCount)} comments
          </Text>
        </TouchableOpacity>
        <Text style={styles.timestamp}>{timestamp}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  leftActions: {
    flexDirection: "row",
  },
  actionButton: {
    marginRight: 16,
  },
  stats: {
    paddingBottom: 8,
  },
  likesText: {
    fontWeight: "600",
    marginBottom: 4,
    color: colors.text,
  },
  commentsText: {
    color: colors.textSecondary,
    marginBottom: 4,
  },
  timestamp: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
});