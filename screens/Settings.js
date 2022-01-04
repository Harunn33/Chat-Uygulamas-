import React from "react";
import { View, StyleSheet } from "react-native";
import ContactRow from "../components/ContactRow";
import { colors } from "../config/constant";
import Seperator from "../components/Seperator";
import Logout from "../components/Logout";

const Settings = () => {
  return (
    <View>
      <ContactRow
        style={styles.contactRow}
        name={"Harun Şimşek"}
        subtitle={"harunsmsk@gmail.com"}
      />
      <Seperator />
      <Logout
        title={"Help"}
        icon={"help-outline"}
        tintColor={colors.help}
        onPress={() => {
          alert("Don't touch me again");
        }}
      />
      <Logout
        title={"Tell a Friend"}
        icon={"call-outline"}
        tintColor={colors.tellfriend}
        onPress={() => {
          alert("Don't touch me again");
        }}
      />
      <Logout
        title={"Logout"}
        icon={"log-out-outline"}
        tintColor={colors.logout}
        onPress={() => {
          alert("Don't touch me again");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contactRow: {
    backgroundColor: "#fff",
    marginTop: 15,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
  },
});

export default Settings;
