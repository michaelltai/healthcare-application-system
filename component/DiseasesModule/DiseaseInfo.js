import React, { useState } from "react";

import { View, Text, ScrollView, StyleSheet } from "react-native";
import {
  Provider as PaperProvider,
  DefaultTheme,
  Appbar,
  Button,
  Card,
  Portal,
  Modal,
} from "react-native-paper";

function DiseaseInfo({ route, navigation }) {
  const theme = {
    ...DefaultTheme,

    roundness: 25,
    colors: {
      ...DefaultTheme.colors,

      primary: "#2EA5FA",
      background: "#C1FFF7",
      placeholder: "#8E8E8E",
    },
  };

  const { info } = route.params;

  const [diseaseInfo, setDiseaseInfo] = useState({
    name: info.name,
    description: info.description,
    symptoms: info.symptoms,
    causes: info.causes,
    treatment: info.treatment,
    showSymptoms: false,
    showCauses: false,
    showTreatment: false,
  });

  const renderCauses = () => {
    let tmp = diseaseInfo.causes;
    let arr = [];
    for (var i = 0; i < tmp.length; i++) {
      arr.push(
        <View key={tmp[i].name}>
          <View>
            <Text style={styles.modalTextTitle}>• {tmp[i].name}</Text>
            <Text style={styles.modalTextText}>{tmp[i].description}</Text>
          </View>
          <Text>{"\n"}</Text>
        </View>
      );
    }
    return arr;
  };

  const renderSymptoms = () => {
    let tmp = diseaseInfo.symptoms;
    let arr = [];
    for (var i = 0; i < tmp.length; i++) {
      arr.push(
        <View key={tmp[i]}>
          <Text style={{ fontSize: 16 }}>• {tmp[i]}</Text>
          <Text>{"\n"}</Text>
        </View>
      );
    }
    return arr;
  };

  const renderTreatment = () => {
    let tmp = diseaseInfo.treatment;
    let arr = [];
    for (var i = 0; i < tmp.length; i++) {
      arr.push(
        <View key={tmp[i].name}>
          <View>
            <Text style={styles.modalTextTitle}>• {tmp[i].name}</Text>
            <Text style={styles.modalTextText}>{tmp[i].description}</Text>
          </View>
          <Text>{"\n"}</Text>
        </View>
      );
    }
    return arr;
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
        <Appbar.Content title="Disease Information" />
      </Appbar.Header>
      <ScrollView>
        <View style={{ marginTop: 20 }}>
          <Card style={styles.card}>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <Text
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: 25,
                  flexShrink: 1,
                  width: "95%",
                }}
              >
                {diseaseInfo.name}
              </Text>
            </View>
            <Card.Content>
              <Text>{"\n"}</Text>
              <View>
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", marginBottom: 15 }}
                >
                  Description:
                </Text>
                <Text style={{ fontSize: 15, textAlign: "justify" }}>
                  {diseaseInfo.description}
                </Text>
              </View>
              <Text>{"\n"}</Text>
            </Card.Content>
          </Card>
          <View style={{ marginBottom: 30 }}>
            <Button
              onPress={() =>
                setDiseaseInfo({ ...diseaseInfo, showSymptoms: true })
              }
              mode="contained"
              style={{
                width: "90%",
                marginTop: 20,
                alignSelf: "center",
                elevation: 3,
              }}
              labelStyle={{ fontSize: 18 }}
            >
              Symptomps
            </Button>
            <Button
              onPress={() =>
                setDiseaseInfo({ ...diseaseInfo, showCauses: true })
              }
              mode="contained"
              style={styles.button}
              labelStyle={{ fontSize: 18 }}
            >
              Causes
            </Button>
            <Button
              onPress={() =>
                setDiseaseInfo({ ...diseaseInfo, showTreatment: true })
              }
              mode="contained"
              style={styles.button}
              labelStyle={{ fontSize: 18 }}
            >
              Treatments
            </Button>
          </View>
        </View>
      </ScrollView>
      <Portal>
        <Modal
          visible={diseaseInfo.showSymptoms}
          onDismiss={() =>
            setDiseaseInfo({ ...diseaseInfo, showSymptoms: false })
          }
          contentContainerStyle={styles.modal}
        >
          <ScrollView>
            <Text style={styles.modalTitle}>Symptoms</Text>
            <Text>{"\n"}</Text>
            {renderSymptoms()}
            <Button
              onPress={() =>
                setDiseaseInfo({ ...diseaseInfo, showSymptoms: false })
              }
              mode="contained"
              style={styles.modalButton}
              labelStyle={{ fontSize: 17 }}
            >
              Close
            </Button>
          </ScrollView>
        </Modal>
        <Modal
          visible={diseaseInfo.showCauses}
          onDismiss={() =>
            setDiseaseInfo({ ...diseaseInfo, showCauses: false })
          }
          contentContainerStyle={styles.modal}
        >
          <ScrollView>
            <Text style={styles.modalTitle}>Causes</Text>
            <Text>{"\n"}</Text>
            {renderCauses()}
            <Button
              onPress={() =>
                setDiseaseInfo({ ...diseaseInfo, showCauses: false })
              }
              mode="contained"
              style={styles.modalButton}
              labelStyle={{ fontSize: 17 }}
            >
              Close
            </Button>
          </ScrollView>
        </Modal>
        <Modal
          visible={diseaseInfo.showTreatment}
          onDismiss={() =>
            setDiseaseInfo({ ...diseaseInfo, showTreatment: false })
          }
          contentContainerStyle={styles.modal}
        >
          <ScrollView>
            <Text style={styles.modalTitle}>Treatments</Text>
            <Text>{"\n"}</Text>
            {renderTreatment()}
            <Button
              onPress={() =>
                setDiseaseInfo({ ...diseaseInfo, showTreatment: false })
              }
              mode="contained"
              style={styles.modalButton}
              labelStyle={{ fontSize: 17 }}
            >
              Close
            </Button>
          </ScrollView>
        </Modal>
      </Portal>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "90%",
    alignSelf: "center",
    paddingTop: 15,
    elevation: 10,
  },
  button: {
    width: "90%",
    marginTop: 10,
    alignSelf: "center",
    elevation: 3,
  },
  modal: {
    backgroundColor: "white",
    padding: 20,
    width: "90%",
    alignSelf: "center",
    borderRadius: 20,
    marginBottom: 10,
  },
  modalTitle: { textAlign: "center", fontSize: 30, fontWeight: "bold" },
  modalButton: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#F6F7FF",
    marginBottom: 7,
    elevation: 3,
  },
  modalTextTitle: { fontSize: 16, fontWeight: "bold" },
  modalTextText: { fontSize: 14, textAlign: "justify" },
});

export default DiseaseInfo;
