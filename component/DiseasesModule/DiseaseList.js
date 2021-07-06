import React, { useState, useEffect, useMemo } from "react";

import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
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
} from "react-native-paper";

import { diseaseData } from "../Data/diseaseData";

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
    data: diseaseData,
    fullData: diseaseData,
    query: "",
    loadingAnimation: true,
  });

  const renderHeader = () => {
    return (
      <Searchbar
        placeholder="Type Here..."
        onChangeText={(text) => handleSearch(text)}
      />
    );
  };

  const handleSearch = (text) => {
    const formatQuery = text.toLowerCase();
    let data = [];
    if (formatQuery === "") {
      data = diseaseData;
    } else {
      for (var i = 0; i < diseaseInfo.fullData.length; i++) {
        const tmpName = diseaseInfo.fullData[i].name;
        tmpName = tmpName.toLowerCase();
        if (tmpName.match(formatQuery)) {
          data.push(diseaseInfo.fullData[i]);
        }
      }
    }

    setDiseaseInfo({ ...diseaseInfo, query: formatQuery, data });
  };

  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };
  const renderItem = ({ item }) => (
    <List.Item
      key={item.name}
      title={item.name}
      right={(props) => <List.Icon {...props} icon="chevron-right" />}
      onPress={() => navigation.navigate("Disease Information", { info: item })}
    />
  );

  const memoizedValue = useMemo(() => renderItem, [diseaseInfo.query]);

  useEffect(() => {
    setTimeout(() => {
      setDiseaseInfo({ ...diseaseInfo, loadingAnimation: false });
    }, 200);
  }, []);
  return (
    <PaperProvider theme={theme}>
      <Appbar.Header
        theme={{
          ...DefaultTheme,
          colors: { primary: "#73BFF0" },
        }}
      >
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Diseases Lookup" />
      </Appbar.Header>
      <View>
        {!diseaseInfo.loadingAnimation && (
          <FlatList
            data={diseaseInfo.data}
            renderItem={memoizedValue}
            initialNumToRender={20}
            removeClippedSubviews={true}
            maxToRenderPerBatch={20}
            updateCellsBatchingPeriod={500}
            keyExtractor={(item) => item.name}
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
            animating={diseaseInfo.loadingAnimation}
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
});

export default DiseaseList;
