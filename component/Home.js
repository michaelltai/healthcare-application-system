import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import {
  Provider as PaperProvider,
  DefaultTheme,
  Appbar,
  Surface,
} from "react-native-paper";

function Home({ navigation }) {
  const theme = {
    ...DefaultTheme,

    roundness: 4,
    colors: {
      ...DefaultTheme.colors,

      primary: "#2EA5FA",
      background: "#C1FFF7",
      placeholder: "#8E8E8E",
    },
  };

  return (
    <PaperProvider theme={theme}>
      <Appbar.Header
        theme={{
          ...DefaultTheme,
          colors: { primary: "#C5FFF8" },
        }}
      >
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Action
          icon="hospital-box-outline"
          style={{ marginLeft: 100 }}
        />
      </Appbar.Header>
      <View style={styles.view}>
        <Surface
          style={{
            height: "8%",
            width: "29%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
            marginLeft: 15,
            elevation: 5,
            borderRadius: 30,
          }}
        >
          <Text style={styles.header}>Home</Text>
        </Surface>
        <View style={styles.container}>
          <TouchableOpacity
            style={{ flexDirection: "column" }}
            onPress={() => navigation.navigate("Hospital List")}
          >
            <View style={styles.hospLtr}>
              <Icon name="hospital-building" size={20} />
              <View>
                <Text style={styles.btnTxt}>HOSPITAL LOCATOR</Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={{ flexDirection: "column", marginTop: 5 }}
                onPress={() => navigation.navigate("Medical Reminder List")}
              >
                <View style={styles.medRmd}>
                  <Icon name="pill" size={20} />
                  <View>
                    <Text style={styles.btnTxt}>MEDICAL REMINDER</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={{ flexDirection: "column", marginTop: 5 }}
                onPress={() => navigation.navigate("Health Reminder List")}
              >
                <View style={styles.hlthRmd}>
                  <Icon name="calendar-multiple" size={20} />
                  <View>
                    <Text style={styles.btnTxt}>HEALTH REMINDER</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={{ flexDirection: "column", marginTop: 5 }}
                onPress={() => navigation.navigate("Disease List")}
              >
                <View style={styles.disLkp}>
                  <Icon name="notebook" size={20} />
                  <View>
                    <Text style={styles.btnTxt}>DISEASES LOOKUP</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={{ flexDirection: "column", marginTop: 5 }}
                onPress={() => navigation.navigate("Profile")}
              >
                <View style={styles.psnHlth}>
                  <Icon name="account-box" size={20} />
                  <View>
                    <Text style={styles.btnTxt}>PERSONAL HEALTH</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  header: {
    color: "black",
    fontWeight: "bold",
    fontSize: 23,
    fontFamily: "sans-serif",
  },
  container: {
    marginTop: 80,
  },
  hospLtr: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#bebcfc",
    padding: 20,
    width: "87%",
    borderRadius: 15,
    elevation: 4,
  },
  medRmd: {
    marginLeft: 23,
    alignItems: "center",
    backgroundColor: "#ade8f4",
    padding: 35,
    width: "85%",
    borderRadius: 15,
    elevation: 4,
  },
  hlthRmd: {
    marginLeft: 5,
    alignItems: "center",
    backgroundColor: "#b6ccfe",
    padding: 35,
    width: "85%",
    borderRadius: 15,
    elevation: 4,
  },
  disLkp: {
    marginLeft: 23,
    alignItems: "center",
    backgroundColor: "#bbdbfe",
    padding: 35,
    width: "85%",
    borderRadius: 15,
    elevation: 4,
  },
  psnHlth: {
    marginLeft: 5,
    alignItems: "center",
    backgroundColor: "#baebff",
    padding: 35,
    width: "85%",
    borderRadius: 15,
    elevation: 4,
  },
  btnTxt: {
    marginTop: 7,
    textAlign: "center",
    fontSize: 14,
    fontFamily: "sans-serif",
    letterSpacing: 1.5,
  },
});

export default Home;
