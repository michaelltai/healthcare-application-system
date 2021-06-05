import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import {
  Provider as PaperProvider,
  DefaultTheme,
  Button,
  TextInput,
  Appbar,
  HelperText,
  FAB,
} from "react-native-paper";

function Profile({ route, navigation }) {
  const theme = {
    ...DefaultTheme,

    roundness: 4,
    colors: {
      ...DefaultTheme.colors,

      primary: "#2EA5FA",
      //background: "#C1FFF7",
      placeholder: "#8E8E8E",
    },
  };

  const [userInfo, setUserInfo] = useState({
    step: 1, // step for multiform
    firstName: "Jia Wei",
    lastName: "Tai",
    gender: "Male",
    height: "178",
    weight: "70",
    yob: "1998", // year of birth
    bpsystolic: "115", // blood pressure upper number
    bpdiastolic: "70", // blood pressure lower number
    disabled: true,
    checkSize: 0,
  });

  const firstErrors = () => {
    return !userInfo.firstName.match(/^[a-zA-Z ]*$/);
  };

  const lastErrors = () => {
    return !userInfo.lastName.match(/^[a-zA-Z ]*$/);
  };

  const genderErrors = () => {
    return !userInfo.gender.match(/^[a-zA-Z ]*$/);
  };

  const heightErrors = () => {
    return !userInfo.height.match(/^[0-9 ]*$/);
  };

  const weightErrors = () => {
    return !userInfo.weight.match(/^[0-9 ]*$/);
  };

  const bpsErrors = () => {
    return !userInfo.bpsystolic.match(/^[0-9 ]*$/);
  };

  const bpdErrors = () => {
    return !userInfo.bpdiastolic.match(/^[0-9 ]*$/);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <PaperProvider theme={theme}>
          <Appbar.Header
            theme={{
              ...DefaultTheme,
              colors: { primary: "#73BFF0" },
            }}
          >
            <Appbar.BackAction onPress={() => navigation.goBack()} />

            <Appbar.Content title="Profile" />
            <Appbar.Action
              icon="check"
              disabled={userInfo.disabled}
              size={userInfo.checkSize}
              onPress={() =>
                setUserInfo({ ...userInfo, disabled: true, checkSize: 0 })
              }
            />
          </Appbar.Header>
          <View style={styles.inner}>
            <Text style={styles.header}>Profile</Text>
            <View>
              <View>
                <TextInput
                  dense={true}
                  label="First Name"
                  mode="flat"
                  value={userInfo.firstName}
                  disabled={userInfo.disabled}
                  onChangeText={(text) =>
                    setUserInfo({ ...userInfo, firstName: text })
                  }
                />
                <HelperText type="error" visible={firstErrors()}>
                  Can't have symbol or numbers at name!
                </HelperText>
              </View>
              <View>
                <TextInput
                  dense={true}
                  label="Last Name"
                  mode="flat"
                  value={userInfo.lastName}
                  style={styles.subInput}
                  disabled={userInfo.disabled}
                  onChangeText={(text) =>
                    setUserInfo({ ...userInfo, lastName: text })
                  }
                />
                <HelperText type="error" visible={lastErrors()}>
                  Can't have symbol or numbers at name!
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
                      style={{ justifyContent: "flex-start", marginRight: 13 }}
                      disabled={userInfo.disabled}
                      onChangeText={(text) =>
                        setUserInfo({ ...userInfo, gender: text })
                      }
                    />
                    <HelperText type="error" visible={genderErrors()}>
                      Can't have symbol or numbers at Gender!
                    </HelperText>
                  </View>
                </View>
                <View style={{ flex: 1 }}>
                  <View>
                    <TextInput
                      dense={true}
                      label="Year of Birth"
                      mode="flat"
                      keyboardType="numeric"
                      value={userInfo.yob}
                      style={{ justifyContent: "flex-end" }}
                      disabled={userInfo.disabled}
                      onChangeText={(text) =>
                        setUserInfo({ ...userInfo, yob: text })
                      }
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
                      style={{ justifyContent: "flex-start", marginRight: 13 }}
                      disabled={userInfo.disabled}
                      onChangeText={(text) =>
                        setUserInfo({ ...userInfo, height: text })
                      }
                    />
                    <HelperText type="error" visible={heightErrors()}>
                      Can't have symbol or text at height!
                    </HelperText>
                  </View>
                </View>
                <View style={{ flex: 1 }}>
                  <View>
                    <TextInput
                      dense={true}
                      label="Weight"
                      mode="flat"
                      keyboardType="numeric"
                      value={userInfo.weight}
                      style={{ justifyContent: "flex-end" }}
                      disabled={userInfo.disabled}
                      onChangeText={(text) =>
                        setUserInfo({ ...userInfo, weight: text })
                      }
                    />
                    <HelperText type="error" visible={weightErrors()}>
                      Can't have symbol or text at weight!
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
                  disabled={userInfo.disabled}
                  onChangeText={(text) =>
                    setUserInfo({ ...userInfo, bpsystolic: text })
                  }
                />
                <HelperText type="error" visible={bpsErrors()}>
                  Can't have symbol or text at Blood Pressure!
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
                  disabled={userInfo.disabled}
                  onChangeText={(text) =>
                    setUserInfo({ ...userInfo, bpdiastolic: text })
                  }
                />
                <HelperText type="error" visible={bpdErrors()}>
                  Can't have symbol or text at Blood Pressure!
                </HelperText>
              </View>
            </View>
            <FAB
              style={{ position: "absolute", margin: 16, right: 0, bottom: 0 }}
              icon="account-edit"
              visible={userInfo.disabled}
              onPress={() =>
                setUserInfo({ ...userInfo, disabled: false, checkSize: 24 })
              }
            />
          </View>
        </PaperProvider>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
  },
  subInput: {
    marginTop: 0,
  },
  header: {
    fontSize: 20,
    width: "75%",
    fontWeight: "bold",
    fontFamily: "sans-serif",
  },
});
export default Profile;
