import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ToastAndroid,
  Dimensions,
} from "react-native";

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
  ProgressBar,
} from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { LineChart } from "react-native-chart-kit";
import { useSelector, useDispatch } from "react-redux";

import { updateUser } from "../../reduxConfig/actions/userAction";

function Profile({ navigation }) {
  const dispatch = useDispatch();
  const {
    firstName,
    lastName,
    gender,
    DOB,
    height,
    weight,
    bpSys,
    bpDia,
    recDate,
  } = useSelector((state) => state.userReducer);
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
    bpsystolic: "", // blood pressure upper number
    bpdiastolic: "", // blood pressure lower number

    bpSysArr: bpSys,
    bpDiaArr: bpDia,
    recDateArr: [],

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
  const [openFAB, setOpenFAB] = useState({ open: false });
  const [visible, setVisible] = useState(false);
  const onFABChange = ({ open }) => setOpenFAB({ open });
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const { open } = openFAB;

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
      bpsystolic: bpSys,
      bpdiastolic: bpDia,
      recordeddate: recDate,
    };
    dispatch(updateUser(finalData));
  };

  const calculateBMI = () => {
    if (height === "" || weight === "") {
      console.log("bmi data unavailable");
      return (
        <View>
          <Text style={{ alignSelf: "center", fontSize: 15 }}>
            BMI Status Unavailable
          </Text>
        </View>
      );
    } else {
      var tmpheight = parseInt(height);
      var tmpweight = parseInt(weight);
      tmpheight = tmpheight / 100;
      var heightsquared = tmpheight * tmpheight;
      var bmi = tmpweight / heightsquared;
      bmi = bmi.toFixed(1);

      if (bmi < 18.5) {
        return (
          <View>
            <Text style={{ marginBottom: 15, fontWeight: "bold" }}>
              BMI Status: {bmi}
            </Text>
            <ProgressBar progress={0.25} color={"#5AA8FF"} />
            <Text>Underweight</Text>
          </View>
        );
      } else if (18.5 <= bmi && bmi <= 24.9) {
        return (
          <View>
            <Text style={{ marginBottom: 15, fontWeight: "bold" }}>
              BMI Status: {bmi}
            </Text>
            <ProgressBar progress={0.5} color={"green"} />
            <Text style={{ alignSelf: "center" }}>Normal</Text>
          </View>
        );
      } else if (25 <= bmi && bmi <= 29.9) {
        return (
          <View>
            <Text style={{ marginBottom: 15, fontWeight: "bold" }}>
              BMI Status: {bmi}
            </Text>
            <ProgressBar progress={0.75} color={"#FC8D3C"} />
            <Text style={{ alignSelf: "flex-end", marginRight: 40 }}>
              Overweight
            </Text>
          </View>
        );
      } else {
        return (
          <View>
            <Text style={{ marginBottom: 15, fontWeight: "bold" }}>
              BMI Status: {bmi}
            </Text>
            <ProgressBar progress={1} color={"#FC3030"} />
            <Text style={{ alignSelf: "flex-end" }}>Obesity</Text>
          </View>
        );
      }
    }
  };

  const calculateBP = () => {
    if (userInfo.bpDiaArr.length === 0) {
      console.log("bp data unavailable");
      return (
        <View>
          <Text style={{ alignSelf: "center", fontSize: 15 }}>
            Blood Pressure Status Unavailable
          </Text>
        </View>
      );
    } else {
      var tmpSys = bpSys[bpSys.length - 1];
      var tmpDia = bpDia[bpDia.length - 1];
      if (tmpSys <= 90 && tmpDia <= 60) {
        return (
          <View>
            <Text style={{ marginBottom: 15, fontWeight: "bold" }}>
              Blood Pressure Status: {tmpSys}/{tmpDia}
            </Text>
            <ProgressBar progress={0.2} color={"#5AA8FF"} />
            <Text style={{ alignSelf: "center" }}>Low</Text>
          </View>
        );
      } else if (tmpSys <= 120 && tmpDia <= 80) {
        return (
          <View>
            <Text style={{ marginBottom: 15, fontWeight: "bold" }}>
              Blood Pressure Status: {tmpSys}/{tmpDia}
            </Text>
            <ProgressBar progress={0.4} color={"green"} />
            <Text style={{ alignSelf: "center" }}>Normal</Text>
          </View>
        );
      } else if (tmpSys <= 140 && tmpDia <= 90) {
        return (
          <View>
            <Text style={{ marginBottom: 15, fontWeight: "bold" }}>
              Blood Pressure Status: {tmpSys}/{tmpDia}
            </Text>
            <ProgressBar progress={0.8} color={"orange"} />
            <Text style={{ alignSelf: "center" }}>Elevated</Text>
          </View>
        );
      } else {
        return (
          <View>
            <Text style={{ marginBottom: 15, fontWeight: "bold" }}>
              Blood Pressure Status: {tmpSys}/{tmpDia}
            </Text>
            <ProgressBar progress={1} color={"#FC3030"} />
            <Text style={{ alignSelf: "center" }}>High</Text>
          </View>
        );
      }
    }
  };

  const logbloodpressure = () => {
    const x = parseInt(userInfo.bpsystolic);
    const y = parseInt(userInfo.bpdiastolic);
    const month = new Date().getMonth() + 1;
    const date = new Date().getDate();
    const logDate = `${date}/${month}`;
    const tmpSys = userInfo.bpSysArr;
    const tmpDia = userInfo.bpDiaArr;
    const tmpRecDate = userInfo.recDateArr;
    const a = userInfo.bpSysArr.length;

    console.log(typeof userInfo.bpSysArr);
    if (a === 8) {
      tmpSys.splice(0, 1);
      tmpDia.splice(0, 1);
      tmpRecDate.splice(0, 1);

      tmpSys.push(x);
      tmpDia.push(y);
      tmpRecDate.push(logDate);

      const finalData = {
        fName: userInfo.firstName,
        lName: userInfo.lastName,
        gender: userInfo.gender,
        height: userInfo.height,
        weight: userInfo.weight,
        dob: userInfo.dob,
        bpsystolic: tmpSys,
        bpdiastolic: tmpDia,
        recordeddate: tmpRecDate,
      };
      dispatch(updateUser(finalData));
    } else {
      tmpSys.push(x);
      tmpDia.push(y);
      tmpRecDate.push(logDate);

      const finalData = {
        fName: userInfo.firstName,
        lName: userInfo.lastName,
        gender: userInfo.gender,
        height: userInfo.height,
        weight: userInfo.weight,
        dob: userInfo.dob,
        bpsystolic: tmpSys,
        bpdiastolic: tmpDia,
        recordeddate: tmpRecDate,
      };
      dispatch(updateUser(finalData));
    }

    console.log(
      "length :",
      a,
      userInfo.bpSysArr,
      userInfo.bpDiaArr,
      userInfo.recDateArr
    );
    setUserInfo({ ...userInfo, bpsystolic: "", bpdiastolic: "" });
  };

  const renderBpChart = () => {
    if (userInfo.bpDiaArr.length === 0) {
      return (
        <Text style={{ alignSelf: "center", fontSize: 15 }}>
          Chart Unavailable
        </Text>
      );
    } else {
      return (
        <LineChart
          data={{
            labels: userInfo.recDateArr,
            datasets: [
              {
                data: userInfo.bpSysArr,
              },
            ],
          }}
          width={Dimensions.get("window").width - 65} // from react-native
          height={220}
          // yAxisLabel={"Sys"}
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            strokeWidth: 2,
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      );
    }
  };

  const renderDiaBpChart = () => {
    if (userInfo.bpDiaArr.length === 0) {
      return (
        <Text style={{ alignSelf: "center", fontSize: 15 }}>
          Chart Unavailable
        </Text>
      );
    } else {
      return (
        <LineChart
          data={{
            labels: userInfo.recDateArr,
            datasets: [
              {
                data: userInfo.bpDiaArr,
              },
            ],
          }}
          width={Dimensions.get("window").width - 65} // from react-native
          height={220}
          // yAxisLabel={"Sys"}
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            strokeWidth: 2,
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      );
    }
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
            fontSize: 28,
            marginTop: 15,
            marginLeft: 25,
            fontWeight: "bold",
          }}
        >
          Profile
        </Text>
        {/* <Divider style={{ backgroundColor: "black", marginTop: 15 }} /> */}
        <View style={{ marginTop: 5, marginBottom: 80 }}>
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
              {/* <Text>{"\n"}</Text>
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
              </View> */}
            </Card.Content>
          </Card>
          <Divider style={{ backgroundColor: "black", marginTop: 25 }} />
          <Text
            style={{
              fontSize: 28,
              marginTop: 10,
              marginLeft: 25,
              fontWeight: "bold",
            }}
          >
            Analytics
          </Text>
          <Card
            style={{
              width: "90%",
              alignSelf: "center",
              marginTop: 15,
              paddingTop: 5,
              paddingBottom: 5,
              elevation: 4,
              borderRadius: 20,
            }}
          >
            <Card.Content>{calculateBMI()}</Card.Content>
          </Card>

          <Card
            style={{
              width: "90%",
              alignSelf: "center",
              marginTop: 15,
              paddingTop: 5,
              paddingBottom: 5,
              elevation: 4,
              borderRadius: 20,
            }}
          >
            <Card.Content>{calculateBP()}</Card.Content>
          </Card>
          <Text
            style={{
              fontSize: 17,
              marginTop: 10,
              marginLeft: 25,
              fontWeight: "bold",
            }}
          >
            TRENDS
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginTop: 10,
              marginLeft: 25,
            }}
          >
            Systolic Blood Pressure
          </Text>
          <Card
            style={{
              width: "90%",
              alignSelf: "center",
              marginTop: 15,
              elevation: 4,
              borderRadius: 20,
            }}
          >
            <Card.Content>{renderBpChart()}</Card.Content>
          </Card>
          <Text
            style={{
              fontSize: 15,
              marginTop: 10,
              marginLeft: 25,
            }}
          >
            Diastolic Blood Pressure
          </Text>
          <Card
            style={{
              width: "90%",
              alignSelf: "center",
              marginTop: 15,
              elevation: 4,
              borderRadius: 20,
            }}
          >
            <Card.Content>{renderDiaBpChart()}</Card.Content>
          </Card>
        </View>
      </ScrollView>
      <FAB.Group
        open={open}
        icon={open ? "close" : "menu"}
        actions={[
          {
            icon: "blood-bag",
            label: "Log BP",
            onPress: () => {
              showDialog();
            },
          },
          {
            icon: "account-edit-outline",
            label: "Edit Info",
            onPress: () => {
              setUserInfo({ ...userInfo, visible: true });
            },
          },
        ]}
        onStateChange={onFABChange}
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
                      label="Date of Birth"
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
              {/* <View>
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
              </View> */}
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
                    onPress={() =>
                      setUserInfo({
                        ...userInfo,
                        firstName: firstName,
                        lastName: lastName,
                        gender: gender,
                        dob: DOB,
                        height: height,
                        weight: weight,
                        bpsystolic: bpSys,
                        bpdiastolic: bpDia,
                        visible: false,
                        validateFirstName: false,
                        validateLastName: false,
                        validateGender: false,
                        validateHeight: false,
                        validateWeight: false,
                        validateDOB: false,
                        validateBpSys: false,
                        validateBpDias: false,
                      })
                    }
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
                        weightValidation()
                        // ||
                        // bpSysValidation() ||
                        // bpDiaValidation()
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
      <Portal>
        <Modal
          visible={visible}
          dismissable={true}
          onDismiss={hideDialog}
          contentContainerStyle={{
            backgroundColor: "white",
            padding: 20,
            width: "90%",
            alignSelf: "center",
            borderRadius: 20,
            marginBottom: 10,
          }}
        >
          <View>
            <TextInput
              dense={true}
              label="Blood Pressure(Systolic)"
              mode="flat"
              keyboardType="numeric"
              value={userInfo.bpsystolic}
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
              marginBottom: 10,
              marginLeft: 70,
            }}
          >
            <View style={{ flex: 1 }}>
              <Button
                mode="contained"
                color="#404040"
                compact={true}
                style={{ justifyContent: "flex-start" }}
                onPress={hideDialog}
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
                  if (bpSysValidation() || bpDiaValidation()) {
                  } else {
                    logbloodpressure();
                    hideDialog();
                  }
                }}
                style={{
                  justifyContent: "flex-end",
                  marginLeft: 10,
                }}
              >
                Log
              </Button>
            </View>
          </View>
        </Modal>
      </Portal>
    </PaperProvider>
  );
}
const styles = StyleSheet.create({});
export default Profile;
