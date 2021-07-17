import React, { useEffect } from "react";

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

function HealthReminderList({ navigation }) {
  const { hospReminder } = useSelector(
    (state) => state.hospitalReminderReducer
  );
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

  useEffect(() => {
    console.log(hospReminder);
  });

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
          data={hospReminder}
          renderItem={({ item }) => (
            <List.Item
              title={item.appointmentName}
              description={`Type: ${item.appointmentType} \t ${item.hospitalName}`}
              right={(props) => <List.Icon {...props} icon="chevron-right" />}
              onPress={() =>
                navigation.navigate("View Health Reminder", { item })
              }
            />
          )}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <Divider />}
          ListFooterComponent={renderFooter()}
        />
      </View>
      <FAB
        style={{ position: "absolute", margin: 16, right: 0, bottom: 0 }}
        icon="bell-plus"
        onPress={() => navigation.navigate("Health Reminder")}
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
