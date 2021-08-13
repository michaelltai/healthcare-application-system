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
  Switch,
} from "react-native-paper";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import DropDown from "react-native-paper-dropdown";
import DateTimePicker from "@react-native-community/datetimepicker";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import { useSelector, useDispatch } from "react-redux";

import { editMedReminder } from "../../reduxConfig/actions/medicalReminderAction";

function editMedRmd({ route, navigation }) {
  const { medReminder } = useSelector((state) => state.medicalReminderReducer);
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
    { label: "Tablet", value: "Tablet" },
    { label: "Capsule", value: "Capsule" },
    { label: "Liquid", value: "Liquid" },
    { label: "Drops", value: "Drops" },
    { label: "Inhaler", value: "Inhaler" },
  ];

  const reminder = [
    { label: "Once a Day", value: 1 },
    { label: "Twice a Day", value: 2 },
    { label: "3 times a Day", value: 3 },
    { label: "4 times a Day", value: 4 },
    { label: "5 times a Day", value: 5 },
  ];

  const [medicalInfo, setMedicalInfo] = useState({
    medicalName: item.medicationName, //? put the info from the store of the chosen reminder
    medicationTime: item.medicationTime,
    medicationDoses: item.medicationDosage,
    description: item.description,
    showDropDown: false,
    showRmd: false,
    validateName: false,
    validateDosage: false,
  });

  const [medicalType, setmedicalType] = useState(item.medicationType);
  const [reminders, setReminders] = useState(1);
  const [textInputs, setTextInputs] = useState([]);
  const [show, setShow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isSwitchOn, setIsSwitchOn] = useState(false);

  //* switch for change reminder option
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  //*function for the change of new reminder time
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    if (currentDate) {
      let arr = textInputs;
      arr[currentIndex] = {
        ...arr[currentIndex],
        value: currentDate,
      };
      setTextInputs(arr);
    }
    setShow(false);
  };

  //* regex for wrong name input
  const nameValidation = () => {
    if (
      !medicalInfo.medicalName.match(/^[a-zA-Z0-9 ]*$/) ||
      medicalInfo.medicalName === ""
    ) {
      setMedicalInfo({ ...medicalInfo, validateName: true });
      return true;
    } else {
      setMedicalInfo({ ...medicalInfo, validateName: false });
      return false;
    }
  };

  //* regex for wrong dosage input
  const dosageValidation = () => {
    if (
      !medicalInfo.medicationDoses.match(/^\d+(\.\d+)?$/) ||
      medicalInfo.medicationDoses === ""
    ) {
      setMedicalInfo({ ...medicalInfo, validateDosage: true });
      return true;
    } else {
      setMedicalInfo({ ...medicalInfo, validateDosage: false });
      return false;
    }
  };

  //*function for rendering current reminders
  const renderCurrentReminders = () => {
    var t = [];
    for (var i in item.notificationTime) {
      var k = item.notificationTime[i];
      let s = new Date(k).toLocaleTimeString("en-US");
      t.push(
        <TextInput
          key={uuidv4()}
          dense={true}
          mode="outlined"
          disabled
          value={s}
        />
      );
    }
    return t;
  };

  //* function for rendering new reminders
  const renderItem = ({ item, index }) => {
    return (
      <View style={{ marginBottom: 20 }}>
        <TextInput
          dense={true}
          mode="flat"
          style={{
            fontWeight: "bold",
            textAlign: "center",
          }}
          onFocus={(e) => {
            setShow(true);
            setCurrentIndex(index);
            e.target.blur();
          }}
          value={`${item.value.toLocaleTimeString("en-US")}`}
        />
      </View>
    );
  };

  //* function to acquire permission for notification from phone
  const _getNotification = async () => {
    let { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

    if (status === "granted") {
      console.log("Notification granted");
      setNotificationHandler();
    } else {
      console.log("No permission");
    }
  };

  //* function to set notification handler
  const setNotificationHandler = () => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
      }),
    });
  };

  //* function to schedule the new notification
  const setMedicalNotification = async (
    //?change to updateMedicalNotification
    medicalTime,
    medicationtype,
    information
  ) => {
    const notiArr = [];
    const notiTime = [];
    var tmp = medReminder;
    var i, t;
    var finalData = {};

    //? call action and put this data as payload to the reducer and keep as persistent data

    for (i in tmp) {
      var x = tmp[i].id;
      if (x === item.id) {
        console.log("Match found");

        if (isSwitchOn) {
          for (let i = 0; i < reminders; i++) {
            let notificationid = await Notifications.scheduleNotificationAsync({
              content: {
                title: "Medical Reminder!",
                body:
                  "Name: " +
                  `${information.medicalName}` +
                  "\tType: " +
                  `${medicationtype}` +
                  "\t Dosage: " +
                  `${information.medicationDoses}` +
                  "\t" +
                  `${information.medicationTime}`,
              },
              trigger: {
                hour: medicalTime[i].value.getHours(),
                minute: medicalTime[i].value.getMinutes(),
                repeats: true,
              },
            });
            notiTime.push(medicalTime[i].value.getTime());
            notiArr.push(notificationid);
          }

          var k = tmp[i].notification;
          for (t in k) {
            await Notifications.cancelScheduledNotificationAsync(k[t]);
          }

          finalData = {
            id: item.id,
            medicationName: information.medicalName,
            medicationType: medicationtype,
            medicationDosage: information.medicationDoses,
            description: information.description,
            medicationTime: information.medicationTime,
            notification: notiArr,
            notificationTime: notiTime,
          };
        } else {
          finalData = {
            id: item.id,
            medicationName: information.medicalName,
            medicationType: medicationtype,
            medicationDosage: information.medicationDoses,
            description: information.description,
            medicationTime: information.medicationTime,
            notification: item.notification,
            notificationTime: item.notificationTime,
          };
        }

        tmp.splice(i, 1);
      } else {
        console.log("Not found");
      }
    }

    tmp.push(finalData);
    //dispatching the create reminder action
    dispatch(editMedReminder(tmp));
    console.log(finalData, medReminder);
    navigation.navigate("Medical Reminder List");
    ToastAndroid.showWithGravity(
      "Reminder Updated!",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
  };

  useEffect(() => {
    _getNotification();
    console.log(item);
  }, []);

  useEffect(() => {
    const setArray = () => {
      let array = [];
      for (let i = 0; i < reminders; i++) {
        array.push({
          id: i,
          value: new Date(),
        });
      }
      setTextInputs(array);
    };

    setArray();
  }, [reminders]);

  return (
    <PaperProvider theme={theme}>
      <Appbar.Header
        theme={{
          ...DefaultTheme,
          colors: { primary: "#82E0AA" },
        }}
      >
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Edit Medication" />
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
                label="Medication Name"
                mode="outlined"
                style={{ height: 50 }}
                value={medicalInfo.medicalName}
                onChangeText={(text) => {
                  setMedicalInfo({ ...medicalInfo, medicalName: text });
                }}
                onBlur={() => {
                  nameValidation();
                }}
                error={medicalInfo.validateName}
              />
              <HelperText type="error" visible={medicalInfo.validateName}>
                Can't have symbol or numbers at name!
              </HelperText>
            </View>
            <View style={{ width: "90%", alignSelf: "center", marginTop: 20 }}>
              <Subheading
                style={{
                  fontWeight: "bold",
                }}
              >
                Type
              </Subheading>
              <DropDown
                label={"Medical Type"}
                mode={"outlined"}
                value={medicalType}
                setValue={setmedicalType}
                list={data}
                visible={medicalInfo.showDropDown}
                showDropDown={() =>
                  setMedicalInfo({ ...medicalInfo, showDropDown: true })
                }
                onDismiss={() =>
                  setMedicalInfo({ ...medicalInfo, showDropDown: false })
                }
                inputProps={{
                  right: <TextInput.Icon name={"menu-down"} />,
                }}
              />
            </View>
            <View
              style={{
                width: "90%",
                alignSelf: "center",
                marginTop: 20,
              }}
            >
              <Subheading
                style={{
                  fontWeight: "bold",
                }}
              >
                Consumption Period
              </Subheading>
              <RadioButton.Group
                onValueChange={(value) =>
                  setMedicalInfo({ ...medicalInfo, medicationTime: value })
                }
                value={medicalInfo.medicationTime}
              >
                <RadioButton.Item label="Before Meal" value="Before Meal" />
                <RadioButton.Item label="After Meal" value="After Meal" />
              </RadioButton.Group>
            </View>
            <View
              style={{
                width: "90%",
                alignSelf: "center",
                marginTop: 20,
              }}
            >
              <Subheading
                style={{
                  fontWeight: "bold",
                }}
              >
                Dose
              </Subheading>
              <TextInput
                dense={true}
                style={{ height: 50 }}
                label="Dosage"
                mode="outlined"
                value={medicalInfo.medicationDoses}
                onChangeText={(text) => {
                  setMedicalInfo({ ...medicalInfo, medicationDoses: text });
                }}
                onBlur={() => {
                  dosageValidation();
                }}
                error={medicalInfo.validateDosage}
                keyboardType="numeric"
                maxLength={3}
              />
              <HelperText type="error" visible={medicalInfo.validateDosage}>
                Must be a proper dosage value!
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
                value={medicalInfo.description}
                onChangeText={(text) => {
                  setMedicalInfo({ ...medicalInfo, description: text });
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
              {renderCurrentReminders()}
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
                style={{ width: "90%", alignSelf: "center", marginTop: 20 }}
              >
                <Subheading
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  New Reminder
                </Subheading>
                <DropDown
                  mode={"outlined"}
                  value={reminders}
                  setValue={setReminders}
                  list={reminder}
                  visible={medicalInfo.showRmd}
                  showDropDown={() =>
                    setMedicalInfo({ ...medicalInfo, showRmd: true })
                  }
                  onDismiss={() =>
                    setMedicalInfo({ ...medicalInfo, showRmd: false })
                  }
                  inputProps={{
                    right: <TextInput.Icon name={"menu-down"} />,
                  }}
                />
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
                <FlatList
                  data={textInputs}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                />
                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={textInputs[currentIndex].value ?? new Date()}
                    mode="time"
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                  />
                )}
              </View>
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
                    if (nameValidation() || dosageValidation()) {
                    } else {
                      setMedicalNotification(
                        textInputs,
                        medicalType,
                        medicalInfo
                      );
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
    marginTop: 80,
    marginBottom: 50,
  },
});

export default editMedRmd;
