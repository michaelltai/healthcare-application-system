import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  FlatList,
  ToastAndroid,
} from "react-native";

import {
  Provider as PaperProvider,
  DefaultTheme,
  Button,
  Appbar,
  Subheading,
  TextInput,
  Text,
  RadioButton,
  HelperText,
} from "react-native-paper";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import DropDown from "react-native-paper-dropdown";
import DateTimePicker from "@react-native-community/datetimepicker";

import { useSelector, useDispatch } from "react-redux";
import { createHospReminder } from "../../reduxConfig/actions/hospitalReminderAction";

import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

function newHospRmd({ navigation }) {
  const { hospReminder } = useSelector(
    (state) => state.hospitalReminderReducer
  );
  const dispatch = useDispatch();

  const theme = {
    ...DefaultTheme,

    roundness: 4,
    colors: {
      ...DefaultTheme.colors,

      primary: "#2EA5FA",
      background: "#FFFFFF",
      placeholder: "#8E8E8E",
    },
  };

  const data = [
    { label: "Consultation", value: "Consultation" },
    { label: "Checkup", value: "Checkup" },
    { label: "Surgery", value: "Surgery" },
    { label: "Physiotherapy", value: "Physiotherapy" },
    { label: "Rehabilitation", value: "Rehabilitation" },
  ];

  const [hospitalInfo, setHospitalInfo] = useState({
    reminderName: "",
    showDropDown: false,
    description: "",
    hospitalName: "",
  });

  const [appointmentType, setAppointmentType] = useState("");
  const [descriptionheight, setDescriptionHeight] = useState(42);

  //* regex for wrong name input
  const nameError = () => {
    return !hospitalInfo.reminderName.match(/^[a-zA-Z0-9 ]*$/);
  };

  const _getNotification = async () => {
    let { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

    if (status === "granted") {
      console.log("Notification granted");
      Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldPlaySound: true,
          shouldSetBadge: true,
          shouldShowAlert: true,
        }),
      });
    } else {
      console.log("No permission");
    }
  };

  useEffect(() => {
    _getNotification();
  }, []);

  return (
    <PaperProvider theme={theme}>
      <Appbar.Header
        theme={{
          ...DefaultTheme,
          colors: { primary: "#82E0AA" },
        }}
      >
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="New Appointment" />
      </Appbar.Header>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={{ marginTop: 25 }}>
            <View style={{ width: "90%", alignSelf: "center" }}>
              <Subheading
                style={{
                  fontWeight: "bold",
                }}
              >
                Name
              </Subheading>
              <TextInput
                dense={true}
                label="Appointment Name"
                mode="outlined"
                style={{ height: 50 }}
                value={hospitalInfo.reminderName}
                onChangeText={(text) => {
                  setHospitalInfo({ ...hospitalInfo, reminderName: text });
                }}
              />
              <HelperText type="error" visible={nameError()}>
                Can't have symbols at name!
              </HelperText>
            </View>
            <View style={{ width: "90%", alignSelf: "center" }}>
              <Subheading
                style={{
                  fontWeight: "bold",
                }}
              >
                Hospital
              </Subheading>
              <TextInput
                dense={true}
                label="Hospital Name"
                mode="outlined"
                style={{ height: 50 }}
                value={hospitalInfo.hospitalName}
                onChangeText={(text) => {
                  setHospitalInfo({ ...hospitalInfo, hospitalName: text });
                }}
              />
              <HelperText type="error" visible={nameError()}>
                Can't have symbols at name!
              </HelperText>
            </View>
            <View style={{ width: "90%", alignSelf: "center" }}>
              <Subheading
                style={{
                  fontWeight: "bold",
                }}
              >
                Type
              </Subheading>
              <DropDown
                label={"Appointment Type"}
                mode={"outlined"}
                value={appointmentType}
                setValue={setAppointmentType}
                list={data}
                visible={hospitalInfo.showDropDown}
                showDropDown={() =>
                  setHospitalInfo({ ...hospitalInfo, showDropDown: true })
                }
                onDismiss={() =>
                  setHospitalInfo({ ...hospitalInfo, showDropDown: false })
                }
                inputProps={{
                  right: <TextInput.Icon name={"menu-down"} />,
                }}
              />
              <HelperText type="error" visible={false}>
                Please select one!
              </HelperText>
            </View>
            <View style={{ width: "90%", alignSelf: "center" }}>
              <Subheading
                style={{
                  fontWeight: "bold",
                }}
              >
                Reminder
              </Subheading>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 20,
                  marginBottom: 10,
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      alignSelf: "center",
                    }}
                  >
                    Time
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ width: "90%", alignSelf: "center" }}>
              <Subheading
                style={{
                  fontWeight: "bold",
                }}
              >
                Description
              </Subheading>
              <TextInput
                dense={true}
                label="Description"
                mode="outlined"
                style={{
                  padding: 2,
                }}
                multiline
                value={hospitalInfo.description}
                onChangeText={(text) => {
                  setHospitalInfo({ ...hospitalInfo, description: text });
                }}
              />
              <HelperText type="error" visible={nameError()}>
                Can't have symbols at name!
              </HelperText>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </PaperProvider>
  );
}

export default newHospRmd;
