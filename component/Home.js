import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import {
  Provider as PaperProvider,
  DefaultTheme,
  Appbar,
  Surface,
  IconButton,
  Avatar,
} from "react-native-paper";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

import { useSelector } from "react-redux";

function Home({ navigation }) {
  const { firstName, lastName, gender, DOB, height, weight, bpSys, bpDia } =
    useSelector((state) => state.userReducer);
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

  useEffect(() => {
    if (
      firstName ||
      lastName ||
      gender ||
      DOB ||
      height ||
      weight ||
      bpSys ||
      bpDia
    ) {
    } else {
      Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true,
          shouldPlaySound: true,
          shouldSetBadge: true,
        }),
      });

      Notifications.scheduleNotificationAsync({
        content: {
          title: "Attention!",
          body: "Please fill in your personal information at Personal Health to receive information regarding your health",
        },
        trigger: null,
      });
    }
  }, []);

  return (
    <PaperProvider theme={theme}>
      {/* <Appbar.Header
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
      </Appbar.Header> */}

      <ImageBackground
        source={require("../assets/background4.jpg")}
        resizeMode="cover"
        style={styles.view}
      >
        <View style={{ marginBottom: 80, marginTop: 40 }}>
          <View style={{ flexDirection: "row" }}>
            <IconButton
              icon="menu"
              color={"white"}
              size={30}
              onPress={() => navigation.openDrawer()}
            />

            {/* <Avatar.Image
              size={60}
              style={{
                marginLeft: 90,
                backgroundColor: "rgba(0,0,0,0)",
              }}
              source={require("../assets/adaptive-icon.png")}
            /> */}
          </View>
        </View>

        <Text
          style={{
            fontSize: 35,
            marginLeft: 25,
            color: "white",
            fontWeight: "bold",
            marginTop: 20,
            textShadowRadius: 3,
          }}
        >
          Home
        </Text>
        <View style={styles.container}>
          {/* <Surface style={styles.container}> */}
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={{ flexDirection: "column" }}
                onPress={() => navigation.navigate("Hospital List")}
              >
                <View style={styles.hospLtr}>
                  <Icon name="hospital-building" size={35} />
                  <View>
                    <Text style={styles.btnTxt}>HOSPITAL LOCATOR</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, marginLeft: 10 }}>
              <TouchableOpacity
                style={{ flexDirection: "column" }}
                onPress={() => navigation.navigate("Medical Reminder List")}
              >
                <View style={styles.medRmd}>
                  <Icon name="pill" size={35} />
                  <View>
                    <Text style={styles.btnTxt}>MEDICAL REMINDER</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={{ flexDirection: "column", marginTop: 25 }}
                onPress={() => navigation.navigate("Health Reminder List")}
              >
                <View style={styles.hlthRmd}>
                  <Icon name="calendar-multiple" size={35} />
                  <View>
                    <Text style={styles.btnTxt}>HEALTH REMINDER</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, marginLeft: 10 }}>
              <TouchableOpacity
                style={{ flexDirection: "column", marginTop: 25 }}
                onPress={() => navigation.navigate("Disease List")}
              >
                <View style={styles.disLkp}>
                  <Icon name="notebook" size={35} />
                  <View>
                    <Text style={styles.btnTxt}>DISEASES LOOKUP</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={{ flexDirection: "column", marginTop: 25 }}
            onPress={() => navigation.navigate("Profile")}
          >
            <View style={styles.psnHlth}>
              <Icon name="account-box" size={35} />
              <View>
                <Text style={styles.btnTxt}>PERSONAL HEALTH</Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* </Surface> */}
        </View>
      </ImageBackground>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    color: "black",
    fontWeight: "bold",
    fontSize: 23,
    fontFamily: "sans-serif",
  },
  container: {
    borderRadius: 25,
    marginTop: 20,
    // paddingTop: 30,
    paddingBottom: 50,
  },
  hospLtr: {
    marginLeft: 23,
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    width: "85%",
    borderRadius: 15,
    elevation: 8,
  },
  medRmd: {
    marginLeft: 5,
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    width: "85%",
    borderRadius: 15,
    elevation: 8,
  },
  hlthRmd: {
    marginLeft: 23,
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    width: "85%",
    borderRadius: 15,
    elevation: 8,
  },
  disLkp: {
    marginLeft: 5,
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    width: "85%",
    borderRadius: 15,
    elevation: 8,
  },
  psnHlth: {
    marginLeft: 23,
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    width: "41%",
    borderRadius: 15,
    elevation: 8,
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
