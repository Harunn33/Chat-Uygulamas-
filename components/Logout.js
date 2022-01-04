import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../config/constant";

const Logout = ({ title, icon, tintColor, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={[styles.iconContainer, { backgroundColor: tintColor }]}>
        <Ionicons style={styles.icon} name={icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Ionicons style={styles.arrow} name="chevron-forward-outline" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  title: {
    color: "#000",
    fontSize: 18,
    marginStart: 15,
    flex: 1,
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 25,
    color: "#fff",
  },
  arrow: {
    fontSize: 25,
    color: "#000",
  },
});

export default Logout;
