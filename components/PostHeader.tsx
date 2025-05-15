import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { MoreHorizontal, CheckCircle } from "lucide-react-native";
import colors from "@/constants/colors";
import { User } from "@/mocks/posts";

interface PostHeaderProps {
  user: User;
  location?: string;
}

export default function PostHeader({ user, location }: PostHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <View style={styles.userInfo}>
          <View style={styles.usernameContainer}>
            <Text style={styles.username}>{user.username}</Text>
            {user.verified && (
              <CheckCircle size={14} color={colors.primary} fill={colors.primary} style={styles.verifiedIcon} />
            )}
          </View>
          {location && <Text style={styles.location}>{location}</Text>}
        </View>
      </View>
      <TouchableOpacity>
        <MoreHorizontal size={24} color={colors.text} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  userInfo: {
    justifyContent: "center",
  },
  usernameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  username: {
    fontWeight: "600",
    fontSize: 14,
    color: colors.text,
  },
  verifiedIcon: {
    marginLeft: 4,
  },
  location: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
});