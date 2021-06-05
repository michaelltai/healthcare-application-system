import React from "react";

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

import { useSelector } from "react-redux";

function MedicalReminderList({ navigation }) {
  const { medReminder } = useSelector((state) => state.medicalReminderReducer);

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
        <Appbar.Content title="Medical Reminder List" />
      </Appbar.Header>
      <View>
        <FlatList
          data={medReminder}
          renderItem={({ item }) => (
            <List.Item
              title={item.medicationName}
              description={
                "Type: " +
                `${item.medicationType}` +
                "\t Dosage: " +
                `${item.medicationDosage}` +
                "\t " +
                `${item.medicationTime}`
              }
              right={(props) => <List.Icon {...props} icon="settings-helper" />}
              onPress={() =>
                ToastAndroid.showWithGravity(
                  "Work in Progress!",
                  ToastAndroid.SHORT,
                  ToastAndroid.BOTTOM
                )
              }
              onLongPress={() => console.log("long press")}
            />
          )}
          keyExtractor={(item) => item.medicationName} //! need to be unique
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

export default MedicalReminderList;
