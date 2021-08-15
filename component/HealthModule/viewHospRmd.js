import React, { useState } from "react";

import { View, Text, ToastAndroid } from "react-native";
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
import { deleteHospReminder } from "../../reduxConfig/actions/hospitalReminderAction";
function viewHospRmd({ route, navigation }) {
  const { hospReminder } = useSelector(
    (state) => state.hospitalReminderReducer
  );
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

  const renderReminderTime = () => {
    var cur = item.notificationTime;
    let tmp = new Date(cur).toLocaleTimeString("en-US");
    return <Text>{tmp}</Text>;
  };

  const renderReminderDate = () => {
    var cur = item.notificationDate;
    let tmp = new Date(cur).toLocaleDateString("en-US");
    return <Text>{tmp}</Text>;
  };

  const renderTriggerTime = () => {
    var cur = item.triggerTime;
    let tmp = new Date(cur).toLocaleTimeString("en-US");
    return <Text>{tmp}</Text>;
  };

  const renderTriggerDate = () => {
    var cur = item.triggerTime;
    let tmp = new Date(cur).toLocaleDateString("en-US");
    return <Text>{tmp}</Text>;
  };

  //* function to delete the current reminder
  const deleteReminder = async () => {
    var tmp = hospReminder;
    var i;
    for (i in tmp) {
      var x = tmp[i].id;
      if (x === item.id) {
        //console.log("Match found");
        var k = tmp[i].notificationId;
        //console.log("k value:" + k);
        await Notifications.cancelScheduledNotificationAsync(k);
        tmp.splice(i, 1);
        dispatch(deleteHospReminder(tmp));
      } else {
        console.log("Not found");
      }
    }
    navigation.goBack();
    ToastAndroid.showWithGravity(
      "Reminder Deleted",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
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
          <Card.Cover source={require("../../assets/hosprmd.jpg")} />
          <Card.Content>
            <View style={{ marginTop: 10 }}>
              <Title>{item.appointmentName}</Title>
              <Paragraph style={{ color: "grey" }}>
                {item.appointmentType}
              </Paragraph>
            </View>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 15 }}>Hospital Name:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {item.hospitalName === "" ? "N/A" : item.hospitalName}
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 15 }}>Appointment Date:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>{renderReminderDate()}</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 15 }}>Appointment Time:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>{renderReminderTime()}</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 15 }}>Reminder Date:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>{renderTriggerDate()}</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 15 }}>Reminder Time:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>{renderTriggerTime()}</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 15 }}>Description:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {item.description === "" ? "N/A" : item.description}
                </Text>
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
              icon: "calendar-edit",
              label: "Edit",
              onPress: () => {
                navigation.navigate("Edit Health Reminder", { item });
              },
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

export default viewHospRmd;
