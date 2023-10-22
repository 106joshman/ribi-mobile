import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";

export default function ViewUserDetail({ title, value }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 10,
      }}
    >
      <Text style={{ fontFamily: "poppins", fontSize: 20, textAlign: "left" }}>
        {title}:
      </Text>
      <View>
        <Text
          style={{
            fontFamily: "poppinsReg",
            fontSize: 20,
            textAlign: "left",
            textTransform: "capitalize",
          }}
        >
          {value}
        </Text>
      </View>
    </View>
  );
}
