import React from "react";

import { View, Text, Linking } from "react-native";
import {
  Provider as PaperProvider,
  DefaultTheme,
  Appbar,
  Button,
  Card,
  Paragraph,
} from "react-native-paper";
import openMap from "react-native-open-maps";

function HospitalInfo({ route, navigation }) {
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

  const { info } = route.params;

  const _openNavigation = () => {
    openMap({
      latitude: info.latitude,
      longitude: info.longtitude,
      end: `${info.name}`,
      navigate_mode: "navigate",
    });
  };

  return (
    <PaperProvider theme={theme}>
      <Appbar.Header
        theme={{
          ...DefaultTheme,
          colors: { primary: "#73BFF0" },
        }}
      >
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Hospital Information" />
      </Appbar.Header>
      <View style={{ marginTop: 70 }}>
        <Card
          style={{
            width: "90%",
            alignSelf: "center",
            paddingTop: 20,
            paddingBottom: 20,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 25,
                flexShrink: 1,
                width: "95%",
              }}
            >
              {info.name}
            </Text>
          </View>
          <Card.Content>
            <Text>{"\n"}</Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 15 }}>Address:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 15 }}>{info.address}</Text>
              </View>
            </View>
            <Text>{"\n"}</Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 15 }}>Phone Number:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: "#003EFF",
                    textDecorationLine: "underline",
                  }}
                  onPress={() => Linking.openURL(`tel://${info.number}`)}
                >
                  {info.number}
                </Text>
              </View>
            </View>
          </Card.Content>
        </Card>
        <Button
          onPress={_openNavigation}
          mode="contained"
          icon="map"
          style={{
            width: "90%",
            marginTop: 30,
            alignSelf: "center",
            padding: 2,
          }}
          labelStyle={{ fontSize: 18 }}
        >
          Open in Maps
        </Button>
      </View>
    </PaperProvider>
  );
}

export default HospitalInfo;
