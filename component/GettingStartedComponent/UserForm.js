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
  HelperText,
} from "react-native-paper";

const UserForm = () => {
  const [userInfo, setUserInfo] = useState({
    step: 1, // step for multiform
    firstName: "",
    lastName: "",
    gender: "",
    height: "",
    weight: "",
    yob: "", // year of birth
    bpsystolic: "", // blood pressure upper number
    bpdiastolic: "", // blood pressure lower number
  });

  // proceed to next step
  const nextStep = () => {
    let step = userInfo.step;
    setUserInfo({ ...userInfo, step: step + 1 });
  };

  // preceed to previous step
  const prevStep = () => {
    let step = userInfo.step;
    setUserInfo({ ...userInfo, step: step - 1 });
  };

  switch (userInfo.step) {
    case 1:
      return (
        <Step1
          nextStep={nextStep}
          handleChange={setUserInfo}
          value={userInfo}
        />
      );
    case 2:
      return (
        <Step2
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={setUserInfo}
          value={userInfo}
        />
      );
    case 3:
      return <Step3 prevStep={prevStep} nextStep={nextStep} value={userInfo} />;
    case 4:
      return <Step4 value={userInfo} />;
  }
};

function Step1(props) {
  const con = () => {
    props.nextStep();
  };
  let values = props.value;
  let handleChange = props.handleChange;
  //let hasErrors = props.hasErrors;

  const firstErrors = () => {
    return !values.firstName.match(/^[a-zA-Z ]*$/);
  };

  const lastErrors = () => {
    return !values.lastName.match(/^[a-zA-Z ]*$/);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>
            Let's Get to Know you. Tell us who you are
          </Text>
          <View>
            <View>
              <TextInput
                dense={true}
                label="First Name"
                mode="flat"
                value={values.firstName}
                onChangeText={(text) =>
                  handleChange({ ...values, firstName: text })
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
                value={values.lastName}
                style={styles.subInput}
                onChangeText={(text) =>
                  handleChange({ ...values, lastName: text })
                }
              />
              <HelperText type="error" visible={lastErrors()}>
                Can't have symbol or numbers at name!
              </HelperText>
            </View>
          </View>

          <View style={styles.btnContainer}>
            <View style={{ flex: 1 }}>
              <Button
                mode="contained"
                color="#404040"
                compact={true}
                onPress={() => {
                  if (firstErrors() || lastErrors()) {
                  } else {
                    con();
                  }
                  console.log("Pressed");
                }}
                style={{
                  justifyContent: "flex-end",
                  marginLeft: 200,
                }}
              >
                Next
              </Button>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

function Step2(props) {
  const con = () => {
    props.nextStep();
  };
  const prev = () => {
    props.prevStep();
  };

  const genderErrors = () => {
    return !values.gender.match(/^[a-zA-Z ]*$/);
  };

  const heightErrors = () => {
    return !values.height.match(/^[0-9 ]*$/);
  };

  const weightErrors = () => {
    return !values.weight.match(/^[0-9 ]*$/);
  };

  const bpsErrors = () => {
    return !values.bpsystolic.match(/^[0-9 ]*$/);
  };

  const bpdErrors = () => {
    return !values.bpdiastolic.match(/^[0-9 ]*$/);
  };

  let values = props.value;
  let handleChange = props.handleChange;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>
            Time to fill in your health information!
          </Text>
          <View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <View>
                  <TextInput
                    dense={true}
                    label="Gender"
                    mode="flat"
                    value={values.gender}
                    style={{ justifyContent: "flex-start", marginRight: 13 }}
                    onChangeText={(text) =>
                      handleChange({ ...values, gender: text })
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
                    value={values.yob}
                    style={{ justifyContent: "flex-end" }}
                    onChangeText={(text) =>
                      handleChange({ ...values, yob: text })
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
                    value={values.height}
                    style={{ justifyContent: "flex-start", marginRight: 13 }}
                    onChangeText={(text) =>
                      handleChange({ ...values, height: text })
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
                    value={values.weight}
                    style={{ justifyContent: "flex-end" }}
                    onChangeText={(text) =>
                      handleChange({ ...values, weight: text })
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
                value={values.bpsystolic}
                style={styles.subInput}
                onChangeText={(text) =>
                  handleChange({ ...values, bpsystolic: text })
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
                value={values.bpdiastolic}
                style={styles.subInput}
                onChangeText={(text) =>
                  handleChange({ ...values, bpdiastolic: text })
                }
              />
              <HelperText type="error" visible={bpdErrors()}>
                Can't have symbol or text at Blood Pressure!
              </HelperText>
            </View>
          </View>

          <View style={styles.btnContainer}>
            <View style={{ flex: 1 }}>
              <Button
                mode="contained"
                color="#404040"
                compact={true}
                style={{ justifyContent: "flex-start", marginRight: 50 }}
                onPress={() => {
                  prev();
                  console.log("Pressed");
                }}
              >
                Previous
              </Button>
            </View>
            <View style={{ flex: 1 }}>
              <Button
                mode="contained"
                color="#404040"
                compact={true}
                onPress={() => {
                  if (
                    genderErrors() ||
                    heightErrors() ||
                    weightErrors() ||
                    bpsErrors() ||
                    bpdErrors()
                  ) {
                  } else {
                    con();
                  }

                  console.log("Pressed");
                }}
                style={{ justifyContent: "flex-end", marginLeft: 50 }}
              >
                Next
              </Button>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

function Step3(props) {
  const con = () => {
    props.nextStep();
  };
  const prev = () => {
    props.prevStep();
  };

  let info = props.value;

  return (
    <View style={styles.inner}>
      <Text style={styles.header}>
        Time to review your information. Are these accurate?
      </Text>

      <View style={{ flexDirection: "row", marginTop: 5 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ justifyContent: "flex-start", marginRight: 13 }}>
            First Name:
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ justifyContent: "flex-end" }}>{info.firstName}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginTop: 5 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ justifyContent: "flex-start", marginRight: 13 }}>
            Last Name:
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ justifyContent: "flex-end" }}>{info.lastName}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginTop: 5 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ justifyContent: "flex-start", marginRight: 13 }}>
            Gender:
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ justifyContent: "flex-end" }}>{info.gender}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginTop: 5 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ justifyContent: "flex-start", marginRight: 13 }}>
            Weight:
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ justifyContent: "flex-end" }}>{info.weight}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginTop: 5 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ justifyContent: "flex-start", marginRight: 13 }}>
            Height:
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ justifyContent: "flex-end" }}>{info.height}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginTop: 5 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ justifyContent: "flex-start", marginRight: 13 }}>
            Blood Pressure(Systolic):
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ justifyContent: "flex-end" }}>{info.bpsystolic}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginTop: 5 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ justifyContent: "flex-start", marginRight: 13 }}>
            Blood Pressure(Diastolic):
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ justifyContent: "flex-end" }}>{info.bpdiastolic}</Text>
        </View>
      </View>

      <View style={styles.btnContainer}>
        <View style={{ flex: 1 }}>
          <Button
            mode="contained"
            color="#404040"
            compact={true}
            style={{ justifyContent: "flex-start", marginRight: 50 }}
            onPress={() => {
              prev();
              console.log("Pressed");
            }}
          >
            Previous
          </Button>
        </View>
        <View style={{ flex: 1 }}>
          <Button
            mode="contained"
            color="#404040"
            compact={true}
            onPress={() => {
              con();
              console.log("Pressed");
            }}
            style={{ justifyContent: "flex-end", marginLeft: 50 }}
          >
            Next
          </Button>
        </View>
      </View>
    </View>
  );
}

function Step4(props) {
  let values = props.value;

  return (
    <View style={styles.inner}>
      <View>
        <Text
          style={{
            fontSize: 20,
            alignSelf: "center",
            textAlign: "center",
            width: "75%",
            fontWeight: "bold",
            fontFamily: "sans-serif",
          }}
        >
          All Set, Good to go!
        </Text>
        <Text
          style={{
            fontSize: 20,
            alignSelf: "center",
            textAlign: "center",
            width: "75%",
            fontWeight: "bold",
            fontFamily: "sans-serif",
          }}
        >
          Welcome {values.firstName + " " + values.lastName}
        </Text>
      </View>

      <Button
        mode="contained"
        color="#404040"
        compact={true}
        theme={{
          ...DefaultTheme,
          roundness: 20,
        }}
        onPress={() => {
          con();
          console.log("Pressed");
        }}
        style={{}}
      >
        Home
      </Button>
    </View>
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
    marginTop: 3,
  },
  header: {
    fontSize: 20,
    alignSelf: "center",
    textAlign: "center",
    width: "75%",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    marginTop: 90,
  },
  btnContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
});

export default UserForm;
