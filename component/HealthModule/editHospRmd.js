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
  RadioButton,
  HelperText,
  Switch,
} from "react-native-paper";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import DropDown from "react-native-paper-dropdown";
import DateTimePicker from "@react-native-community/datetimepicker";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import { useSelector, useDispatch } from "react-redux";
import { editHospReminder } from "../../reduxConfig/actions/hospitalReminderAction";

function editHospRmd({ route, navigation }) {
  const { hospReminder } = useSelector(
    (state) => state.hospitalReminderReducer
  );
  const dispatch = useDispatch();
  const { item } = route.params;
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
    { label: "Others", value: "Others" },
  ];

  const [hospitalInfo, setHospitalInfo] = useState({
    reminderName: item.appointmentName,
    showDropDown: false,
    description: item.description,
    hospitalName: item.hospitalName,
    reminderTime: item.notificationTime,
    tmpTime: item.notificationTime,
    validateName: false,
    validateHospital: false,
    validateAppointment: false,
  });

  const [appointmentType, setAppointmentType] = useState(item.appointmentType);
  const [show, setShow] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  //* switch for change reminder option
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

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

  //* function to set the time for the reminder
  const onChange = (event, selectedDate) => {
    setShow(false);
    const currentDate = selectedDate;
    console.log("onchange called");
    if (currentDate) {
      setHospitalInfo({ ...hospitalInfo, reminderTime: currentDate });
    }
  };

  //* regex for wrong name input
  const nameValidation = () => {
    if (
      !hospitalInfo.reminderName.match(/^[a-zA-Z0-9 ]*$/) ||
      hospitalInfo.reminderName === ""
    ) {
      setHospitalInfo({ ...hospitalInfo, validateName: true });
      return true;
    } else {
      setHospitalInfo({ ...hospitalInfo, validateName: false });
      return false;
    }
  };

  const hospitalValidation = () => {
    if (!hospitalInfo.hospitalName.match(/^[a-zA-Z ]*$/)) {
      setHospitalInfo({ ...hospitalInfo, validateHospital: true });
      return true;
    } else {
      setHospitalInfo({ ...hospitalInfo, validateHospital: false });
      return false;
    }
  };

  const typeValidation = () => {
    if (appointmentType === "") {
      setHospitalInfo({ ...hospitalInfo, validateAppointment: true });
      return true;
    } else {
      setHospitalInfo({ ...hospitalInfo, validateAppointment: false });
      return false;
    }
  };

  //* function to schedule the notification
  const setAppointmentNotification = async (type, info) => {
    var tmp = hospReminder;
    var i;
    var finalData = {};

    for (i in tmp) {
      var x = tmp[i].id;
      if (x === item.id) {
        console.log("Match found");
        if (isSwitchOn) {
          const notificationTime = info.reminderTime.getTime();
          let notificationId = await Notifications.scheduleNotificationAsync({
            content: {
              title: "Health Reminder!",
              body: `Name: ${info.reminderName} \tType: ${type}`,
            },
            trigger: {
              hour: info.reminderTime.getHours(),
              minute: info.reminderTime.getMinutes(),
              repeats: true,
            },
          });

          await Notifications.cancelScheduledNotificationAsync(
            tmp[i].notificationId
          );

          finalData = {
            id: item.id,
            appointmentName: info.reminderName,
            appointmentType: type,
            description: info.description,
            hospitalName: info.hospitalName,
            notificationId: notificationId,
            notificationTime: notificationTime,
          };
        } else {
          finalData = {
            id: item.id,
            appointmentName: info.reminderName,
            appointmentType: type,
            description: info.description,
            hospitalName: info.hospitalName,
            notificationId: item.notificationId,
            notificationTime: item.notificationTime,
          };
        }
        tmp.splice(i, 1);
      } else {
        console.log("Match not found");
      }
    }

    tmp.push(finalData);

    //console.log(tmp);
    //dispatching the create reminder action
    dispatch(editHospReminder(tmp));
    console.log(hospReminder);
    navigation.navigate("Health Reminder List");
    ToastAndroid.showWithGravity(
      "Reminder Saved!",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
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
                onBlur={() => {
                  nameValidation();
                }}
                error={hospitalInfo.validateName}
              />
              <HelperText type="error" visible={hospitalInfo.validateName}>
                Cannot be blank or contain symbols
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
                onBlur={() => {
                  hospitalValidation();
                }}
                error={hospitalInfo.validateHospital}
              />
              <HelperText type="error" visible={hospitalInfo.validateHospital}>
                Cannot contain symbols or numbers
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
              <HelperText
                type="info"
                visible={hospitalInfo.validateAppointment}
              >
                Please select one!
              </HelperText>
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
            </View>
            <View style={{ width: "90%", alignSelf: "center", marginTop: 20 }}>
              <Subheading
                style={{
                  fontWeight: "bold",
                }}
              >
                Current Reminder
              </Subheading>
              <TextInput
                dense={true}
                mode="outlined"
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                }}
                disabled
                value={`${new Date(hospitalInfo.tmpTime).toLocaleTimeString(
                  "en-US"
                )}`}
              />
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Subheading
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Change Reminder
                  </Subheading>
                </View>
                <View style={{ flex: 1 }}>
                  <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                </View>
              </View>
            </View>
            {isSwitchOn && (
              <View
                style={{ width: "90%", alignSelf: "center", marginTop: 10 }}
              >
                <Subheading
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  New Reminder
                </Subheading>
                <TextInput
                  dense={true}
                  mode="outlined"
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                  onFocus={(e) => {
                    setShow(true);
                    e.target.blur();
                  }}
                  value={`${new Date(
                    hospitalInfo.reminderTime
                  ).toLocaleTimeString("en-US")}`}
                />
              </View>
            )}
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={hospitalInfo.reminderTime ?? new Date()}
                mode="time"
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}

            <View style={styles.btnContainer}>
              <View style={{ flex: 1, marginLeft: 150 }}>
                <Button
                  mode="contained"
                  color="#404040"
                  compact={true}
                  style={{ justifyContent: "flex-start", marginLeft: 20 }}
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                  Cancel
                </Button>
              </View>
              <View style={{ flex: 1 }}>
                <Button
                  mode="contained"
                  color="#404040"
                  compact={true}
                  onPress={() => {
                    if (
                      nameValidation() ||
                      typeValidation() ||
                      hospitalValidation()
                    ) {
                    } else {
                      console.log("all good");
                      setAppointmentNotification(appointmentType, hospitalInfo);
                    }
                  }}
                  style={{
                    justifyContent: "flex-end",
                    marginLeft: 10,
                    marginRight: 20,
                  }}
                >
                  Save
                </Button>
              </View>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 20,
  },
});

export default editHospRmd;
