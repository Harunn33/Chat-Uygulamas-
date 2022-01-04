import React from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { colors } from "../config/constant";
import { Ionicons } from "@expo/vector-icons";

const ContactRow = ({ name, subtitle, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.row, style]} onPress={onPress}>
      <View style={styles.avatar}>
        <Text style={styles.avatarLabel}>
          {name
            .split(" ")
            .reduce((prev, current) => `${prev}${current[0]}`, "")}
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Ionicons style={styles.icon} name="chevron-forward-outline" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 20,
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    marginStart: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarLabel: {
    fontSize: 20,
    color: "#fff",
  },
  name: {
    fontSize: 19,
  },
  subtitle: {
    marginTop: 3,
    color: "#565656",
  },
  icon: {
    fontSize: 25,
  },
});

export default ContactRow;
