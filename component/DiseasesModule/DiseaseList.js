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

function DiseaseList({ navigation }) {
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

  const [diseaseInfo, setDiseaseInfo] = useState({
    data: [],
    fullData: [],
    query: "",
  });

  const renderHeader = () => {
    return (
      <Searchbar
        placeholder="Type Here..."
        onChangeText={(text) => handleSearch(text)}
      />
    );
  };

  //   const handleSearch = (text) => {
  //       const formatQuery = text.toLowerCase();
  //       let data = [];
  //       if(formatQuery === ""){
  //           data = diseaseData;
  //       } else{
  //           for(var i = 0; i <)
  //       }
  //   };

  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };
}

export default DiseaseList;
