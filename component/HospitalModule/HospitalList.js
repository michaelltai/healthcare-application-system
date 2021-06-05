import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Linking,
  Platform,
  AppState,
  ToastAndroid,
} from "react-native";
import {
  Provider as PaperProvider,
  DefaultTheme,
  Appbar,
  Text,
  List,
  Divider,
  Searchbar,
  Modal,
  Button,
} from "react-native-paper";
import * as IntentLauncher from "expo-intent-launcher";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

import { hospitalData } from "../Data/hospitalData";

function HospitalList({ navigation }) {
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

  const [hospInfo, setHospInfo] = useState({
    data: hospitalData,
    fullData: hospitalData,
    query: "",
    userLat: 0,
    userLong: 0,
    errorMessage: "",
    userLocation: {},
    isLocationModalVisible: false,
    appState: AppState.currentState,
  });

  useEffect(() => {
    //? componentdidmount
    _getLocation();
    showTips();
    console.log("getlocationcalled");

    //* listening to current application's state
    //! test status: not verified
    //AppState.addEventListener("change", _handleAppStateChange);

    //? componentdidunmount
    return () => {
      //AppState.removeEventListener("change", _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = (nextAppState) => {
    if (
      hospInfo.appState.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      _getLocation();
    }
    setHospInfo({ ...hospInfo, appState: nextAppState });
  };

  //? get user's location
  const _getLocation = async () => {
    try {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);

      if (status !== "granted") {
        console.log("Not granted");
        setHospInfo({
          ...hospInfo,
          errorMessage: "Permission not Granted",
          isLocationModalVisible: true,
        });
        return;
      }

      const userLocation = await Location.getCurrentPositionAsync();
      setHospInfo({
        ...hospInfo,
        userLocation,
        userLat: userLocation.coords.latitude,
        userLong: userLocation.coords.longitude,
      });
      _populateDistance(
        userLocation.coords.latitude,
        userLocation.coords.longitude
      );
    } catch (error) {
      //* if user disable  location permission from settings
      //! test status: not verified
      let status = Location.getProviderStatusAsync();
      if (!(await status).locationServicesEnabled) {
        setHospInfo({ ...hospInfo, isLocationModalVisible: true });
      }
    }
  };

  const renderHeader = () => {
    return (
      <Searchbar
        placeholder="Type Here..."
        onChangeText={(text) => handleSearch(text)}
      />
    );
  };

  const handleSearch = (txt) => {
    //not working properly, need to fix
    const formatQuery = txt.toLowerCase();
    let data = [];
    if (formatQuery === "") {
      data = hospitalData;
    } else {
      for (var i = 0; i < hospInfo.fullData.length; i++) {
        const tmpName = hospInfo.fullData[i].name;
        tmpName = tmpName.toLowerCase();
        if (tmpName.match(formatQuery)) {
          data.push(hospInfo.fullData[i]);
        }
      }
    }

    setHospInfo({ ...hospInfo, query: formatQuery, data });
  };

  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  //* this function is used to open user's mobile app settings to enable the location permission
  //! test status: not verified
  const openSetting = () => {
    if (Platform.OS == "ios") {
      Linking.openURL("app-settings:");
    } else {
      IntentLauncher.startActivityAsync(
        IntentLauncher.ACTION_LOCATION_SOURCE_SETTINGS
      );
    }
    setHospInfo({ ...hospInfo, openSetting: false });
  };

  //? populate distance value and sort according to user's location
  const _populateDistance = (lat, long) => {
    console.log("populatecalled");
    var item = hospInfo.fullData;
    var di;
    for (var i in item) {
      di = calculateDistance(lat, long, item[i].latitude, item[i].longtitude);
      item[i].distance = di;
      console.log(item[i].distance);
    }

    item.sort(function (a, b) {
      return a.distance - b.distance;
    });

    setHospInfo({ ...hospInfo, data: item, fullData: item });
  };

  const calculateDistance = (userLat, userLong, destLat, destLong) => {
    console.log("caldiscalled");
    console.log(userLat, userLong, destLat, destLong);

    var radLat1 = (Math.PI * userLat) / 180;
    var radLat2 = (Math.PI * destLat) / 180;
    var thetaLat = ((destLat - userLat) * Math.PI) / 180;
    var thetaLong = ((destLong - userLong) * Math.PI) / 180;

    var a =
      Math.sin(thetaLat / 2) * Math.sin(thetaLat / 2) +
      Math.cos(radLat1) *
        Math.cos(radLat2) *
        Math.sin(thetaLong / 2) *
        Math.sin(thetaLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = 6371 * c;
    var distance = d.toFixed(2);
    return distance;
  };

  const showTips = () => {
    ToastAndroid.showWithGravityAndOffset(
      "Tips: Long press on Item to Call Hospital",
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      0,
      100
    );
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
        <Appbar.Content title="Hospital List" />
      </Appbar.Header>
      <View>
        {/* Modal to ask user to enable location permission in app settings. Not tested */}
        <Modal
          visible={hospInfo.isLocationModalVisible}
          onModalHide={hospInfo.openSetting ? openSetting : undefined}
        >
          <View
            style={{
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              mode="contained"
              onPress={() => {
                setHospInfo({
                  ...hospInfo,
                  isLocationModalVisible: false,
                  openSetting: true,
                });
              }}
            >
              Enable Location Service
            </Button>
          </View>
        </Modal>
        <FlatList
          data={hospInfo.data}
          renderItem={({ item }) => (
            <List.Item
              title={item.name}
              description={`Phone No: ${item.number}`}
              left={(props) => (
                <Text style={styles.distance}>{`${item.distance}\nKM`}</Text>
              )}
              right={(props) => <List.Icon {...props} icon="chevron-right" />}
              onPress={() =>
                navigation.navigate("Hospital Information", { info: item })
              }
              onLongPress={() => Linking.openURL(`tel://${item.number}`)}
            />
          )}
          keyExtractor={(item) => item.number}
          ItemSeparatorComponent={() => <Divider />}
          ListHeaderComponent={renderHeader()}
          ListFooterComponent={renderFooter()}
        />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: "#CED0CE",
  },
  distance: {
    paddingTop: 10,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  },
});

export default HospitalList;