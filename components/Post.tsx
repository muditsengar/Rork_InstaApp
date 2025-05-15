import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Post as PostType } from "@/mocks/posts";
import PostHeader from "./PostHeader";
import PostCarousel from "./PostCarousel";
import PostFooter from "./PostFooter";
import PostCaption from "./PostCaption";
import colors from "@/constants/colors";
import * as Haptics from "expo-haptics";
import { Platform } from "react-native";

interface PostProps {
  post: PostType;
}

export default function Post({ post }: PostProps) {
  const [liked, setLiked] = useState(post.liked);
  const [saved, setSaved] = useState(post.saved);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLikePress = () => {
    if (Platform.OS !== "web") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  const handleDoubleTap = () => {
    if (!liked) {
      if (Platform.OS !== "web") {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      }
      setLiked(true);
      setLikeCount(likeCount + 1);
    }
  };

  const handleSavePress = () => {
    if (Platform.OS !== "web") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    setSaved(!saved);
  };

  const handleCommentPress = () => {
    // Would navigate to comments screen in a real app
    console.log("Navigate to comments");
  };

  const handleSharePress = () => {
    // Would open share sheet in a real app
    console.log("Open share sheet");
  };

  return (
    <View style={styles.container}>
      <PostHeader user={post.user} location={post.location} />
      
      <PostCarousel 
        images={post.images} 
        onDoubleTap={handleDoubleTap} 
      />
      
      <PostFooter
        likes={likeCount}
        commentCount={post.commentCount}
        timestamp={post.timestamp}
        liked={liked}
        saved={saved}
        onLikePress={handleLikePress}
        onCommentPress={handleCommentPress}
        onSharePress={handleSharePress}
        onSavePress={handleSavePress}
      />
      
      <PostCaption 
        username={post.user.username} 
        caption={post.caption} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    marginBottom: 10,
  },
});