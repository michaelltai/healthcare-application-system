import React, { useState } from "react";

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
  List,
  Divider,
  FAB,
} from "react-native-paper";
import { hospitalData } from "../Data/hospitalData";

function HealthReminderList({ navigation }) {
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

  const [healthRmd, setHealthRmd] = useState({});

  const hlthData = [
    {
      name: "Surgery",
      type: "admission",
      time: "0600",
      description: "",
    },
    {
      name: "Medical Checkup",
      type: "appointment",
      time: "0800",
      description: "",
    },
    {
      name: "Consultation",
      type: "appointment",
      time: "0745",
      description: "",
    },
    {
      name: "Physiotherapy",
      type: "appointment",
      time: "1320",
      description: "",
    },
  ];

  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        <ActivityIndicator animating size="large" />
      </View>
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
        <Appbar.Content title="Health Reminder List" />
      </Appbar.Header>
      <View>
        <FlatList
          data={hlthData}
          renderItem={({ item }) => (
            <List.Item
              title={item.name}
              description={item.type}
              right={(props) => <List.Icon {...props} icon="settings-helper" />}
              onPress={() =>
                ToastAndroid.showWithGravity(
                  "Work in Progress!",
                  ToastAndroid.SHORT,
                  ToastAndroid.BOTTOM
                )
              }
            />
          )}
          keyExtractor={(item) => item.name} //! this is temporary, need to be unique
          ItemSeparatorComponent={() => <Divider />}
          ListFooterComponent={renderFooter()}
        />
      </View>
      <FAB
        style={{ position: "absolute", margin: 16, right: 0, bottom: 0 }}
        icon="plus"
        onPress={() => navigation.navigate("Medical Reminder")}
      />
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

export default HealthReminderList;
