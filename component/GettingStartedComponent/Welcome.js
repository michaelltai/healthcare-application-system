import React, { useState } from "react";
import { StyleSheet, Text, View, ToastAndroid } from "react-native";
import {
  Provider as PaperProvider,
  DefaultTheme,
  Button,
} from "react-native-paper";

const Welcome = ({ history }) => {
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
      <View style={styles.view}>
        <Text style={styles.header}>Welcome</Text>

        <View style={styles.container}>
          <Text style={styles.content}>
            Experience a new way of personal healthcare
          </Text>
          <Button
            mode="contained"
            color="#404040"
            compact={true}
            onPress={() => {
              ToastAndroid.show("Let's Go", ToastAndroid.SHORT);
              console.log("Pressed");
              history.push("/start");
            }}
            style={styles.gettingStarted}
          >
            Lets Get Started
          </Button>
        </View>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#C1FFF7",
  },
  header: {
    marginTop: 60,
    marginLeft: 20,
    color: "#39B4F7",
    fontWeight: "bold",
    fontSize: 35,
    fontFamily: "sans-serif",
  },
  gettingStarted: {
    width: "75%",
    marginTop: 200,
    padding: 7,
  },
  container: {
    alignItems: "center",
  },
  content: {
    marginTop: 170,
    marginLeft: 30,
    width: 230,
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "sans-serif",
  },
});

export default Welcome;
