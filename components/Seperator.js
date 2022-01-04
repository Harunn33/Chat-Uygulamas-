import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../config/constant";

const Seperator = () => {
  return <View style={styles.seperator}></View>;
};

const styles = StyleSheet.create({
  seperator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.border,
    marginStart: 83,
  },
});

export default Seperator;
