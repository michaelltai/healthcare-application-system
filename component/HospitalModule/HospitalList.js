import React, { useState, useEffect, useMemo } from "react";

import {
  StyleSheet,
  View,
  FlatList,
  VirtualizedList,
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
import { OptimizedFlatList } from "react-native-optimized-flatlist";
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
    loadingAnimation: true,
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
          //isLocationModalVisible: true,
          loadingAnimation: false,
        });
        ToastAndroid.showWithGravityAndOffset(
          "Nearest hospital will not be calculated",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
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
        setHospInfo({ ...hospInfo, loadingAnimation: false });
        ToastAndroid.show(
          "Nearest Hospital Will not be calculated",
          ToastAndroid.LONG
        );
      } else {
        _getLocation();
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
    }

    item.sort(function (a, b) {
      return a.distance - b.distance;
    });
    console.log("populate done");

    setHospInfo({
      ...hospInfo,
      data: item,
      fullData: item,
      loadingAnimation: false,
    });
  };

  const calculateDistance = (userLat, userLong, destLat, destLong) => {
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
      "All distance showed are in approximate value",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      0,
      100
    );
  };

  //? try putting this outside of the function and see is there performance boost
  const renderItem = ({ item }) => (
    <List.Item
      key={item.name}
      title={item.name}
      description={`Phone No: ${item.number}`}
      left={(props) => (
        <Text style={styles.distance}>{`${item.distance}\napprox.\nKM`}</Text>
      )}
      right={(props) => <List.Icon {...props} icon="chevron-right" />}
      onPress={() =>
        navigation.navigate("Hospital Information", { info: item })
      }
      onLongPress={() => Linking.openURL(`tel://${item.number}`)}
    />
  );

  const getItem = (data, index) => data[index];
  const getItemCount = (data) => data.length;
  //const memoizedValue = useMemo(() => renderItem, [hospInfo.query]);

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
        {/* <Modal
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
        </Modal> */}

        {!hospInfo.loadingAnimation && (
          <VirtualizedList
            data={hospInfo.data}
            getItemCount={getItemCount}
            getItem={getItem}
            renderItem={renderItem}
            initialNumToRender={20}
            removeClippedSubviews={true}
            updateCellsBatchingPeriod={10}
            keyExtractor={(item) => item.number}
            ItemSeparatorComponent={() => <Divider />}
            ListHeaderComponent={renderHeader()}
            ListFooterComponent={renderFooter()}
          />
        )}
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 300,
          }}
        >
          <ActivityIndicator
            animating={hospInfo.loadingAnimation}
            size={70}
            color="#6C73FF"
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          />
        </View>
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
    fontSize: 14,
  },
});

export default HospitalList;
