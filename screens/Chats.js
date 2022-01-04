import React from "react";
import { View } from "react-native";
import ContactRow from "../components/ContactRow";
import Seperator from "../components/Seperator";

export default function Chats() {
  return (
    <View>
      <ContactRow
        name={"Gökhan Şimşek"}
        subtitle={"Ne yapıyorsun?"}
        onPress={() => {
          alert("Merhaba,Gökhan Şimşek kişisine dokundun.");
        }}
      />
      <Seperator />
      <ContactRow
        name={"Babam"}
        subtitle={"Nerdesin?"}
        onPress={() => {
          alert("Merhaba,Babam kişisine dokundun.");
        }}
      />
      <Seperator />
      <ContactRow
        name={"Annem"}
        subtitle={"Yemek hazır gel?"}
        onPress={() => {
          alert("Merhaba,Annem kişisine dokundun.");
        }}
      />
    </View>
  );
}
