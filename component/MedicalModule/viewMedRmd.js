import React, { useState } from "react";

import { View, Text } from "react-native";
import {
  Provider as PaperProvider,
  DefaultTheme,
  Appbar,
  FAB,
  Portal,
  Title,
  Paragraph,
  Card,
  Dialog,
  Button,
} from "react-native-paper";

import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import * as Notifications from "expo-notifications";

import { useSelector, useDispatch } from "react-redux";
import { deleteMedReminder } from "../../reduxConfig/actions/medicalReminderAction";

function viewMedRmd({ route, navigation }) {
  const { medReminder } = useSelector((state) => state.medicalReminderReducer);
  const dispatch = useDispatch();
  const { item } = route.params;
  const theme = {
    ...DefaultTheme,
    roundness: 15,
    colors: {
      ...DefaultTheme.colors,

      primary: "#2EA5FA",
      background: "#C1FFF7",
      placeholder: "#8E8E8E",
    },
  };

  const [openFAB, setOpenFAB] = useState({ open: false });
  const [visible, setVisible] = useState(false);

  const onFABChange = ({ open }) => setOpenFAB({ open });
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const { open } = openFAB;

  //* display the list of reminders
  const renderReminderTime = () => {
    var t = [];
    for (var i in item.notificationTime) {
      var k = item.notificationTime[i];
      let s = new Date(k).toLocaleTimeString("en-US");
      t.push(<Text key={uuidv4()}>{s}</Text>);
    }
    return t;
  };

  //* function to delete the current reminder
  const deleteReminder = async () => {
    var tmp = medReminder;
    var i, t;
    for (i in tmp) {
      var x = tmp[i].id;
      if (x === item.id) {
        console.log("Match found");
        var k = tmp[i].notification;
        for (t in k) {
          await Notifications.cancelScheduledNotificationAsync(k[t]);
        }
        tmp.splice(i, 1);
        dispatch(deleteMedReminder(tmp));
      } else {
        console.log("Not found");
      }
    }
    return navigation.goBack();
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
        <Appbar.Content title="Reminder Information" />
      </Appbar.Header>
      <View style={{ marginTop: 70 }}>
        <Card
          style={{
            width: "90%",
            alignSelf: "center",

            paddingBottom: 20,
            elevation: 4,
          }}
        >
          <Card.Cover source={require("../../assets/test.jpg")} />

          <Card.Content>
            <View style={{ marginTop: 10 }}>
              <Title>{item.medicationName}</Title>
              <Paragraph style={{ color: "grey" }}>
                {item.medicationType}
              </Paragraph>
            </View>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 15 }}>Taken:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>{item.medicationTime}</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 15 }}>Dosage:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>{item.medicationDosage}</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 15 }}>Reminder Time:</Text>
              </View>
              <View style={{ flex: 1, paddingBottom: 30 }}>
                {renderReminderTime()}
              </View>
            </View>
          </Card.Content>
        </Card>
      </View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Delete Reminder?</Dialog.Title>
          <Dialog.Content>
            <Paragraph>
              Are you sure you want to delete this Reminder? This cannot be
              undone.
            </Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>
              <Text style={{ color: "#5C1349" }}>Cancel</Text>
            </Button>
            <Button onPress={deleteReminder}>
              <Text style={{ color: "#5C1349" }}>Confirm</Text>
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <Portal>
        <FAB.Group
          open={open}
          icon={open ? "close" : "menu"}
          actions={[
            {
              icon: "square-edit-outline",
              label: "Edit",
              onPress: () =>
                navigation.navigate("Edit Medical Reminder", { item }),
            },
            {
              icon: "delete",
              label: "Delete",
              onPress: () => {
                showDialog();
              },
            },
          ]}
          onStateChange={onFABChange}
        />
      </Portal>
    </PaperProvider>
  );
}

export default viewMedRmd;
