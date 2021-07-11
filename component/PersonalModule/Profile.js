import React, { useState } from "react";

import { StyleSheet, Text, View, ScrollView, ToastAndroid } from "react-native";

import {
  Provider as PaperProvider,
  DefaultTheme,
  Button,
  TextInput,
  Appbar,
  HelperText,
  FAB,
  Divider,
  Card,
  Portal,
  Modal,
} from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";

import { useSelector, useDispatch } from "react-redux";

import { updateUser } from "../../reduxConfig/actions/userAction";

function Profile({ navigation }) {
  const dispatch = useDispatch();
  const { firstName, lastName, gender, DOB, height, weight, bpSys, bpDia } =
    useSelector((state) => state.userReducer);
  const theme = {
    ...DefaultTheme,

    roundness: 3,
    colors: {
      ...DefaultTheme.colors,

      primary: "#2EA5FA",

      placeholder: "#8E8E8E",
    },
  };

  const [userInfo, setUserInfo] = useState({
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    height: height,
    weight: weight,
    dob: DOB,
    bpsystolic: bpSys, // blood pressure upper number
    bpdiastolic: bpDia, // blood pressure lower number

    visible: false,
    validateFirstName: false,
    validateLastName: false,
    validateGender: false,
    validateHeight: false,
    validateWeight: false,
    validateDOB: false,
    validateBpSys: false,
    validateBpDias: false,
  });

  const [show, setShow] = useState(false);

  //* regex for wrong name input
  const firstNameValidation = () => {
    if (
      !userInfo.firstName.match(/^[a-zA-Z ]*$/) ||
      userInfo.firstName === ""
    ) {
      setUserInfo({ ...userInfo, validateFirstName: true });
      return true;
    } else {
      setUserInfo({ ...userInfo, validateFirstName: false });
      return false;
    }
  };

  const lastNameValidation = () => {
    if (!userInfo.lastName.match(/^[a-zA-Z ]*$/) || userInfo.lastName === "") {
      setUserInfo({ ...userInfo, validateLastName: true });
      return true;
    } else {
      setUserInfo({ ...userInfo, validateLastName: false });
      return false;
    }
  };

  const genderValidation = () => {
    if (!userInfo.gender.match(/^[a-zA-Z]*$/) || userInfo.gender === "") {
      setUserInfo({ ...userInfo, validateGender: true });
      return true;
    } else {
      setUserInfo({ ...userInfo, validateGender: false });
      return false;
    }
  };

  const heightValidation = () => {
    if (!userInfo.height.match(/^[0-9]*$/) || userInfo.height === "") {
      setUserInfo({ ...userInfo, validateHeight: true });
      return true;
    } else {
      setUserInfo({ ...userInfo, validateHeight: false });
      return false;
    }
  };

  const weightValidation = () => {
    if (!userInfo.weight.match(/^[0-9]*$/) || userInfo.weight === "") {
      setUserInfo({ ...userInfo, validateWeight: true });
      return true;
    } else {
      setUserInfo({ ...userInfo, validateWeight: false });
      return false;
    }
  };

  const bpSysValidation = () => {
    if (!userInfo.bpsystolic.match(/^[0-9]*$/) || userInfo.bpsystolic === "") {
      setUserInfo({ ...userInfo, validateBpSys: true });
      return true;
    } else {
      setUserInfo({ ...userInfo, validateBpSys: false });
      return false;
    }
  };

  const bpDiaValidation = () => {
    if (
      !userInfo.bpdiastolic.match(/^[0-9]*$/) ||
      userInfo.bpdiastolic === ""
    ) {
      setUserInfo({ ...userInfo, validateBpDias: true });
      return true;
    } else {
      setUserInfo({ ...userInfo, validateBpDias: false });
      return false;
    }
  };

  //* function to set the time for the reminder
  const onChange = (event, selectedDate) => {
    setShow(false);
    const currentDate = selectedDate;
    console.log("onchange called");
    if (currentDate) {
      setUserInfo({ ...userInfo, dob: currentDate });
    }
  };

  const displayDOB = () => {
    var tmp = userInfo.dob;
    if (tmp === "") {
      return "";
    } else {
      return new Date(tmp).toLocaleDateString("en-US");
    }
  };

  const updateUserInfo = () => {
    console.log("user update ok");
    ToastAndroid.show("User Profile Updated", ToastAndroid.SHORT);
    const finalData = {
      fName: userInfo.firstName,
      lName: userInfo.lastName,
      gender: userInfo.gender,
      height: userInfo.height,
      weight: userInfo.weight,
      dob: userInfo.dob,
      bpsystolic: userInfo.bpsystolic,
      bpdiastolic: userInfo.bpdiastolic,
    };
    dispatch(updateUser(finalData));
  };

  return (
    <PaperProvider theme={theme}>
      <Appbar.Header
        theme={{
          ...DefaultTheme,
          colors: { primary: "#FFFFFF" },
        }}
      >
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      </Appbar.Header>
      <ScrollView>
        <Text
          style={{
            fontSize: 35,
            marginTop: 15,
            marginLeft: 25,
            fontWeight: "bold",
          }}
        >
          Profile
        </Text>
        <Divider style={{ backgroundColor: "black", marginTop: 15 }} />
        <View style={{ marginTop: 20, marginBottom: 5 }}>
          <Card
            style={{
              width: "90%",
              alignSelf: "center",
              paddingTop: 15,
              paddingBottom: 15,
              elevation: 4,
              borderRadius: 20,
            }}
          >
            <Card.Content>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15 }}>Name:</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15 }}>
                    {userInfo.lastName} {userInfo.firstName}
                  </Text>
                </View>
              </View>
              <Text>{"\n"}</Text>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15 }}>Gender:</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15 }}>{userInfo.gender}</Text>
                </View>
              </View>
              <Text>{"\n"}</Text>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15 }}>Date of Birth:</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15 }}>{displayDOB()}</Text>
                </View>
              </View>
              <Text>{"\n"}</Text>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15 }}>Height (cm):</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15 }}>{userInfo.height}</Text>
                </View>
              </View>
              <Text>{"\n"}</Text>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15 }}>Weight (kg):</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15 }}>{userInfo.weight}</Text>
                </View>
              </View>
              <Text>{"\n"}</Text>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15 }}>
                    Blood Pressure (Systolic):
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15 }}>{userInfo.bpsystolic}</Text>
                </View>
              </View>
              <Text>{"\n"}</Text>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15 }}>
                    Blood Pressure (Diastolic):
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15 }}>{userInfo.bpdiastolic}</Text>
                </View>
              </View>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
      <FAB
        style={{ position: "absolute", margin: 16, right: 0, bottom: 0 }}
        icon="account-edit-outline"
        onPress={() => setUserInfo({ ...userInfo, visible: true })}
      />
      <Portal>
        <Modal
          visible={userInfo.visible}
          dismissable={false}
          contentContainerStyle={{
            backgroundColor: "white",
            padding: 20,
            width: "90%",
            alignSelf: "center",
            borderRadius: 20,
            marginBottom: 10,
          }}
        >
          <ScrollView>
            <View>
              <View>
                <TextInput
                  dense={true}
                  label="First Name"
                  mode="flat"
                  value={userInfo.firstName}
                  onChangeText={(text) =>
                    setUserInfo({ ...userInfo, firstName: text })
                  }
                  onBlur={() => firstNameValidation()}
                  error={userInfo.validateFirstName}
                />
                <HelperText type="error" visible={userInfo.validateFirstName}>
                  Cannot be blank, contain symbols or numbers
                </HelperText>
              </View>
              <View>
                <TextInput
                  dense={true}
                  label="Last Name"
                  mode="flat"
                  value={userInfo.lastName}
                  onChangeText={(text) =>
                    setUserInfo({ ...userInfo, lastName: text })
                  }
                  onBlur={() => lastNameValidation()}
                  error={userInfo.validateLastName}
                />
                <HelperText type="error" visible={userInfo.validateLastName}>
                  Cannot be blank, contain symbols or numbers
                </HelperText>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <View>
                    <TextInput
                      dense={true}
                      label="Gender"
                      mode="flat"
                      value={userInfo.gender}
                      style={{
                        justifyContent: "flex-start",
                        marginRight: 13,
                      }}
                      onChangeText={(text) =>
                        setUserInfo({ ...userInfo, gender: text })
                      }
                      onBlur={() => genderValidation()}
                      error={userInfo.validateGender}
                    />
                    <HelperText type="error" visible={userInfo.validateGender}>
                      Cannot be blank, contain symbols or numbers
                    </HelperText>
                  </View>
                </View>
                <View style={{ flex: 1 }}>
                  <View>
                    <TextInput
                      dense={true}
                      label="Year of Birth"
                      mode="flat"
                      value={displayDOB()}
                      style={{ justifyContent: "flex-end" }}
                      onFocus={(e) => {
                        setShow(true);
                        e.target.blur();
                      }}
                    />
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <View>
                    <TextInput
                      dense={true}
                      label="Height (cm)"
                      keyboardType="numeric"
                      mode="flat"
                      value={userInfo.height}
                      style={{
                        justifyContent: "flex-start",
                        marginRight: 13,
                      }}
                      maxLength={3}
                      onChangeText={(text) =>
                        setUserInfo({ ...userInfo, height: text })
                      }
                      onBlur={() => heightValidation()}
                      error={userInfo.validateHeight}
                    />
                    <HelperText type="error" visible={userInfo.validateHeight}>
                      Only Numbers!
                    </HelperText>
                  </View>
                </View>
                <View style={{ flex: 1 }}>
                  <View>
                    <TextInput
                      dense={true}
                      label="Weight (kg)"
                      mode="flat"
                      keyboardType="numeric"
                      value={userInfo.weight}
                      style={{ justifyContent: "flex-end" }}
                      maxLength={3}
                      onChangeText={(text) =>
                        setUserInfo({ ...userInfo, weight: text })
                      }
                      onBlur={() => weightValidation()}
                      error={userInfo.validateWeight}
                    />
                    <HelperText type="error" visible={userInfo.validateWeight}>
                      Only Numbers!
                    </HelperText>
                  </View>
                </View>
              </View>
              <View>
                <TextInput
                  dense={true}
                  label="Blood Pressure(Systolic)"
                  mode="flat"
                  keyboardType="numeric"
                  value={userInfo.bpsystolic}
                  style={styles.subInput}
                  maxLength={3}
                  onChangeText={(text) =>
                    setUserInfo({ ...userInfo, bpsystolic: text })
                  }
                  onBlur={() => bpSysValidation()}
                  error={userInfo.validateBpSys}
                />
                <HelperText type="error" visible={userInfo.validateBpSys}>
                  Only Numbers!
                </HelperText>
              </View>
              <View>
                <TextInput
                  dense={true}
                  label="Blood Pressure(Diastolic)"
                  mode="flat"
                  keyboardType="numeric"
                  value={userInfo.bpdiastolic}
                  style={styles.subInput}
                  maxLength={3}
                  onChangeText={(text) =>
                    setUserInfo({ ...userInfo, bpdiastolic: text })
                  }
                  onBlur={() => bpDiaValidation()}
                  error={userInfo.validateBpDias}
                />
                <HelperText type="error" visible={userInfo.validateBpDias}>
                  Only Numbers!
                </HelperText>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: 30,
                  marginLeft: 70,
                }}
              >
                <View style={{ flex: 1 }}>
                  <Button
                    mode="contained"
                    color="#404040"
                    compact={true}
                    style={{ justifyContent: "flex-start" }}
                    onPress={() => setUserInfo({ ...userInfo, visible: false })}
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
                        firstNameValidation() ||
                        lastNameValidation() ||
                        genderValidation() ||
                        heightValidation() ||
                        weightValidation() ||
                        bpSysValidation() ||
                        bpDiaValidation()
                      ) {
                      } else {
                        updateUserInfo();
                        setUserInfo({ ...userInfo, visible: false });
                      }
                    }}
                    style={{
                      justifyContent: "flex-end",
                      marginLeft: 10,
                    }}
                  >
                    Save
                  </Button>
                </View>
              </View>
            </View>
          </ScrollView>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={new Date()}
              mode="date"
              display="default"
              onChange={onChange}
            />
          )}
        </Modal>
      </Portal>
    </PaperProvider>
  );
}
const styles = StyleSheet.create({});
export default Profile;
