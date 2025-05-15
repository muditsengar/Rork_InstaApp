import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { posts } from "@/mocks/posts";
import Post from "@/components/Post";
import colors from "@/constants/colors";
import { StatusBar } from "expo-status-bar";

export default function FeedScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  separator: {
    height: 1,
    backgroundColor: colors.border,
  },
});